import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ArrowRight, BookOpen, Landmark, Mail, MapPin, QrCode, ShieldCheck, UserCog } from "lucide-react";
import api, { apiError, currentUser, isLoggedIn, saveSession } from "@/lib/api";
import { homeForRole } from "@/lib/roles";
import { AuthAlert, AuthCard, AuthShell, FieldLabel, IconInput, PasswordField, SubmitButton } from "@/layouts/auth/AuthShell";

const REMEMBER_KEY = "edushare_remember_email";

const STATS = [
  { icon: BookOpen, value: "15.000+", label: "Bộ sách giáo khoa & thiết bị đã trao tặng" },
  { icon: MapPin, value: "120+", label: "Điểm trường vùng cao kết nối trực tiếp" },
  { icon: QrCode, value: "100%", label: "Minh bạch hành trình mã định danh QR" },
];

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(() => localStorage.getItem(REMEMBER_KEY) || "");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(() => Boolean(localStorage.getItem(REMEMBER_KEY)));
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  if (isLoggedIn() && currentUser()?.role) {
    return <Navigate to={homeForRole(currentUser().role)} replace />;
  }

  async function submit(event) {
    event.preventDefault();
    setPending(true);
    setError("");
    try {
      const { data } = await api.post("/auth/login", { email: email.trim(), password });
      if (remember) localStorage.setItem(REMEMBER_KEY, email.trim());
      else localStorage.removeItem(REMEMBER_KEY);
      saveSession(data);
      navigate(homeForRole(data.user?.role), { replace: true });
    } catch (err) {
      setError(apiError(err, "Không đăng nhập được. Kiểm tra API đang chạy tại cổng 3000."));
    } finally {
      setPending(false);
    }
  }

  return (
    <AuthShell active="login" wide>
      <div className="grid items-stretch gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="relative hidden overflow-hidden rounded-2xl bg-linear-to-br from-blue-600 to-blue-800 p-8 text-white shadow-sm lg:block">
          <div className="absolute -right-16 -top-16 size-64 rounded-full bg-white/10" />
          <div className="absolute -bottom-20 -left-10 size-72 rounded-full bg-white/5" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold tracking-widest">
              NỀN TẢNG ĐIỀU PHỐI TẬP TRUNG
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight">
              Kết nối sẻ chia,<br />nâng bước tri thức<br />học đường.
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-blue-100">
              Mạng lưới số hóa kết nối nhà hảo tâm, cơ quan giáo dục và các điểm trường vùng cao; minh bạch hóa toàn trình phân bổ tài liệu và thiết bị học tập.
            </p>
            <div className="mt-8 grid gap-3">
              {STATS.map(({ icon: Icon, value, label }) => (
                <div key={value} className="flex items-center gap-4 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                  <span className="grid size-11 place-items-center rounded-lg bg-white/15"><Icon size={20} /></span>
                  <div>
                    <b className="block text-2xl font-extrabold">{value}</b>
                    <span className="text-xs text-blue-100">{label}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 border-l-2 border-white/40 pl-4 text-sm italic text-blue-100">
              "Đưa tri thức đến những nơi cần nhất — Minh bạch, kịp thời, đúng đối tượng."
            </p>
            <p className="mt-4 flex items-center gap-2 text-xs text-blue-100"><Landmark size={14} /> Bảo trợ thông tin & triển khai thực nghiệm học đường</p>
          </div>
        </section>

        <AuthCard className="flex flex-col justify-center">
          <span className="text-[11px] font-bold tracking-widest text-blue-600">CỔNG ĐĂNG NHẬP TẬP TRUNG</span>
          <h2 className="mt-1 text-2xl font-bold text-slate-900">Chào mừng trở lại!</h2>
          <p className="mt-1 text-sm text-slate-500">Đăng nhập để tiếp tục đóng góp hoặc quản lý tài nguyên học đường.</p>

          <form onSubmit={submit} className="mt-6 space-y-4">
            <FieldLabel label="Địa chỉ Email" required>
              <IconInput icon={Mail} type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="ten@email.com" autoComplete="username" required />
            </FieldLabel>
            <PasswordField label="Mật khẩu truy cập" value={password} onChange={setPassword} autoComplete="current-password" />
            <div className="flex items-center justify-between text-sm">
              <label className="flex cursor-pointer items-center gap-2 text-slate-600">
                <input type="checkbox" checked={remember} onChange={(event) => setRemember(event.target.checked)} className="size-4 rounded border-slate-300 accent-blue-600" />
                Ghi nhớ email
              </label>
              <Link to="/forgot-password" className="font-semibold text-blue-700 hover:underline">Quên mật khẩu?</Link>
            </div>
            {error && <AuthAlert>{error}</AuthAlert>}
            <SubmitButton pending={pending} pendingLabel="Đang đăng nhập...">
              ĐĂNG NHẬP VÀO HỆ THỐNG <ArrowRight size={16} />
            </SubmitButton>
          </form>

          <div className="mt-6 flex gap-3 rounded-xl bg-[#eff4ff] p-3.5 text-xs text-slate-600">
            <UserCog size={18} className="mt-0.5 shrink-0 text-blue-600" />
            <p>
              <b className="text-slate-800">Điều phối quyền tự động (RBAC).</b> Sau khi xác thực, hệ thống tự nhận diện danh tính và mở đúng cổng làm việc: Nhà hảo tâm, Trường học, Thủ kho, Tình nguyện viên hoặc Quản trị viên.
            </p>
          </div>

          <p className="mt-5 text-center text-sm text-slate-600">
            Chưa có tài khoản? <Link to="/register" className="font-bold text-blue-700 hover:underline">Đăng ký tài khoản mới ngay</Link>
          </p>
          <p className="mt-4 flex items-center justify-center gap-1.5 text-[11px] font-semibold text-slate-400"><ShieldCheck size={13} /> ISO 27001 · 256-bit SSL</p>
        </AuthCard>
      </div>
    </AuthShell>
  );
}
