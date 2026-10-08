import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "lucide-react";
import api, { saveSession } from "../lib/api";
import { homeForRole } from "../lib/roles";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("admin@edushare.vn");
  const [password, setPassword] = useState("EduShare@2024");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function submit(event) {
    event.preventDefault();
    setPending(true);
    setError("");
    try {
      const { data } = await api.post("/auth/login", { email, password });
      saveSession(data);
      navigate(homeForRole(data.user?.role), { replace: true });
    } catch (err) {
      const message = err.response?.data?.message;
      setError(typeof message === "string" ? message : "Không đăng nhập được. Kiểm tra API đang chạy tại cổng 3000.");
    } finally {
      setPending(false);
    }
  }

  return (
    <main className="grid min-h-screen place-items-center bg-[#f8f9ff] px-4">
      <form onSubmit={submit} className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-6 flex items-center gap-2 text-blue-700">
          <span className="grid size-8 place-items-center rounded bg-blue-600 text-white"><Box size={16} /></span>
          <div>
            <b className="block text-sm">EduShare VN</b>
            <small className="text-[10px] font-bold tracking-widest text-slate-500">CỔNG ĐIỀU HÀNH</small>
          </div>
        </div>
        <h1 className="text-xl font-semibold text-slate-900">Đăng nhập hệ thống</h1>
        <p className="mt-1 text-sm text-slate-500">Quản trị tài nguyên giáo dục. Không phải cổng mua bán.</p>
        <label className="mt-6 block text-xs font-semibold text-slate-600">Email
          <input className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" value={email} onChange={(event) => setEmail(event.target.value)} type="email" required />
        </label>
        <label className="mt-3 block text-xs font-semibold text-slate-600">Mật khẩu
          <input className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" value={password} onChange={(event) => setPassword(event.target.value)} type="password" required />
        </label>
        {error && <p className="mt-3 rounded bg-rose-50 px-3 py-2 text-xs text-rose-700">{error}</p>}
        <button disabled={pending} className="mt-5 w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white disabled:opacity-60">
          {pending ? "Đang đăng nhập..." : "Vào đúng cổng của tài khoản"}
        </button>
        <a className="mt-4 block text-center text-xs font-semibold text-blue-700" href="/register">Đăng ký tài khoản nhà hảo tâm</a>
      </form>
    </main>
  );
}
