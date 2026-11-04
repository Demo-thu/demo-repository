# Dữ liệu train lấy từ đâu

Tổng: **242 tên hiện vật gốc** → **1.694 dòng** sau khi sinh biến thể (xem `data/train_set_audit.csv`, mỗi dòng có cột `source`).

| Nguồn | File | Số tên gốc | Ghi chú |
|---|---|---|---|
| Dự án EduShare – `Admin/backend/prisma/seed.ts` (mảng `learningSupplies`) | `data/project_extracted.csv` | 22 | 8 sách giáo khoa + 14 món văn phòng phẩm/vở. **Đây là dữ liệu thật duy nhất của dự án có tên + nhãn** |
| Dự án EduShare – file dump `Dữ liệu/Data/EdushareVN` (bảng `resource_items`) | `data/project_extracted.csv` | 2 | Chỉ có 2 tên: *Laptop Dell Latitude 5520*, *PC HP ProDesk 400* (cùng nhãn IT_DEVICES). Các bảng còn lại không có tên hiện vật dùng được |
| Tự soạn (do Claude viết tay, kiến thức chung về đồ dùng học đường VN) | `data/catalog_handwritten.csv` | 169 | 56 dụng cụ học tập, 55 sách vở, 58 đồ điện tử |
| Tự soạn – nhóm "ngoài 3 nhóm" (bàn ghế, đồng phục, xe, thực phẩm…) | `data/catalog_other.csv` | 49 | Để AI biết nói "không thuộc 3 nhóm" thay vì ép vào nhóm gần nhất |
| Sinh tự động từ các tên trên | trong `train_set_audit.csv` | – | Thêm số lượng/tình trạng ("đã qua sử dụng", "x5"…), viết hoa, bỏ dấu, gõ sai 1 ký tự. Biến thể của cùng một món luôn ở cùng một nhóm khi đánh giá |

**Không dùng**: ảnh, dữ liệu tải từ internet, dữ liệu người dùng thật, hay bất kỳ bảng nào khác trong database (users, pledges, …).

## Quy ước nhãn (có thể chỉnh)
- `stationery` = Dụng cụ học tập → enum dự án `STATIONERY`
- `books` = Sách vở → `BOOKS`
- `electronics` = Đồ dùng điện tử → `IT_DEVICES`
- **Vở/tập thuộc "Sách vở"** theo cách bạn gọi tên nhóm. Lưu ý: `seed.ts` hiện đang xếp *Vở ô ly 80 trang, Vở kẻ ngang 96 trang, Vở tập viết lớp 1* vào `STATIONERY`. File `project_extracted.csv` ghi cả `label_in_project` và `label_used` để thấy chỗ khác này. Nếu muốn theo seed, đổi một dòng trong `build_project_data.py` và train lại.
- Máy tính cầm tay (Casio) xếp vào điện tử; cặp/ba lô xếp vào dụng cụ học tập (theo seed).

## Bộ kiểm tra
- `data/hard_test.csv` (48 tên) và `data/out_of_scope_test.csv` (15 tên): do Claude soạn riêng, không trùng tên trong tập train. Có tên không dấu, sai chính tả, tên hãng.

## Muốn AI giỏi hơn
Tạo `data/feedback.csv` (cột `name,label`, nhãn là `stationery|books|electronics|other`) với tên hiện vật thật ở kho rồi chạy lại `python train.py`.
