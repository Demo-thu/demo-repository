# AI phân loại tài nguyên cho Kho (bản xem thử, độc lập)

Trang xem thử hiển thị 4 cột: **Dụng cụ học tập | Sách vở | Đồ dùng điện tử | Khác** (món ngoài 3 nhóm hoặc AI không chắc đều vào cột Khác).
Thư mục này **không sửa, không import, không kết nối** bất kỳ file nào của dự án EduShare. Chưa tích hợp.

## Chạy thử (Python 3.10+)
```
pip install -r requirements.txt
python serve.py            # mở http://127.0.0.1:8765 rồi nhập tên hiện vật, mỗi dòng một món
python predict.py "Bút bi xanh" "SGK Toán 7" "Laptop Dell"     # hoặc chạy ở dòng lệnh
```
Model đã train sẵn trong `model/classifier.joblib`. Train lại: `python train.py` (vài giây, chỉ dùng CPU).

## Cách hoạt động
Chuẩn hóa chữ (bỏ dấu, chữ thường) → TF-IDF ký tự + từ → Logistic Regression. Độ tin cậy < 60% hoặc nhóm "ngoài 3 nhóm" → `needs_review = true`.
Kết quả có `project_category` (STATIONERY / BOOKS / IT_DEVICES) để sau này khớp với enum `ItemCategory` nếu bạn muốn tích hợp.

## Độ chính xác (đo thật, xem `model/report.json`)
- Kiểm tra chéo theo nhóm (món chưa từng thấy tên): **81%**; riêng "Ngoài 3 nhóm" thấp nhất (F1 0,59)
- Bộ 48 tên khó tự soạn: **95,8%** (sai 2: *Cặp sách Miti*, *Từ điển Oxford*)
- 15 tên ngoài phạm vi: **15/15** được gắn "cần kiểm tra"
Các con số này đo trên dữ liệu do Claude soạn, **chưa phải độ chính xác thực tế ở kho**.

Nguồn dữ liệu: xem `DATA_SOURCES.md`.
