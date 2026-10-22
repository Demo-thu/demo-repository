import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Check, Eye, EyeOff, GraduationCap, Headset, HelpCircle, Lock, ShieldCheck } from "lucide-react";

/** Khung dùng chung cho 3 màn hình Đăng nhập / Đăng ký / Quên mật khẩu (đồng bộ màu với các cổng chức năng). */

export const authInputClass =
  "w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:bg-slate-50";

export function AuthShell({ active, children, wide = false }) {
  const link = (to, label, key) => (
    <Link
      to={to}
      className={`rounded-lg px-3 py-1.5 text-sm font-semibold transition ${
        active === key ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-100 hover:text-blue-700"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <div className="flex min-h-screen flex-col bg-[#f8f9ff] text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link to="/login" className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-blue-600 text-white">
              <GraduationCap size={22} />
            </span>
            <span className="leading-tight">
              <b className="block text-base text-blue-700">EduShare Vietnam</b>
              <small className="text-[11px] font-medium text-slate-500">Nâng bước tri thức học đường</small>
            </span>
          </Link>
          <div className="hidden items-center gap-2 rounded-full bg-[#eff4ff] px-3 py-1.5 text-xs font-semibold text-blue-700 md:flex">
            <ShieldCheck size={14} /> Mã hóa bảo mật 256-bit SSL
          </div>
          <nav className="flex items-center gap-1">
            {link("/login", "Đăng nhập", "login")}
            {link("/register", "Đăng ký", "register")}
            <span className="ml-2 hidden items-center gap-1 text-sm font-semibold text-slate-600 lg:flex">
              <Headset size={16} className="text-blue-600" /> 1900 6828
            </span>
            <span className="hidden items-center gap-1 text-sm text-slate-500 lg:flex">
              <HelpCircle size={16} /> Trợ giúp
            </span>
          </nav>
        </div>
      </header>

      <main className={`mx-auto flex w-full flex-1 items-center px-4 py-8 sm:px-6 ${wide ? "max-w-7xl" : "max-w-6xl"}`}>
        <div className="w-full">{children}</div>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-slate-500 sm:flex-row sm:px-6">
          <span>© 2025 EduShare Vietnam · Dự án phi lợi nhuận Capstone CMU-SE</span>
          <span className="flex items-center gap-4">
            <span>Điều khoản dịch vụ</span>
            <span>Chính sách bảo mật học thuật</span>
            <span className="flex items-center gap-1 font-semibold text-blue-700"><Headset size={14} /> Hotline: 1900 6828</span>
          </span>
        </div>
      </footer>
    </div>
  );
}

export function AuthCard({ children, className = "" }) {
  return <div className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 ${className}`}>{children}</div>;
}

export function AuthAlert({ tone = "error", children }) {
  const style = tone === "success" ? "bg-emerald-50 text-emerald-700 border-emerald-100" : "bg-rose-50 text-rose-700 border-rose-100";
  return <p role={tone === "error" ? "alert" : "status"} className={`rounded-xl border px-3 py-2 text-sm ${style}`}>{children}</p>;
}

/** Ô nhập có icon bên trái. */
export function IconInput({ icon: Icon, className = "", ...props }) {
  return (
    <div className="relative">
      {Icon && <Icon size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />}
      <input {...props} className={`${authInputClass} ${className}`} />
    </div>
  );
}

export function FieldLabel({ label, required, hint, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center justify-between text-xs font-semibold text-slate-700">
        <span>{label}{required && <span className="ml-0.5 text-rose-500">*</span>}</span>
        {hint && <span className="font-normal text-slate-400">{hint}</span>}
      </span>
      {children}
    </label>
  );
}

export function PasswordField({ label, hint, value, onChange, placeholder = "••••••••", autoComplete, required = true, icon: Icon = Lock }) {
  const [show, setShow] = useState(false);
  return (
    <FieldLabel label={label} hint={hint} required={required}>
      <div className="relative">
        <Icon size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          className={`${authInputClass} pr-10`}
          type={show ? "text" : "password"}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
          maxLength={72}
        />
        <button
          type="button"
          onClick={() => setShow((current) => !current)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600"
          aria-label={show ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
        >
          {show ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>
    </FieldLabel>
  );
}

export function passwordChecks(password) {
  return [
    { ok: password.length >= 8, label: "Tối thiểu 8 ký tự", required: true },
    { ok: /[A-Z]/.test(password), label: "Chữ in hoa (A-Z)", required: true },
    { ok: /\d/.test(password), label: "Chữ số (0-9)", required: true },
    { ok: /[^A-Za-z0-9]/.test(password), label: "Ký tự đặc biệt (@#$)", required: false },
  ];
}

/** Mật khẩu hợp lệ theo yêu cầu của API: >= 8 ký tự, có chữ hoa và chữ số. */
export function isPasswordAcceptable(password) {
  return passwordChecks(password).filter((item) => item.required).every((item) => item.ok);
}

export function StrengthMeter({ password }) {
  const checks = passwordChecks(password);
  const score = checks.filter((item) => item.ok).length;
  const level = !password ? { label: "Chưa nhập", bar: "bg-slate-200", text: "text-slate-400" }
    : score <= 1 ? { label: "RẤT YẾU", bar: "bg-rose-500", text: "text-rose-600" }
    : score === 2 ? { label: "YẾU", bar: "bg-amber-500", text: "text-amber-600" }
    : score === 3 ? { label: "KHÁ MẠNH", bar: "bg-blue-500", text: "text-blue-600" }
    : { label: "RẤT MẠNH", bar: "bg-emerald-500", text: "text-emerald-600" };

  return (
    <div className="rounded-xl bg-[#eff4ff] p-3">
      <div className="mb-2 flex items-center justify-between text-xs font-semibold text-slate-600">
        <span>Độ an toàn mật khẩu</span>
        <span className={level.text}>{password ? `${level.label} (${score}/4 tiêu chuẩn)` : level.label}</span>
      </div>
      <div className="mb-3 grid grid-cols-4 gap-1.5">
        {[0, 1, 2, 3].map((index) => (
          <span key={index} className={`h-1.5 rounded-full ${index < score && password ? level.bar : "bg-slate-200"}`} />
        ))}
      </div>
      <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs">
        {checks.map((item) => (
          <li key={item.label} className={`flex items-center gap-1.5 ${item.ok ? "text-emerald-600" : "text-slate-500"}`}>
            <Check size={13} className={item.ok ? "opacity-100" : "opacity-30"} /> {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SubmitButton({ pending, children, pendingLabel = "Đang xử lý...", disabled }) {
  return (
    <button
      type="submit"
      disabled={pending || disabled}
      className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-bold tracking-wide text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? pendingLabel : children}
    </button>
  );
}

export const OTP_LENGTH = 6;

export function maskEmail(email) {
  const [name = "", domain = ""] = email.split("@");
  return `${name.slice(0, Math.min(4, Math.max(1, name.length - 2)))}***@${domain}`;
}

export function OtpBoxes({ value, onChange }) {
  const refs = useRef([]);
  const digits = Array.from({ length: OTP_LENGTH }, (_, index) => value[index] || "");

  function update(index, char) {
    const next = digits.slice();
    next[index] = char;
    onChange(next.join(""));
  }

  function handleChange(index, raw) {
    const text = raw.replace(/\D/g, "");
    if (!text) return update(index, "");
    if (text.length > 1) {
      const merged = (value.slice(0, index) + text).slice(0, OTP_LENGTH);
      onChange(merged);
      refs.current[Math.min(merged.length, OTP_LENGTH - 1)]?.focus();
      return;
    }
    update(index, text);
    if (index < OTP_LENGTH - 1) refs.current[index + 1]?.focus();
  }

  function handleKeyDown(index, event) {
    if (event.key === "Backspace" && !digits[index] && index > 0) {
      update(index - 1, "");
      refs.current[index - 1]?.focus();
    } else if (event.key === "ArrowLeft" && index > 0) refs.current[index - 1]?.focus();
    else if (event.key === "ArrowRight" && index < OTP_LENGTH - 1) refs.current[index + 1]?.focus();
  }

  function handlePaste(event) {
    const text = event.clipboardData.getData("text").replace(/\D/g, "").slice(0, OTP_LENGTH);
    if (!text) return;
    event.preventDefault();
    onChange(text);
    refs.current[Math.min(text.length, OTP_LENGTH - 1)]?.focus();
  }

  return (
    <div className="flex justify-center gap-2 sm:gap-3" onPaste={handlePaste}>
      {digits.map((digit, index) => (
        <input
          key={index}
          ref={(node) => { refs.current[index] = node; }}
          value={digit}
          onChange={(event) => handleChange(index, event.target.value)}
          onKeyDown={(event) => handleKeyDown(index, event)}
          onFocus={(event) => event.target.select()}
          inputMode="numeric"
          autoComplete={index === 0 ? "one-time-code" : "off"}
          aria-label={`Chữ số OTP thứ ${index + 1}`}
          className={`size-12 rounded-xl border-2 text-center text-xl font-bold outline-none transition sm:size-14 ${digit ? "border-blue-500 bg-blue-50 text-blue-700" : "border-slate-200 bg-white text-slate-900"} focus:border-blue-600 focus:ring-2 focus:ring-blue-100`}
        />
      ))}
    </div>
  );
}
