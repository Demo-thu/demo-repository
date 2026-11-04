"""Trích tên hiện vật có nhãn từ dự án EduShare (chỉ ĐỌC, không sửa gì trong dự án).

Dùng:  python build_project_data.py --seed <đường_dẫn>/Admin/backend/prisma/seed.ts
Nguồn: mảng `learningSupplies` trong seed.ts + 2 tên hiện vật trong file dump Data/EdushareVN
       (bảng resource_items: 'Laptop Dell Latitude 5520', 'PC HP ProDesk 400', cùng nhãn IT_DEVICES).
"""
import argparse, csv, re

# Nhãn dự án (enum ItemCategory) -> nhãn dùng cho AI kho (3 nhóm theo yêu cầu)
TO_AI = {"STATIONERY": "stationery", "BOOKS": "books", "IT_DEVICES": "electronics"}

ap = argparse.ArgumentParser()
ap.add_argument("--seed", required=True)
ap.add_argument("--out", default="data/project_extracted.csv")
a = ap.parse_args()

text = open(a.seed, encoding="utf-8").read()
rows = []
for cat, name in re.findall(r"category:\s*'(BOOKS|STATIONERY)',\s*name:\s*'([^']+)'", text):
    label = TO_AI[cat]
    # Yêu cầu của user: "sách vở" là một nhóm -> vở/tập đi cùng sách (seed đang xếp vở vào STATIONERY)
    if re.match(r"(?i)(vở|tập)\b", name):
        label = "books"
    rows.append((name, cat, label, "project_seed_ts"))
for name in ["Laptop Dell Latitude 5520", "PC HP ProDesk 400"]:
    rows.append((name, "IT_DEVICES", "electronics", "project_db_dump"))

with open(a.out, "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f)
    w.writerow(["name", "label_in_project", "label_used", "source"])
    w.writerows(rows)
print(len(rows), "dòng ->", a.out)
