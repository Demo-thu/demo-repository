import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AtSign, ArrowLeft, Check, CheckCircle2, Clock, KeyRound, LockKeyhole, MailCheck, Send, ShieldCheck } from "lucide-react";
import api, { apiError, clearSession } from "@/lib/api";
import { AuthAlert, AuthCard, AuthShell, FieldLabel, IconInput, OTP_LENGTH, OtpBoxes, PasswordField, StrengthMeter, maskEmail, SubmitButton, isPasswordAcceptable } from "@/layouts/auth/AuthShell";

const DEFAULT_RESEND = 60;

function Stepper({ step }) {
  const items = ["Mã OTP", "Mật khẩu", "Hoàn tất"];
  return (
    <ol className="mb-6 flex items-center justify-center gap-2 text-xs font-semibold">
      {items.map((label, index) => {
        const done = index < step;
        const current = index === step;
        return (
          <li key={label} className="flex items-center gap-2">
            <span className={`grid size-7 place-items-center rounded-full border-2 ${done ? "border-blue-600 bg-blue-600 text-white" : current ? "border-blue-600 bg-white text-blue-600" : "border-slate-200 bg-white text-slate-400"}`}>
              {done ? <Check size={14} /> : index + 1}
            </span>
            <span className={current || done ? "text-blue-700" : "text-slate-400"}>{index + 1}. {label}</span>
            {index < items.length - 1 && <span className={`mx-1 h-0.5 w-8 rounded ${done ? "bg-blue-600" : "bg-slate-200"}`} />}
          </li>
        );
      })}
    </ol>
  );
}

export default function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState("email"); // email -> reset -> done
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [pending, setPending] = useState(false);
  const [resendIn, setResendIn] = useState(0);

  useEffect(() => {
    if (resendIn <= 0) return undefined;
    const timer = setTimeout(() => setResendIn((value) => value - 1), 1000);
    return () => clearTimeout(timer);
  }, [resendIn]);

  async function requestCode(event) {
    event?.preventDefault();
    setPending(true);
    setError("");
    setInfo("");
    try {
      const { data } = await api.post("/auth/forgot-password", { email: email.trim() });
      setResendIn(data.resendAfterSeconds || DEFAULT_RESEND);
      setCode("");
      setStep("reset");
      setInfo(data.message || "");
    } catch (err) {
      setError(apiError(err, "Không gửi được mã xác thực. Vui lòng thử lại."));
    } finally {
      setPending(false);
    }
  }

  async function submitReset(event) {
    event.preventDefault();
    setError("");
    if (code.length !== OTP_LENGTH) return setError("Vui lòng nhập đủ 6 chữ số của mã xác thực.");
    if (!isPasswordAcceptable(password)) return setError("Mật khẩu mới cần tối thiểu 8 ký tự, gồm chữ in hoa và chữ số.");
    if (password !== confirm) return setError("Mật khẩu xác nhận không khớp.");
    setPending(true);
    try {
      await api.post("/auth/reset-password", { email: email.trim(), code, newPassword: password });
      clearSession();
      setStep("done");
    } catch (err) {
      setError(apiError(err, "Không đặt lại được mật khẩu. Vui lòng thử lại."));
    } finally {
      setPending(false);
    }
  }

  const mismatch = confirm.length > 0 && confirm !== password;

  return (
    <AuthShell active="forgot">
      <div className="mx-auto max-w-xl">
        {step === "email" && (
          <AuthCard>
            <div className="mb-5 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#eff4ff] px-3 py-1 text-[11px] font-bold tracking-widest text-blue-700"><LockKeyhole size={13} /> CỔNG BẢO MẬT EDUSHARE ID</span>
              <span className="text-[11px] font-semibold text-slate-400">TLS 1.3</span>
            </div>
            <div className="mb-4 grid size-12 place-items-center rounded-xl bg-blue-600 text-white"><KeyRound size={22} /></div>
            <h1 className="text-2xl font-bold text-slate-900">Khôi Phục Mật Khẩu</h1>
            <p className="mt-1 text-sm text-slate-500">Nhập địa chỉ email đã đăng ký tài khoản. Hệ thống EduShare sẽ gửi mã xác thực OTP 6 chữ số để xác minh danh tính của bạn.</p>

            <form onSubmit={requestCode} className="mt-6 space-y-4">
              <FieldLabel label="Email đăng ký tài khoản" required>
                <IconInput icon={AtSign} type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="ten@email.com" autoComplete="username" required />
              </FieldLabel>
              <ul className="space-y-2 rounded-xl bg-[#eff4ff] p-3.5 text-xs text-slate-600">
                <li className="flex items-center gap-2"><Clock size={14} className="text-blue-600" /> Mã OTP có hiệu lực trong <b className="text-slate-800">5 phút</b> và vô hiệu sau 3 lần nhập sai</li>
                <li className="flex items-center gap-2"><ShieldCheck size={14} className="text-blue-600" /> Mã được gửi riêng cho từng yêu cầu, mã cũ tự động hết hiệu lực</li>
              </ul>
              {error && <AuthAlert>{error}</AuthAlert>}
              <SubmitButton pending={pending} pendingLabel="Đang gửi mã...">
                GỬI MÃ XÁC THỰC OTP <Send size={15} />
              </SubmitButton>
            </form>
            <Link to="/login" className="mt-5 flex items-center justify-center gap-1.5 text-sm font-semibold text-blue-700 hover:underline"><ArrowLeft size={15} /> Quay lại trang Đăng nhập</Link>
            <p className="mt-5 border-t border-slate-100 pt-4 text-center text-xs text-slate-500">Hỗ trợ kỹ thuật khẩn cấp: <b>1900 6828</b> · support@edushare.vn</p>
          </AuthCard>
        )}

        {step === "reset" && (
          <AuthCard>
            <Stepper step={0} />
            <div className="text-center">
              <span className="mx-auto mb-3 grid size-14 place-items-center rounded-full bg-blue-50 text-blue-600"><MailCheck size={26} /></span>
              <p className="text-sm text-slate-500">Mã xác thực 6 chữ số đã được gửi tới</p>
              <p className="mt-1 text-lg font-bold text-slate-900">{maskEmail(email.trim())}</p>
              {info && <p className="mx-auto mt-2 max-w-sm text-xs text-slate-500">Vui lòng kiểm tra hộp thư đến (kể cả mục Spam). Mã có hiệu lực 5 phút.</p>}
            </div>

            <form onSubmit={submitReset} className="mt-6 space-y-5">
              <OtpBoxes value={code} onChange={setCode} />
              <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
                <Clock size={15} />
                {resendIn > 0 ? <span>Gửi lại mã sau <b className="text-blue-700">{resendIn}s</b></span> : (
                  <button type="button" onClick={requestCode} disabled={pending} className="font-bold text-blue-700 hover:underline disabled:opacity-60">Gửi lại ngay</button>
                )}
              </div>

              <PasswordField label="Mật khẩu mới" value={password} onChange={setPassword} autoComplete="new-password" />
              <StrengthMeter password={password} />
              <PasswordField label="Xác nhận mật khẩu mới" value={confirm} onChange={setConfirm} autoComplete="new-password" hint={mismatch ? "Chưa khớp" : confirm ? "Khớp 100%" : ""} />

              {error && <AuthAlert>{error}</AuthAlert>}
              <SubmitButton pending={pending} pendingLabel="Đang cập nhật..." disabled={code.length !== OTP_LENGTH}>
                XÁC NHẬN & ĐỔI MẬT KHẨU <KeyRound size={15} />
              </SubmitButton>
            </form>
            <div className="mt-5 flex items-center justify-between text-sm font-semibold text-blue-700">
              <button type="button" onClick={() => { setStep("email"); setError(""); setInfo(""); }} className="hover:underline">Đổi email khác</button>
              <Link to="/login" className="hover:underline">Quay lại màn hình đăng nhập</Link>
            </div>
          </AuthCard>
        )}

        {step === "done" && (
          <>
            <AuthCard className="opacity-40 pointer-events-none select-none"><Stepper step={3} /><div className="h-24" /></AuthCard>
            <div className="fixed inset-0 z-50 grid place-items-center bg-slate-900/40 p-4 backdrop-blur-sm" role="dialog" aria-modal="true">
              <div className="w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-2xl">
                <span className="mx-auto mb-4 grid size-16 place-items-center rounded-full bg-emerald-50 text-emerald-600"><CheckCircle2 size={34} /></span>
                <h2 className="text-xl font-bold text-slate-900">Đặt Lại Thành Công!</h2>
                <p className="mt-2 text-sm text-slate-500">Mật khẩu tài khoản EduShare của bạn đã được cập nhật an toàn. Mọi phiên đăng nhập trên thiết bị cũ đã được thu hồi.</p>
                <button type="button" onClick={() => navigate("/login", { replace: true })} className="mt-6 w-full rounded-xl bg-blue-600 py-3 text-sm font-bold text-white hover:bg-blue-700">
                  ĐĂNG NHẬP NGAY BÂY GIỜ
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </AuthShell>
  );
}
