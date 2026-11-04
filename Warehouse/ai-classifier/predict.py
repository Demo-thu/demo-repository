"""Chạy thử trên dòng lệnh:  python predict.py "Bút bi xanh" "Laptop Dell" "vo 96 trang" """
import sys, json
from classifier import classify
names = sys.argv[1:] or [l.strip() for l in sys.stdin if l.strip()]
for r in classify(names):
    flag = "  [CẦN KIỂM TRA]" if r["needs_review"] else ""
    print(f'{r["name"]:<40} -> {r["label_vi"]:<16} {r["confidence"]:.0%}{flag}')
