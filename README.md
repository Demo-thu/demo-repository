# EduShare Vietnam

Monorepo gồm hai ứng dụng:

- `edushare-backend` — API NestJS, Prisma, PostgreSQL (cổng 3000, tiền tố `/api`)
- `edushare-frontend` — React + Tailwind (cổng 5173), gồm Admin, nhà hảo tâm, trường học, kho và tình nguyện viên

Thư mục `Dữ liệu` nằm ngoài hai ứng dụng và không thuộc hệ thống đang chạy.

## Chạy toàn bộ hệ thống

Nhấp đúp `start-edushare.bat` ở thư mục gốc. File này gọi `start-edushare.ps1`: cài thư viện còn thiếu, đồng bộ cơ sở dữ liệu, rồi mở API và trang web.

- Đăng nhập: http://localhost:5173/login
- API: http://localhost:3000/api

Tài khoản mẫu: `admin@edushare.vn`, `donor@edushare.vn`, `school@edushare.vn`, `warehouse@edushare.vn`, `volunteer@edushare.vn`. Mật khẩu: `EduShare@2024`.

Cấu hình API nằm trong `edushare-backend/.env` (sao chép từ `.env.example` nếu chưa có). PostgreSQL và Redis có thể chạy bằng Docker:

```bash
docker compose up -d
```

Máy đang dùng PostgreSQL cục bộ thì không cần Docker.

## Run the whole system

Double-click `start-edushare.bat` at the repository root. It runs `start-edushare.ps1`, which installs missing packages, syncs the database, and starts the API and the web app.

- Login: http://localhost:5173/login
- API: http://localhost:3000/api

Demo accounts use the `@edushare.vn` addresses above. Password: `EduShare@2024`.

API settings live in `edushare-backend/.env`. `docker compose up -d` starts PostgreSQL and Redis when you do not already have them locally.
