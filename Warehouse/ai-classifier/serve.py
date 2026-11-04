"""Trang chạy thử độc lập:  python serve.py  ->  mở http://127.0.0.1:8765
Chỉ dùng thư viện chuẩn + scikit-learn; không kết nối DB, không gọi backend của dự án."""
import json, os
from http.server import BaseHTTPRequestHandler, HTTPServer
from classifier import classify, HERE

def page():  # đọc lại mỗi lần tải trang, tránh dính bản cũ
    return open(os.path.join(HERE, "static", "index.html"), encoding="utf-8").read()

class H(BaseHTTPRequestHandler):
    def _send(self, code, body, ctype):
        self.send_response(code); self.send_header("Content-Type", ctype); self.send_header("Cache-Control", "no-store"); self.end_headers(); self.wfile.write(body)
    def do_GET(self):
        if self.path in ("/", "/index.html"): self._send(200, page().encode("utf-8"), "text/html; charset=utf-8")
        else: self._send(404, b"not found", "text/plain")
    def do_POST(self):
        if self.path != "/predict": return self._send(404, b"not found", "text/plain")
        n = int(self.headers.get("Content-Length", 0))
        names = [x.strip() for x in json.loads(self.rfile.read(n) or b"{}").get("names", []) if x.strip()][:200]
        self._send(200, json.dumps(classify(names), ensure_ascii=False).encode("utf-8"), "application/json; charset=utf-8")
    def log_message(self, *a): pass

if __name__ == "__main__":
    host, port = os.environ.get("AI_HOST", "127.0.0.1"), int(os.environ.get("AI_PORT", "8765"))
    print(f"Mở http://{host}:{port}  (Ctrl+C để dừng)")
    HTTPServer((host, port), H).serve_forever()
