import React, { useState, useEffect } from "react";
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
    if (
      scanInput.toUpperCase().includes("NEW") ||
      scanInput.toUpperCase().includes("HP")
    ) {
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
    <div className="bg-surface font-body-md text-on-surface antialiased flex flex-col min-h-screen">
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
      <aside className="fixed left-0 top-0 h-screen w-72 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between overflow-y-auto">
        <div className="flex flex-col">
          <div className="px-6 py-5 bg-surface-container-low/60 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-on-primary font-headline-md font-bold tracking-tight shadow-sm">
              ES
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  EduShare VN
                </span>
                <span className="font-label-sm text-[10px] tracking-wider uppercase bg-primary-fixed text-on-primary-fixed-variant px-1.5 py-0.5 rounded font-semibold">
                  Kho
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Kho &amp; Kỹ Thuật
              </span>
            </div>
          </div>
          <div className="px-6 py-3 bg-surface-container-low flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-on-surface font-medium">
                Kho Tổng Miền Bắc (TK-MB)
              </span>
              <span className="font-body-sm text-[11px] text-on-surface-variant">
                Trực tuyến 63 Tỉnh Thành
              </span>
            </div>
          </div>
          <nav className="flex-1 px-4 py-4 space-y-6">
            <div className="space-y-1">
              <div className="px-3 pb-1 font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">
                Nhập Kho &amp; Tiếp Nhận
              </div>
              <Link
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
                to="/warehouse/receive"
              >
                <span className="material-symbols-outlined text-[20px]">
                  fact_check
                </span>
                <span className="font-body-md text-body-md">
                  Tiếp nhận &amp; Kiểm định
                </span>
              </Link>
              <Link
                className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary text-on-primary font-medium shadow-sm transition-all"
                to="/warehouse/scan-qr"
              >
                <span className="material-symbols-outlined text-[20px] text-on-primary">
                  qr_code_scanner
                </span>
                <span className="font-body-md text-body-md text-on-primary">
                  Quét QR phân luồng
                </span>
              </Link>
              <Link
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
                to="/warehouse/donation-receipt"
              >
                <span className="material-symbols-outlined text-[20px]">
                  description
                </span>
                <span className="font-body-md text-body-md">
                  Phiếu trao tặng
                </span>
              </Link>
            </div>
            <div className="space-y-1">
              <div className="px-3 pb-1 font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">
                Quản Lý Kho Bãi
              </div>
              <Link
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
                to="/warehouse/inventory"
              >
                <span className="material-symbols-outlined text-[20px]">
                  inventory_2
                </span>
                <span className="font-body-md text-body-md">
                  Tồn kho thiết bị
                </span>
              </Link>
              <Link
                className="flex items-center justify-between px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
                to="/warehouse/racks"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[20px]">
                    shelves
                  </span>
                  <span className="font-body-md text-body-md">
                    Vị trí kệ định danh
                  </span>
                </div>
                <span className="font-label-sm text-label-sm bg-surface-container-high text-on-surface-variant px-1.5 py-0.5 rounded">
                  Xem
                </span>
              </Link>
              <Link
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
                to="/warehouse/audit-report"
              >
                <span className="material-symbols-outlined text-[20px]">
                  assignment
                </span>
                <span className="font-body-md text-body-md">
                  Kiểm kê &amp; Báo cáo
                </span>
              </Link>
            </div>
            <div className="space-y-1">
              <div className="px-3 pb-1 font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">
                Điều Phối &amp; Vận Chuyển
              </div>
              <Link
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
                to="/warehouse/dispatch"
              >
                <span className="material-symbols-outlined text-[20px]">
                  local_shipping
                </span>
                <span className="font-body-md text-body-md">
                  Lệnh điều chuyển &amp; Vận đơn
                </span>
              </Link>
              <Link
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
                to="/warehouse/delivery-history"
              >
                <span className="material-symbols-outlined text-[20px]">
                  history
                </span>
                <span className="font-body-md text-body-md">
                  Lịch sử đợt giao
                </span>
              </Link>
              <Link
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
                to="/warehouse/incident-report"
              >
                <span className="material-symbols-outlined text-[20px]">
                  warning
                </span>
                <span className="font-body-md text-body-md">
                  Báo cáo sự cố cá nhân
                </span>
              </Link>
            </div>
          </nav>
        </div>
        <div className="p-4 mx-4 mb-4 rounded-xl bg-surface-container-low text-on-surface-variant space-y-1">
          <div className="flex items-center justify-between font-label-sm text-label-sm font-semibold">
            <span className="text-on-surface">CỔNG KHO VẬN</span>
            <span className="text-outline">v2.8.4</span>
          </div>
          <div className="flex items-center gap-2 pt-1 text-on-surface-variant font-body-sm text-body-sm">
            <span className="material-symbols-outlined text-[16px] text-primary">
              support_agent
            </span>
            <span className="">
              Kỹ thuật kho:{" "}
              <strong className="font-semibold text-on-surface">
                1900 6829
              </strong>
            </span>
          </div>
        </div>
      </aside>
      <div className="pl-72 flex flex-col min-h-screen">
        <header className="fixed top-0 left-72 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 px-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 font-body-md text-body-md text-on-surface-variant">
              <span className="hover:text-primary cursor-pointer transition-colors">
                EduShare VN Kho
              </span>
              <span className="material-symbols-outlined text-[16px] text-outline">
                chevron_right
              </span>
              <span className="hover:text-primary cursor-pointer transition-colors">
                Nhập Kho &amp; Tiếp Nhận
              </span>
              <span className="material-symbols-outlined text-[16px] text-outline">
                chevron_right
              </span>
              <span className="text-primary font-medium">
                Quét QR Phân Luồng
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3 text-outline text-[18px]">
                search
              </span>
              <input
                className="w-96 pl-9 pr-14 py-2 text-body-md font-body-md bg-surface-container-low text-on-surface placeholder:text-outline rounded-lg outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="Mã vận đơn, số lô hàng, serial hoặc quét mã QR thiết bị..."
                type="text"
              />
              <span className="absolute right-3 px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-code-num text-[11px] font-semibold tracking-wide">
                ⌘K
              </span>
            </div>
            <button className="flex items-center gap-1.5 px-3 py-2 bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary font-label-md text-label-md rounded-lg transition-colors">
              <span className="material-symbols-outlined text-[18px]">
                qr_code_scanner
              </span>
              <span className="">Quét QR</span>
            </button>
            <button className="relative p-2 rounded-lg hover:bg-surface-container-low text-on-surface-variant transition-colors">
              <span className="material-symbols-outlined text-[22px]">
                notifications
              </span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-error"></span>
            </button>
            <div className="flex items-center gap-3 pl-3">
              <div className="flex flex-col text-right">
                <span className="font-label-md text-label-md text-on-surface font-semibold">
                  Trần Hùng (TK-MB-04)
                </span>
                <span className="font-body-sm text-[11px] text-on-surface-variant">
                  Trưởng Kho Kỹ Thuật Hà Nội • Kho Tổng Miền Bắc (HUB-01 Hà Nội)
                </span>
              </div>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[18px]">
                  person
                </span>
              </div>
            </div>
          </div>
        </header>
        <main className="w-full pt-16 flex-1 bg-surface">
          <div className="flex flex-col w-full">
            <div className="px-6 py-6 space-y-6">
              {/* Top Header & Breadcrumb */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-surface-container-lowest p-6 rounded-xl shadow-sm">
                <div className="space-y-2 max-w-3xl">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      TRẠM TIẾP VẬN &amp; QUÉT PHÂN LUỒNG TẬP TRUNG - KHO HUB-01
                      MIỀN BẮC
                    </span>
                    <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-semibold">
                      RBAC v2.8.4
                    </span>
                  </div>
                  <h1 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
                    Quét QR Phân Luồng &amp; Điều Hướng Thiết Bị
                  </h1>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Hệ thống tự động nhận diện mã định danh QR/RFID để kích hoạt
                    phân luồng 2 chiều (Dual-Mode): Nếu đã nhập kho → Chuyển
                    ngay sang luồng Xuất; nếu chưa xuất → Mở form Nhập kho đối
                    soát.
                  </p>
                </div>
                {/* Action buttons */}
                <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                  <button
                    className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-colors shadow-sm"
                    onClick={() =>
                      alert(
                        "Đang tải danh sách 218 lượt quét dạng bảng Excel (.xlsx)...",
                      )
                    }
                  >
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      download
                    </span>
                    <span className="">Tải Báo Cáo Hôm Nay (.xlsx)</span>
                  </button>
                  <button
                    className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-colors shadow-sm"
                    onClick={() =>
                      alert(
                        "Mở hộp thoại kết nối máy quét Laser Honeywell Orbit và anten RFID UHF 915MHz...",
                      )
                    }
                  >
                    <span className="material-symbols-outlined text-[18px] text-secondary">
                      tune
                    </span>
                    <span className="">Cài Đặt Cảm Biến / RFID</span>
                  </button>
                  <button
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-label-md text-label-md shadow-sm transition-all ${
                      isContinuousScan
                        ? "bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container"
                        : "bg-surface-container-high text-on-surface"
                    }`}
                    onClick={toggleContinuousScan}
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      autorenew
                    </span>
                    <span className="">
                      Quét Liên Tục: {isContinuousScan ? "BẬT" : "TẮT"}
                    </span>
                  </button>
                </div>
              </div>

              {/* Bento 4 Thẻ Kpi Định Lượng */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Kpi 1 */}
                <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">
                      LƯỢT QUÉT HÔM NAY
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[20px]">
                        qr_code_scanner
                      </span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex items-baseline gap-2">
                      <span className="font-headline-xl text-headline-xl font-bold text-on-surface">
                        218
                      </span>
                      <span className="font-label-md text-label-md text-primary font-medium">
                        kiện / máy
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mt-2 font-body-sm text-body-sm text-on-surface-variant">
                      <span className="flex items-center gap-1 text-tertiary font-medium">
                        <span className="material-symbols-outlined text-[14px]">
                          arrow_downward
                        </span>{" "}
                        142 Nhập
                      </span>
                      <span className="text-outline">•</span>
                      <span className="flex items-center gap-1 text-primary font-medium">
                        <span className="material-symbols-outlined text-[14px]">
                          arrow_upward
                        </span>{" "}
                        76 Xuất
                      </span>
                    </div>
                  </div>
                </div>
                {/* Kpi 2 */}
                <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">
                      PHÂN LUỒNG TỰ ĐỘNG
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-tertiary-fixed flex items-center justify-center text-tertiary">
                      <span className="material-symbols-outlined text-[20px]">
                        alt_route
                      </span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex items-baseline gap-2">
                      <span className="font-headline-xl text-headline-xl font-bold text-tertiary">
                        100%
                      </span>
                      <span className="font-label-md text-label-md text-tertiary-container font-semibold">
                        Zero Conflict
                      </span>
                    </div>
                    <p className="mt-2 font-body-sm text-body-sm text-on-surface-variant">
                      Nhận diện tức thì tình trạng nhập/xuất trong{" "}
                      <strong>0.2s</strong>
                    </p>
                  </div>
                </div>
                {/* Kpi 3 */}
                <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">
                      XUẤT ĐIỀU CHUYỂN TỨC THÌ
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined text-[20px]">
                        bolt
                      </span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex items-baseline gap-2">
                      <span className="font-headline-xl text-headline-xl font-bold text-on-surface">
                        45
                      </span>
                      <span className="font-label-md text-label-md text-on-surface-variant font-medium">
                        kiện liên trạm
                      </span>
                    </div>
                    <p className="mt-2 font-body-sm text-body-sm text-on-surface-variant">
                      Hoàn tất ngay,{" "}
                      <strong>không yêu cầu kho đích xác nhận</strong>
                    </p>
                  </div>
                </div>
                {/* Kpi 4 */}
                <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">
                      TỶ LỆ KHỚP SERIAL/TEM QR
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[20px]">
                        verified
                      </span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex items-baseline gap-2">
                      <span className="font-headline-xl text-headline-xl font-bold text-on-surface">
                        99.8%
                      </span>
                      <span className="font-label-md text-label-md text-tertiary font-semibold">
                        Chuẩn EduOS
                      </span>
                    </div>
                    <p className="mt-2 font-body-sm text-body-sm text-on-surface-variant">
                      217/218 máy hợp lệ,{" "}
                      <span className="text-error font-medium">
                        01 cảnh báo tem mờ
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Main Workspace */}
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
                {/* CỘT TRÁI (7/12) */}
                <div className="xl:col-span-7 space-y-6">
                  {/* Khối Quét Camera / Scanner Interactive Hub */}
                  <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[22px]">
                          center_focus_strong
                        </span>
                        <h2 className="font-headline-md text-headline-md font-bold text-on-surface">
                          Khung Nhận Diện Mã QR / Barcode / RFID
                        </h2>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-semibold">
                        <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                        Optical &amp; RFID Scanner Active
                      </span>
                    </div>
                    {/* Scanner Graphic Simulation Viewport */}
                    <div className="relative w-full h-56 rounded-xl bg-surface-dim overflow-hidden flex items-center justify-center p-4">
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#004ac6_1px,transparent_1px)] [background-size:16px_16px]"></div>
                      <div className="absolute left-8 right-8 h-0.5 bg-error shadow-[0_0_12px_#ba1a1a] animate-laser z-20"></div>
                      <div className="relative z-10 w-48 h-48 border-2 border-primary/50 rounded-xl flex flex-col items-center justify-center p-3 backdrop-blur-[1px] bg-surface-container-lowest/30 shadow-md">
                        <span className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-primary"></span>
                        <span className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-primary"></span>
                        <span className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-primary"></span>
                        <span className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-primary"></span>
                        <svg
                          className="w-28 h-28 text-on-surface"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm8-2h2v2h-2v-2zm4 0h2v2h-2v-2zm-4 4h2v2h-2v-2zm2 2h2v2h-2v-2zm2-2h4v4h-4v-4zm-4-6h2v2h-2v-2zm6-2h2v2h-2v-2z"></path>
                        </svg>
                        <span className="mt-2 font-code-num text-code-num text-primary font-bold">
                          #{deviceData.qrCode}
                        </span>
                      </div>
                      <div className="absolute bottom-2 left-3 right-3 px-3 py-1.5 bg-surface-container-lowest/80 backdrop-blur-sm rounded-lg flex items-center justify-between text-on-surface font-body-sm text-body-sm z-10">
                        <span className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[16px] text-tertiary">
                            sensors
                          </span>
                          <span className="">
                            Cảm biến quang học sẵn sàng • Sóng RFID UHF 915MHz
                            kết nối ổn định
                          </span>
                        </span>
                        <span className="font-code-num text-code-num font-semibold text-primary">
                          Cổng: COM3 [OK]
                        </span>
                      </div>
                    </div>
                    {/* Manual input */}
                    <div className="space-y-2">
                      <div className="relative flex items-center">
                        <span className="material-symbols-outlined absolute left-3 text-outline text-[20px]">
                          barcode_scanner
                        </span>
                        <input
                          className="w-full pl-10 pr-28 py-2.5 text-body-md font-body-md bg-surface-container-low text-on-surface placeholder:text-outline rounded-lg outline-none focus:bg-surface-container-lowest transition-all"
                          onChange={(e) => setScanInput(e.target.value)}
                          placeholder="Nhập mã QR / Serial thiết bị (ví dụ: QR-DELL-5520, QR-HP-400, QR-SW-CISCO...)"
                          type="text"
                          value={scanInput}
                        />
                        <button
                          className="absolute right-1.5 px-3 py-1.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container hover:text-on-primary-container transition-all"
                          onClick={handleTriggerScan}
                        >
                          Enter
                        </button>
                      </div>
                      {/* Scenario Quick Buttons */}
                      <div className="pt-1 flex flex-col sm:flex-row gap-2">
                        <button
                          className="flex-1 text-left px-3 py-2 rounded-lg bg-surface-container-high hover:bg-primary-fixed transition-colors flex items-center gap-2.5"
                          onClick={() => selectScenario("EXISTING_INSPECTED")}
                        >
                          <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-on-primary shrink-0">
                            <span className="material-symbols-outlined text-[16px]">
                              call_split
                            </span>
                          </div>
                          <div className="min-w-0">
                            <div className="font-label-md text-label-md font-bold text-on-surface truncate">
                              Kịch bản 1: Thiết bị đã nhập kho
                            </div>
                            <div className="font-body-sm text-body-sm text-on-surface-variant truncate">
                              Tự động chuyển Form Xuất (#QR-DELL-5520)
                            </div>
                          </div>
                        </button>
                        <button
                          className="flex-1 text-left px-3 py-2 rounded-lg bg-surface-container-high hover:bg-tertiary-fixed transition-colors flex items-center gap-2.5"
                          onClick={() => selectScenario("NEW_RECEIVE")}
                        >
                          <div className="w-7 h-7 rounded-full bg-tertiary flex items-center justify-center text-on-tertiary shrink-0">
                            <span className="material-symbols-outlined text-[16px]">
                              input
                            </span>
                          </div>
                          <div className="min-w-0">
                            <div className="font-label-md text-label-md font-bold text-on-surface truncate">
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
                  <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <h2 className="font-headline-md text-headline-md font-bold text-on-surface">
                          Nhật Ký Quét Phân Luồng Trực Tuyến
                        </h2>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Luồng sự kiện quét thực thời từ các cổng kiểm tra
                          thiết bị
                        </p>
                      </div>
                      <div className="flex items-center gap-1 bg-surface-container-low p-1 rounded-lg">
                        <button
                          className={`px-2.5 py-1 rounded font-label-sm text-label-sm font-semibold transition-colors ${activeFilter === "all" ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant hover:text-on-surface"}`}
                          onClick={() => setActiveFilter("all")}
                        >
                          Tất cả (218)
                        </button>
                        <button
                          className={`px-2.5 py-1 rounded font-label-sm text-label-sm font-semibold transition-colors ${activeFilter === "nhap" ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant hover:text-on-surface"}`}
                          onClick={() => setActiveFilter("nhap")}
                        >
                          Quét Nhập (142)
                        </button>
                        <button
                          className={`px-2.5 py-1 rounded font-label-sm text-label-sm font-semibold transition-colors ${activeFilter === "xuat" ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant hover:text-on-surface"}`}
                          onClick={() => setActiveFilter("xuat")}
                        >
                          Quét Xuất (76)
                        </button>
                        <button
                          className={`px-2.5 py-1 rounded font-label-sm text-label-sm font-semibold transition-colors ${activeFilter === "canhbao" ? "bg-error-container text-error shadow-sm" : "text-error hover:bg-error-container/40"}`}
                          onClick={() => setActiveFilter("canhbao")}
                        >
                          Cảnh báo (1)
                        </button>
                      </div>
                    </div>
                    {/* Table Container */}
                    <div className="overflow-x-auto -mx-5 px-5">
                      <table className="w-full text-left border-collapse min-w-[650px]">
                        <thead>
                          <tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
                            <th className="py-3 px-3 rounded-l-lg">
                              Mã Định Danh QR
                            </th>
                            <th className="py-3 px-3">
                              Thiết Bị &amp; Nguồn Trao Tặng
                            </th>
                            <th className="py-3 px-3">Phân Luồng Hệ Thống</th>
                            <th className="py-3 px-3">Vị Trí Kệ</th>
                            <th className="py-3 px-3 rounded-r-lg text-right">
                              Thời Gian
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-surface-container-low font-body-md text-body-md text-on-surface">
                          {/* Row 1 */}
                          <tr
                            className="hover:bg-surface-container-low transition-colors cursor-pointer"
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
                            <td className="py-3 px-3 font-code-num text-code-num font-bold text-primary">
                              #QR-DELL-5520
                            </td>
                            <td className="py-3 px-3">
                              <div className="font-headline-sm text-headline-sm text-on-surface">
                                Laptop Dell Latitude 5520
                              </div>
                              <div className="font-body-sm text-body-sm text-on-surface-variant">
                                Core i5 11th • 8GB • 256GB SSD | Nguồn: Tập đoàn
                                VNPT
                              </div>
                            </td>
                            <td className="py-3 px-3">
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold">
                                <span className="material-symbols-outlined text-[14px]">
                                  arrow_upward
                                </span>{" "}
                                ĐÃ NHẬP → XUẤT ĐIỂM TRƯỜNG
                              </span>
                            </td>
                            <td className="py-3 px-3">
                              <span className="font-label-md text-label-md font-semibold text-on-surface">
                                Kệ A2 - Tầng 04
                              </span>
                              <span className="block font-body-sm text-[10px] text-outline">
                                Tĩnh theo RBAC
                              </span>
                            </td>
                            <td className="py-3 px-3 text-right font-code-num text-code-num text-on-surface-variant">
                              10:45:12
                            </td>
                          </tr>
                          {/* Row 2 */}
                          <tr
                            className="hover:bg-surface-container-low transition-colors cursor-pointer"
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
                            <td className="py-3 px-3 font-code-num text-code-num font-bold text-tertiary">
                              #QR-HP-400-G6
                            </td>
                            <td className="py-3 px-3">
                              <div className="font-headline-sm text-headline-sm text-on-surface">
                                Bộ PC Desktop HP ProDesk 400 G6
                              </div>
                              <div className="font-body-sm text-body-sm text-on-surface-variant">
                                Kèm màn hình HP 21.5" | Nguồn: FPT Software
                              </div>
                            </td>
                            <td className="py-3 px-3">
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-semibold">
                                <span className="material-symbols-outlined text-[14px]">
                                  arrow_downward
                                </span>{" "}
                                MỚI → MỞ FORM NHẬP KHO
                              </span>
                            </td>
                            <td className="py-3 px-3">
                              <span className="font-label-md text-label-md font-semibold text-on-surface">
                                Kệ B1 - Tầng 01
                              </span>
                              <span className="block font-body-sm text-[10px] text-outline">
                                Tĩnh theo RBAC
                              </span>
                            </td>
                            <td className="py-3 px-3 text-right font-code-num text-code-num text-on-surface-variant">
                              10:42:05
                            </td>
                          </tr>
                          {/* Row 3 */}
                          <tr
                            className="hover:bg-surface-container-low transition-colors cursor-pointer"
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
                            <td className="py-3 px-3 font-code-num text-code-num font-bold text-secondary">
                              #QR-SW-CISCO24
                            </td>
                            <td className="py-3 px-3">
                              <div className="font-headline-sm text-headline-sm text-on-surface">
                                Cisco Catalyst Switch 24-Port Gigabit
                              </div>
                              <div className="font-body-sm text-body-sm text-on-surface-variant">
                                Thiết bị mạng phân phối | Nguồn: VNPT Hưng Yên
                              </div>
                            </td>
                            <td className="py-3 px-3">
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                                <span className="material-symbols-outlined text-[14px]">
                                  bolt
                                </span>{" "}
                                XUẤT ĐIỀU CHUYỂN TỨC THÌ
                              </span>
                              <div className="font-body-sm text-[10px] text-primary">
                                Hoàn tất ngay, không chờ xác nhận
                              </div>
                            </td>
                            <td className="py-3 px-3">
                              <span className="font-label-md text-label-md font-semibold text-on-surface">
                                Kệ C3 - Tầng 02
                              </span>
                              <span className="block font-body-sm text-[10px] text-outline">
                                Tĩnh theo RBAC
                              </span>
                            </td>
                            <td className="py-3 px-3 text-right font-code-num text-code-num text-on-surface-variant">
                              10:38:19
                            </td>
                          </tr>
                          {/* Row 4 */}
                          <tr
                            className="hover:bg-surface-container-low transition-colors cursor-pointer"
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
                            <td className="py-3 px-3 font-code-num text-code-num font-bold text-tertiary">
                              #QR-IPAD-G9-08
                            </td>
                            <td className="py-3 px-3">
                              <div className="font-headline-sm text-headline-sm text-on-surface">
                                Apple iPad Gen 9 (64GB Wifi)
                              </div>
                              <div className="font-body-sm text-body-sm text-on-surface-variant">
                                Hộp &amp; cáp sạc đầy đủ | Nguồn: Nhà hảo tâm cá
                                nhân
                              </div>
                            </td>
                            <td className="py-3 px-3">
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-semibold">
                                <span className="material-symbols-outlined text-[14px]">
                                  verified
                                </span>{" "}
                                NHẬP KHO XÁC MINH PHIẾU
                              </span>
                            </td>
                            <td className="py-3 px-3">
                              <span className="font-label-md text-label-md font-semibold text-on-surface">
                                Kệ B2 - Tầng 03
                              </span>
                              <span className="block font-body-sm text-[10px] text-outline">
                                Tĩnh theo RBAC
                              </span>
                            </td>
                            <td className="py-3 px-3 text-right font-code-num text-code-num text-on-surface-variant">
                              10:30:44
                            </td>
                          </tr>
                          {/* Row 5 */}
                          <tr
                            className="hover:bg-surface-container-low transition-colors cursor-pointer"
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
                            <td className="py-3 px-3 font-code-num text-code-num font-bold text-primary">
                              #QR-UPS-SANTAK
                            </td>
                            <td className="py-3 px-3">
                              <div className="font-headline-sm text-headline-sm text-on-surface">
                                Bộ lưu điện Santak 1000E Pro
                              </div>
                              <div className="font-body-sm text-body-sm text-on-surface-variant">
                                Hệ thống pin đạt 96% | Nguồn: Quỹ Hy Vọng
                              </div>
                            </td>
                            <td className="py-3 px-3">
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold">
                                <span className="material-symbols-outlined text-[14px]">
                                  local_shipping
                                </span>{" "}
                                THEO PHƯƠNG ÁN ĐÃ DUYỆT
                              </span>
                            </td>
                            <td className="py-3 px-3">
                              <span className="font-label-md text-label-md font-semibold text-on-surface">
                                Kệ D1 - Tầng 01
                              </span>
                              <span className="block font-body-sm text-[10px] text-outline">
                                Tĩnh theo RBAC
                              </span>
                            </td>
                            <td className="py-3 px-3 text-right font-code-num text-code-num text-on-surface-variant">
                              10:25:01
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* Pagination */}
                    <div className="flex items-center justify-between pt-2 text-on-surface-variant font-body-sm text-body-sm">
                      <span className="">
                        Hiển thị 5 trên 218 lượt quét trong ca làm việc
                      </span>
                      <div className="flex items-center gap-2">
                        <button className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high transition-colors font-label-md text-label-md text-on-surface">
                          Trang Trước
                        </button>
                        <button className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high transition-colors font-label-md text-label-md text-on-surface">
                          Trang Kế Tiếp
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* CỘT PHẢI (5/12) */}
                <div className="xl:col-span-5 space-y-6">
                  {/* POPUP 1: THÔNG TIN CHI TIẾT */}
                  <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm space-y-4">
                    <div className="flex items-center justify-between pb-3 bg-surface-container-low -mx-5 -mt-5 p-5 rounded-t-xl">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[22px]">
                          info
                        </span>
                        <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
                          Thông Tin Mặt Hàng Chi Tiết
                        </span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-semibold">
                        Grade A - Sẵn Sàng
                      </span>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-20 h-20 rounded-xl bg-surface-container-high flex flex-col items-center justify-center p-1.5 shrink-0 shadow-inner">
                        <svg
                          className="w-14 h-14 text-on-surface"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm8-2h2v2h-2v-2zm4 0h2v2h-2v-2zm-4 4h2v2h-2v-2zm2 2h2v2h-2v-2zm2-2h4v4h-4v-4zm-4-6h2v2h-2v-2zm6-2h2v2h-2v-2z"></path>
                        </svg>
                        <span className="font-code-num text-[9px] text-outline">
                          {deviceData.qrCode}
                        </span>
                      </div>
                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface truncate">
                            {deviceData.name}
                          </h3>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Số Serial:{" "}
                          <strong className="text-on-surface font-code-num">
                            SN-VNPT-2024-99812
                          </strong>
                        </p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Nguồn trao tặng:{" "}
                          <strong className="text-primary font-medium">
                            {deviceData.donor}
                          </strong>
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 bg-surface-container-low p-3 rounded-lg text-body-sm font-body-sm">
                      <div>
                        <span className="text-on-surface-variant block font-label-sm text-label-sm">
                          Cấu hình:
                        </span>
                        <span className="font-medium text-on-surface">
                          Core i5-1145G7, 8GB DDR4, 256GB NVMe
                        </span>
                      </div>
                      <div>
                        <span className="text-on-surface-variant block font-label-sm text-label-sm">
                          Niêm phong RFID:
                        </span>
                        <span className="font-code-num text-tertiary font-semibold">
                          RFID-UHF-915-00441
                        </span>
                      </div>
                      <div>
                        <span className="text-on-surface-variant block font-label-sm text-label-sm">
                          Phụ kiện đi kèm:
                        </span>
                        <span className="font-medium text-on-surface">
                          Sạc Dell Type-C 65W, Chuột quang, Túi chống sốc
                        </span>
                      </div>
                      <div>
                        <span className="text-on-surface-variant block font-label-sm text-label-sm">
                          Thời gian nhập trạm:
                        </span>
                        <span className="font-code-num text-on-surface">
                          14:15 • 22/10/2024
                        </span>
                      </div>
                    </div>
                    <div className="p-3 bg-surface-container rounded-lg space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold uppercase tracking-wider">
                          VỊ TRÍ KỆ LƯU TRỮ HIỆN TẠI
                        </span>
                        <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-semibold">
                          Chế độ hiển thị tĩnh (RBAC)
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[20px] text-primary">
                            shelves
                          </span>
                          <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
                            {deviceData.shelf}
                          </span>
                        </div>
                        <span className="font-body-sm text-body-sm text-outline">
                          Kho HUB-01 MB
                        </span>
                      </div>
                      <p className="font-body-sm text-[11px] text-outline pt-1">
                        * Vị trí kệ định danh được bảo toàn cố định theo quy
                        trình quản trị tài sản giáo dục. Nhân sự cổng kho không
                        có quyền chỉnh sửa vị trí tại bước quét này.
                      </p>
                    </div>
                  </div>

                  {/* POPUP 2: FORM ĐIỀU HƯỚNG THEO TRẠNG THÁI (DYNAMIC) */}
                  <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm space-y-4">
                    <div
                      className={`flex items-center justify-between pb-3 -mx-5 -mt-5 p-5 rounded-t-xl ${deviceData.mode === "NHAP" ? "bg-tertiary-fixed/40" : "bg-primary-fixed/40"}`}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`material-symbols-outlined text-[22px] ${deviceData.mode === "NHAP" ? "text-tertiary" : "text-primary"}`}
                        >
                          {deviceData.mode === "NHAP" ? "input" : "swap_horiz"}
                        </span>
                        <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                          {deviceData.mode === "NHAP"
                            ? "Form Tiếp Nhận & Nhập Kho Mới"
                            : "Form Xuất Kho Điều Phối Điểm Trường"}
                        </h3>
                      </div>
                      <span
                        className={`px-2 py-0.5 rounded font-label-sm text-label-sm font-semibold ${deviceData.mode === "NHAP" ? "bg-tertiary text-on-tertiary" : "bg-primary text-on-primary"}`}
                      >
                        KÍCH HOẠT {deviceData.mode === "NHAP" ? "NHẬP" : "XUẤT"}{" "}
                        TỰ ĐỘNG
                      </span>
                    </div>

                    {/* Notification Banner */}
                    <div
                      className={`p-3 rounded-lg flex items-start gap-3 ${deviceData.mode === "NHAP" ? "bg-tertiary-fixed/30" : "bg-surface-container"}`}
                    >
                      <span
                        className={`material-symbols-outlined text-[22px] shrink-0 mt-0.5 ${deviceData.mode === "NHAP" ? "text-tertiary" : "text-primary"}`}
                      >
                        {deviceData.mode === "NHAP" ? "input" : "check_circle"}
                      </span>
                      <div className="space-y-1">
                        <div className="font-label-md text-label-md font-bold text-on-surface">
                          {deviceData.mode === "NHAP"
                            ? "Thiết bị chưa có dữ liệu xuất"
                            : "Đã ghi nhận thông tin Nhập kho hợp lệ"}
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          {deviceData.mode === "NHAP" ? (
                            <>
                              Hệ thống tự động mở{" "}
                              <strong className="text-tertiary">
                                FORM NHẬP KHO TIẾP NHẬN
                              </strong>{" "}
                              để thủ kho đối soát quy chuẩn tiếp nhận ban đầu từ
                              đơn vị trao tặng.
                            </>
                          ) : (
                            <>
                              Thiết bị này{" "}
                              <strong className="text-on-surface">
                                ĐÃ ĐƯỢC NHẬP KHO
                              </strong>
                              . Hệ thống tự động khóa form nhập và kích hoạt
                              ngay{" "}
                              <strong className="text-primary">
                                QUY TRÌNH XUẤT KHO ĐIỀU PHỐI
                              </strong>
                              .
                            </>
                          )}
                        </p>
                      </div>
                    </div>

                    {/* Dynamic Form Fields */}
                    {deviceData.mode === "XUAT" ? (
                      <div className="space-y-3 font-body-md text-body-md">
                        <div>
                          <label className="block font-label-md text-label-md font-semibold text-on-surface mb-1">
                            Phương Án Phân Bổ Liên Kết
                          </label>
                          <div className="relative">
                            <input
                              className="w-full px-3 py-2 bg-surface-container-low rounded-lg text-on-surface font-body-md text-body-md outline-none cursor-default font-medium"
                              readOnly
                              type="text"
                              value="#PA-2024-892 (Admin đã phê duyệt chữ ký số - Đủ điều kiện lập vận đơn)"
                            />
                            <span className="material-symbols-outlined absolute right-3 top-2.5 text-[18px] text-tertiary">
                              verified_user
                            </span>
                          </div>
                        </div>
                        <div>
                          <label className="block font-label-md text-label-md font-semibold text-on-surface mb-1">
                            Điểm Trường Thụ Hưởng Đích
                          </label>
                          <div className="p-2.5 bg-surface-container rounded-lg flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="material-symbols-outlined text-primary text-[20px]">
                                school
                              </span>
                              <span className="font-label-md text-label-md font-bold text-on-surface">
                                {deviceData.destination}
                              </span>
                            </div>
                            <span className="font-label-sm text-label-sm px-2 py-0.5 bg-surface-container-highest rounded text-on-surface-variant">
                              Phòng Tin Học 01
                            </span>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block font-label-md text-label-md font-semibold text-on-surface mb-1">
                              Mã Vận Đơn Ghép Nối
                            </label>
                            <input
                              className="w-full px-3 py-2 bg-surface-container-low rounded-lg font-code-num text-code-num font-bold text-on-surface"
                              readOnly
                              type="text"
                              value="#WB-2024-NW08"
                            />
                          </div>
                          <div>
                            <label className="block font-label-md text-label-md font-semibold text-on-surface mb-1">
                              Tình Trạng Niêm Phong
                            </label>
                            <div className="px-3 py-2 bg-surface-container-low rounded-lg text-tertiary font-label-md text-label-md font-semibold flex items-center gap-1.5">
                              <span className="material-symbols-outlined text-[16px]">
                                lock
                              </span>
                              <span className="">
                                Đã Khóa Chốt Seal #SL-884
                              </span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <label className="font-label-md text-label-md font-semibold text-on-surface">
                              Đội Ngũ Tình Nguyện Viên Vận Chuyển
                            </label>
                            <span className="font-label-sm text-label-sm text-outline">
                              Gán không giới hạn TNV
                            </span>
                          </div>
                          <div className="p-2 bg-surface-container-low rounded-lg space-y-1.5">
                            <div className="flex flex-wrap items-center gap-1.5">
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-sm">
                                <span className="material-symbols-outlined text-[14px] text-primary">
                                  person
                                </span>
                                Lê Hoàng Long (Trưởng đoàn)
                              </span>
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-sm">
                                <span className="material-symbols-outlined text-[14px] text-secondary">
                                  engineering
                                </span>
                                Trần Văn Nam (Kỹ thuật)
                              </span>
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-sm">
                                <span className="material-symbols-outlined text-[14px] text-tertiary">
                                  directions_car
                                </span>
                                Đỗ Hữu Đạt (Lái xe)
                              </span>
                              <button
                                className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-surface-container-high hover:bg-surface-container-highest text-primary font-label-sm text-label-sm transition-colors"
                                onClick={() =>
                                  alert(
                                    "Mở danh sách tra cứu tình nguyện viên EduShare VN...",
                                  )
                                }
                              >
                                <span className="material-symbols-outlined text-[14px]">
                                  add
                                </span>
                                Thêm TNV
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="pt-1">
                          <button
                            className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-colors"
                            onClick={() =>
                              alert(
                                "Đã xuất file Excel bóc tách riêng số lượng thiết bị của nhà hảo tâm VNPT và FPT Software để gửi báo cáo minh bạch!",
                              )
                            }
                          >
                            <span className="material-symbols-outlined text-[16px] text-primary">
                              table_view
                            </span>
                            <span className="">
                              Xuất file Excel bóc tách nhà hảo tâm (VNPT / Quỹ
                              Hy Vọng)
                            </span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3 font-body-md text-body-md">
                        {/* Simple placeholder for NHAP form content to maintain UI structure */}
                        <div>
                          <label className="block font-label-md text-label-md font-semibold text-on-surface mb-1">
                            Biên Bản Bàn Giao
                          </label>
                          <input
                            className="w-full px-3 py-2 bg-surface-container-low rounded-lg font-code-num text-code-num font-bold text-on-surface outline-none focus:ring-2 focus:ring-primary/20"
                            placeholder="Nhập mã phiếu bàn giao..."
                            type="text"
                          />
                        </div>
                        <div>
                          <label className="block font-label-md text-label-md font-semibold text-on-surface mb-1">
                            Ghi chú tình trạng ban đầu
                          </label>
                          <textarea
                            className="w-full px-3 py-2 bg-surface-container-low rounded-lg text-on-surface font-body-sm outline-none focus:ring-2 focus:ring-primary/20"
                            placeholder="VD: Hộp móp nhẹ, còn nguyên seal..."
                            rows={3}
                          ></textarea>
                        </div>
                      </div>
                    )}

                    {/* Nút Hành Động Chính */}
                    <div className="pt-2 space-y-2">
                      <button
                        className={`w-full py-3.5 px-4 rounded-lg font-headline-sm text-headline-sm font-bold shadow-md flex items-center justify-center gap-2 transition-all ${
                          deviceData.mode === "NHAP"
                            ? "bg-tertiary hover:bg-tertiary-container text-on-tertiary"
                            : "bg-primary hover:bg-primary-container text-on-primary"
                        }`}
                        onClick={handlePrimaryAction}
                      >
                        <span className="material-symbols-outlined text-[22px]">
                          {deviceData.mode === "NHAP"
                            ? "verified"
                            : "local_shipping"}
                        </span>
                        <span className="">
                          {deviceData.mode === "NHAP"
                            ? "XÁC NHẬN NHẬP KHO & LƯU VỊ TRÍ KỆ TĨNH"
                            : "XÁC NHẬN XUẤT ĐIỀU CHUYỂN & HOÀN TẤT NGAY"}
                        </span>
                      </button>
                      <p className="text-center font-body-sm text-[11px] text-outline">
                        * Theo RBAC v2.8.4: Lệnh xuất điều chuyển hoàn tất tức
                        thì tại cổng kho, không yêu cầu kho đích xác nhận.
                      </p>
                    </div>
                  </div>

                  {/* Khối Nhắc Nhở */}
                  <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm space-y-3">
                    <div className="flex items-center gap-2 text-on-surface">
                      <span className="material-symbols-outlined text-[20px] text-secondary">
                        policy
                      </span>
                      <h4 className="font-headline-sm text-headline-sm font-bold">
                        Quy Chuẩn Vận Hành Cổng Kho (RBAC v2.8.4)
                      </h4>
                    </div>
                    <div className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
                      <div className="p-2.5 rounded bg-surface-container-low flex items-start gap-2">
                        <span className="material-symbols-outlined text-[18px] text-tertiary shrink-0">
                          check
                        </span>
                        <span className="">
                          <strong>Xuất điều chuyển tức thì:</strong> Lô hàng
                          xuất liên kho hoặc trao tặng hoàn tất ngay trên hệ
                          thống điện tử mà không cần kho đích thực hiện ký nhận
                          trước.
                        </span>
                      </div>
                      <div className="p-2.5 rounded bg-surface-container-low flex items-start gap-2">
                        <span className="material-symbols-outlined text-[18px] text-outline shrink-0">
                          block
                        </span>
                        <span className="">
                          <strong>
                            Các tính năng đã loại bỏ khỏi cổng kho:
                          </strong>{" "}
                          Sửa vị trí kệ, danh sách máy theo ca, chuẩn bị máy
                          đang giữ cho phương án khác, hàng chờ yêu cầu đã
                          duyệt, ghép máy, xác nhận hoặc hủy phương án phân bổ.
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
