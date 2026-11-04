# Nối AI vào màn Nhập kho (Warehouse)

Luồng: `ReceiveScreen.jsx` → `POST /items/classify` (Warehouse backend, cần quyền ADMIN/WAREHOUSE_STAFF) → service AI Python `POST http://127.0.0.1:8765/predict`.

## Chạy
1. Cài một lần: `cd Warehouse/ai-classifier && pip install -r requirements.txt`
2. Bật AI cùng lúc với backend: `python serve.py` (cổng 8765). Đổi địa chỉ bằng biến môi trường `AI_CLASSIFIER_URL` của backend.
3. Không bật AI thì màn Nhập kho vẫn chạy bình thường, chỉ không có gợi ý.

## Hành vi
- Mỗi dòng hiện vật có nhóm AI khác nhóm nhà hảo tâm khai và độ tin cậy ≥ 60% sẽ hiện "AI gợi ý: …" kèm nút **Dùng gợi ý**.
- Nút này chỉ đổi **vị trí kệ** của dòng đó (theo CATEGORY_RACK). Không tự đổi nhóm lưu trong database; không tự bấm thay nhân viên.
- AI chỉ có 3 nhóm: STATIONERY, BOOKS, IT_DEVICES. Món AI xếp "Khác"/không chắc thì không gợi ý.

## File đã thêm/sửa (chỉ trong Warehouse/)
- Thêm: `backend/src/items/classifier.service.ts`, thư mục `ai-classifier/`
- Sửa: `backend/src/items/{dto,items.controller,items.module}.ts`, `frontend/src/screens/ReceiveScreen.jsx`

## Chạy bằng Docker
```
cd Warehouse/ai-classifier
docker compose up -d --build        # AI chạy ở http://127.0.0.1:8765 (chỉ máy này truy cập được)
```
- Backend chạy trên máy (không trong Docker): giữ mặc định `AI_CLASSIFIER_URL=http://127.0.0.1:8765/predict`.
- Backend chạy trong cùng docker network: đặt `AI_CLASSIFIER_URL=http://ai-classifier:8765/predict` và bỏ phần `ports` nếu không cần mở ra ngoài.
- Image chỉ chứa model đã train (thư mục `model/`) và code chạy; không chứa dữ liệu train. Train lại bằng `python train.py` rồi build lại image.
