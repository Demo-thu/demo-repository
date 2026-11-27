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

Cấu hình API khi chạy trực tiếp nằm trong `edushare-backend/.env` (sao chép từ `.env.example` nếu chưa có).

## Chạy toàn bộ hệ thống bằng Docker

> Cấu hình Compose này dành cho phát triển cục bộ trên Windows/Docker Desktop: chỉ HTTP, các cổng bind vào `127.0.0.1`, không có domain hoặc TLS. Không dùng nguyên cấu hình này để public ứng dụng; khi triển khai production sẽ cần cấu hình HTTPS/reverse proxy riêng.

Cài Docker Desktop, mở Docker Engine, rồi chạy tại thư mục gốc:

```bash
docker compose up --build -d
```

Compose khởi động PostgreSQL và Redis, đồng bộ schema Prisma, chỉ tạo dữ liệu mẫu nếu database chưa có người dùng, rồi chạy API và frontend. Mở:

- Đăng nhập và các portal: http://localhost:5173
- API: http://localhost:3000/api

PostgreSQL và Redis chỉ mở cổng trên máy cục bộ, lần lượt là `5433` và `6380`, để tránh đụng cổng mặc định đang dùng. Theo dõi log bằng `docker compose logs -f`; dừng ứng dụng bằng `docker compose down`. Dữ liệu PostgreSQL được giữ trong volume `edushare_pg` khi dừng. Chỉ dùng `docker compose down -v` nếu chủ ý xóa dữ liệu database.

Các cổng có thể đổi qua biến `FRONTEND_PORT`, `BACKEND_PORT`, `POSTGRES_PORT` và `REDIS_PORT`. Cấu hình SMTP tùy chọn qua `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` và `FROM_EMAIL`; nếu chưa cấu hình, các chức năng gửi OTP email sẽ không hoạt động. JWT secret mặc định và tài khoản/mật khẩu mẫu chỉ dành cho phát triển cục bộ.

Máy đang dùng PostgreSQL cục bộ thì có thể tiếp tục chạy ứng dụng trực tiếp mà không cần Docker.

## Run the whole system

Double-click `start-edushare.bat` at the repository root. It runs `start-edushare.ps1`, which installs missing packages, syncs the database, and starts the API and the web app.

- Login: http://localhost:5173/login
- API: http://localhost:3000/api

Demo accounts use the `@edushare.vn` addresses above. Password: `EduShare@2024`.

API settings for a native run live in `edushare-backend/.env`. To run the complete stack in Docker, use `docker compose up --build -d` from the repository root.

The Compose setup is for local Windows/Docker Desktop development only: HTTP on localhost, with no domain or TLS. Do not expose it directly to the public internet; production deployment needs a separate HTTPS/reverse-proxy configuration and production secrets.

Compose starts PostgreSQL and Redis, applies the Prisma schema, seeds demo data only when the database has no users, and then starts the API and frontend. Open http://localhost:5173 for the application and http://localhost:3000/api for the API. PostgreSQL and Redis bind to localhost ports `5433` and `6380`. Use `docker compose logs -f` to follow logs and `docker compose down` to stop the stack. PostgreSQL data stays in the `edushare_pg` volume; `docker compose down -v` deletes it.
