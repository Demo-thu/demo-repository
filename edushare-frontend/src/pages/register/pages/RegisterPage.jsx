import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Building2, CheckCircle2, Clock, Hash, HeartHandshake, Info, Lock, Mail, MailCheck, MapPin, Phone, School, ShieldCheck, User, UserCheck } from "lucide-react";
import api, { apiError, saveSession } from "@/lib/api";
import { AuthAlert, AuthCard, AuthShell, FieldLabel, IconInput, OTP_LENGTH, OtpBoxes, PasswordField, StrengthMeter, SubmitButton, isPasswordAcceptable, maskEmail } from "@/layouts/auth/AuthShell";

const TYPES = {
  DONOR: { icon: HeartHandshake, title: "Nhà Hảo Tâm", tag: "ĐỐI TÁC", desc: "Cá nhân, doanh nghiệp & quỹ từ thiện", home: "/donor" },
  SCHOOL_REP: { icon: School, title: "Đại Diện Trường Học", tag: "THỤ HƯỞNG", desc: "Ban giám hiệu, điểm trường khó khăn", home: "/school" },
};

export default function RegisterPage() {
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState("DONOR");
  const [donorKind, setDonorKind] = useState("PERSON");
  const [form, setForm] = useState({ fullName: "", organizationName: "", organizationCode: "", city: "", district: "", email: "", phone: "" });
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const [step, setStep] = useState("form"); // form -> verify
  const [code, setCode] = useState("");
  const [resendIn, setResendIn] = useState(0);

  useEffect(() => {
    if (resendIn <= 0) return undefined;
    const timer = setTimeout(() => setResendIn((value) => value - 1), 1000);
    return () => clearTimeout(timer);
  }, [resendIn]);

  const isSchool = accountType === "SCHOOL_REP";
  const isOrganization = !isSchool && donorKind === "ORGANIZATION";
  const set = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.value }));
  const mismatch = confirm.length > 0 && confirm !== password;

  function buildPayload() {
    return {
      accountType,
      email: form.email.trim(),
      password,
      fullName: form.fullName.trim(),
      phone: form.phone.replace(/\s/g, "").slice(0, 20) || undefined,
      organizationName: isSchool || isOrganization ? form.organizationName.trim() : undefined,
      organizationCode: isSchool ? form.organizationCode.trim() || undefined : undefined,
      city: isSchool ? form.city.trim() : undefined,
      district: isSchool ? form.district.trim() || undefined : undefined,
    };
  }

  /** Bước 1 (và "Gửi lại mã"): gửi mã xác thực qua email, CHƯA tạo tài khoản. */
  async function sendCode(event) {
    event?.preventDefault();
    setError("");
    if (!isPasswordAcceptable(password)) return setError("Mật khẩu cần tối thiểu 8 ký tự, gồm chữ in hoa và chữ số.");
    if (password !== confirm) return setError("Mật khẩu nhập lại không khớp.");
    if (!agree) return setError("Vui lòng đồng ý với điều khoản dịch vụ và chính sách bảo mật.");
    setPending(true);
    try {
      const { data } = await api.post("/auth/register", buildPayload());
      setResendIn(data.resendAfterSeconds || 60);
      setCode("");
      setStep("verify");
    } catch (err) {
      setError(apiError(err, "Không gửi được mã xác thực. Vui lòng thử lại."));
    } finally {
      setPending(false);
    }
  }

  /** Bước 2: nhập đúng mã thì tài khoản mới được tạo và tự đăng nhập vào đúng cổng. */
  async function verify(event) {
    event.preventDefault();
    setError("");
    if (code.length !== OTP_LENGTH) return setError("Vui lòng nhập đủ 6 chữ số của mã xác thực.");
    setPending(true);
    try {
      const { data } = await api.post("/auth/register/verify", { email: form.email.trim(), code });
      saveSession(data);
      navigate(TYPES[accountType].home, { replace: true });
    } catch (err) {
      setError(apiError(err, "Không xác thực được mã. Vui lòng thử lại."));
    } finally {
      setPending(false);
    }
  }

  if (step === "verify") {
    return (
      <AuthShell active="register">
        <div className="mx-auto max-w-xl">
          <AuthCard>
            <div className="text-center">
              <span className="mx-auto mb-3 grid size-14 place-items-center rounded-full bg-blue-50 text-blue-600"><MailCheck size={26} /></span>
              <h1 className="text-2xl font-bold text-slate-900">Xác thực email để hoàn tất đăng ký</h1>
              <p className="mt-2 text-sm text-slate-500">Mã xác thực 6 chữ số đã được gửi tới</p>
              <p className="mt-1 text-lg font-bold text-slate-900">{maskEmail(form.email.trim())}</p>
              <p className="mx-auto mt-2 max-w-sm text-xs text-slate-500">Vui lòng kiểm tra hộp thư đến (kể cả mục Spam). Mã có hiệu lực 5 phút. Tài khoản chỉ được tạo sau khi bạn nhập đúng mã.</p>
            </div>

            <form onSubmit={verify} className="mt-6 space-y-5">
              <OtpBoxes value={code} onChange={setCode} />
              <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
                <Clock size={15} />
                {resendIn > 0 ? <span>Gửi lại mã sau <b className="text-blue-700">{resendIn}s</b></span> : (
                  <button type="button" onClick={sendCode} disabled={pending} className="font-bold text-blue-700 hover:underline disabled:opacity-60">Gửi lại ngay</button>
                )}
              </div>
              {error && <AuthAlert>{error}</AuthAlert>}
              <SubmitButton pending={pending} pendingLabel="Đang xác thực..." disabled={code.length !== OTP_LENGTH}>
                XÁC NHẬN & HOÀN TẤT ĐĂNG KÝ
              </SubmitButton>
            </form>
            <button type="button" onClick={() => { setStep("form"); setError(""); setCode(""); }} className="mx-auto mt-5 flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:underline">
              <ArrowLeft size={15} /> Sửa thông tin đăng ký
            </button>
          </AuthCard>
        </div>
      </AuthShell>
    );
  }

  return (
    <AuthShell active="register">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#eff4ff] px-3 py-1 text-[11px] font-bold tracking-widest text-blue-700">
            <UserCheck size={13} /> HỆ THỐNG ĐĂNG KÝ HỌC ĐƯỜNG BẢO MẬT
          </span>
          <h1 className="mt-3 text-3xl font-extrabold text-slate-900">Tạo Tài Khoản EduShare Vietnam</h1>
          <p className="mx-auto mt-2 max-w-xl text-sm text-slate-500">Chọn loại tài khoản bạn muốn đăng ký để bắt đầu hành trình sẻ chia giáo dục và kết nối tri thức vùng cao.</p>
        </div>

        <AuthCard>
          <div className="grid gap-3 sm:grid-cols-2">
            {Object.entries(TYPES).map(([key, item]) => {
              const Icon = item.icon;
              const selected = accountType === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setAccountType(key)}
                  className={`relative flex items-center gap-3 rounded-xl border-2 p-4 text-left transition ${selected ? "border-blue-600 bg-blue-50" : "border-slate-200 bg-white hover:border-blue-300"}`}
                >
                  <span className={`grid size-11 place-items-center rounded-xl ${selected ? "bg-blue-600 text-white" : "bg-[#eff4ff] text-blue-600"}`}><Icon size={22} /></span>
                  <span>
                    <small className="block text-[10px] font-bold tracking-widest text-blue-600">{item.tag}</small>
                    <b className="block text-sm text-slate-900">{item.title}</b>
                    <small className="text-xs text-slate-500">{item.desc}</small>
                  </span>
                  {selected && <CheckCircle2 size={18} className="absolute right-3 top-3 text-blue-600" />}
                </button>
              );
            })}
          </div>

          <p className="mt-4 flex gap-2 rounded-xl bg-amber-50 p-3 text-xs text-amber-800">
            <Info size={16} className="mt-0.5 shrink-0" />
            <span><b>Lưu ý vận hành:</b> tài khoản dành cho Nhân viên kho, Điều phối viên và Tình nguyện viên kiểm định được Ban Quản trị hệ thống cấp phát nội bộ, không đăng ký công khai.</span>
          </p>

          <form onSubmit={sendCode} className="mt-6 space-y-4">
            {!isSchool && (
              <div>
                <span className="mb-1.5 block text-xs font-semibold text-slate-700">Hình thức đóng góp</span>
                <div className="grid grid-cols-2 gap-2 rounded-xl bg-slate-100 p-1">
                  {[["PERSON", "Cá nhân hảo tâm", User], ["ORGANIZATION", "Doanh nghiệp / Quỹ thiện nguyện", Building2]].map(([key, label, Icon]) => (
                    <button key={key} type="button" onClick={() => setDonorKind(key)} className={`flex items-center justify-center gap-2 rounded-lg px-2 py-2 text-xs font-semibold transition ${donorKind === key ? "bg-white text-blue-700 shadow-sm" : "text-slate-500"}`}>
                      <Icon size={14} /> {label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {isSchool && (
              <div className="space-y-4 rounded-xl border border-blue-100 bg-[#f8faff] p-4">
                <p className="text-xs text-slate-500"><b className="text-blue-700">Thông tin định danh cơ sở giáo dục thụ hưởng.</b> Hồ sơ của trường sẽ được lưu ở trạng thái chờ xác minh danh tính theo cơ sở dữ liệu của Bộ GD&ĐT.</p>
                <FieldLabel label="Tên cơ sở giáo dục / Điểm trường" required>
                  <IconInput icon={School} value={form.organizationName} onChange={set("organizationName")} placeholder="VD: Trường Tiểu học Pà Cò" required minLength={2} maxLength={160} />
                </FieldLabel>
                <FieldLabel label="Mã định danh trường Bộ GD&ĐT">
                  <IconInput icon={Hash} value={form.organizationCode} onChange={set("organizationCode")} placeholder="VD: 1234567" maxLength={40} />
                </FieldLabel>
                <div className="grid gap-4 sm:grid-cols-2">
                  <FieldLabel label="Tỉnh / Thành phố" required>
                    <IconInput icon={MapPin} value={form.city} onChange={set("city")} placeholder="VD: Hòa Bình" required minLength={2} maxLength={80} />
                  </FieldLabel>
                  <FieldLabel label="Quận / Huyện">
                    <IconInput icon={MapPin} value={form.district} onChange={set("district")} placeholder="VD: Mai Châu" maxLength={80} />
                  </FieldLabel>
                </div>
              </div>
            )}

            {isOrganization && (
              <FieldLabel label="Tên doanh nghiệp / Đơn vị bảo trợ" required>
                <IconInput icon={Building2} value={form.organizationName} onChange={set("organizationName")} placeholder="VD: Quỹ Vì Tầm Vóc Việt" required minLength={2} maxLength={160} />
              </FieldLabel>
            )}

            <FieldLabel label={isSchool ? "Họ tên đại diện BGH phụ trách tiếp nhận tài nguyên" : isOrganization ? "Họ tên người đại diện" : "Họ và tên"} required>
              <IconInput icon={User} value={form.fullName} onChange={set("fullName")} placeholder="Nguyễn Văn A" required minLength={2} maxLength={120} autoComplete="name" />
            </FieldLabel>

            <div className="grid gap-4 sm:grid-cols-2">
              <FieldLabel label="Email liên hệ" required hint="Dùng để đăng nhập & nhận mã OTP">
                <IconInput icon={Mail} type="email" value={form.email} onChange={set("email")} placeholder="ten@email.com" required autoComplete="email" />
              </FieldLabel>
              <FieldLabel label="Số điện thoại điều phối">
                <IconInput icon={Phone} value={form.phone} onChange={set("phone")} placeholder="09xx xxx xxx" maxLength={20} autoComplete="tel" />
              </FieldLabel>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <PasswordField label="Mật khẩu đăng nhập" value={password} onChange={setPassword} autoComplete="new-password" />
              <PasswordField label="Nhập lại mật khẩu" value={confirm} onChange={setConfirm} autoComplete="new-password" icon={Lock} hint={mismatch ? "Chưa khớp" : confirm ? "Khớp" : ""} />
            </div>
            <StrengthMeter password={password} />

            <label className="flex cursor-pointer items-start gap-2.5 text-xs text-slate-600">
              <input type="checkbox" checked={agree} onChange={(event) => setAgree(event.target.checked)} className="mt-0.5 size-4 rounded border-slate-300 accent-blue-600" />
              <span>Tôi đồng ý tuân thủ <b className="text-blue-700">Điều khoản dịch vụ</b> và cam kết bảo mật theo <b className="text-blue-700">Chính sách bảo mật dữ liệu học đường</b> của nền tảng EduShare Vietnam.</span>
            </label>

            {error && <AuthAlert>{error}</AuthAlert>}
            <SubmitButton pending={pending} pendingLabel="Đang gửi mã...">
              GỬI MÃ XÁC THỰC QUA EMAIL ĐỂ ĐĂNG KÝ
            </SubmitButton>
          </form>

          <p className="mt-5 text-center text-sm text-slate-600">
            Đã có tài khoản trên hệ thống EduShare? <Link to="/login" className="font-bold text-blue-700 hover:underline">Đăng nhập tại đây</Link>
          </p>
          <p className="mt-3 flex items-center justify-center gap-1.5 text-[11px] font-semibold text-slate-400"><ShieldCheck size={13} /> Dữ liệu được mã hóa 256-bit SSL</p>
        </AuthCard>
      </div>
    </AuthShell>
  );
}
