import { useState, useEffect } from "react";
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
    <div className="bg-background font-body-md text-on-surface min-h-screen antialiased">
      <aside className="bg-surface-container-lowest fixed top-0 left-0 z-50 flex h-full w-72 flex-col justify-between overflow-y-auto shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="flex flex-col">
          <div className="p-space-lg gap-space-xs bg-surface-container-low flex flex-col">
            <div className="gap-space-sm flex items-center">
              <div className="bg-primary text-on-primary flex h-9 w-9 items-center justify-center rounded-xl shadow-sm">
                <span className="material-symbols-outlined text-[22px]">inventory_2</span>
              </div>
              <div>
                <div className="font-headline-sm text-headline-sm text-primary tracking-tight">EduShare VN</div>
                <div className="font-label-sm text-label-sm text-secondary font-semibold uppercase">
                  Kho &amp; Kỹ Thuật
                </div>
              </div>
            </div>
            <div className="mt-space-sm gap-space-xs flex flex-wrap items-center">
              <span className="px-space-sm bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm rounded-lg py-0.5 font-semibold">
                Kho Tổng Miền Bắc (TK-MB)
              </span>
              <div className="px-space-xs bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1 rounded-lg py-0.5">
                <span className="bg-tertiary h-1.5 w-1.5 rounded-full"></span>
                <span className="">Trực tuyến 63 Tỉnh Thành</span>
              </div>
            </div>
          </div>
          <nav className="gap-space-lg p-space-md mt-space-sm flex flex-col">
            <div className="flex flex-col gap-1">
              <div className="px-space-sm pb-space-xs font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">
                Nhập Kho &amp; Tiếp Nhận
              </div>
              <Link
                className="gap-space-sm px-space-md py-space-sm bg-primary text-on-primary flex items-center rounded-lg font-medium shadow-sm transition-all"
                to="/warehouse/receive"
              >
                <span className="material-symbols-outlined text-[20px]">verified</span>
                <span className="font-body-md text-body-md">Tiếp nhận &amp; Kiểm định</span>
              </Link>
              <Link
                className="gap-space-sm px-space-md py-space-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center rounded-xl transition-all"
                to="/warehouse/scan-qr"
              >
                <span className="material-symbols-outlined text-[20px]">qr_code_scanner</span>
                <span className="font-body-md text-body-md">Quét QR phân luồng</span>
              </Link>
              <Link
                className="gap-space-sm px-space-md py-space-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center rounded-xl transition-all"
                to="/warehouse/donation-receipt"
              >
                <span className="material-symbols-outlined text-[20px]">receipt_long</span>
                <span className="font-body-md text-body-md">Phiếu trao tặng</span>
              </Link>
            </div>
            <div className="flex flex-col gap-1">
              <div className="px-space-sm pb-space-xs font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">
                Quản Lý Kho Bãi
              </div>
              <Link
                className="gap-space-sm px-space-md py-space-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center rounded-xl transition-all"
                to="/warehouse/inventory"
              >
                <span className="material-symbols-outlined text-[20px]">warehouse</span>
                <span className="font-body-md text-body-md">Tồn kho thiết bị</span>
              </Link>
              <Link
                className="px-space-md py-space-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center justify-between rounded-xl transition-all"
                to="/warehouse/racks"
              >
                <div className="gap-space-sm flex items-center">
                  <span className="material-symbols-outlined text-[20px]">shelves</span>
                  <span className="font-body-md text-body-md">Vị trí kệ định danh</span>
                </div>
                <span className="bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm rounded-lg px-1.5 py-0.5 font-semibold">
                  Xem
                </span>
              </Link>
              <Link
                className="gap-space-sm px-space-md py-space-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center rounded-xl transition-all"
                to="/warehouse/audit-report"
              >
                <span className="material-symbols-outlined text-[20px]">fact_check</span>
                <span className="font-body-md text-body-md">Kiểm kê &amp; Báo cáo</span>
              </Link>
            </div>
            <div className="flex flex-col gap-1">
              <div className="px-space-sm pb-space-xs font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">
                Điều Phối &amp; Vận Chuyển
              </div>
              <Link
                className="gap-space-sm px-space-md py-space-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center rounded-xl transition-all"
                to="/warehouse/dispatch"
              >
                <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                <span className="font-body-md text-body-md">Lệnh điều chuyển &amp; Vận đơn</span>
              </Link>
              <Link
                className="gap-space-sm px-space-md py-space-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center rounded-xl transition-all"
                to="/warehouse/delivery-history"
              >
                <span className="material-symbols-outlined text-[20px]">schedule</span>
                <span className="font-body-md text-body-md">Lịch sử đợt giao</span>
              </Link>
              <Link
                className="gap-space-sm px-space-md py-space-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center rounded-xl transition-all"
                to="/warehouse/incident-report"
              >
                <span className="material-symbols-outlined text-[20px]">report_problem</span>
                <span className="font-body-md text-body-md">Báo cáo sự cố cá nhân</span>
              </Link>
            </div>
          </nav>
        </div>
        <div className="p-space-md bg-surface-container-lowest m-space-md flex flex-col gap-1 rounded-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase">Cổng Kho Vận</span>
            <span className="font-code-num text-code-num text-secondary bg-surface-container rounded px-1.5 py-0.5">
              v2.8.4
            </span>
          </div>
          <div className="font-body-sm text-body-sm text-on-surface-variant mt-1 flex items-center gap-1">
            <span className="material-symbols-outlined text-tertiary text-[16px]">support_agent</span>
            <span className="">
              Kỹ thuật kho: <strong className="text-on-surface font-semibold">1900 6829</strong>
            </span>
          </div>
        </div>
      </aside>

      <div className="pl-72">
        <header className="bg-surface-container-lowest/90 px-gutter-desktop gap-space-md fixed top-0 right-0 left-72 z-40 flex h-16 items-center justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
          <div className="gap-space-sm font-body-sm text-body-sm text-on-surface-variant flex shrink-0 items-center">
            <span className="text-primary font-medium">EduShare VN Kho</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="">Nhập Kho &amp; Tiếp Nhận</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-on-surface font-semibold">Tiếp Nhận &amp; Kiểm Định Thiết Bị</span>
          </div>
          <div className="mx-space-md max-w-xl flex-1">
            <div className="relative flex w-full items-center">
              <span className="material-symbols-outlined text-secondary absolute left-3 text-[20px]">search</span>
              <input
                className="pr-space-md bg-surface-container-low text-on-surface font-body-sm text-body-sm placeholder:text-secondary focus:bg-surface-container-lowest focus:ring-primary-container w-full rounded-xl py-1.5 pl-10 transition-all outline-none focus:ring-2"
                placeholder="Tra cứu mã vận đơn, số lô hàng, serial hoặc quét mã QR thiết bị..."
                type="search"
              />
            </div>
          </div>
          <div className="gap-space-sm flex shrink-0 items-center">
            <button
              className="px-space-md bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-1 rounded-xl py-1.5 shadow-[0_1px_8px_rgba(0,0,0,0.04)] transition-all"
              type="button"
            >
              <span className="material-symbols-outlined text-primary text-[18px]">qr_code_scanner</span>
              <span className="">Quét QR</span>
            </button>
            <button
              className="bg-surface-container-low hover:bg-surface-container text-on-surface-variant relative flex h-9 w-9 items-center justify-center rounded-xl transition-all"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="bg-error absolute top-2 right-2 h-2 w-2 rounded-full"></span>
            </button>
            <div className="gap-space-sm pl-space-sm ml-space-xs flex items-center">
              <div className="hidden text-right xl:block">
                <div className="font-label-md text-label-md text-on-surface font-semibold">Trần Hùng (TK-MB-04)</div>
                <div className="font-body-sm text-body-sm text-secondary">
                  Trưởng Kho Kỹ Thuật Hà Nội • Kho Tổng Miền Bắc (HUB-01 Hà Nội)
                </div>
              </div>
              <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full">
                <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
              </div>
            </div>
          </div>
        </header>

        <main className="px-gutter-desktop py-space-lg bg-background min-h-screen w-full pt-16">
          <div className="gap-space-lg pb-space-xl flex w-full flex-col">
            {/* Page Header & Primary Metrics */}
            <div className="gap-space-md flex flex-col">
              <div className="gap-space-md bg-surface-container-lowest p-space-lg relative flex flex-col justify-between overflow-hidden rounded-xl shadow-sm lg:flex-row lg:items-center">
                <div className="bg-primary/5 pointer-events-none absolute -top-12 -right-12 h-48 w-48 rounded-full blur-2xl"></div>
                <div className="z-10 flex max-w-3xl flex-col gap-1">
                  <div className="gap-space-xs flex flex-wrap items-center">
                    <span className="bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm rounded-lg px-2 py-0.5 font-semibold tracking-wider uppercase">
                      Cổng Thủ Kho &amp; KTV - Trạm HUB-01 Miền Bắc
                    </span>
                    <span className="bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm rounded-lg px-2 py-0.5 font-medium">
                      Phiên bản EduOS v3.2.1-Audited
                    </span>
                  </div>
                  <h1 className="font-headline-lg text-headline-lg text-on-surface mt-1 font-semibold tracking-tight">
                    Tiếp Nhận &amp; Kiểm Định Kỹ Thuật Thiết Bị
                  </h1>
                  <p className="font-body-md text-body-md text-secondary">
                    Quy trình tiếp nhận lô hàng quyên góp từ doanh nghiệp, rà soát đối chiếu thông số thực tế, phân loại
                    linh kiện và phê duyệt phân luồng 1 chạm theo tiêu chuẩn phòng máy trường học vùng cao.
                  </p>
                </div>
                <div className="gap-space-sm z-10 flex shrink-0 flex-wrap items-center">
                  <button
                    className="gap-space-xs px-space-md bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center rounded-lg py-2 transition-all"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-secondary text-[18px]">file_download</span>
                    <span className="">Xuất Biên Bản (.xlsx)</span>
                  </button>
                  <button
                    className="gap-space-xs px-space-md bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center rounded-lg py-2 transition-all"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-primary text-[18px]">qr_code_scanner</span>
                    <span className="">Quét Tiếp Nhận</span>
                  </button>
                  <button
                    className="gap-space-xs px-space-md bg-primary-container text-on-primary hover:bg-primary font-label-md text-label-md flex items-center rounded-lg py-2 shadow-sm transition-all"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">add_circle</span>
                    <span className="">+ Nhận Lô Mới</span>
                  </button>
                </div>
              </div>

              {/* 4 Bento Kpi Cards */}
              <div className="gap-space-md grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
                <div className="bg-surface-container-lowest p-space-md gap-space-sm group relative flex flex-col justify-between overflow-hidden rounded-xl shadow-sm transition-all hover:shadow-md">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-label-sm text-label-sm text-secondary font-semibold uppercase">
                        Lô Chờ Tiếp Nhận
                      </div>
                      <div className="font-headline-lg text-headline-lg text-on-surface mt-1 font-bold">
                        18 <span className="font-body-md text-body-md text-secondary font-normal">lô</span>
                      </div>
                    </div>
                    <div className="bg-primary-fixed text-primary flex h-10 w-10 items-center justify-center rounded-xl">
                      <span className="material-symbols-outlined text-[22px]">inbox</span>
                    </div>
                  </div>
                  <div className="text-on-surface-variant font-body-sm text-body-sm bg-surface-container-low -mx-space-md -mb-space-md px-space-md flex items-center justify-between py-2 pt-2">
                    <span className="truncate">420 máy mới từ FPT, VNPT, MB Bank</span>
                    <span className="text-primary font-code-num text-code-num shrink-0 font-semibold">+3 lô sáng</span>
                  </div>
                </div>

                <div className="bg-surface-container-lowest p-space-md gap-space-sm group relative flex flex-col justify-between overflow-hidden rounded-xl shadow-sm transition-all hover:shadow-md">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-label-sm text-label-sm text-secondary font-semibold uppercase">
                        Đang Kiểm Định Kỹ Thuật
                      </div>
                      <div className="font-headline-lg text-headline-lg text-on-surface mt-1 font-bold">
                        145 <span className="font-body-md text-body-md text-secondary font-normal">máy</span>
                      </div>
                    </div>
                    <div className="bg-secondary-container text-on-secondary-container flex h-10 w-10 items-center justify-center rounded-xl">
                      <span className="material-symbols-outlined text-[22px]">flaky</span>
                    </div>
                  </div>
                  <div className="text-on-surface-variant font-body-sm text-body-sm bg-surface-container-low -mx-space-md -mb-space-md px-space-md flex items-center justify-between py-2 pt-2">
                    <span className="truncate">Ưu tiên 35 máy: Mường Lát &amp; Pả Vi</span>
                    <span className="font-label-sm text-label-sm rounded bg-amber-100 px-1.5 py-0.5 font-semibold text-amber-800">
                      Gấp
                    </span>
                  </div>
                </div>

                <div className="bg-surface-container-lowest p-space-md gap-space-sm group relative flex flex-col justify-between overflow-hidden rounded-xl shadow-sm transition-all hover:shadow-md">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-label-sm text-label-sm text-secondary font-semibold uppercase">
                        Phân Luồng 1 Chạm Hôm Nay
                      </div>
                      <div className="font-headline-lg text-headline-lg text-primary mt-1 font-bold">
                        89 <span className="font-body-md text-body-md text-secondary font-normal">thiết bị</span>
                      </div>
                    </div>
                    <div className="bg-tertiary-fixed text-tertiary flex h-10 w-10 items-center justify-center rounded-xl">
                      <span className="material-symbols-outlined text-[22px]">touch_app</span>
                    </div>
                  </div>
                  <div className="text-on-surface-variant font-body-sm text-body-sm bg-surface-container-low -mx-space-md -mb-space-md px-space-md flex items-center justify-between py-2 pt-2">
                    <span className="truncate">Tỷ lệ xử lý tức thì: 100% không nghẽn</span>
                    <span className="text-tertiary font-code-num text-code-num font-semibold">Đạt KPI</span>
                  </div>
                </div>

                <div className="bg-surface-container-lowest p-space-md gap-space-sm group relative flex flex-col justify-between overflow-hidden rounded-xl shadow-sm transition-all hover:shadow-md">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-label-sm text-label-sm text-secondary font-semibold uppercase">
                        Đạt Chuẩn Sẵn Sàng Giao
                      </div>
                      <div className="font-headline-lg text-headline-lg text-tertiary mt-1 font-bold">
                        612 <span className="font-body-md text-body-md text-secondary font-normal">máy</span>
                      </div>
                    </div>
                    <div className="bg-surface-container-highest text-on-surface flex h-10 w-10 items-center justify-center rounded-xl">
                      <span className="material-symbols-outlined text-[22px]">check_circle</span>
                    </div>
                  </div>
                  <div className="text-on-surface-variant font-body-sm text-body-sm bg-surface-container-low -mx-space-md -mb-space-md px-space-md flex items-center justify-between py-2 pt-2">
                    <span className="truncate">Grade A: 82% • Grade B: 18%</span>
                    <span className="font-code-num text-code-num text-secondary">Kho Kệ A2</span>
                  </div>
                </div>
              </div>
            </div>

            {/* MAIN TWO-COLUMN WORKSPACE: 7/12 (LEFT) & 5/12 (RIGHT) */}
            <div className="gap-space-lg grid grid-cols-1 items-start lg:grid-cols-12">
              {/* LEFT PANE: 7/12 - INVENTORY & DEVICE INSPECTION QUEUE */}
              <section className="gap-space-md flex flex-col lg:col-span-7">
                {/* Active Batch Card Overview */}
                <div className="bg-surface-container-lowest p-space-md gap-space-sm flex flex-col rounded-xl shadow-sm">
                  <div className="gap-space-xs flex flex-wrap items-center justify-between">
                    <div className="gap-space-xs flex items-center">
                      <span className="bg-primary text-on-primary font-code-num text-code-num rounded-lg px-2 py-0.5 font-bold">
                        LÔ HIỆN HÀNH
                      </span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-semibold tracking-tight">
                        #LO-2024-HN09
                      </span>
                      <span className="text-secondary font-body-sm text-body-sm">
                        | Phiếu bàn giao: <strong className="text-on-surface font-semibold">#DON-2024-8842</strong>
                      </span>
                    </div>
                    <span className="bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm rounded-full px-2 py-0.5 font-semibold">
                      Tiếp nhận lúc: 08:30 - Hôm nay
                    </span>
                  </div>
                  <div className="gap-space-sm p-space-sm bg-surface-container-low grid grid-cols-1 rounded-xl sm:grid-cols-3">
                    <div>
                      <div className="font-label-sm text-label-sm text-secondary uppercase">Đơn Vị Trao Tặng</div>
                      <div className="font-body-md text-body-md text-on-surface mt-0.5 flex items-center gap-1 font-semibold">
                        <span className="material-symbols-outlined text-primary text-[16px]">domain</span>
                        Tập đoàn FPT (Trụ sở Cầu Giấy)
                      </div>
                    </div>
                    <div>
                      <div className="font-label-sm text-label-sm text-secondary uppercase">Quy Mô Lô Hàng</div>
                      <div className="font-body-md text-body-md text-on-surface mt-0.5 font-semibold">
                        30 Laptop ThinkPad T480s / HP
                      </div>
                    </div>
                    <div>
                      <div className="font-label-sm text-label-sm text-secondary uppercase">
                        Tiến Độ Rà Soát Kỹ Thuật
                      </div>
                      <div className="mt-1 flex items-center gap-2">
                        <div className="bg-surface-container h-2 w-full overflow-hidden rounded-full">
                          <div className="bg-primary h-full rounded-full" style={{ width: "40%" }}></div>
                        </div>
                        <span className="font-code-num text-code-num text-primary font-bold">12/30</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Filter & Search Bar */}
                <div className="bg-surface-container-lowest p-space-md gap-space-sm flex flex-col items-stretch justify-between rounded-xl shadow-sm sm:flex-row sm:items-center">
                  <div className="relative flex-1">
                    <span className="material-symbols-outlined text-secondary absolute top-2.5 left-3 text-[18px]">
                      search
                    </span>
                    <input
                      className="bg-surface-container-low text-on-surface font-body-sm text-body-sm placeholder:text-secondary focus:bg-surface-container-lowest focus:ring-primary-container w-full rounded-lg py-1.5 pr-3 pl-9 outline-none focus:ring-2"
                      placeholder="Tìm theo mã TB-..., Serial, model máy hoặc KTV..."
                      type="text"
                    />
                  </div>
                  <div className="gap-space-xs flex shrink-0 items-center overflow-x-auto">
                    <button
                      className="px-space-sm bg-primary text-on-primary font-label-sm text-label-sm rounded-lg py-1.5 font-semibold"
                      type="button"
                    >
                      Tất cả (30)
                    </button>
                    <button
                      className="px-space-sm bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm rounded-lg py-1.5"
                      type="button"
                    >
                      Chờ kiểm định (18)
                    </button>
                    <button
                      className="px-space-sm bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm rounded-lg py-1.5"
                      type="button"
                    >
                      Đang sửa chữa (4)
                    </button>
                    <button
                      className="px-space-sm bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm rounded-lg py-1.5"
                      type="button"
                    >
                      Đạt chuẩn (8)
                    </button>
                  </div>
                </div>

                {/* Device List Table */}
                <div className="bg-surface-container-lowest flex flex-col overflow-hidden rounded-xl shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[620px] border-collapse text-left">
                      <thead>
                        <tr className="bg-surface-container-low text-secondary font-label-sm text-label-sm tracking-wider uppercase">
                          <th className="py-space-sm px-space-md font-semibold">Mã Thiết Bị / QR</th>
                          <th className="py-space-sm px-space-md font-semibold">Cấu Hình Rà Soát</th>
                          <th className="py-space-sm px-space-md font-semibold">Hiện Trạng Tiếp Nhận</th>
                          <th className="py-space-sm px-space-md font-semibold">Kỹ Thuật Viên</th>
                          <th className="py-space-sm px-space-md font-semibold">Trạng Thái</th>
                          <th className="py-space-sm px-space-md text-right font-semibold">Thao Tác</th>
                        </tr>
                      </thead>
                      <tbody className="font-body-sm text-body-sm text-on-surface divide-y divide-transparent">
                        <tr className="bg-primary/5 hover:bg-primary/10 transition-colors">
                          <td className="px-space-md py-3">
                            <div className="flex items-center gap-2">
                              <span className="bg-primary h-2 w-2 animate-pulse rounded-full"></span>
                              <div>
                                <div className="font-code-num text-code-num text-primary font-bold">TB-DELL-5520</div>
                                <div className="font-label-sm text-label-sm text-secondary">Dell Latitude 5520</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-space-md py-3">
                            <div className="font-medium">Core i5-1135G7 / 8GB RAM</div>
                            <div className="text-secondary font-code-num text-code-num">SSD 128GB SATA • 15.6" FHD</div>
                          </td>
                          <td className="px-space-md py-3">
                            <span className="font-label-sm text-label-sm inline-flex items-center gap-1 rounded bg-amber-50 px-2 py-0.5 font-semibold text-amber-700">
                              <span className="material-symbols-outlined text-[14px]">battery_alert</span> Pin 51%,
                              thiếu adapter
                            </span>
                          </td>
                          <td className="px-space-md py-3">
                            <div className="text-on-surface font-medium">Nguyễn Văn Minh</div>
                            <div className="text-secondary font-label-sm text-label-sm">KTV-04 (Điện tử)</div>
                          </td>
                          <td className="px-space-md py-3">
                            <span className="bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm rounded-full px-2 py-0.5 font-semibold">
                              Đang rà soát
                            </span>
                          </td>
                          <td className="px-space-md py-3 text-right">
                            <button
                              className="bg-primary text-on-primary font-label-sm text-label-sm inline-flex items-center gap-1 rounded-lg px-2.5 py-1 font-semibold shadow-sm"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[14px]">edit_document</span> Đang Mở
                            </button>
                          </td>
                        </tr>

                        <tr className="hover:bg-surface-container-low transition-colors">
                          <td className="px-space-md py-3">
                            <div className="font-code-num text-code-num text-on-surface font-bold">TB-THNK-X1C</div>
                            <div className="font-label-sm text-label-sm text-secondary">ThinkPad X1 Carbon G6</div>
                          </td>
                          <td className="px-space-md py-3">
                            <div className="font-medium">Core i7-8550U / 16GB RAM</div>
                            <div className="text-secondary font-code-num text-code-num">SSD 512GB NVMe • 14" IPS</div>
                          </td>
                          <td className="px-space-md py-3">
                            <span className="font-label-sm text-label-sm inline-flex items-center gap-1 rounded bg-emerald-50 px-2 py-0.5 font-semibold text-emerald-700">
                              <span className="material-symbols-outlined text-[14px]">check_circle</span> Máy đẹp 95%,
                              đủ sạc 65W
                            </span>
                          </td>
                          <td className="px-space-md py-3">
                            <div className="text-on-surface font-medium">Trần Hùng</div>
                            <div className="text-secondary font-label-sm text-label-sm">KTV Trưởng</div>
                          </td>
                          <td className="px-space-md py-3">
                            <span className="font-label-sm text-label-sm rounded-full bg-emerald-100 px-2 py-0.5 font-semibold text-emerald-800">
                              Đạt Grade A
                            </span>
                          </td>
                          <td className="px-space-md py-3 text-right">
                            <button
                              className="bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm rounded-lg px-2.5 py-1"
                              type="button"
                            >
                              Xem Phiếu
                            </button>
                          </td>
                        </tr>

                        <tr className="hover:bg-surface-container-low transition-colors">
                          <td className="px-space-md py-3">
                            <div className="font-code-num text-code-num text-on-surface font-bold">TB-HP-PRO400</div>
                            <div className="font-label-sm text-label-sm text-secondary">HP ProDesk 400 G5 MT</div>
                          </td>
                          <td className="px-space-md py-3">
                            <div className="font-medium">Core i3-8100 / 4GB RAM</div>
                            <div className="text-secondary font-code-num text-code-num">HDD 500GB cơ • Cần SSD</div>
                          </td>
                          <td className="px-space-md py-3">
                            <span className="font-label-sm text-label-sm inline-flex items-center gap-1 rounded bg-amber-50 px-2 py-0.5 font-semibold text-amber-700">
                              <span className="material-symbols-outlined text-[14px]">speed</span> Ổ cứng đọc rất chậm
                            </span>
                          </td>
                          <td className="px-space-md py-3">
                            <div className="text-on-surface font-medium">Lê Minh</div>
                            <div className="text-secondary font-label-sm text-label-sm">KTV-02 (Phần cứng)</div>
                          </td>
                          <td className="px-space-md py-3">
                            <span className="font-label-sm text-label-sm rounded-full bg-amber-100 px-2 py-0.5 font-semibold text-amber-800">
                              Chờ Thay RAM/SSD
                            </span>
                          </td>
                          <td className="px-space-md py-3 text-right">
                            <button
                              className="bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm rounded-lg px-2.5 py-1"
                              type="button"
                            >
                              Xem Phiếu
                            </button>
                          </td>
                        </tr>

                        <tr className="hover:bg-surface-container-low transition-colors">
                          <td className="px-space-md py-3">
                            <div className="font-code-num text-code-num text-on-surface font-bold">TB-IPAD-G9</div>
                            <div className="font-label-sm text-label-sm text-secondary">Apple iPad Gen 9 WiFi</div>
                          </td>
                          <td className="px-space-md py-3">
                            <div className="font-medium">A13 Bionic / 64GB</div>
                            <div className="text-secondary font-code-num text-code-num">
                              Retina 10.2 inch • iOS 16.5
                            </div>
                          </td>
                          <td className="px-space-md py-3">
                            <span className="font-label-sm text-label-sm inline-flex items-center gap-1 rounded bg-emerald-50 px-2 py-0.5 font-semibold text-emerald-700">
                              <span className="material-symbols-outlined text-[14px]">verified</span> Pin 94%, nứt kính
                              nhẹ
                            </span>
                          </td>
                          <td className="px-space-md py-3">
                            <div className="text-on-surface font-medium">Quốc Anh</div>
                            <div className="text-secondary font-label-sm text-label-sm">KTV-05 (Thiết bị số)</div>
                          </td>
                          <td className="px-space-md py-3">
                            <span className="font-label-sm text-label-sm rounded-full bg-emerald-100 px-2 py-0.5 font-semibold text-emerald-800">
                              Đạt Grade B
                            </span>
                          </td>
                          <td className="px-space-md py-3 text-right">
                            <button
                              className="bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm rounded-lg px-2.5 py-1"
                              type="button"
                            >
                              Xem Phiếu
                            </button>
                          </td>
                        </tr>

                        <tr className="hover:bg-surface-container-low transition-colors">
                          <td className="px-space-md py-3">
                            <div className="font-code-num text-code-num text-on-surface font-bold">TB-LEN-T480</div>
                            <div className="font-label-sm text-label-sm text-secondary">Lenovo ThinkPad T480</div>
                          </td>
                          <td className="px-space-md py-3">
                            <div className="font-medium">Core i5-8250U / 8GB RAM</div>
                            <div className="text-secondary font-code-num text-code-num">SSD 256GB • Lỗi main nguồn</div>
                          </td>
                          <td className="px-space-md py-3">
                            <span className="font-label-sm text-label-sm inline-flex items-center gap-1 rounded bg-rose-50 px-2 py-0.5 font-semibold text-rose-700">
                              <span className="material-symbols-outlined text-[14px]">cancel</span> Cháy mạch sạc Type-C
                            </span>
                          </td>
                          <td className="px-space-md py-3">
                            <div className="text-on-surface font-medium">Nguyễn Văn Minh</div>
                            <div className="text-secondary font-label-sm text-label-sm">KTV-04 (Điện tử)</div>
                          </td>
                          <td className="px-space-md py-3">
                            <span className="font-label-sm text-label-sm rounded-full bg-rose-100 px-2 py-0.5 font-semibold text-rose-800">
                              Đề Xuất Rã Xác
                            </span>
                          </td>
                          <td className="px-space-md py-3 text-right">
                            <button
                              className="bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm rounded-lg px-2.5 py-1"
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
                  <div className="p-space-md bg-surface-container-low flex items-center justify-between">
                    <div className="font-body-sm text-body-sm text-secondary">
                      Hiển thị <span className="text-on-surface font-medium">1 - 5</span> trong tổng số{" "}
                      <span className="text-on-surface font-medium">30</span> thiết bị lô #LO-2024-HN09
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        className="bg-surface-container-lowest text-secondary hover:text-on-surface flex h-8 w-8 items-center justify-center rounded-lg disabled:opacity-40"
                        disabled={true}
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[16px]">chevron_left</span>
                      </button>
                      <button
                        className="bg-primary text-on-primary font-label-sm text-label-sm h-8 w-8 rounded-lg font-semibold"
                        type="button"
                      >
                        1
                      </button>
                      <button
                        className="bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-sm text-label-sm flex h-8 w-8 items-center justify-center rounded-lg"
                        type="button"
                      >
                        2
                      </button>
                      <button
                        className="bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-sm text-label-sm flex h-8 w-8 items-center justify-center rounded-lg"
                        type="button"
                      >
                        3
                      </button>
                      <button
                        className="bg-surface-container-lowest text-secondary hover:text-on-surface flex h-8 w-8 items-center justify-center rounded-lg"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* BATCH VERIFICATION METRICS CARD (VISUAL INLINE SVG) */}
                <div className="bg-surface-container-lowest p-space-md gap-space-md flex flex-col items-center justify-between rounded-xl shadow-sm sm:flex-row">
                  <div className="gap-space-md flex items-center">
                    <div className="relative flex h-16 w-16 shrink-0 items-center justify-center">
                      <svg className="h-16 w-16 -rotate-90 transform" viewBox="0 0 36 36">
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
                      <span className="font-code-num text-code-num text-primary absolute font-bold">75%</span>
                    </div>
                    <div>
                      <div className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        Tỷ Lệ Tái Sử Dụng Thành Công
                      </div>
                      <div className="font-body-sm text-body-sm text-secondary">
                        Trung bình toàn trạm HUB-01: 75% máy sau kiểm định đủ điều kiện cấp phát học sinh, 20% cần sửa
                        chữa, 5% rã xác.
                      </div>
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <span className="bg-tertiary h-3 w-3 rounded-full"></span>
                    <span className="font-label-sm text-label-sm text-secondary font-semibold">
                      Đạt chuẩn ISO-EduHardware
                    </span>
                  </div>
                </div>
              </section>

              {/* RIGHT PANE: 5/12 - SINGLE-ACTION INSPECTION PANEL */}
              <section className="gap-space-md flex flex-col lg:col-span-5">
                <div className="bg-surface-container-lowest flex flex-col overflow-hidden rounded-xl shadow-md">
                  {/* Inspection Header */}
                  <div className="p-space-md bg-surface-container-high flex items-center justify-between">
                    <div className="gap-space-sm flex items-center">
                      <div className="bg-primary text-on-primary flex h-8 w-8 items-center justify-center rounded-lg font-bold">
                        <span className="material-symbols-outlined text-[18px]">fact_check</span>
                      </div>
                      <div>
                        <div className="font-label-sm text-label-sm text-secondary font-semibold uppercase">
                          Biên Bản Kiểm Định 1 Chạm
                        </div>
                        <div className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          #PKD-8821 • TB-DELL-5520
                        </div>
                      </div>
                    </div>
                    <span className="font-label-sm text-label-sm flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 font-semibold text-amber-800">
                      <span className="h-1.5 w-1.5 animate-ping rounded-full bg-amber-600"></span> Cần Quyết Định
                    </span>
                  </div>

                  {/* Device Snapshot & Specs Summary */}
                  <div className="p-space-md gap-space-md flex flex-col">
                    <div className="gap-space-sm bg-surface-container-low p-space-sm grid grid-cols-1 items-center rounded-xl sm:grid-cols-12">
                      <div className="bg-surface-container relative h-28 overflow-hidden rounded-lg sm:col-span-5">
                        <img
                          alt="A clean top-down technical photo of a modern black Dell Latitude business laptop"
                          className="h-full w-full object-cover"
                          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
                        />
                        <div className="bg-on-surface/80 text-surface font-code-num text-label-sm absolute right-1 bottom-1 rounded px-1.5 py-0.5">
                          Ảnh Thật KTV
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 sm:col-span-7">
                        <div className="flex items-center justify-between">
                          <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                            Dell Latitude 5520
                          </span>
                          <span className="font-code-num text-code-num bg-surface-container text-secondary rounded px-1.5 py-0.5 font-semibold">
                            SN: 7X89KL2
                          </span>
                        </div>
                        <div className="font-body-sm text-body-sm text-secondary">
                          Nguồn gốc: <strong className="text-on-surface">Tập đoàn VNPT Hà Nội</strong>
                        </div>
                        <div className="font-body-sm text-body-sm text-secondary">
                          Dự kiến bàn giao:{" "}
                          <strong className="text-primary font-medium">THCS Mường Lát (Thanh Hóa)</strong>
                        </div>
                        <div className="text-secondary font-label-sm text-label-sm mt-1 flex items-center gap-1">
                          <span className="material-symbols-outlined text-tertiary text-[14px]">person</span>
                          KTV thực hiện: KS. Nguyễn Văn Minh (KTV-04)
                        </div>
                      </div>
                    </div>

                    {/* 5-step Technical Evaluation Checklist */}
                    <div className="gap-space-xs flex flex-col">
                      <div className="font-label-sm text-label-sm text-secondary flex items-center justify-between font-semibold tracking-wider uppercase">
                        <span className="">Hạng Mục Kiểm Tra Kỹ Thuật (7 Bước Chuẩn)</span>
                        <span className="text-tertiary font-bold">4/5 Mục Đạt</span>
                      </div>
                      <div className="mt-1 space-y-2">
                        <div className="bg-surface-container-low gap-space-sm flex items-center justify-between rounded-lg p-2.5">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px] text-emerald-600">monitor</span>
                            <div>
                              <div className="font-body-sm text-body-sm text-on-surface font-semibold">
                                1. Màn Hình &amp; Tấm Nền IPS
                              </div>
                              <div className="text-secondary font-label-sm text-label-sm">
                                Độ sáng 280 nits, không điểm chết, không ám ố
                              </div>
                            </div>
                          </div>
                          <span className="font-label-sm text-label-sm shrink-0 rounded bg-emerald-100 px-2 py-0.5 font-semibold text-emerald-800">
                            Grade A
                          </span>
                        </div>

                        <div className="bg-surface-container-low gap-space-sm flex items-center justify-between rounded-lg p-2.5">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px] text-emerald-600">keyboard</span>
                            <div>
                              <div className="font-body-sm text-body-sm text-on-surface font-semibold">
                                2. Bàn Phím &amp; Touchpad
                              </div>
                              <div className="text-secondary font-label-sm text-label-sm">
                                Test 100% phím phản hồi nhạy, trackpad mượt mà
                              </div>
                            </div>
                          </div>
                          <span className="font-label-sm text-label-sm shrink-0 rounded bg-emerald-100 px-2 py-0.5 font-semibold text-emerald-800">
                            Đạt 100%
                          </span>
                        </div>

                        <div className="gap-space-sm flex items-center justify-between rounded-lg bg-amber-50/80 p-2.5">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px] text-amber-600">battery_alert</span>
                            <div>
                              <div className="font-body-sm text-body-sm font-semibold text-amber-900">
                                3. Dung Lượng Pin &amp; Nguồn
                              </div>
                              <div className="font-label-sm text-label-sm text-amber-800">
                                Độ chai pin 49% (Sức khỏe 51%) • Cần thay thế pin 42Wh
                              </div>
                            </div>
                          </div>
                          <span className="font-label-sm text-label-sm shrink-0 rounded bg-amber-200 px-2 py-0.5 font-bold text-amber-900">
                            Yếu Pin
                          </span>
                        </div>

                        <div className="gap-space-sm flex items-center justify-between rounded-lg bg-amber-50/80 p-2.5">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px] text-amber-600">hard_drive</span>
                            <div>
                              <div className="font-body-sm text-body-sm font-semibold text-amber-900">
                                4. Ổ Cứng &amp; Tốc Độ Đọc Ghi
                              </div>
                              <div className="font-label-sm text-label-sm text-amber-800">
                                128GB SATA đọc chậm • Đề xuất nâng 256GB NVMe EduOS
                              </div>
                            </div>
                          </div>
                          <span className="font-label-sm text-label-sm shrink-0 rounded bg-amber-200 px-2 py-0.5 font-bold text-amber-900">
                            Cần Nâng Cấp
                          </span>
                        </div>

                        <div className="bg-surface-container-low gap-space-sm flex items-center justify-between rounded-lg p-2.5">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px] text-emerald-600">thermostat</span>
                            <div>
                              <div className="font-body-sm text-body-sm text-on-surface font-semibold">
                                5. Nhiệt Độ &amp; Hiệu Năng CPU/RAM
                              </div>
                              <div className="text-secondary font-label-sm text-label-sm">
                                Stress test 15 phút đạt 68°C, quạt tản nhiệt êm ái
                              </div>
                            </div>
                          </div>
                          <span className="font-label-sm text-label-sm shrink-0 rounded bg-emerald-100 px-2 py-0.5 font-semibold text-emerald-800">
                            Ổn Định
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* The 1-touch Decision Engine */}
                    <div className="gap-space-sm bg-surface-container-low p-space-md flex flex-col rounded-xl pt-2">
                      <div className="flex items-center justify-between">
                        <div className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-1 font-bold">
                          <span className="material-symbols-outlined text-primary text-[20px]">call_split</span>
                          Quyết Định Phân Luồng 1 Chạm
                        </div>
                        <span className="font-label-sm text-label-sm text-secondary">Chọn 1 trong 3 hướng</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-secondary">
                        Hệ thống tự động đồng bộ hóa kho linh kiện, cập nhật thẻ trạng thái tài sản và gửi chỉ thị tức
                        thời cho phân xưởng tương ứng.
                      </p>

                      <div className="mt-1 grid grid-cols-1 gap-2">
                        <label className="gap-space-sm p-space-sm bg-surface-container-lowest group relative flex cursor-pointer items-start overflow-hidden rounded-lg shadow-sm transition-all hover:shadow-md">
                          <input
                            className="text-primary focus:ring-primary mt-1 h-4 w-4"
                            defaultChecked
                            name="flow_direction"
                            type="radio"
                            value="repair"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="font-body-md text-body-md text-primary flex items-center gap-1 font-bold">
                                1. Chuyển Xưởng Sửa Chữa &amp; Nâng Cấp
                              </span>
                              <span className="bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm rounded px-2 py-0.5 font-bold">
                                Khuyến Nghị KTV
                              </span>
                            </div>
                            <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                              Cần thay Pin 42Wh mới • Nâng cấp SSD 256GB NVMe (Linh kiện sẵn có tại Kệ K3-LK).
                            </div>
                            <div className="text-secondary font-label-sm text-label-sm mt-1.5 flex items-center gap-2">
                              <span className="text-primary font-medium">Dự kiến hoàn tất: 24h</span>
                              <span className="">•</span>
                              <span className="">Chi phí định mức: 480.000 VNĐ (Quỹ tài trợ)</span>
                            </div>
                          </div>
                        </label>

                        <label className="gap-space-sm p-space-sm bg-surface-container-lowest/60 hover:bg-surface-container-lowest flex cursor-pointer items-start rounded-lg transition-all">
                          <input
                            className="text-primary focus:ring-primary mt-1 h-4 w-4"
                            name="flow_direction"
                            type="radio"
                            value="ready"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="font-body-md text-body-md text-on-surface font-bold">
                                2. Đạt Chuẩn Sẵn Sàng Xuất Bàn Giao
                              </span>
                              <span className="font-label-sm text-label-sm rounded bg-emerald-50 px-2 py-0.5 font-semibold text-emerald-700">
                                Grade A / Grade B
                              </span>
                            </div>
                            <div className="font-body-sm text-body-sm text-secondary mt-0.5">
                              Đủ tiêu chuẩn phòng tin học học sinh, đã nạp EduOS Linux, niêm phong tem kiểm định.
                            </div>
                          </div>
                        </label>

                        <label className="gap-space-sm p-space-sm bg-surface-container-lowest/60 hover:bg-surface-container-lowest flex cursor-pointer items-start rounded-lg transition-all">
                          <input
                            className="text-primary focus:ring-primary mt-1 h-4 w-4"
                            name="flow_direction"
                            type="radio"
                            value="recycle"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="font-body-md text-body-md font-bold text-rose-800">
                                3. Rã Xác Tái Chế / Thu Hồi Linh Kiện
                              </span>
                              <span className="font-label-sm text-label-sm rounded bg-rose-50 px-2 py-0.5 font-semibold text-rose-700">
                                Thanh Lý / Rã Phụ Tùng
                              </span>
                            </div>
                            <div className="font-body-sm text-body-sm text-secondary mt-0.5">
                              Hư hỏng bo mạch chủ, màn hình vỡ hoặc chi phí phục hồi vượt quá 70% giá trị thiết bị.
                            </div>
                          </div>
                        </label>
                      </div>

                      <button
                        className={`px-space-md font-headline-sm text-headline-sm mt-2 flex w-full items-center justify-center gap-2 rounded-xl py-3 font-semibold shadow-md transition-all active:scale-[0.99] ${
                          isSuccess
                            ? "bg-tertiary text-on-tertiary"
                            : "bg-primary hover:bg-primary-container text-on-primary"
                        } ${isExecuting ? "opacity-90" : ""}`}
                        onClick={handleExecuteDecision}
                        type="button"
                      >
                        {isExecuting ? (
                          <>
                            <span className="material-symbols-outlined animate-spin text-[20px]">sync</span>
                            <span>Đang lưu và điều chuyển phân luồng...</span>
                          </>
                        ) : isSuccess ? (
                          <>
                            <span className="material-symbols-outlined text-[20px]">check_circle</span>
                            <span>ĐÃ PHÂN LUỒNG THÀNH CÔNG (#PKD-8821)</span>
                          </>
                        ) : (
                          <>
                            <span className="material-symbols-outlined text-[22px]">verified</span>
                            <span className="">LƯU KẾT QUẢ &amp; PHÂN LUỒNG 1 CHẠM</span>
                          </>
                        )}
                      </button>
                      <div className="font-label-sm text-label-sm text-secondary text-center">
                        Ghi nhận vào sổ kiểm định kho lúc{" "}
                        <span className="font-code-num text-code-num text-on-surface font-semibold">
                          {currentTimestamp}
                        </span>{" "}
                        • KTV-04
                      </div>
                    </div>

                    {/* Static Warehouse Rack & Audit Compliance Notice */}
                    <div className="bg-surface-container p-space-sm gap-space-xs text-on-surface-variant font-body-sm text-body-sm flex items-start rounded-xl">
                      <span className="material-symbols-outlined text-secondary mt-0.5 shrink-0 text-[20px]">info</span>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-on-surface font-semibold">Quy chuẩn Kho Vận EduShare (DOCUMENT_37):</span>
                        <p className="text-secondary leading-snug">
                          Vị trí kệ định danh hiển thị tĩnh:{" "}
                          <strong className="text-on-surface font-semibold">Khu A2 - Kệ Tầng 04 (Ô 12)</strong>. Cổng Kỹ
                          thuật viên không có quyền thay đổi vị trí lưu kho cố định; Lệnh điều chuyển và vận đơn sẽ do
                          Trưởng Kho phê duyệt độc lập sau khi phân luồng hoàn tất.
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
