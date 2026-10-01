import { useState } from "react";
import { Link } from "react-router-dom";

const WarehouseScanQRPage = () => {
  const [isContinuousScan, setIsContinuousScan] = useState(true);
  const [scanInput, setScanInput] = useState("QR-DELL-5520");
  const [activeFilter, setActiveFilter] = useState("all");

  // Data State
  const [deviceData, setDeviceData] = useState({
    qrCode: "QR-DELL-5520",
    name: "Laptop Dell Latitude 5520",
    donor: "Tập đoàn VNPT",
    shelf: "Kệ A2 - Tầng 04 (Ô 12)",
    destination: "Trường PTDTBT THCS Mường Lát (Thanh Hóa)",
    mode: "XUAT", // 'NHAP' or 'XUAT'
  });

  const toggleContinuousScan = () => {
    setIsContinuousScan(!isContinuousScan);
  };

  const handleTriggerScan = () => {
    if (!scanInput.trim()) return;
    if (scanInput.toUpperCase().includes("NEW") || scanInput.toUpperCase().includes("HP")) {
      selectScenario("NEW_RECEIVE");
    } else {
      selectScenario("EXISTING_INSPECTED");
    }
  };

  const selectScenario = (scenarioType) => {
    if (scenarioType === "EXISTING_INSPECTED") {
      selectItem(
        "QR-DELL-5520",
        "Laptop Dell Latitude 5520",
        "Tập đoàn VNPT",
        "Kệ A2 - Tầng 04 (Ô 12)",
        "Trường PTDTBT THCS Mường Lát (Thanh Hóa)",
        "XUAT",
      );
    } else {
      selectItem(
        "QR-HP-400-NEW",
        "Bộ PC Desktop HP ProDesk 400 G6",
        "FPT Software",
        "Kệ B1 - Tầng 01 (Ô 03)",
        "Kho Tiếp Nhận HUB-01 MB",
        "NHAP",
      );
    }
  };

  const selectItem = (qrCode, name, donor, shelf, destination, mode) => {
    setScanInput(qrCode);
    setDeviceData({
      qrCode,
      name,
      donor,
      shelf,
      destination,
      mode,
    });
  };

  const handlePrimaryAction = () => {
    alert(
      `[THÀNH CÔNG] Đã ghi nhận tác vụ cho mã ${scanInput}.\nCơ chế tức thì: Vận đơn đã chốt và đồng bộ toàn quốc! Không cần kho đích ký nhận.`,
    );
  };

  return (
    <div className="bg-surface font-body-md text-on-surface flex min-h-screen flex-col antialiased">
      <style>{`
        @keyframes laserSweep {
          0% { top: 6%; opacity: 0.8; }
          50% { top: 88%; opacity: 1; }
          100% { top: 6%; opacity: 0.8; }
        }
        .animate-laser {
          animation: laserSweep 2.4s ease-in-out infinite;
        }
      `}</style>
      <aside className="bg-surface-container-lowest fixed top-0 left-0 z-50 flex h-screen w-72 flex-col justify-between overflow-y-auto shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="flex flex-col">
          <div className="bg-surface-container-low/60 flex items-center gap-3 px-6 py-5">
            <div className="bg-primary text-on-primary font-headline-md flex h-10 w-10 items-center justify-center rounded-xl font-bold tracking-tight shadow-sm">
              ES
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold">EduShare VN</span>
                <span className="font-label-sm bg-primary-fixed text-on-primary-fixed-variant rounded px-1.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase">
                  Kho
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant">Kho &amp; Kỹ Thuật</span>
            </div>
          </div>
          <div className="bg-surface-container-low flex items-center gap-2 px-6 py-3">
            <span className="bg-tertiary-container h-2 w-2 animate-pulse rounded-full"></span>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-on-surface font-medium">Kho Tổng Miền Bắc (TK-MB)</span>
              <span className="font-body-sm text-on-surface-variant text-[11px]">Trực tuyến 63 Tỉnh Thành</span>
            </div>
          </div>
          <nav className="flex-1 space-y-6 px-4 py-4">
            <div className="space-y-1">
              <div className="font-label-sm text-label-sm text-outline px-3 pb-1 font-semibold tracking-wider uppercase">
                Nhập Kho &amp; Tiếp Nhận
              </div>
              <Link
                className="text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center gap-3 rounded-lg px-3 py-2 transition-colors"
                to="/warehouse/receive"
              >
                <span className="material-symbols-outlined text-[20px]">fact_check</span>
                <span className="font-body-md text-body-md">Tiếp nhận &amp; Kiểm định</span>
              </Link>
              <Link
                className="bg-primary text-on-primary flex items-center gap-3 rounded-lg px-3 py-2 font-medium shadow-sm transition-all"
                to="/warehouse/scan-qr"
              >
                <span className="material-symbols-outlined text-on-primary text-[20px]">qr_code_scanner</span>
                <span className="font-body-md text-body-md text-on-primary">Quét QR phân luồng</span>
              </Link>
              <Link
                className="text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center gap-3 rounded-lg px-3 py-2 transition-colors"
                to="/warehouse/donation-receipt"
              >
                <span className="material-symbols-outlined text-[20px]">description</span>
                <span className="font-body-md text-body-md">Phiếu trao tặng</span>
              </Link>
            </div>
            <div className="space-y-1">
              <div className="font-label-sm text-label-sm text-outline px-3 pb-1 font-semibold tracking-wider uppercase">
                Quản Lý Kho Bãi
              </div>
              <Link
                className="text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center gap-3 rounded-lg px-3 py-2 transition-colors"
                to="/warehouse/inventory"
              >
                <span className="material-symbols-outlined text-[20px]">inventory_2</span>
                <span className="font-body-md text-body-md">Tồn kho thiết bị</span>
              </Link>
              <Link
                className="text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center justify-between rounded-lg px-3 py-2 transition-colors"
                to="/warehouse/racks"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[20px]">shelves</span>
                  <span className="font-body-md text-body-md">Vị trí kệ định danh</span>
                </div>
                <span className="font-label-sm text-label-sm bg-surface-container-high text-on-surface-variant rounded px-1.5 py-0.5">
                  Xem
                </span>
              </Link>
              <Link
                className="text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center gap-3 rounded-lg px-3 py-2 transition-colors"
                to="/warehouse/audit-report"
              >
                <span className="material-symbols-outlined text-[20px]">assignment</span>
                <span className="font-body-md text-body-md">Kiểm kê &amp; Báo cáo</span>
              </Link>
            </div>
            <div className="space-y-1">
              <div className="font-label-sm text-label-sm text-outline px-3 pb-1 font-semibold tracking-wider uppercase">
                Điều Phối &amp; Vận Chuyển
              </div>
              <Link
                className="text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center gap-3 rounded-lg px-3 py-2 transition-colors"
                to="/warehouse/dispatch"
              >
                <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                <span className="font-body-md text-body-md">Lệnh điều chuyển &amp; Vận đơn</span>
              </Link>
              <Link
                className="text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center gap-3 rounded-lg px-3 py-2 transition-colors"
                to="/warehouse/delivery-history"
              >
                <span className="material-symbols-outlined text-[20px]">history</span>
                <span className="font-body-md text-body-md">Lịch sử đợt giao</span>
              </Link>
              <Link
                className="text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center gap-3 rounded-lg px-3 py-2 transition-colors"
                to="/warehouse/incident-report"
              >
                <span className="material-symbols-outlined text-[20px]">warning</span>
                <span className="font-body-md text-body-md">Báo cáo sự cố cá nhân</span>
              </Link>
            </div>
          </nav>
        </div>
        <div className="bg-surface-container-low text-on-surface-variant mx-4 mb-4 space-y-1 rounded-xl p-4">
          <div className="font-label-sm text-label-sm flex items-center justify-between font-semibold">
            <span className="text-on-surface">CỔNG KHO VẬN</span>
            <span className="text-outline">v2.8.4</span>
          </div>
          <div className="text-on-surface-variant font-body-sm text-body-sm flex items-center gap-2 pt-1">
            <span className="material-symbols-outlined text-primary text-[16px]">support_agent</span>
            <span className="">
              Kỹ thuật kho: <strong className="text-on-surface font-semibold">1900 6829</strong>
            </span>
          </div>
        </div>
      </aside>
      <div className="flex min-h-screen flex-col pl-72">
        <header className="bg-surface-container-lowest/90 fixed top-0 right-0 left-72 z-40 flex h-16 items-center justify-between gap-4 px-6 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1.5">
              <span className="hover:text-primary cursor-pointer transition-colors">EduShare VN Kho</span>
              <span className="material-symbols-outlined text-outline text-[16px]">chevron_right</span>
              <span className="hover:text-primary cursor-pointer transition-colors">Nhập Kho &amp; Tiếp Nhận</span>
              <span className="material-symbols-outlined text-outline text-[16px]">chevron_right</span>
              <span className="text-primary font-medium">Quét QR Phân Luồng</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative flex items-center">
              <span className="material-symbols-outlined text-outline absolute left-3 text-[18px]">search</span>
              <input
                className="text-body-md font-body-md bg-surface-container-low text-on-surface placeholder:text-outline focus:ring-primary/20 w-96 rounded-lg py-2 pr-14 pl-9 transition-all outline-none focus:ring-2"
                placeholder="Mã vận đơn, số lô hàng, serial hoặc quét mã QR thiết bị..."
                type="text"
              />
              <span className="bg-surface-container-high text-on-surface-variant font-code-num absolute right-3 rounded px-1.5 py-0.5 text-[11px] font-semibold tracking-wide">
                ⌘K
              </span>
            </div>
            <button className="bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary font-label-md text-label-md flex items-center gap-1.5 rounded-lg px-3 py-2 transition-colors">
              <span className="material-symbols-outlined text-[18px]">qr_code_scanner</span>
              <span className="">Quét QR</span>
            </button>
            <button className="hover:bg-surface-container-low text-on-surface-variant relative rounded-lg p-2 transition-colors">
              <span className="material-symbols-outlined text-[22px]">notifications</span>
              <span className="bg-error absolute top-1.5 right-1.5 h-2 w-2 rounded-full"></span>
            </button>
            <div className="flex items-center gap-3 pl-3">
              <div className="flex flex-col text-right">
                <span className="font-label-md text-label-md text-on-surface font-semibold">Trần Hùng (TK-MB-04)</span>
                <span className="font-body-sm text-on-surface-variant text-[11px]">
                  Trưởng Kho Kỹ Thuật Hà Nội • Kho Tổng Miền Bắc (HUB-01 Hà Nội)
                </span>
              </div>
              <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full">
                <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
              </div>
            </div>
          </div>
        </header>
        <main className="bg-surface w-full flex-1 pt-16">
          <div className="flex w-full flex-col">
            <div className="space-y-6 px-6 py-6">
              {/* Top Header & Breadcrumb */}
              <div className="bg-surface-container-lowest flex flex-col justify-between gap-4 rounded-xl p-6 shadow-sm lg:flex-row lg:items-center">
                <div className="max-w-3xl space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-semibold tracking-wider uppercase">
                      <span className="bg-primary h-1.5 w-1.5 rounded-full"></span>
                      TRẠM TIẾP VẬN &amp; QUÉT PHÂN LUỒNG TẬP TRUNG - KHO HUB-01 MIỀN BẮC
                    </span>
                    <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm rounded px-2 py-0.5 font-semibold">
                      RBAC v2.8.4
                    </span>
                  </div>
                  <h1 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
                    Quét QR Phân Luồng &amp; Điều Hướng Thiết Bị
                  </h1>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Hệ thống tự động nhận diện mã định danh QR/RFID để kích hoạt phân luồng 2 chiều (Dual-Mode): Nếu đã
                    nhập kho → Chuyển ngay sang luồng Xuất; nếu chưa xuất → Mở form Nhập kho đối soát.
                  </p>
                </div>
                {/* Action buttons */}
                <div className="flex shrink-0 flex-wrap items-center gap-2.5">
                  <button
                    className="bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md inline-flex items-center gap-2 rounded-lg px-3.5 py-2.5 shadow-sm transition-colors"
                    onClick={() => alert("Đang tải danh sách 218 lượt quét dạng bảng Excel (.xlsx)...")}
                  >
                    <span className="material-symbols-outlined text-primary text-[18px]">download</span>
                    <span className="">Tải Báo Cáo Hôm Nay (.xlsx)</span>
                  </button>
                  <button
                    className="bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md inline-flex items-center gap-2 rounded-lg px-3.5 py-2.5 shadow-sm transition-colors"
                    onClick={() =>
                      alert("Mở hộp thoại kết nối máy quét Laser Honeywell Orbit và anten RFID UHF 915MHz...")
                    }
                  >
                    <span className="material-symbols-outlined text-secondary text-[18px]">tune</span>
                    <span className="">Cài Đặt Cảm Biến / RFID</span>
                  </button>
                  <button
                    className={`font-label-md text-label-md inline-flex items-center gap-2 rounded-lg px-4 py-2.5 shadow-sm transition-all ${
                      isContinuousScan
                        ? "bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container"
                        : "bg-surface-container-high text-on-surface"
                    }`}
                    onClick={toggleContinuousScan}
                  >
                    <span className="material-symbols-outlined text-[18px]">autorenew</span>
                    <span className="">Quét Liên Tục: {isContinuousScan ? "BẬT" : "TẮT"}</span>
                  </button>
                </div>
              </div>

              {/* Bento 4 Thẻ Kpi Định Lượng */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {/* Kpi 1 */}
                <div className="bg-surface-container-lowest flex flex-col justify-between rounded-xl p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-outline font-semibold tracking-wider uppercase">
                      LƯỢT QUÉT HÔM NAY
                    </span>
                    <div className="bg-primary-fixed text-primary flex h-9 w-9 items-center justify-center rounded-lg">
                      <span className="material-symbols-outlined text-[20px]">qr_code_scanner</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex items-baseline gap-2">
                      <span className="font-headline-xl text-headline-xl text-on-surface font-bold">218</span>
                      <span className="font-label-md text-label-md text-primary font-medium">kiện / máy</span>
                    </div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant mt-2 flex items-center gap-3">
                      <span className="text-tertiary flex items-center gap-1 font-medium">
                        <span className="material-symbols-outlined text-[14px]">arrow_downward</span> 142 Nhập
                      </span>
                      <span className="text-outline">•</span>
                      <span className="text-primary flex items-center gap-1 font-medium">
                        <span className="material-symbols-outlined text-[14px]">arrow_upward</span> 76 Xuất
                      </span>
                    </div>
                  </div>
                </div>
                {/* Kpi 2 */}
                <div className="bg-surface-container-lowest flex flex-col justify-between rounded-xl p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-outline font-semibold tracking-wider uppercase">
                      PHÂN LUỒNG TỰ ĐỘNG
                    </span>
                    <div className="bg-tertiary-fixed text-tertiary flex h-9 w-9 items-center justify-center rounded-lg">
                      <span className="material-symbols-outlined text-[20px]">alt_route</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex items-baseline gap-2">
                      <span className="font-headline-xl text-headline-xl text-tertiary font-bold">100%</span>
                      <span className="font-label-md text-label-md text-tertiary-container font-semibold">
                        Zero Conflict
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                      Nhận diện tức thì tình trạng nhập/xuất trong <strong>0.2s</strong>
                    </p>
                  </div>
                </div>
                {/* Kpi 3 */}
                <div className="bg-surface-container-lowest flex flex-col justify-between rounded-xl p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-outline font-semibold tracking-wider uppercase">
                      XUẤT ĐIỀU CHUYỂN TỨC THÌ
                    </span>
                    <div className="bg-secondary-fixed text-secondary flex h-9 w-9 items-center justify-center rounded-lg">
                      <span className="material-symbols-outlined text-[20px]">bolt</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex items-baseline gap-2">
                      <span className="font-headline-xl text-headline-xl text-on-surface font-bold">45</span>
                      <span className="font-label-md text-label-md text-on-surface-variant font-medium">
                        kiện liên trạm
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                      Hoàn tất ngay, <strong>không yêu cầu kho đích xác nhận</strong>
                    </p>
                  </div>
                </div>
                {/* Kpi 4 */}
                <div className="bg-surface-container-lowest flex flex-col justify-between rounded-xl p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-outline font-semibold tracking-wider uppercase">
                      TỶ LỆ KHỚP SERIAL/TEM QR
                    </span>
                    <div className="bg-surface-container-high text-primary flex h-9 w-9 items-center justify-center rounded-lg">
                      <span className="material-symbols-outlined text-[20px]">verified</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex items-baseline gap-2">
                      <span className="font-headline-xl text-headline-xl text-on-surface font-bold">99.8%</span>
                      <span className="font-label-md text-label-md text-tertiary font-semibold">Chuẩn EduOS</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                      217/218 máy hợp lệ, <span className="text-error font-medium">01 cảnh báo tem mờ</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Main Workspace */}
              <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-12">
                {/* CỘT TRÁI (7/12) */}
                <div className="space-y-6 xl:col-span-7">
                  {/* Khối Quét Camera / Scanner Interactive Hub */}
                  <div className="bg-surface-container-lowest space-y-4 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[22px]">center_focus_strong</span>
                        <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                          Khung Nhận Diện Mã QR / Barcode / RFID
                        </h2>
                      </div>
                      <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm inline-flex items-center gap-1.5 rounded px-2.5 py-1 font-semibold">
                        <span className="bg-tertiary h-2 w-2 animate-pulse rounded-full"></span>
                        Optical &amp; RFID Scanner Active
                      </span>
                    </div>
                    {/* Scanner Graphic Simulation Viewport */}
                    <div className="bg-surface-dim relative flex h-56 w-full items-center justify-center overflow-hidden rounded-xl p-4">
                      <div className="absolute inset-0 bg-[radial-gradient(#004ac6_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
                      <div className="bg-error animate-laser absolute right-8 left-8 z-20 h-0.5 shadow-[0_0_12px_#ba1a1a]"></div>
                      <div className="border-primary/50 bg-surface-container-lowest/30 relative z-10 flex h-48 w-48 flex-col items-center justify-center rounded-xl border-2 p-3 shadow-md backdrop-blur-[1px]">
                        <span className="border-primary absolute -top-1 -left-1 h-4 w-4 border-t-2 border-l-2"></span>
                        <span className="border-primary absolute -top-1 -right-1 h-4 w-4 border-t-2 border-r-2"></span>
                        <span className="border-primary absolute -bottom-1 -left-1 h-4 w-4 border-b-2 border-l-2"></span>
                        <span className="border-primary absolute -right-1 -bottom-1 h-4 w-4 border-r-2 border-b-2"></span>
                        <svg className="text-on-surface h-28 w-28" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm8-2h2v2h-2v-2zm4 0h2v2h-2v-2zm-4 4h2v2h-2v-2zm2 2h2v2h-2v-2zm2-2h4v4h-4v-4zm-4-6h2v2h-2v-2zm6-2h2v2h-2v-2z"></path>
                        </svg>
                        <span className="font-code-num text-code-num text-primary mt-2 font-bold">
                          #{deviceData.qrCode}
                        </span>
                      </div>
                      <div className="bg-surface-container-lowest/80 text-on-surface font-body-sm text-body-sm absolute right-3 bottom-2 left-3 z-10 flex items-center justify-between rounded-lg px-3 py-1.5 backdrop-blur-sm">
                        <span className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-tertiary text-[16px]">sensors</span>
                          <span className="">Cảm biến quang học sẵn sàng • Sóng RFID UHF 915MHz kết nối ổn định</span>
                        </span>
                        <span className="font-code-num text-code-num text-primary font-semibold">Cổng: COM3 [OK]</span>
                      </div>
                    </div>
                    {/* Manual input */}
                    <div className="space-y-2">
                      <div className="relative flex items-center">
                        <span className="material-symbols-outlined text-outline absolute left-3 text-[20px]">
                          barcode_scanner
                        </span>
                        <input
                          className="text-body-md font-body-md bg-surface-container-low text-on-surface placeholder:text-outline focus:bg-surface-container-lowest w-full rounded-lg py-2.5 pr-28 pl-10 transition-all outline-none"
                          onChange={(e) => setScanInput(e.target.value)}
                          placeholder="Nhập mã QR / Serial thiết bị (ví dụ: QR-DELL-5520, QR-HP-400, QR-SW-CISCO...)"
                          type="text"
                          value={scanInput}
                        />
                        <button
                          className="bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container hover:text-on-primary-container absolute right-1.5 rounded-lg px-3 py-1.5 transition-all"
                          onClick={handleTriggerScan}
                        >
                          Enter
                        </button>
                      </div>
                      {/* Scenario Quick Buttons */}
                      <div className="flex flex-col gap-2 pt-1 sm:flex-row">
                        <button
                          className="bg-surface-container-high hover:bg-primary-fixed flex flex-1 items-center gap-2.5 rounded-lg px-3 py-2 text-left transition-colors"
                          onClick={() => selectScenario("EXISTING_INSPECTED")}
                        >
                          <div className="bg-primary text-on-primary flex h-7 w-7 shrink-0 items-center justify-center rounded-full">
                            <span className="material-symbols-outlined text-[16px]">call_split</span>
                          </div>
                          <div className="min-w-0">
                            <div className="font-label-md text-label-md text-on-surface truncate font-bold">
                              Kịch bản 1: Thiết bị đã nhập kho
                            </div>
                            <div className="font-body-sm text-body-sm text-on-surface-variant truncate">
                              Tự động chuyển Form Xuất (#QR-DELL-5520)
                            </div>
                          </div>
                        </button>
                        <button
                          className="bg-surface-container-high hover:bg-tertiary-fixed flex flex-1 items-center gap-2.5 rounded-lg px-3 py-2 text-left transition-colors"
                          onClick={() => selectScenario("NEW_RECEIVE")}
                        >
                          <div className="bg-tertiary text-on-tertiary flex h-7 w-7 shrink-0 items-center justify-center rounded-full">
                            <span className="material-symbols-outlined text-[16px]">input</span>
                          </div>
                          <div className="min-w-0">
                            <div className="font-label-md text-label-md text-on-surface truncate font-bold">
                              Kịch bản 2: Thiết bị mới tiếp nhận
                            </div>
                            <div className="font-body-sm text-body-sm text-on-surface-variant truncate">
                              Tự động mở Form Nhập Kho (#QR-HP-400-NEW)
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Bảng: Nhật Ký Quét */}
                  <div className="bg-surface-container-lowest space-y-4 rounded-xl p-5 shadow-sm">
                    <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                      <div>
                        <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                          Nhật Ký Quét Phân Luồng Trực Tuyến
                        </h2>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Luồng sự kiện quét thực thời từ các cổng kiểm tra thiết bị
                        </p>
                      </div>
                      <div className="bg-surface-container-low flex items-center gap-1 rounded-lg p-1">
                        <button
                          className={`font-label-sm text-label-sm rounded px-2.5 py-1 font-semibold transition-colors ${activeFilter === "all" ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant hover:text-on-surface"}`}
                          onClick={() => setActiveFilter("all")}
                        >
                          Tất cả (218)
                        </button>
                        <button
                          className={`font-label-sm text-label-sm rounded px-2.5 py-1 font-semibold transition-colors ${activeFilter === "nhap" ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant hover:text-on-surface"}`}
                          onClick={() => setActiveFilter("nhap")}
                        >
                          Quét Nhập (142)
                        </button>
                        <button
                          className={`font-label-sm text-label-sm rounded px-2.5 py-1 font-semibold transition-colors ${activeFilter === "xuat" ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant hover:text-on-surface"}`}
                          onClick={() => setActiveFilter("xuat")}
                        >
                          Quét Xuất (76)
                        </button>
                        <button
                          className={`font-label-sm text-label-sm rounded px-2.5 py-1 font-semibold transition-colors ${activeFilter === "canhbao" ? "bg-error-container text-error shadow-sm" : "text-error hover:bg-error-container/40"}`}
                          onClick={() => setActiveFilter("canhbao")}
                        >
                          Cảnh báo (1)
                        </button>
                      </div>
                    </div>
                    {/* Table Container */}
                    <div className="-mx-5 overflow-x-auto px-5">
                      <table className="w-full min-w-[650px] border-collapse text-left">
                        <thead>
                          <tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm tracking-wider uppercase">
                            <th className="rounded-l-lg px-3 py-3">Mã Định Danh QR</th>
                            <th className="px-3 py-3">Thiết Bị &amp; Nguồn Trao Tặng</th>
                            <th className="px-3 py-3">Phân Luồng Hệ Thống</th>
                            <th className="px-3 py-3">Vị Trí Kệ</th>
                            <th className="rounded-r-lg px-3 py-3 text-right">Thời Gian</th>
                          </tr>
                        </thead>
                        <tbody className="divide-surface-container-low font-body-md text-body-md text-on-surface divide-y">
                          {/* Row 1 */}
                          <tr
                            className="hover:bg-surface-container-low cursor-pointer transition-colors"
                            onClick={() =>
                              selectItem(
                                "QR-DELL-5520",
                                "Laptop Dell Latitude 5520",
                                "Tập đoàn VNPT",
                                "Kệ A2 - Tầng 04 (Ô 12)",
                                "THCS Mường Lát (Thanh Hóa)",
                                "XUAT",
                              )
                            }
                          >
                            <td className="font-code-num text-code-num text-primary px-3 py-3 font-bold">
                              #QR-DELL-5520
                            </td>
                            <td className="px-3 py-3">
                              <div className="font-headline-sm text-headline-sm text-on-surface">
                                Laptop Dell Latitude 5520
                              </div>
                              <div className="font-body-sm text-body-sm text-on-surface-variant">
                                Core i5 11th • 8GB • 256GB SSD | Nguồn: Tập đoàn VNPT
                              </div>
                            </td>
                            <td className="px-3 py-3">
                              <span className="bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-semibold">
                                <span className="material-symbols-outlined text-[14px]">arrow_upward</span> ĐÃ NHẬP →
                                XUẤT ĐIỂM TRƯỜNG
                              </span>
                            </td>
                            <td className="px-3 py-3">
                              <span className="font-label-md text-label-md text-on-surface font-semibold">
                                Kệ A2 - Tầng 04
                              </span>
                              <span className="font-body-sm text-outline block text-[10px]">Tĩnh theo RBAC</span>
                            </td>
                            <td className="font-code-num text-code-num text-on-surface-variant px-3 py-3 text-right">
                              10:45:12
                            </td>
                          </tr>
                          {/* Row 2 */}
                          <tr
                            className="hover:bg-surface-container-low cursor-pointer transition-colors"
                            onClick={() =>
                              selectItem(
                                "QR-HP-400-G6",
                                "Bộ PC Desktop HP ProDesk 400 G6",
                                "FPT Software",
                                "Kệ B1 - Tầng 01 (Ô 03)",
                                "Kho Tiếp Nhận HUB-01 MB",
                                "NHAP",
                              )
                            }
                          >
                            <td className="font-code-num text-code-num text-tertiary px-3 py-3 font-bold">
                              #QR-HP-400-G6
                            </td>
                            <td className="px-3 py-3">
                              <div className="font-headline-sm text-headline-sm text-on-surface">
                                Bộ PC Desktop HP ProDesk 400 G6
                              </div>
                              <div className="font-body-sm text-body-sm text-on-surface-variant">
                                Kèm màn hình HP 21.5" | Nguồn: FPT Software
                              </div>
                            </td>
                            <td className="px-3 py-3">
                              <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-semibold">
                                <span className="material-symbols-outlined text-[14px]">arrow_downward</span> MỚI → MỞ
                                FORM NHẬP KHO
                              </span>
                            </td>
                            <td className="px-3 py-3">
                              <span className="font-label-md text-label-md text-on-surface font-semibold">
                                Kệ B1 - Tầng 01
                              </span>
                              <span className="font-body-sm text-outline block text-[10px]">Tĩnh theo RBAC</span>
                            </td>
                            <td className="font-code-num text-code-num text-on-surface-variant px-3 py-3 text-right">
                              10:42:05
                            </td>
                          </tr>
                          {/* Row 3 */}
                          <tr
                            className="hover:bg-surface-container-low cursor-pointer transition-colors"
                            onClick={() =>
                              selectItem(
                                "QR-SW-CISCO24",
                                "Cisco Catalyst Switch 24-Port Gigabit",
                                "VNPT Hưng Yên",
                                "Kệ C3 - Tầng 02 (Ô 08)",
                                "Trạm Trung Chuyển Miền Trung",
                                "XUAT",
                              )
                            }
                          >
                            <td className="font-code-num text-code-num text-secondary px-3 py-3 font-bold">
                              #QR-SW-CISCO24
                            </td>
                            <td className="px-3 py-3">
                              <div className="font-headline-sm text-headline-sm text-on-surface">
                                Cisco Catalyst Switch 24-Port Gigabit
                              </div>
                              <div className="font-body-sm text-body-sm text-on-surface-variant">
                                Thiết bị mạng phân phối | Nguồn: VNPT Hưng Yên
                              </div>
                            </td>
                            <td className="px-3 py-3">
                              <span className="bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-semibold">
                                <span className="material-symbols-outlined text-[14px]">bolt</span> XUẤT ĐIỀU CHUYỂN TỨC
                                THÌ
                              </span>
                              <div className="font-body-sm text-primary text-[10px]">
                                Hoàn tất ngay, không chờ xác nhận
                              </div>
                            </td>
                            <td className="px-3 py-3">
                              <span className="font-label-md text-label-md text-on-surface font-semibold">
                                Kệ C3 - Tầng 02
                              </span>
                              <span className="font-body-sm text-outline block text-[10px]">Tĩnh theo RBAC</span>
                            </td>
                            <td className="font-code-num text-code-num text-on-surface-variant px-3 py-3 text-right">
                              10:38:19
                            </td>
                          </tr>
                          {/* Row 4 */}
                          <tr
                            className="hover:bg-surface-container-low cursor-pointer transition-colors"
                            onClick={() =>
                              selectItem(
                                "QR-IPAD-G9-08",
                                "Apple iPad Gen 9 (64GB Wifi)",
                                "Nhà hảo tâm cá nhân",
                                "Kệ B2 - Tầng 03 (Ô 05)",
                                "HUB-01 Kiểm định",
                                "NHAP",
                              )
                            }
                          >
                            <td className="font-code-num text-code-num text-tertiary px-3 py-3 font-bold">
                              #QR-IPAD-G9-08
                            </td>
                            <td className="px-3 py-3">
                              <div className="font-headline-sm text-headline-sm text-on-surface">
                                Apple iPad Gen 9 (64GB Wifi)
                              </div>
                              <div className="font-body-sm text-body-sm text-on-surface-variant">
                                Hộp &amp; cáp sạc đầy đủ | Nguồn: Nhà hảo tâm cá nhân
                              </div>
                            </td>
                            <td className="px-3 py-3">
                              <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-semibold">
                                <span className="material-symbols-outlined text-[14px]">verified</span> NHẬP KHO XÁC
                                MINH PHIẾU
                              </span>
                            </td>
                            <td className="px-3 py-3">
                              <span className="font-label-md text-label-md text-on-surface font-semibold">
                                Kệ B2 - Tầng 03
                              </span>
                              <span className="font-body-sm text-outline block text-[10px]">Tĩnh theo RBAC</span>
                            </td>
                            <td className="font-code-num text-code-num text-on-surface-variant px-3 py-3 text-right">
                              10:30:44
                            </td>
                          </tr>
                          {/* Row 5 */}
                          <tr
                            className="hover:bg-surface-container-low cursor-pointer transition-colors"
                            onClick={() =>
                              selectItem(
                                "QR-UPS-SANTAK",
                                "Bộ lưu điện Santak 1000E Pro",
                                "Quỹ Hy Vọng",
                                "Kệ D1 - Tầng 01 (Ô 02)",
                                "Phòng Tin Học THCS Mường Lát",
                                "XUAT",
                              )
                            }
                          >
                            <td className="font-code-num text-code-num text-primary px-3 py-3 font-bold">
                              #QR-UPS-SANTAK
                            </td>
                            <td className="px-3 py-3">
                              <div className="font-headline-sm text-headline-sm text-on-surface">
                                Bộ lưu điện Santak 1000E Pro
                              </div>
                              <div className="font-body-sm text-body-sm text-on-surface-variant">
                                Hệ thống pin đạt 96% | Nguồn: Quỹ Hy Vọng
                              </div>
                            </td>
                            <td className="px-3 py-3">
                              <span className="bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-semibold">
                                <span className="material-symbols-outlined text-[14px]">local_shipping</span> THEO
                                PHƯƠNG ÁN ĐÃ DUYỆT
                              </span>
                            </td>
                            <td className="px-3 py-3">
                              <span className="font-label-md text-label-md text-on-surface font-semibold">
                                Kệ D1 - Tầng 01
                              </span>
                              <span className="font-body-sm text-outline block text-[10px]">Tĩnh theo RBAC</span>
                            </td>
                            <td className="font-code-num text-code-num text-on-surface-variant px-3 py-3 text-right">
                              10:25:01
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* Pagination */}
                    <div className="text-on-surface-variant font-body-sm text-body-sm flex items-center justify-between pt-2">
                      <span className="">Hiển thị 5 trên 218 lượt quét trong ca làm việc</span>
                      <div className="flex items-center gap-2">
                        <button className="bg-surface-container hover:bg-surface-container-high font-label-md text-label-md text-on-surface rounded px-2.5 py-1 transition-colors">
                          Trang Trước
                        </button>
                        <button className="bg-surface-container hover:bg-surface-container-high font-label-md text-label-md text-on-surface rounded px-2.5 py-1 transition-colors">
                          Trang Kế Tiếp
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* CỘT PHẢI (5/12) */}
                <div className="space-y-6 xl:col-span-5">
                  {/* POPUP 1: THÔNG TIN CHI TIẾT */}
                  <div className="bg-surface-container-lowest space-y-4 rounded-xl p-5 shadow-sm">
                    <div className="bg-surface-container-low -mx-5 -mt-5 flex items-center justify-between rounded-t-xl p-5 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[22px]">info</span>
                        <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          Thông Tin Mặt Hàng Chi Tiết
                        </span>
                      </div>
                      <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm rounded px-2 py-0.5 font-semibold">
                        Grade A - Sẵn Sàng
                      </span>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-surface-container-high flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-xl p-1.5 shadow-inner">
                        <svg className="text-on-surface h-14 w-14" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm8-2h2v2h-2v-2zm4 0h2v2h-2v-2zm-4 4h2v2h-2v-2zm2 2h2v2h-2v-2zm2-2h4v4h-4v-4zm-4-6h2v2h-2v-2zm6-2h2v2h-2v-2z"></path>
                        </svg>
                        <span className="font-code-num text-outline text-[9px]">{deviceData.qrCode}</span>
                      </div>
                      <div className="min-w-0 space-y-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-headline-sm text-headline-sm text-on-surface truncate font-bold">
                            {deviceData.name}
                          </h3>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Số Serial: <strong className="text-on-surface font-code-num">SN-VNPT-2024-99812</strong>
                        </p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Nguồn trao tặng: <strong className="text-primary font-medium">{deviceData.donor}</strong>
                        </p>
                      </div>
                    </div>
                    <div className="bg-surface-container-low text-body-sm font-body-sm grid grid-cols-2 gap-2 rounded-lg p-3">
                      <div>
                        <span className="text-on-surface-variant font-label-sm text-label-sm block">Cấu hình:</span>
                        <span className="text-on-surface font-medium">Core i5-1145G7, 8GB DDR4, 256GB NVMe</span>
                      </div>
                      <div>
                        <span className="text-on-surface-variant font-label-sm text-label-sm block">
                          Niêm phong RFID:
                        </span>
                        <span className="font-code-num text-tertiary font-semibold">RFID-UHF-915-00441</span>
                      </div>
                      <div>
                        <span className="text-on-surface-variant font-label-sm text-label-sm block">
                          Phụ kiện đi kèm:
                        </span>
                        <span className="text-on-surface font-medium">
                          Sạc Dell Type-C 65W, Chuột quang, Túi chống sốc
                        </span>
                      </div>
                      <div>
                        <span className="text-on-surface-variant font-label-sm text-label-sm block">
                          Thời gian nhập trạm:
                        </span>
                        <span className="font-code-num text-on-surface">14:15 • 22/10/2024</span>
                      </div>
                    </div>
                    <div className="bg-surface-container space-y-1 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold tracking-wider uppercase">
                          VỊ TRÍ KỆ LƯU TRỮ HIỆN TẠI
                        </span>
                        <span className="font-label-sm text-label-sm bg-surface-container-highest text-on-surface-variant rounded px-2 py-0.5 font-semibold">
                          Chế độ hiển thị tĩnh (RBAC)
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-[20px]">shelves</span>
                          <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                            {deviceData.shelf}
                          </span>
                        </div>
                        <span className="font-body-sm text-body-sm text-outline">Kho HUB-01 MB</span>
                      </div>
                      <p className="font-body-sm text-outline pt-1 text-[11px]">
                        * Vị trí kệ định danh được bảo toàn cố định theo quy trình quản trị tài sản giáo dục. Nhân sự
                        cổng kho không có quyền chỉnh sửa vị trí tại bước quét này.
                      </p>
                    </div>
                  </div>

                  {/* POPUP 2: FORM ĐIỀU HƯỚNG THEO TRẠNG THÁI (DYNAMIC) */}
                  <div className="bg-surface-container-lowest space-y-4 rounded-xl p-5 shadow-sm">
                    <div
                      className={`-mx-5 -mt-5 flex items-center justify-between rounded-t-xl p-5 pb-3 ${deviceData.mode === "NHAP" ? "bg-tertiary-fixed/40" : "bg-primary-fixed/40"}`}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`material-symbols-outlined text-[22px] ${deviceData.mode === "NHAP" ? "text-tertiary" : "text-primary"}`}
                        >
                          {deviceData.mode === "NHAP" ? "input" : "swap_horiz"}
                        </span>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          {deviceData.mode === "NHAP"
                            ? "Form Tiếp Nhận & Nhập Kho Mới"
                            : "Form Xuất Kho Điều Phối Điểm Trường"}
                        </h3>
                      </div>
                      <span
                        className={`font-label-sm text-label-sm rounded px-2 py-0.5 font-semibold ${deviceData.mode === "NHAP" ? "bg-tertiary text-on-tertiary" : "bg-primary text-on-primary"}`}
                      >
                        KÍCH HOẠT {deviceData.mode === "NHAP" ? "NHẬP" : "XUẤT"} TỰ ĐỘNG
                      </span>
                    </div>

                    {/* Notification Banner */}
                    <div
                      className={`flex items-start gap-3 rounded-lg p-3 ${deviceData.mode === "NHAP" ? "bg-tertiary-fixed/30" : "bg-surface-container"}`}
                    >
                      <span
                        className={`material-symbols-outlined mt-0.5 shrink-0 text-[22px] ${deviceData.mode === "NHAP" ? "text-tertiary" : "text-primary"}`}
                      >
                        {deviceData.mode === "NHAP" ? "input" : "check_circle"}
                      </span>
                      <div className="space-y-1">
                        <div className="font-label-md text-label-md text-on-surface font-bold">
                          {deviceData.mode === "NHAP"
                            ? "Thiết bị chưa có dữ liệu xuất"
                            : "Đã ghi nhận thông tin Nhập kho hợp lệ"}
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          {deviceData.mode === "NHAP" ? (
                            <>
                              Hệ thống tự động mở <strong className="text-tertiary">FORM NHẬP KHO TIẾP NHẬN</strong> để
                              thủ kho đối soát quy chuẩn tiếp nhận ban đầu từ đơn vị trao tặng.
                            </>
                          ) : (
                            <>
                              Thiết bị này <strong className="text-on-surface">ĐÃ ĐƯỢC NHẬP KHO</strong>. Hệ thống tự
                              động khóa form nhập và kích hoạt ngay{" "}
                              <strong className="text-primary">QUY TRÌNH XUẤT KHO ĐIỀU PHỐI</strong>.
                            </>
                          )}
                        </p>
                      </div>
                    </div>

                    {/* Dynamic Form Fields */}
                    {deviceData.mode === "XUAT" ? (
                      <div className="font-body-md text-body-md space-y-3">
                        <div>
                          <label className="font-label-md text-label-md text-on-surface mb-1 block font-semibold">
                            Phương Án Phân Bổ Liên Kết
                          </label>
                          <div className="relative">
                            <input
                              className="bg-surface-container-low text-on-surface font-body-md text-body-md w-full cursor-default rounded-lg px-3 py-2 font-medium outline-none"
                              readOnly
                              type="text"
                              value="#PA-2024-892 (Admin đã phê duyệt chữ ký số - Đủ điều kiện lập vận đơn)"
                            />
                            <span className="material-symbols-outlined text-tertiary absolute top-2.5 right-3 text-[18px]">
                              verified_user
                            </span>
                          </div>
                        </div>
                        <div>
                          <label className="font-label-md text-label-md text-on-surface mb-1 block font-semibold">
                            Điểm Trường Thụ Hưởng Đích
                          </label>
                          <div className="bg-surface-container flex items-center justify-between rounded-lg p-2.5">
                            <div className="flex items-center gap-2">
                              <span className="material-symbols-outlined text-primary text-[20px]">school</span>
                              <span className="font-label-md text-label-md text-on-surface font-bold">
                                {deviceData.destination}
                              </span>
                            </div>
                            <span className="font-label-sm text-label-sm bg-surface-container-highest text-on-surface-variant rounded px-2 py-0.5">
                              Phòng Tin Học 01
                            </span>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                          <div>
                            <label className="font-label-md text-label-md text-on-surface mb-1 block font-semibold">
                              Mã Vận Đơn Ghép Nối
                            </label>
                            <input
                              className="bg-surface-container-low font-code-num text-code-num text-on-surface w-full rounded-lg px-3 py-2 font-bold"
                              readOnly
                              type="text"
                              value="#WB-2024-NW08"
                            />
                          </div>
                          <div>
                            <label className="font-label-md text-label-md text-on-surface mb-1 block font-semibold">
                              Tình Trạng Niêm Phong
                            </label>
                            <div className="bg-surface-container-low text-tertiary font-label-md text-label-md flex items-center gap-1.5 rounded-lg px-3 py-2 font-semibold">
                              <span className="material-symbols-outlined text-[16px]">lock</span>
                              <span className="">Đã Khóa Chốt Seal #SL-884</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="mb-1 flex items-center justify-between">
                            <label className="font-label-md text-label-md text-on-surface font-semibold">
                              Đội Ngũ Tình Nguyện Viên Vận Chuyển
                            </label>
                            <span className="font-label-sm text-label-sm text-outline">Gán không giới hạn TNV</span>
                          </div>
                          <div className="bg-surface-container-low space-y-1.5 rounded-lg p-2">
                            <div className="flex flex-wrap items-center gap-1.5">
                              <span className="bg-surface-container-lowest text-on-surface font-label-sm text-label-sm inline-flex items-center gap-1 rounded-md px-2.5 py-1 shadow-sm">
                                <span className="material-symbols-outlined text-primary text-[14px]">person</span>
                                Lê Hoàng Long (Trưởng đoàn)
                              </span>
                              <span className="bg-surface-container-lowest text-on-surface font-label-sm text-label-sm inline-flex items-center gap-1 rounded-md px-2.5 py-1 shadow-sm">
                                <span className="material-symbols-outlined text-secondary text-[14px]">
                                  engineering
                                </span>
                                Trần Văn Nam (Kỹ thuật)
                              </span>
                              <span className="bg-surface-container-lowest text-on-surface font-label-sm text-label-sm inline-flex items-center gap-1 rounded-md px-2.5 py-1 shadow-sm">
                                <span className="material-symbols-outlined text-tertiary text-[14px]">
                                  directions_car
                                </span>
                                Đỗ Hữu Đạt (Lái xe)
                              </span>
                              <button
                                className="bg-surface-container-high hover:bg-surface-container-highest text-primary font-label-sm text-label-sm inline-flex items-center gap-1 rounded-md px-2 py-1 transition-colors"
                                onClick={() => alert("Mở danh sách tra cứu tình nguyện viên EduShare VN...")}
                              >
                                <span className="material-symbols-outlined text-[14px]">add</span>
                                Thêm TNV
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="pt-1">
                          <button
                            className="bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md flex w-full items-center justify-center gap-2 rounded-lg py-2 transition-colors"
                            onClick={() =>
                              alert(
                                "Đã xuất file Excel bóc tách riêng số lượng thiết bị của nhà hảo tâm VNPT và FPT Software để gửi báo cáo minh bạch!",
                              )
                            }
                          >
                            <span className="material-symbols-outlined text-primary text-[16px]">table_view</span>
                            <span className="">Xuất file Excel bóc tách nhà hảo tâm (VNPT / Quỹ Hy Vọng)</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="font-body-md text-body-md space-y-3">
                        {/* Simple placeholder for NHAP form content to maintain UI structure */}
                        <div>
                          <label className="font-label-md text-label-md text-on-surface mb-1 block font-semibold">
                            Biên Bản Bàn Giao
                          </label>
                          <input
                            className="bg-surface-container-low font-code-num text-code-num text-on-surface focus:ring-primary/20 w-full rounded-lg px-3 py-2 font-bold outline-none focus:ring-2"
                            placeholder="Nhập mã phiếu bàn giao..."
                            type="text"
                          />
                        </div>
                        <div>
                          <label className="font-label-md text-label-md text-on-surface mb-1 block font-semibold">
                            Ghi chú tình trạng ban đầu
                          </label>
                          <textarea
                            className="bg-surface-container-low text-on-surface font-body-sm focus:ring-primary/20 w-full rounded-lg px-3 py-2 outline-none focus:ring-2"
                            placeholder="VD: Hộp móp nhẹ, còn nguyên seal..."
                            rows={3}
                          ></textarea>
                        </div>
                      </div>
                    )}

                    {/* Nút Hành Động Chính */}
                    <div className="space-y-2 pt-2">
                      <button
                        className={`font-headline-sm text-headline-sm flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3.5 font-bold shadow-md transition-all ${
                          deviceData.mode === "NHAP"
                            ? "bg-tertiary hover:bg-tertiary-container text-on-tertiary"
                            : "bg-primary hover:bg-primary-container text-on-primary"
                        }`}
                        onClick={handlePrimaryAction}
                      >
                        <span className="material-symbols-outlined text-[22px]">
                          {deviceData.mode === "NHAP" ? "verified" : "local_shipping"}
                        </span>
                        <span className="">
                          {deviceData.mode === "NHAP"
                            ? "XÁC NHẬN NHẬP KHO & LƯU VỊ TRÍ KỆ TĨNH"
                            : "XÁC NHẬN XUẤT ĐIỀU CHUYỂN & HOÀN TẤT NGAY"}
                        </span>
                      </button>
                      <p className="font-body-sm text-outline text-center text-[11px]">
                        * Theo RBAC v2.8.4: Lệnh xuất điều chuyển hoàn tất tức thì tại cổng kho, không yêu cầu kho đích
                        xác nhận.
                      </p>
                    </div>
                  </div>

                  {/* Khối Nhắc Nhở */}
                  <div className="bg-surface-container-lowest space-y-3 rounded-xl p-5 shadow-sm">
                    <div className="text-on-surface flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[20px]">policy</span>
                      <h4 className="font-headline-sm text-headline-sm font-bold">
                        Quy Chuẩn Vận Hành Cổng Kho (RBAC v2.8.4)
                      </h4>
                    </div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant space-y-2">
                      <div className="bg-surface-container-low flex items-start gap-2 rounded p-2.5">
                        <span className="material-symbols-outlined text-tertiary shrink-0 text-[18px]">check</span>
                        <span className="">
                          <strong>Xuất điều chuyển tức thì:</strong> Lô hàng xuất liên kho hoặc trao tặng hoàn tất ngay
                          trên hệ thống điện tử mà không cần kho đích thực hiện ký nhận trước.
                        </span>
                      </div>
                      <div className="bg-surface-container-low flex items-start gap-2 rounded p-2.5">
                        <span className="material-symbols-outlined text-outline shrink-0 text-[18px]">block</span>
                        <span className="">
                          <strong>Các tính năng đã loại bỏ khỏi cổng kho:</strong> Sửa vị trí kệ, danh sách máy theo ca,
                          chuẩn bị máy đang giữ cho phương án khác, hàng chờ yêu cầu đã duyệt, ghép máy, xác nhận hoặc
                          hủy phương án phân bổ.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default WarehouseScanQRPage;
