import joblib, os
from textutil import normalize

HERE = os.path.dirname(os.path.abspath(__file__))
# Nhãn AI -> enum ItemCategory của dự án (chỉ để tham khảo khi sau này tích hợp)
TO_PROJECT = {"stationery": "STATIONERY", "books": "BOOKS", "electronics": "IT_DEVICES"}
VI = {"stationery": "Dụng cụ học tập", "books": "Sách vở", "electronics": "Đồ dùng điện tử", "other": "Ngoài 3 nhóm"}

_bundle = None
def _load():
    global _bundle
    if _bundle is None:
        _bundle = joblib.load(os.path.join(HERE, "model", "classifier.joblib"))
    return _bundle

def classify(names):
    b = _load(); model, thr = b["model"], b["threshold"]
    probs = model.predict_proba([normalize(n) for n in names])
    out = []
    for n, p in zip(names, probs):
        order = p.argsort()[::-1]
        top = [(str(model.classes_[i]), float(p[i])) for i in order]
        label, conf = top[0]
        review = label == "other" or conf < thr      # AI không chắc -> người kiểm tra
        out.append({
            "name": n, "label": label, "label_vi": VI[label], "confidence": round(conf, 3),
            "project_category": TO_PROJECT.get(label), "needs_review": review,
            "top3": [{"label": l, "label_vi": VI[l], "p": round(q, 3)} for l, q in top[:3]],
        })
    return out
