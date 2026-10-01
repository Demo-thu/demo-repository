import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const WarehouseReceivePage = () => {
  const [currentTimestamp, setCurrentTimestamp] = useState("");
  const [isExecuting, setIsExecuting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setCurrentTimestamp(`${hours}:${minutes}:${seconds} - Hôm nay`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleExecuteDecision = () => {
    if (isExecuting || isSuccess) return;

    setIsExecuting(true);
    setTimeout(() => {
      setIsExecuting(false);
      setIsSuccess(true);

      setTimeout(() => {
        setIsSuccess(false);
      }, 3500);
    }, 700);
  };

  return (
    <div className="bg-background font-body-md text-on-surface antialiased min-h-screen">
      <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between overflow-y-auto">
        <div className="flex flex-col">
          <div className="p-space-lg flex flex-col gap-space-xs bg-surface-container-low">
            <div className="flex items-center gap-space-sm">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-on-primary shadow-sm">
                <span className="material-symbols-outlined text-[22px]">
                  inventory_2
                </span>
              </div>
              <div>
                <div className="font-headline-sm text-headline-sm text-primary tracking-tight">
                  EduShare VN
                </div>
                <div className="font-label-sm text-label-sm text-secondary uppercase font-semibold">
                  Kho &amp; Kỹ Thuật
                </div>
              </div>
            </div>
            <div className="mt-space-sm flex flex-wrap items-center gap-space-xs">
              <span className="px-space-sm py-0.5 rounded-lg bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-semibold">
                Kho Tổng Miền Bắc (TK-MB)
              </span>
              <div className="flex items-center gap-1 px-space-xs py-0.5 rounded-lg bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                <span className="">Trực tuyến 63 Tỉnh Thành</span>
              </div>
            </div>
          </div>
          <nav className="flex flex-col gap-space-lg p-space-md mt-space-sm">
            <div className="flex flex-col gap-1">
              <div className="px-space-sm pb-space-xs font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                Nhập Kho &amp; Tiếp Nhận
              </div>
              <Link
                className="flex items-center gap-space-sm px-space-md py-space-sm transition-all bg-primary text-on-primary font-medium rounded-lg shadow-sm"
                to="/warehouse/receive"
              >
                <span className="material-symbols-outlined text-[20px]">
                  verified
                </span>
                <span className="font-body-md text-body-md">
                  Tiếp nhận &amp; Kiểm định
                </span>
              </Link>
              <Link
                className="flex items-center gap-space-sm px-space-md py-space-sm rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all"
                to="/warehouse/scan-qr"
              >
                <span className="material-symbols-outlined text-[20px]">
                  qr_code_scanner
                </span>
                <span className="font-body-md text-body-md">
                  Quét QR phân luồng
                </span>
              </Link>
              <Link
                className="flex items-center gap-space-sm px-space-md py-space-sm rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all"
                to="/warehouse/donation-receipt"
              >
                <span className="material-symbols-outlined text-[20px]">
                  receipt_long
                </span>
                <span className="font-body-md text-body-md">
                  Phiếu trao tặng
                </span>
              </Link>
            </div>
            <div className="flex flex-col gap-1">
              <div className="px-space-sm pb-space-xs font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                Quản Lý Kho Bãi
              </div>
              <Link
                className="flex items-center gap-space-sm px-space-md py-space-sm rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all"
                to="/warehouse/inventory"
              >
                <span className="material-symbols-outlined text-[20px]">
                  warehouse
                </span>
                <span className="font-body-md text-body-md">
                  Tồn kho thiết bị
                </span>
              </Link>
              <Link
                className="flex items-center justify-between px-space-md py-space-sm rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all"
                to="/warehouse/racks"
              >
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-[20px]">
                    shelves
                  </span>
                  <span className="font-body-md text-body-md">
                    Vị trí kệ định danh
                  </span>
                </div>
                <span className="px-1.5 py-0.5 rounded-lg bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold">
                  Xem
                </span>
              </Link>
              <Link
                className="flex items-center gap-space-sm px-space-md py-space-sm rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all"
                to="/warehouse/audit-report"
              >
                <span className="material-symbols-outlined text-[20px]">
                  fact_check
                </span>
                <span className="font-body-md text-body-md">
                  Kiểm kê &amp; Báo cáo
                </span>
              </Link>
            </div>
            <div className="flex flex-col gap-1">
              <div className="px-space-sm pb-space-xs font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                Điều Phối &amp; Vận Chuyển
              </div>
              <Link
                className="flex items-center gap-space-sm px-space-md py-space-sm rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all"
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
                className="flex items-center gap-space-sm px-space-md py-space-sm rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all"
                to="/warehouse/delivery-history"
              >
                <span className="material-symbols-outlined text-[20px]">
                  schedule
                </span>
                <span className="font-body-md text-body-md">
                  Lịch sử đợt giao
                </span>
              </Link>
              <Link
                className="flex items-center gap-space-sm px-space-md py-space-sm rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all"
                to="/warehouse/incident-report"
              >
                <span className="material-symbols-outlined text-[20px]">
                  report_problem
                </span>
                <span className="font-body-md text-body-md">
                  Báo cáo sự cố cá nhân
                </span>
              </Link>
            </div>
          </nav>
        </div>
        <div className="p-space-md bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] m-space-md rounded-xl flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase">
              Cổng Kho Vận
            </span>
            <span className="font-code-num text-code-num text-secondary bg-surface-container px-1.5 py-0.5 rounded">
              v2.8.4
            </span>
          </div>
          <div className="flex items-center gap-1 font-body-sm text-body-sm text-on-surface-variant mt-1">
            <span className="material-symbols-outlined text-[16px] text-tertiary">
              support_agent
            </span>
            <span className="">
              Kỹ thuật kho:{" "}
              <strong className="text-on-surface font-semibold">
                1900 6829
              </strong>
            </span>
          </div>
        </div>
      </aside>

      <div className="pl-72">
        <header className="fixed top-0 left-72 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 px-gutter-desktop flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-sm font-body-sm text-body-sm text-on-surface-variant shrink-0">
            <span className="font-medium text-primary">EduShare VN Kho</span>
            <span className="material-symbols-outlined text-[14px]">
              chevron_right
            </span>
            <span className="">Nhập Kho &amp; Tiếp Nhận</span>
            <span className="material-symbols-outlined text-[14px]">
              chevron_right
            </span>
            <span className="font-semibold text-on-surface">
              Tiếp Nhận &amp; Kiểm Định Thiết Bị
            </span>
          </div>
          <div className="flex-1 max-w-xl mx-space-md">
            <div className="relative flex items-center w-full">
              <span className="material-symbols-outlined absolute left-3 text-secondary text-[20px]">
                search
              </span>
              <input
                className="w-full pl-10 pr-space-md py-1.5 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm placeholder:text-secondary outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container transition-all"
                placeholder="Tra cứu mã vận đơn, số lô hàng, serial hoặc quét mã QR thiết bị..."
                type="search"
              />
            </div>
          </div>
          <div className="flex items-center gap-space-sm shrink-0">
            <button
              className="flex items-center gap-1 px-space-md py-1.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-all shadow-[0_1px_8px_rgba(0,0,0,0.04)]"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px] text-primary">
                qr_code_scanner
              </span>
              <span className="">Quét QR</span>
            </button>
            <button
              className="w-9 h-9 rounded-xl bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-all relative"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">
                notifications
              </span>
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-error"></span>
            </button>
            <div className="flex items-center gap-space-sm pl-space-sm ml-space-xs">
              <div className="text-right hidden xl:block">
                <div className="font-label-md text-label-md font-semibold text-on-surface">
                  Trần Hùng (TK-MB-04)
                </div>
                <div className="font-body-sm text-body-sm text-secondary">
                  Trưởng Kho Kỹ Thuật Hà Nội • Kho Tổng Miền Bắc (HUB-01 Hà Nội)
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[18px]">
                  person
                </span>
              </div>
            </div>
          </div>
        </header>

        <main className="w-full pt-16 px-gutter-desktop py-space-lg bg-background min-h-screen">
          <div className="flex flex-col w-full gap-space-lg pb-space-xl">
            {/* Page Header & Primary Metrics */}
            <div className="flex flex-col gap-space-md">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md bg-surface-container-lowest p-space-lg rounded-xl shadow-sm relative overflow-hidden">
                <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-primary/5 pointer-events-none blur-2xl"></div>
                <div className="flex flex-col gap-1 max-w-3xl z-10">
                  <div className="flex flex-wrap items-center gap-space-xs">
                    <span className="px-2 py-0.5 rounded-lg bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                      Cổng Thủ Kho &amp; KTV - Trạm HUB-01 Miền Bắc
                    </span>
                    <span className="px-2 py-0.5 rounded-lg bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-medium">
                      Phiên bản EduOS v3.2.1-Audited
                    </span>
                  </div>
                  <h1 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight mt-1">
                    Tiếp Nhận &amp; Kiểm Định Kỹ Thuật Thiết Bị
                  </h1>
                  <p className="font-body-md text-body-md text-secondary">
                    Quy trình tiếp nhận lô hàng quyên góp từ doanh nghiệp, rà
                    soát đối chiếu thông số thực tế, phân loại linh kiện và phê
                    duyệt phân luồng 1 chạm theo tiêu chuẩn phòng máy trường học
                    vùng cao.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-space-sm z-10 shrink-0">
                  <button
                    className="flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-all"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px] text-secondary">
                      file_download
                    </span>
                    <span className="">Xuất Biên Bản (.xlsx)</span>
                  </button>
                  <button
                    className="flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-all"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      qr_code_scanner
                    </span>
                    <span className="">Quét Tiếp Nhận</span>
                  </button>
                  <button
                    className="flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-primary-container text-on-primary hover:bg-primary font-label-md text-label-md transition-all shadow-sm"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      add_circle
                    </span>
                    <span className="">+ Nhận Lô Mới</span>
                  </button>
                </div>
              </div>

              {/* 4 Bento Kpi Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between gap-space-sm relative overflow-hidden group hover:shadow-md transition-all">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-label-sm text-label-sm text-secondary uppercase font-semibold">
                        Lô Chờ Tiếp Nhận
                      </div>
                      <div className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">
                        18{" "}
                        <span className="font-body-md text-body-md font-normal text-secondary">
                          lô
                        </span>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-primary-fixed text-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[22px]">
                        inbox
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm pt-2 bg-surface-container-low -mx-space-md -mb-space-md px-space-md py-2">
                    <span className="truncate">
                      420 máy mới từ FPT, VNPT, MB Bank
                    </span>
                    <span className="text-primary font-code-num text-code-num font-semibold shrink-0">
                      +3 lô sáng
                    </span>
                  </div>
                </div>

                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between gap-space-sm relative overflow-hidden group hover:shadow-md transition-all">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-label-sm text-label-sm text-secondary uppercase font-semibold">
                        Đang Kiểm Định Kỹ Thuật
                      </div>
                      <div className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">
                        145{" "}
                        <span className="font-body-md text-body-md font-normal text-secondary">
                          máy
                        </span>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-[22px]">
                        flaky
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm pt-2 bg-surface-container-low -mx-space-md -mb-space-md px-space-md py-2">
                    <span className="truncate">
                      Ưu tiên 35 máy: Mường Lát &amp; Pả Vi
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 font-label-sm text-label-sm font-semibold">
                      Gấp
                    </span>
                  </div>
                </div>

                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between gap-space-sm relative overflow-hidden group hover:shadow-md transition-all">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-label-sm text-label-sm text-secondary uppercase font-semibold">
                        Phân Luồng 1 Chạm Hôm Nay
                      </div>
                      <div className="font-headline-lg text-headline-lg text-primary font-bold mt-1">
                        89{" "}
                        <span className="font-body-md text-body-md font-normal text-secondary">
                          thiết bị
                        </span>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-tertiary-fixed text-tertiary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[22px]">
                        touch_app
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm pt-2 bg-surface-container-low -mx-space-md -mb-space-md px-space-md py-2">
                    <span className="truncate">
                      Tỷ lệ xử lý tức thì: 100% không nghẽn
                    </span>
                    <span className="text-tertiary font-code-num text-code-num font-semibold">
                      Đạt KPI
                    </span>
                  </div>
                </div>

                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between gap-space-sm relative overflow-hidden group hover:shadow-md transition-all">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-label-sm text-label-sm text-secondary uppercase font-semibold">
                        Đạt Chuẩn Sẵn Sàng Giao
                      </div>
                      <div className="font-headline-lg text-headline-lg text-tertiary font-bold mt-1">
                        612{" "}
                        <span className="font-body-md text-body-md font-normal text-secondary">
                          máy
                        </span>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-surface-container-highest text-on-surface flex items-center justify-center">
                      <span className="material-symbols-outlined text-[22px]">
                        check_circle
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm pt-2 bg-surface-container-low -mx-space-md -mb-space-md px-space-md py-2">
                    <span className="truncate">
                      Grade A: 82% • Grade B: 18%
                    </span>
                    <span className="font-code-num text-code-num text-secondary">
                      Kho Kệ A2
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* MAIN TWO-COLUMN WORKSPACE: 7/12 (LEFT) & 5/12 (RIGHT) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
              {/* LEFT PANE: 7/12 - INVENTORY & DEVICE INSPECTION QUEUE */}
              <section className="lg:col-span-7 flex flex-col gap-space-md">
                {/* Active Batch Card Overview */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm">
                  <div className="flex flex-wrap items-center justify-between gap-space-xs">
                    <div className="flex items-center gap-space-xs">
                      <span className="px-2 py-0.5 rounded-lg bg-primary text-on-primary font-code-num text-code-num font-bold">
                        LÔ HIỆN HÀNH
                      </span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-semibold tracking-tight">
                        #LO-2024-HN09
                      </span>
                      <span className="text-secondary font-body-sm text-body-sm">
                        | Phiếu bàn giao:{" "}
                        <strong className="text-on-surface font-semibold">
                          #DON-2024-8842
                        </strong>
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold">
                      Tiếp nhận lúc: 08:30 - Hôm nay
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm p-space-sm bg-surface-container-low rounded-xl">
                    <div>
                      <div className="font-label-sm text-label-sm text-secondary uppercase">
                        Đơn Vị Trao Tặng
                      </div>
                      <div className="font-body-md text-body-md font-semibold text-on-surface flex items-center gap-1 mt-0.5">
                        <span className="material-symbols-outlined text-[16px] text-primary">
                          domain
                        </span>
                        Tập đoàn FPT (Trụ sở Cầu Giấy)
                      </div>
                    </div>
                    <div>
                      <div className="font-label-sm text-label-sm text-secondary uppercase">
                        Quy Mô Lô Hàng
                      </div>
                      <div className="font-body-md text-body-md font-semibold text-on-surface mt-0.5">
                        30 Laptop ThinkPad T480s / HP
                      </div>
                    </div>
                    <div>
                      <div className="font-label-sm text-label-sm text-secondary uppercase">
                        Tiến Độ Rà Soát Kỹ Thuật
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                          <div
                            className="bg-primary h-full rounded-full"
                            style={{ width: "40%" }}
                          ></div>
                        </div>
                        <span className="font-code-num text-code-num text-primary font-bold">
                          12/30
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Filter & Search Bar */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col sm:flex-row gap-space-sm items-stretch sm:items-center justify-between">
                  <div className="relative flex-1">
                    <span className="material-symbols-outlined absolute left-3 top-2.5 text-secondary text-[18px]">
                      search
                    </span>
                    <input
                      className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm placeholder:text-secondary outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container"
                      placeholder="Tìm theo mã TB-..., Serial, model máy hoặc KTV..."
                      type="text"
                    />
                  </div>
                  <div className="flex items-center gap-space-xs shrink-0 overflow-x-auto">
                    <button
                      className="px-space-sm py-1.5 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm font-semibold"
                      type="button"
                    >
                      Tất cả (30)
                    </button>
                    <button
                      className="px-space-sm py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm"
                      type="button"
                    >
                      Chờ kiểm định (18)
                    </button>
                    <button
                      className="px-space-sm py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm"
                      type="button"
                    >
                      Đang sửa chữa (4)
                    </button>
                    <button
                      className="px-space-sm py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm"
                      type="button"
                    >
                      Đạt chuẩn (8)
                    </button>
                  </div>
                </div>

                {/* Device List Table */}
                <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[620px]">
                      <thead>
                        <tr className="bg-surface-container-low text-secondary font-label-sm text-label-sm uppercase tracking-wider">
                          <th className="py-space-sm px-space-md font-semibold">
                            Mã Thiết Bị / QR
                          </th>
                          <th className="py-space-sm px-space-md font-semibold">
                            Cấu Hình Rà Soát
                          </th>
                          <th className="py-space-sm px-space-md font-semibold">
                            Hiện Trạng Tiếp Nhận
                          </th>
                          <th className="py-space-sm px-space-md font-semibold">
                            Kỹ Thuật Viên
                          </th>
                          <th className="py-space-sm px-space-md font-semibold">
                            Trạng Thái
                          </th>
                          <th className="py-space-sm px-space-md text-right font-semibold">
                            Thao Tác
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-transparent font-body-sm text-body-sm text-on-surface">
                        <tr className="bg-primary/5 hover:bg-primary/10 transition-colors">
                          <td className="py-3 px-space-md">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                              <div>
                                <div className="font-code-num text-code-num font-bold text-primary">
                                  TB-DELL-5520
                                </div>
                                <div className="font-label-sm text-label-sm text-secondary">
                                  Dell Latitude 5520
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-space-md">
                            <div className="font-medium">
                              Core i5-1135G7 / 8GB RAM
                            </div>
                            <div className="text-secondary font-code-num text-code-num">
                              SSD 128GB SATA • 15.6" FHD
                            </div>
                          </td>
                          <td className="py-3 px-space-md">
                            <span className="inline-flex items-center gap-1 text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-label-sm text-label-sm font-semibold">
                              <span className="material-symbols-outlined text-[14px]">
                                battery_alert
                              </span>{" "}
                              Pin 51%, thiếu adapter
                            </span>
                          </td>
                          <td className="py-3 px-space-md">
                            <div className="font-medium text-on-surface">
                              Nguyễn Văn Minh
                            </div>
                            <div className="text-secondary font-label-sm text-label-sm">
                              KTV-04 (Điện tử)
                            </div>
                          </td>
                          <td className="py-3 px-space-md">
                            <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-semibold">
                              Đang rà soát
                            </span>
                          </td>
                          <td className="py-3 px-space-md text-right">
                            <button
                              className="px-2.5 py-1 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm font-semibold shadow-sm inline-flex items-center gap-1"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[14px]">
                                edit_document
                              </span>{" "}
                              Đang Mở
                            </button>
                          </td>
                        </tr>

                        <tr className="hover:bg-surface-container-low transition-colors">
                          <td className="py-3 px-space-md">
                            <div className="font-code-num text-code-num font-bold text-on-surface">
                              TB-THNK-X1C
                            </div>
                            <div className="font-label-sm text-label-sm text-secondary">
                              ThinkPad X1 Carbon G6
                            </div>
                          </td>
                          <td className="py-3 px-space-md">
                            <div className="font-medium">
                              Core i7-8550U / 16GB RAM
                            </div>
                            <div className="text-secondary font-code-num text-code-num">
                              SSD 512GB NVMe • 14" IPS
                            </div>
                          </td>
                          <td className="py-3 px-space-md">
                            <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-label-sm text-label-sm font-semibold">
                              <span className="material-symbols-outlined text-[14px]">
                                check_circle
                              </span>{" "}
                              Máy đẹp 95%, đủ sạc 65W
                            </span>
                          </td>
                          <td className="py-3 px-space-md">
                            <div className="font-medium text-on-surface">
                              Trần Hùng
                            </div>
                            <div className="text-secondary font-label-sm text-label-sm">
                              KTV Trưởng
                            </div>
                          </td>
                          <td className="py-3 px-space-md">
                            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-label-sm text-label-sm font-semibold">
                              Đạt Grade A
                            </span>
                          </td>
                          <td className="py-3 px-space-md text-right">
                            <button
                              className="px-2.5 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm"
                              type="button"
                            >
                              Xem Phiếu
                            </button>
                          </td>
                        </tr>

                        <tr className="hover:bg-surface-container-low transition-colors">
                          <td className="py-3 px-space-md">
                            <div className="font-code-num text-code-num font-bold text-on-surface">
                              TB-HP-PRO400
                            </div>
                            <div className="font-label-sm text-label-sm text-secondary">
                              HP ProDesk 400 G5 MT
                            </div>
                          </td>
                          <td className="py-3 px-space-md">
                            <div className="font-medium">
                              Core i3-8100 / 4GB RAM
                            </div>
                            <div className="text-secondary font-code-num text-code-num">
                              HDD 500GB cơ • Cần SSD
                            </div>
                          </td>
                          <td className="py-3 px-space-md">
                            <span className="inline-flex items-center gap-1 text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-label-sm text-label-sm font-semibold">
                              <span className="material-symbols-outlined text-[14px]">
                                speed
                              </span>{" "}
                              Ổ cứng đọc rất chậm
                            </span>
                          </td>
                          <td className="py-3 px-space-md">
                            <div className="font-medium text-on-surface">
                              Lê Minh
                            </div>
                            <div className="text-secondary font-label-sm text-label-sm">
                              KTV-02 (Phần cứng)
                            </div>
                          </td>
                          <td className="py-3 px-space-md">
                            <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-label-sm text-label-sm font-semibold">
                              Chờ Thay RAM/SSD
                            </span>
                          </td>
                          <td className="py-3 px-space-md text-right">
                            <button
                              className="px-2.5 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm"
                              type="button"
                            >
                              Xem Phiếu
                            </button>
                          </td>
                        </tr>

                        <tr className="hover:bg-surface-container-low transition-colors">
                          <td className="py-3 px-space-md">
                            <div className="font-code-num text-code-num font-bold text-on-surface">
                              TB-IPAD-G9
                            </div>
                            <div className="font-label-sm text-label-sm text-secondary">
                              Apple iPad Gen 9 WiFi
                            </div>
                          </td>
                          <td className="py-3 px-space-md">
                            <div className="font-medium">A13 Bionic / 64GB</div>
                            <div className="text-secondary font-code-num text-code-num">
                              Retina 10.2 inch • iOS 16.5
                            </div>
                          </td>
                          <td className="py-3 px-space-md">
                            <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-label-sm text-label-sm font-semibold">
                              <span className="material-symbols-outlined text-[14px]">
                                verified
                              </span>{" "}
                              Pin 94%, nứt kính nhẹ
                            </span>
                          </td>
                          <td className="py-3 px-space-md">
                            <div className="font-medium text-on-surface">
                              Quốc Anh
                            </div>
                            <div className="text-secondary font-label-sm text-label-sm">
                              KTV-05 (Thiết bị số)
                            </div>
                          </td>
                          <td className="py-3 px-space-md">
                            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-label-sm text-label-sm font-semibold">
                              Đạt Grade B
                            </span>
                          </td>
                          <td className="py-3 px-space-md text-right">
                            <button
                              className="px-2.5 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm"
                              type="button"
                            >
                              Xem Phiếu
                            </button>
                          </td>
                        </tr>

                        <tr className="hover:bg-surface-container-low transition-colors">
                          <td className="py-3 px-space-md">
                            <div className="font-code-num text-code-num font-bold text-on-surface">
                              TB-LEN-T480
                            </div>
                            <div className="font-label-sm text-label-sm text-secondary">
                              Lenovo ThinkPad T480
                            </div>
                          </td>
                          <td className="py-3 px-space-md">
                            <div className="font-medium">
                              Core i5-8250U / 8GB RAM
                            </div>
                            <div className="text-secondary font-code-num text-code-num">
                              SSD 256GB • Lỗi main nguồn
                            </div>
                          </td>
                          <td className="py-3 px-space-md">
                            <span className="inline-flex items-center gap-1 text-rose-700 bg-rose-50 px-2 py-0.5 rounded font-label-sm text-label-sm font-semibold">
                              <span className="material-symbols-outlined text-[14px]">
                                cancel
                              </span>{" "}
                              Cháy mạch sạc Type-C
                            </span>
                          </td>
                          <td className="py-3 px-space-md">
                            <div className="font-medium text-on-surface">
                              Nguyễn Văn Minh
                            </div>
                            <div className="text-secondary font-label-sm text-label-sm">
                              KTV-04 (Điện tử)
                            </div>
                          </td>
                          <td className="py-3 px-space-md">
                            <span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 font-label-sm text-label-sm font-semibold">
                              Đề Xuất Rã Xác
                            </span>
                          </td>
                          <td className="py-3 px-space-md text-right">
                            <button
                              className="px-2.5 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm"
                              type="button"
                            >
                              Xem Phiếu
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Table Pagination Footer */}
                  <div className="flex items-center justify-between p-space-md bg-surface-container-low">
                    <div className="font-body-sm text-body-sm text-secondary">
                      Hiển thị{" "}
                      <span className="font-medium text-on-surface">1 - 5</span>{" "}
                      trong tổng số{" "}
                      <span className="font-medium text-on-surface">30</span>{" "}
                      thiết bị lô #LO-2024-HN09
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-secondary hover:text-on-surface disabled:opacity-40"
                        disabled={true}
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          chevron_left
                        </span>
                      </button>
                      <button
                        className="w-8 h-8 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm font-semibold"
                        type="button"
                      >
                        1
                      </button>
                      <button
                        className="w-8 h-8 rounded-lg bg-surface-container-lowest hover:bg-surface-container flex items-center justify-center text-on-surface font-label-sm text-label-sm"
                        type="button"
                      >
                        2
                      </button>
                      <button
                        className="w-8 h-8 rounded-lg bg-surface-container-lowest hover:bg-surface-container flex items-center justify-center text-on-surface font-label-sm text-label-sm"
                        type="button"
                      >
                        3
                      </button>
                      <button
                        className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-secondary hover:text-on-surface"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          chevron_right
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* BATCH VERIFICATION METRICS CARD (VISUAL INLINE SVG) */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-space-md">
                  <div className="flex items-center gap-space-md">
                    <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
                      <svg
                        className="w-16 h-16 transform -rotate-90"
                        viewBox="0 0 36 36"
                      >
                        <path
                          className="text-surface-container"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3.5"
                        ></path>
                        <path
                          className="text-primary"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="currentColor"
                          strokeDasharray="75, 100"
                          strokeLinecap="round"
                          strokeWidth="3.5"
                        ></path>
                      </svg>
                      <span className="absolute font-code-num text-code-num font-bold text-primary">
                        75%
                      </span>
                    </div>
                    <div>
                      <div className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        Tỷ Lệ Tái Sử Dụng Thành Công
                      </div>
                      <div className="font-body-sm text-body-sm text-secondary">
                        Trung bình toàn trạm HUB-01: 75% máy sau kiểm định đủ
                        điều kiện cấp phát học sinh, 20% cần sửa chữa, 5% rã
                        xác.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="w-3 h-3 rounded-full bg-tertiary"></span>
                    <span className="font-label-sm text-label-sm font-semibold text-secondary">
                      Đạt chuẩn ISO-EduHardware
                    </span>
                  </div>
                </div>
              </section>

              {/* RIGHT PANE: 5/12 - SINGLE-ACTION INSPECTION PANEL */}
              <section className="lg:col-span-5 flex flex-col gap-space-md">
                <div className="bg-surface-container-lowest rounded-xl shadow-md overflow-hidden flex flex-col">
                  {/* Inspection Header */}
                  <div className="p-space-md bg-surface-container-high flex items-center justify-between">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-8 h-8 rounded-lg bg-primary text-on-primary flex items-center justify-center font-bold">
                        <span className="material-symbols-outlined text-[18px]">
                          fact_check
                        </span>
                      </div>
                      <div>
                        <div className="font-label-sm text-label-sm text-secondary uppercase font-semibold">
                          Biên Bản Kiểm Định 1 Chạm
                        </div>
                        <div className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          #PKD-8821 • TB-DELL-5520
                        </div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-label-sm text-label-sm font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-ping"></span>{" "}
                      Cần Quyết Định
                    </span>
                  </div>

                  {/* Device Snapshot & Specs Summary */}
                  <div className="p-space-md flex flex-col gap-space-md">
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-space-sm items-center bg-surface-container-low p-space-sm rounded-xl">
                      <div className="sm:col-span-5 relative rounded-lg overflow-hidden h-28 bg-surface-container">
                        <img
                          alt="A clean top-down technical photo of a modern black Dell Latitude business laptop"
                          className="w-full h-full object-cover"
                          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
                        />
                        <div className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-on-surface/80 text-surface font-code-num text-label-sm">
                          Ảnh Thật KTV
                        </div>
                      </div>
                      <div className="sm:col-span-7 flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                          <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                            Dell Latitude 5520
                          </span>
                          <span className="font-code-num text-code-num bg-surface-container px-1.5 py-0.5 rounded font-semibold text-secondary">
                            SN: 7X89KL2
                          </span>
                        </div>
                        <div className="font-body-sm text-body-sm text-secondary">
                          Nguồn gốc:{" "}
                          <strong className="text-on-surface">
                            Tập đoàn VNPT Hà Nội
                          </strong>
                        </div>
                        <div className="font-body-sm text-body-sm text-secondary">
                          Dự kiến bàn giao:{" "}
                          <strong className="text-primary font-medium">
                            THCS Mường Lát (Thanh Hóa)
                          </strong>
                        </div>
                        <div className="flex items-center gap-1 mt-1 text-secondary font-label-sm text-label-sm">
                          <span className="material-symbols-outlined text-[14px] text-tertiary">
                            person
                          </span>
                          KTV thực hiện: KS. Nguyễn Văn Minh (KTV-04)
                        </div>
                      </div>
                    </div>

                    {/* 5-step Technical Evaluation Checklist */}
                    <div className="flex flex-col gap-space-xs">
                      <div className="font-label-sm text-label-sm text-secondary uppercase font-semibold tracking-wider flex items-center justify-between">
                        <span className="">
                          Hạng Mục Kiểm Tra Kỹ Thuật (7 Bước Chuẩn)
                        </span>
                        <span className="text-tertiary font-bold">
                          4/5 Mục Đạt
                        </span>
                      </div>
                      <div className="space-y-2 mt-1">
                        <div className="p-2.5 rounded-lg bg-surface-container-low flex items-center justify-between gap-space-sm">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px] text-emerald-600">
                              monitor
                            </span>
                            <div>
                              <div className="font-body-sm text-body-sm font-semibold text-on-surface">
                                1. Màn Hình &amp; Tấm Nền IPS
                              </div>
                              <div className="text-secondary font-label-sm text-label-sm">
                                Độ sáng 280 nits, không điểm chết, không ám ố
                              </div>
                            </div>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-label-sm text-label-sm font-semibold shrink-0">
                            Grade A
                          </span>
                        </div>

                        <div className="p-2.5 rounded-lg bg-surface-container-low flex items-center justify-between gap-space-sm">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px] text-emerald-600">
                              keyboard
                            </span>
                            <div>
                              <div className="font-body-sm text-body-sm font-semibold text-on-surface">
                                2. Bàn Phím &amp; Touchpad
                              </div>
                              <div className="text-secondary font-label-sm text-label-sm">
                                Test 100% phím phản hồi nhạy, trackpad mượt mà
                              </div>
                            </div>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-label-sm text-label-sm font-semibold shrink-0">
                            Đạt 100%
                          </span>
                        </div>

                        <div className="p-2.5 rounded-lg bg-amber-50/80 flex items-center justify-between gap-space-sm">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px] text-amber-600">
                              battery_alert
                            </span>
                            <div>
                              <div className="font-body-sm text-body-sm font-semibold text-amber-900">
                                3. Dung Lượng Pin &amp; Nguồn
                              </div>
                              <div className="text-amber-800 font-label-sm text-label-sm">
                                Độ chai pin 49% (Sức khỏe 51%) • Cần thay thế
                                pin 42Wh
                              </div>
                            </div>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-amber-200 text-amber-900 font-label-sm text-label-sm font-bold shrink-0">
                            Yếu Pin
                          </span>
                        </div>

                        <div className="p-2.5 rounded-lg bg-amber-50/80 flex items-center justify-between gap-space-sm">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px] text-amber-600">
                              hard_drive
                            </span>
                            <div>
                              <div className="font-body-sm text-body-sm font-semibold text-amber-900">
                                4. Ổ Cứng &amp; Tốc Độ Đọc Ghi
                              </div>
                              <div className="text-amber-800 font-label-sm text-label-sm">
                                128GB SATA đọc chậm • Đề xuất nâng 256GB NVMe
                                EduOS
                              </div>
                            </div>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-amber-200 text-amber-900 font-label-sm text-label-sm font-bold shrink-0">
                            Cần Nâng Cấp
                          </span>
                        </div>

                        <div className="p-2.5 rounded-lg bg-surface-container-low flex items-center justify-between gap-space-sm">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px] text-emerald-600">
                              thermostat
                            </span>
                            <div>
                              <div className="font-body-sm text-body-sm font-semibold text-on-surface">
                                5. Nhiệt Độ &amp; Hiệu Năng CPU/RAM
                              </div>
                              <div className="text-secondary font-label-sm text-label-sm">
                                Stress test 15 phút đạt 68°C, quạt tản nhiệt êm
                                ái
                              </div>
                            </div>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-label-sm text-label-sm font-semibold shrink-0">
                            Ổn Định
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* The 1-touch Decision Engine */}
                    <div className="flex flex-col gap-space-sm pt-2 bg-surface-container-low p-space-md rounded-xl">
                      <div className="flex items-center justify-between">
                        <div className="font-headline-sm text-headline-sm text-on-surface font-bold flex items-center gap-1">
                          <span className="material-symbols-outlined text-primary text-[20px]">
                            call_split
                          </span>
                          Quyết Định Phân Luồng 1 Chạm
                        </div>
                        <span className="font-label-sm text-label-sm text-secondary">
                          Chọn 1 trong 3 hướng
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-secondary">
                        Hệ thống tự động đồng bộ hóa kho linh kiện, cập nhật thẻ
                        trạng thái tài sản và gửi chỉ thị tức thời cho phân
                        xưởng tương ứng.
                      </p>

                      <div className="grid grid-cols-1 gap-2 mt-1">
                        <label className="cursor-pointer flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-lowest shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
                          <input
                            className="mt-1 text-primary focus:ring-primary w-4 h-4"
                            defaultChecked
                            name="flow_direction"
                            type="radio"
                            value="repair"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="font-body-md text-body-md font-bold text-primary flex items-center gap-1">
                                1. Chuyển Xưởng Sửa Chữa &amp; Nâng Cấp
                              </span>
                              <span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold">
                                Khuyến Nghị KTV
                              </span>
                            </div>
                            <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                              Cần thay Pin 42Wh mới • Nâng cấp SSD 256GB NVMe
                              (Linh kiện sẵn có tại Kệ K3-LK).
                            </div>
                            <div className="flex items-center gap-2 mt-1.5 text-secondary font-label-sm text-label-sm">
                              <span className="font-medium text-primary">
                                Dự kiến hoàn tất: 24h
                              </span>
                              <span className="">•</span>
                              <span className="">
                                Chi phí định mức: 480.000 VNĐ (Quỹ tài trợ)
                              </span>
                            </div>
                          </div>
                        </label>

                        <label className="cursor-pointer flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-lowest/60 hover:bg-surface-container-lowest transition-all">
                          <input
                            className="mt-1 text-primary focus:ring-primary w-4 h-4"
                            name="flow_direction"
                            type="radio"
                            value="ready"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="font-body-md text-body-md font-bold text-on-surface">
                                2. Đạt Chuẩn Sẵn Sàng Xuất Bàn Giao
                              </span>
                              <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-label-sm text-label-sm font-semibold">
                                Grade A / Grade B
                              </span>
                            </div>
                            <div className="font-body-sm text-body-sm text-secondary mt-0.5">
                              Đủ tiêu chuẩn phòng tin học học sinh, đã nạp EduOS
                              Linux, niêm phong tem kiểm định.
                            </div>
                          </div>
                        </label>

                        <label className="cursor-pointer flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-lowest/60 hover:bg-surface-container-lowest transition-all">
                          <input
                            className="mt-1 text-primary focus:ring-primary w-4 h-4"
                            name="flow_direction"
                            type="radio"
                            value="recycle"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="font-body-md text-body-md font-bold text-rose-800">
                                3. Rã Xác Tái Chế / Thu Hồi Linh Kiện
                              </span>
                              <span className="px-2 py-0.5 rounded bg-rose-50 text-rose-700 font-label-sm text-label-sm font-semibold">
                                Thanh Lý / Rã Phụ Tùng
                              </span>
                            </div>
                            <div className="font-body-sm text-body-sm text-secondary mt-0.5">
                              Hư hỏng bo mạch chủ, màn hình vỡ hoặc chi phí phục
                              hồi vượt quá 70% giá trị thiết bị.
                            </div>
                          </div>
                        </label>
                      </div>

                      <button
                        className={`w-full mt-2 py-3 px-space-md rounded-xl font-headline-sm text-headline-sm font-semibold flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.99] ${
                          isSuccess
                            ? "bg-tertiary text-on-tertiary"
                            : "bg-primary hover:bg-primary-container text-on-primary"
                        } ${isExecuting ? "opacity-90" : ""}`}
                        onClick={handleExecuteDecision}
                        type="button"
                      >
                        {isExecuting ? (
                          <>
                            <span className="material-symbols-outlined animate-spin text-[20px]">
                              sync
                            </span>
                            <span>Đang lưu và điều chuyển phân luồng...</span>
                          </>
                        ) : isSuccess ? (
                          <>
                            <span className="material-symbols-outlined text-[20px]">
                              check_circle
                            </span>
                            <span>ĐÃ PHÂN LUỒNG THÀNH CÔNG (#PKD-8821)</span>
                          </>
                        ) : (
                          <>
                            <span className="material-symbols-outlined text-[22px]">
                              verified
                            </span>
                            <span className="">
                              LƯU KẾT QUẢ &amp; PHÂN LUỒNG 1 CHẠM
                            </span>
                          </>
                        )}
                      </button>
                      <div className="text-center font-label-sm text-label-sm text-secondary">
                        Ghi nhận vào sổ kiểm định kho lúc{" "}
                        <span className="font-code-num text-code-num font-semibold text-on-surface">
                          {currentTimestamp}
                        </span>{" "}
                        • KTV-04
                      </div>
                    </div>

                    {/* Static Warehouse Rack & Audit Compliance Notice */}
                    <div className="bg-surface-container p-space-sm rounded-xl flex items-start gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
                      <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">
                        info
                      </span>
                      <div className="flex flex-col gap-0.5">
                        <span className="font-semibold text-on-surface">
                          Quy chuẩn Kho Vận EduShare (DOCUMENT_37):
                        </span>
                        <p className="text-secondary leading-snug">
                          Vị trí kệ định danh hiển thị tĩnh:{" "}
                          <strong className="text-on-surface font-semibold">
                            Khu A2 - Kệ Tầng 04 (Ô 12)
                          </strong>
                          . Cổng Kỹ thuật viên không có quyền thay đổi vị trí
                          lưu kho cố định; Lệnh điều chuyển và vận đơn sẽ do
                          Trưởng Kho phê duyệt độc lập sau khi phân luồng hoàn
                          tất.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default WarehouseReceivePage;
