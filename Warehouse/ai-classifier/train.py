"""Train AI phân loại tài nguyên cho chức năng KHO (3 nhóm). Chạy độc lập, không đụng vào dự án.

    python train.py

Đầu ra:  model/classifier.joblib, model/report.json, data/train_set_audit.csv (mỗi dòng ghi rõ nguồn).
"""
import csv, json, random
from collections import Counter
import joblib, numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report
from sklearn.model_selection import GroupKFold
from sklearn.pipeline import FeatureUnion, Pipeline
from textutil import normalize

random.seed(7)
LABELS = ["stationery", "books", "electronics", "other"]  # other = ngoài 3 nhóm (bàn ghế, đồng phục, xe...)
CONDITIONS = ["", "", "đã qua sử dụng", "mới 100%", "cũ còn tốt", "còn dùng tốt", "hàng quyên góp", "loại 1"]
QUANT = ["", "", "", "(10 cái)", "x5", "SL: 20", "bộ 3", "hộp 12"]

def typo(s):
    if len(s) < 6: return s
    i = random.randrange(1, len(s) - 1)
    return s[:i] + s[i + 1:] if random.random() < .5 else s[:i] + s[i + 1] + s[i] + s[i + 2:]

def variants(name, k=7):
    out = {name}
    while len(out) < k:
        v = name
        r = random.random()
        if r < .25: v = typo(v)
        if r > .8: v = v.upper()
        v = " ".join(x for x in [v, random.choice(QUANT), random.choice(CONDITIONS)] if x)
        out.add(v)
    return list(out)

def read(path):
    with open(path, encoding="utf-8") as f:
        return list(csv.DictReader(f))

# ---- gom dữ liệu + ghi nguồn cho từng dòng ----
base = []   # (tên gốc, nhãn, nguồn)
for r in read("data/project_extracted.csv"):
    base.append((r["name"], r["label_used"], r["source"]))
for r in read("data/catalog_handwritten.csv") + read("data/catalog_other.csv"):
    base.append((r["name"], r["label"], r["source"]))

import os
if os.path.exists("data/feedback.csv"):   # tùy chọn: tên thật ở kho + nhãn đúng (cột name,label) -> train lại để AI giỏi hơn
    for r in read("data/feedback.csv"):
        base.append((r["name"], r["label"], "warehouse_feedback"))

rows = []   # (text, label, source, group_id)
for gid, (name, label, src) in enumerate(base):
    rows.append((name, label, src, gid))
    for v in [x for x in variants(name) if x != name]:
        rows.append((v, label, "synthetic_variant_of:" + src, gid))

with open("data/train_set_audit.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(["text", "label", "source", "group_id"]); w.writerows(rows)

X = [normalize(r[0]) for r in rows]; y = np.array([r[1] for r in rows]); g = np.array([r[3] for r in rows])

def make():
    feats = FeatureUnion([
        ("char", TfidfVectorizer(analyzer="char_wb", ngram_range=(2, 5), sublinear_tf=True, min_df=1)),
        ("word", TfidfVectorizer(analyzer="word", ngram_range=(1, 2), sublinear_tf=True)),
    ])
    return Pipeline([("f", feats), ("clf", LogisticRegression(C=20, max_iter=2000, class_weight="balanced"))])

# ---- đánh giá 1: chia theo nhóm (các biến thể của cùng 1 món không lọt sang tập kiểm tra) ----
pred = np.empty_like(y)
for tr, te in GroupKFold(n_splits=5).split(X, y, g):
    m = make().fit([X[i] for i in tr], y[tr]); pred[te] = m.predict([X[i] for i in te])
grouped_acc = float((pred == y).mean())
grouped_report = classification_report(y, pred, output_dict=True, zero_division=0)

# ---- mô hình cuối: train trên toàn bộ ----
model = make().fit(X, y)

# ---- đánh giá 2: bộ kiểm tra khó (tên khác hẳn tập train, không dấu, sai chính tả...) ----
hard = read("data/hard_test.csv")
hp = model.predict([normalize(r["name"]) for r in hard]); ht = [r["label"] for r in hard]
hard_acc = float(np.mean([a == b for a, b in zip(hp, ht)]))
wrong = [(r["name"], r["label"], p) for r, p in zip(hard, hp) if r["label"] != p]

THRESH = 0.60
oos = [r["name"] for r in read("data/out_of_scope_test.csv")]
oos_p = model.predict_proba([normalize(n) for n in oos])
oos_pred = [str(model.classes_[p.argmax()]) for p in oos_p]
abstain = float(np.mean([(l == 'other') or (p.max() < THRESH) for l, p in zip(oos_pred, oos_p)]))
hard_p = model.predict_proba([normalize(r["name"]) for r in hard]).max(1)

report = {
    "n_base_items": len(base), "n_train_rows": len(rows),
    "rows_by_source": dict(Counter(r[2] for r in rows)),
    "rows_by_label": dict(Counter(y.tolist())),
    "grouped_cv_accuracy": round(grouped_acc, 3),
    "grouped_cv_per_class": {k: {m: round(v[m], 2) for m in ("precision", "recall", "f1-score")} for k, v in grouped_report.items() if k in LABELS},
    "hard_test_n": len(hard), "hard_test_accuracy": round(hard_acc, 3),
    "hard_test_wrong": wrong,
    "hard_test_below_threshold": int((hard_p < THRESH).sum()),
    "out_of_scope_n": len(oos), "out_of_scope_flagged_unsure": round(abstain, 3),
    "out_of_scope_detail": {n: [str(model.classes_[p.argmax()]), round(float(p.max()), 2)] for n, p in zip(oos, oos_p)},
    "threshold": THRESH,
}
joblib.dump({"model": model, "labels": list(model.classes_), "threshold": THRESH}, "model/classifier.joblib")
json.dump(report, open("model/report.json", "w", encoding="utf-8"), ensure_ascii=False, indent=2)
print(json.dumps(report, ensure_ascii=False, indent=2))
