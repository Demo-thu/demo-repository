import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "lucide-react";
import api, { apiError, saveSession } from "@/lib/api";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function submit(event) {
    event.preventDefault();
    setPending(true);
    setError("");
    try {
      const { data } = await api.post("/auth/register", {
        fullName: fullName.trim(),
        organizationName: organizationName.trim() || undefined,
        email: email.trim(),
        phone: phone.replace(/\s/g, "").slice(0, 20) || undefined,
        password,
      });
      saveSession(data);
      navigate("/donor", { replace: true });
    } catch (err) {
      setError(apiError(err, "Không tạo được tài khoản nhà hảo tâm."));
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
            <small className="text-[10px] font-bold tracking-widest text-slate-500">NHÀ HẢO TÂM</small>
          </div>
        </div>
        <h1 className="text-xl font-semibold text-slate-900">Đăng ký tài khoản nhà hảo tâm</h1>
        <p className="mt-1 text-sm text-slate-500">Tài khoản trường, kho và tình nguyện viên do quản trị tạo.</p>
        <label className="mt-6 block text-xs font-semibold text-slate-600">Họ tên
          <input className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" value={fullName} onChange={(event) => setFullName(event.target.value)} required minLength={2} />
        </label>
        <label className="mt-3 block text-xs font-semibold text-slate-600">Tổ chức
          <input className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" value={organizationName} onChange={(event) => setOrganizationName(event.target.value)} />
        </label>
        <label className="mt-3 block text-xs font-semibold text-slate-600">Email
          <input className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" value={email} onChange={(event) => setEmail(event.target.value)} type="email" required />
        </label>
        <label className="mt-3 block text-xs font-semibold text-slate-600">Số điện thoại
          <input className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" value={phone} onChange={(event) => setPhone(event.target.value)} />
        </label>
        <label className="mt-3 block text-xs font-semibold text-slate-600">Mật khẩu
          <input className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" value={password} onChange={(event) => setPassword(event.target.value)} type="password" required minLength={8} />
        </label>
        {error && <p className="mt-3 rounded bg-rose-50 px-3 py-2 text-xs text-rose-700">{error}</p>}
        <button disabled={pending} className="mt-5 w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white disabled:opacity-60">
          {pending ? "Đang tạo..." : "Tạo tài khoản và vào cổng nhà hảo tâm"}
        </button>
        <Link className="mt-4 block text-center text-xs font-semibold text-blue-700" to="/login">Đã có tài khoản</Link>
      </form>
    </main>
  );
}
