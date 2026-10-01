import { Link } from "react-router-dom";

const WarehouseIncidentReportPage = () => {
  return (
    <div className="bg-background font-body-md text-on-surface flex min-h-screen flex-col antialiased">
      <aside className="bg-surface-container-lowest fixed top-0 left-0 z-50 flex h-full w-72 flex-col shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="bg-surface-container-low flex h-20 flex-col justify-center px-6">
          <div className="flex items-center gap-2">
            <div className="bg-primary text-on-primary flex h-9 w-9 items-center justify-center rounded-xl shadow-sm">
              <span className="material-symbols-outlined text-[20px]">warehouse</span>
            </div>
            <div>
              <span className="font-headline-sm text-headline-sm text-primary block leading-none font-bold tracking-tight">
                EduShare VN
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant mt-1 block tracking-wider uppercase">
                Kho &amp; Kỹ Thuật
              </span>
            </div>
          </div>
          <div className="mt-1 flex items-center gap-1">
            <span className="bg-tertiary-container inline-block h-1.5 w-1.5 rounded-full"></span>
            <span className="font-body-sm text-body-sm text-on-surface-variant font-code-num text-[11px]">
              Hub-01 Hà Nội • 63 Tỉnh Thành
            </span>
          </div>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto px-2 py-4">
          <section>
            <div className="font-label-sm text-label-sm text-outline px-2 pb-1 tracking-wider uppercase">
              Nhập kho &amp; Tiếp nhận
            </div>
            <nav className="space-y-1">
              <Link
                className="font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center gap-2 rounded-xl px-2 py-2 transition-all"
                to="/warehouse/receive"
              >
                <span className="material-symbols-outlined text-[20px]">fact_check</span>
                <span>Tiếp nhận &amp; Kiểm định</span>
              </Link>
              <Link
                className="font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center gap-2 rounded-xl px-2 py-2 transition-all"
                to="/warehouse/scan-qr"
              >
                <span className="material-symbols-outlined text-[20px]">qr_code_scanner</span>
                <span>Quét QR phân luồng</span>
              </Link>
              <Link
                className="font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center gap-2 rounded-xl px-2 py-2 transition-all"
                to="/warehouse/donation-receipt"
              >
                <span className="material-symbols-outlined text-[20px]">volunteer_activism</span>
                <span>Phiếu trao tặng</span>
              </Link>
            </nav>
          </section>

          <section>
            <div className="font-label-sm text-label-sm text-outline px-2 pb-1 tracking-wider uppercase">
              Quản lý kho bãi
            </div>
            <nav className="space-y-1">
              <Link
                className="font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center gap-2 rounded-xl px-2 py-2 transition-all"
                to="/warehouse/inventory"
              >
                <span className="material-symbols-outlined text-[20px]">inventory_2</span>
                <span>Tồn kho thiết bị</span>
              </Link>
              <Link
                className="font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center justify-between rounded-xl px-2 py-2 transition-all"
                to="/warehouse/racks"
              >
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">grid_view</span>
                  <span>Vị trí kệ định danh</span>
                </div>
                <span className="font-label-sm bg-surface-container text-secondary rounded px-1.5 py-0.5 text-[10px] font-medium">
                  Chỉ xem
                </span>
              </Link>
              <Link
                className="font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center gap-2 rounded-xl px-2 py-2 transition-all"
                to="/warehouse/audit-report"
              >
                <span className="material-symbols-outlined text-[20px]">assignment</span>
                <span>Kiểm kê &amp; Báo cáo</span>
              </Link>
            </nav>
          </section>

          <section>
            <div className="font-label-sm text-label-sm text-outline px-2 pb-1 tracking-wider uppercase">
              Điều phối &amp; Vận chuyển
            </div>
            <nav className="space-y-1">
              <Link
                className="font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center gap-2 rounded-xl px-2 py-2 transition-all"
                to="/warehouse/dispatch"
              >
                <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                <span>Lệnh điều chuyển &amp; Vận đơn</span>
              </Link>
              <Link
                className="font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface flex items-center gap-2 rounded-xl px-2 py-2 transition-all"
                to="/warehouse/delivery-history"
              >
                <span className="material-symbols-outlined text-[20px]">history</span>
                <span>Lịch sử đợt giao</span>
              </Link>
              <Link
                className="font-label-md text-label-md bg-primary text-on-primary flex items-center gap-2 rounded-xl px-2 py-2 shadow-sm"
                to="/warehouse/incident-report"
              >
                <span className="material-symbols-outlined text-[20px]">warning</span>
                <span>Báo cáo sự cố kho</span>
              </Link>
            </nav>
          </section>
        </div>

        <div className="bg-surface-container-low/70 flex flex-col gap-1 p-4">
          <div className="font-label-sm text-label-sm text-on-surface-variant flex items-center justify-between">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">verified</span>
              Bản phát hành
            </span>
            <span className="font-code-num text-code-num text-primary font-semibold">v2.8.4-PROD</span>
          </div>
          <div className="font-body-sm text-body-sm text-on-surface-variant flex items-center justify-between pt-1">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">support_agent</span>
              Kỹ thuật kho
            </span>
            <span className="font-code-num text-code-num text-on-surface font-semibold">1900 6829</span>
          </div>
        </div>
      </aside>

      <div className="flex flex-1 flex-col pl-72">
        <header className="bg-surface-container-lowest/90 fixed top-0 right-0 left-72 z-40 h-20 px-6 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
          <div className="flex h-full w-full items-center justify-between gap-4">
            <div className="flex min-w-[280px] flex-col gap-1">
              <div className="font-body-sm text-outline flex items-center gap-1 text-[12px]">
                <span className="text-primary font-medium">EduShare VN Kho</span>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span>Điều Phối &amp; Vận Chuyển</span>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span className="text-on-surface font-semibold">Báo Cáo Sự Cố Kho</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="bg-surface-container text-primary font-label-sm inline-flex items-center rounded px-1.5 py-0.5 text-[11px] font-semibold">
                  TRẠNG THÁI
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Hệ thống toàn quốc 63 Tỉnh Thành
                </span>
              </div>
            </div>
            <div className="mx-4 max-w-xl flex-1">
              <div className="relative flex w-full items-center">
                <span className="material-symbols-outlined text-outline absolute left-3 text-[20px]">search</span>
                <input
                  className="bg-surface-container-low font-body-md text-body-md text-on-surface placeholder:text-outline focus:bg-surface-container w-full rounded-xl py-2 pr-4 pl-10 transition-all focus:outline-none"
                  placeholder="Tra cứu mã vận đơn, số lô hàng, serial hoặc sự cố..."
                  type="text"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <button
                  className="text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface flex h-9 w-9 items-center justify-center rounded-xl transition-all"
                  title="Quét mã QR/Barcode"
                >
                  <span className="material-symbols-outlined text-[20px]">qr_code_scanner</span>
                </button>
                <button
                  className="text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface flex h-9 w-9 items-center justify-center rounded-xl transition-all"
                  title="Hỗ trợ kỹ thuật"
                >
                  <span className="material-symbols-outlined text-[20px]">headset_mic</span>
                </button>
                <button
                  className="text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface relative flex h-9 w-9 items-center justify-center rounded-xl transition-all"
                  title="Thông báo hệ thống"
                >
                  <span className="material-symbols-outlined text-[20px]">notifications</span>
                  <span className="bg-error absolute top-2 right-2 h-2 w-2 rounded-full"></span>
                </button>
              </div>
              <div className="bg-surface-container-high h-8 w-px"></div>
              <div className="flex items-center gap-2 pl-1">
                <div className="text-right">
                  <div className="font-label-md text-label-md text-on-surface leading-tight font-semibold">
                    Trần Hùng <span className="font-code-num text-secondary text-body-sm font-normal">(TK-MB-04)</span>
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 text-[11px] leading-tight">
                    Trưởng Kho Kỹ Thuật Hà Nội • Kho Tổng Miền Bắc (HUB-01 Hà Nội)
                  </div>
                </div>
                <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full">
                  <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="bg-background flex w-full flex-1 flex-col px-6 py-8 pt-20">
          <div className="flex w-full flex-col space-y-6">
            {/* Top Header & Operational Telemetry */}
            <div className="bg-surface-container-lowest flex flex-col justify-between gap-4 rounded-xl p-6 shadow-sm xl:flex-row xl:items-center">
              <div className="space-y-1.5">
                <div className="bg-surface-container text-primary font-label-sm text-label-sm inline-flex items-center gap-1 rounded px-2.5 py-1 font-semibold tracking-wider uppercase">
                  <span className="bg-primary h-2 w-2 animate-pulse rounded-full"></span>
                  Kho Tổng Miền Bắc (HUB-01 Hà Nội) • Chuẩn Kiểm Soát Sự Cố ISO-Logistics 2024
                </div>
                <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                  Báo Cáo Sự Cố Kho &amp; Vận Chuyển
                </h1>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
                  Ghi nhận và giám sát các sự cố hư hỏng thiết bị lưu kho, sai lệch kiện hàng, hoặc sự cố hành trình
                  theo quy chuẩn bất biến RBAC v2.8.4. Gắn cứng danh tính số và mã băm toàn vẹn.
                </p>
              </div>
              {/* Action Button Group */}
              <div className="flex flex-wrap items-center gap-2 pt-2 xl:pt-0">
                <button className="bg-surface-container-low text-on-surface font-label-md text-label-md hover:bg-surface-container inline-flex items-center gap-1 rounded-xl px-4 py-2.5 transition-all">
                  <span className="material-symbols-outlined text-[18px]">file_download</span>
                  <span>Xuất Báo Cáo Sự Cố (.xlsx)</span>
                </button>
                <button
                  className="bg-primary text-on-primary font-label-md text-label-md hover:bg-surface-tint inline-flex items-center gap-1 rounded-xl px-4 py-2.5 shadow-sm transition-all"
                  onClick={() =>
                    document.getElementById("form-create-incident")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <span className="material-symbols-outlined text-[18px]">add_alert</span>
                  <span>+ Tạo Báo Cáo Mới (Chính Mình)</span>
                </button>
              </div>
            </div>

            {/* Bento 4 Kpi Tiles */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* Kpi 1 */}
              <div className="bg-surface-container-lowest relative flex flex-col justify-between overflow-hidden rounded-xl p-4 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-label-sm text-label-sm text-outline font-semibold tracking-wider uppercase">
                      Tổng sự cố ghi nhận
                    </span>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="font-headline-xl text-headline-xl text-on-surface font-code-num font-bold">
                        18
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">vụ năm 2024</span>
                    </div>
                  </div>
                  <div className="bg-surface-container-low text-primary flex h-10 w-10 items-center justify-center rounded-xl">
                    <span className="material-symbols-outlined text-[22px]">assignment_late</span>
                  </div>
                </div>
                <div className="bg-surface-container-low/50 font-label-sm text-label-sm mt-4 flex items-center justify-between rounded p-2 pt-3">
                  <span className="text-tertiary flex items-center gap-1 font-semibold">
                    <span className="material-symbols-outlined text-[16px]">check_circle</span> 14 đã khắc phục
                  </span>
                  <span className="font-code-num text-on-surface-variant">77.7% hoàn tất</span>
                </div>
              </div>
              {/* Kpi 2 */}
              <div className="bg-surface-container-lowest relative flex flex-col justify-between overflow-hidden rounded-xl p-4 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-label-sm text-label-sm text-outline font-semibold tracking-wider uppercase">
                      Đang xử lý tại kho
                    </span>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="font-headline-xl text-headline-xl text-primary font-code-num font-bold">03</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">vụ cục bộ</span>
                    </div>
                  </div>
                  <div className="bg-primary-fixed text-on-primary-fixed-variant flex h-10 w-10 items-center justify-center rounded-xl">
                    <span className="material-symbols-outlined text-[22px]">build_circle</span>
                  </div>
                </div>
                <div className="bg-surface-container-low/50 font-label-sm text-label-sm mt-4 flex items-center justify-between rounded p-2 pt-3">
                  <span className="text-primary flex items-center gap-1 font-semibold">
                    <span className="material-symbols-outlined text-[16px]">priority_high</span> Cấp bù linh kiện khẩn
                  </span>
                  <span className="font-code-num text-on-surface-variant">Khu B2, D1</span>
                </div>
              </div>
              {/* Kpi 3 */}
              <div className="bg-surface-container-lowest relative flex flex-col justify-between overflow-hidden rounded-xl p-4 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-label-sm text-label-sm text-outline font-semibold tracking-wider uppercase">
                      Sự cố chuyến TNV (Failed)
                    </span>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="font-headline-xl text-headline-xl text-error font-code-num font-bold">01</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">đơn vận hành</span>
                    </div>
                  </div>
                  <div className="bg-error-container text-error flex h-10 w-10 items-center justify-center rounded-xl">
                    <span className="material-symbols-outlined text-[22px]">minor_crash</span>
                  </div>
                </div>
                <div className="bg-surface-container-low/50 font-label-sm text-label-sm mt-4 flex items-center justify-between rounded p-2 pt-3">
                  <span className="text-error flex items-center gap-1 font-semibold">
                    <span className="material-symbols-outlined text-[16px]">lock</span> Chỉ xem biên bản TNV
                  </span>
                  <span className="font-code-num text-on-surface-variant">Kho cấm sửa</span>
                </div>
              </div>
              {/* Kpi 4 */}
              <div className="bg-surface-container-lowest relative flex flex-col justify-between overflow-hidden rounded-xl p-4 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-label-sm text-label-sm text-outline font-semibold tracking-wider uppercase">
                      Ràng buộc RBAC &amp; Audit
                    </span>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="font-headline-md text-headline-md text-on-surface font-bold">Khóa Sửa</span>
                      <span className="font-body-sm text-body-sm text-tertiary font-semibold">Bất Biến</span>
                    </div>
                  </div>
                  <div className="bg-tertiary-fixed text-tertiary flex h-10 w-10 items-center justify-center rounded-xl">
                    <span className="material-symbols-outlined text-[22px]">shield</span>
                  </div>
                </div>
                <div className="bg-surface-container-low/50 font-label-sm text-label-sm mt-4 flex items-center justify-between rounded p-2 pt-3">
                  <span className="text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">key</span> SHA-256 Signature
                  </span>
                  <span className="font-code-num text-primary font-semibold">TK-MB-04</span>
                </div>
              </div>
            </div>

            {/* MAIN 2-COLUMN WORKSPACE: LEFT 7/12, RIGHT 5/12 */}
            <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
              {/* LEFT COLUMN: INCIDENT REGISTRY & AUDIT TRAIL (7 Cols) */}
              <div className="space-y-4 lg:col-span-7">
                {/* Filter Tabs & Search */}
                <div className="bg-surface-container-lowest space-y-2 rounded-xl p-4 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-2">
                    <div className="bg-surface-container-low flex flex-wrap gap-1.5 rounded-xl p-1">
                      <button className="bg-surface-container-lowest text-primary font-label-md text-label-md rounded-lg px-3 py-1.5 font-semibold shadow-sm transition-all">
                        Tất cả sự cố (18)
                      </button>
                      <button className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md rounded-lg px-3 py-1.5 transition-all">
                        Sự cố tại Kho (11)
                      </button>
                      <button className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md rounded-lg px-3 py-1.5 transition-all">
                        Chuyến TNV báo (7)
                      </button>
                      <button className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md rounded-lg px-3 py-1.5 transition-all">
                        Chờ Admin duyệt
                      </button>
                    </div>
                    <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-tertiary text-[16px]">sync</span> Tự động đồng bộ
                      EduLedger
                    </span>
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <div className="relative flex-1">
                      <span className="material-symbols-outlined text-outline absolute top-2.5 left-3 text-[18px]">
                        search
                      </span>
                      <input
                        className="bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:bg-surface-container w-full rounded-xl py-2 pr-3 pl-9 transition-all focus:outline-none"
                        placeholder="Tìm theo mã vụ việc (#INC-...), số vận đơn, kệ kho hoặc cán bộ..."
                        type="text"
                      />
                    </div>
                    <select className="bg-surface-container-low text-on-surface font-label-md text-label-md focus:bg-surface-container rounded-xl px-3 py-2 transition-all focus:outline-none">
                      <option>Mức độ: Tất cả</option>
                      <option>Nghiêm trọng (Cấp 1 &amp; 2)</option>
                      <option>Trung bình (Cấp 3)</option>
                      <option>Cảnh báo nhẹ</option>
                    </select>
                  </div>
                </div>

                {/* Incident Cards List */}
                <div className="space-y-2">
                  {/* INCIDENT 1: SELECTED STATE (#INC-2024-042) */}
                  <div className="bg-surface-container-lowest from-primary/5 via-surface-container-lowest to-surface-container-lowest relative overflow-hidden rounded-xl bg-gradient-to-r p-4 shadow-sm transition-all">
                    <div className="bg-primary absolute top-0 bottom-0 left-0 w-1.5"></div>
                    <div className="flex flex-col justify-between gap-2 pl-2 sm:flex-row sm:items-start">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-code-num text-code-num text-primary bg-primary-fixed rounded px-2 py-0.5 font-bold">
                            #INC-2024-042
                          </span>
                          <span className="bg-error-container text-on-error-container font-label-sm text-label-sm rounded px-2 py-0.5 font-semibold">
                            Nghiêm trọng (Cấp 2)
                          </span>
                          <span className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm rounded px-2 py-0.5">
                            Đang chọn đối soát
                          </span>
                        </div>
                        <h2 className="font-headline-sm text-headline-sm text-on-surface pt-1 font-semibold">
                          Linh kiện lưu kho hư hỏng do ẩm cục bộ tại Kệ B2 (Kho Máy Tính)
                        </h2>
                        <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                          Ảnh hưởng trực tiếp 05 Màn hình LCD Dell 24 inch thuộc lô hàng tiếp nhận FPT. Mưa tạt qua khe
                          tôn thông gió tầng 02 kho B gây ẩm vỏ hộp và chập nguồn thứ cấp.
                        </p>
                      </div>
                      <div className="shrink-0 space-y-1 text-right sm:min-w-[140px]">
                        <span className="bg-secondary-container text-on-secondary-fixed-variant font-label-sm text-label-sm inline-block rounded px-2.5 py-1 font-medium">
                          Đang xử lý cấp bù
                        </span>
                        <div className="font-code-num text-body-sm text-outline">24/10/2024 • 09:15</div>
                      </div>
                    </div>
                    <div className="bg-surface-container-low/60 mt-3 flex flex-wrap items-center justify-between gap-2 rounded p-2 pt-3 pl-2">
                      <div className="font-body-sm text-body-sm text-on-surface flex items-center gap-1">
                        <div className="bg-primary text-on-primary font-label-sm flex h-6 w-6 items-center justify-center rounded-full text-[10px]">
                          TH
                        </div>
                        <span>
                          Lập bởi: <strong className="text-primary font-semibold">Trần Hùng (Chính mình)</strong>
                        </span>
                        <span className="py-0.2 bg-tertiary-fixed text-on-tertiary-fixed-variant font-code-num rounded px-1.5 text-[10px] font-bold">
                          TK-MB-04
                        </span>
                      </div>
                      <div className="font-label-sm text-label-sm flex items-center gap-3">
                        <span className="text-outline flex items-center gap-1">
                          <span className="material-symbols-outlined text-[15px]">photo_camera</span> 02 ảnh đính kèm
                        </span>
                        <span className="text-primary flex cursor-pointer items-center gap-0.5 font-semibold hover:underline">
                          Xem chi tiết <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* INCIDENT 2: (#INC-2024-039) */}
                  <div className="bg-surface-container-lowest hover:bg-surface-container-low/30 rounded-xl p-4 shadow-sm transition-all">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-code-num text-code-num text-on-surface bg-surface-container rounded px-2 py-0.5 font-bold">
                            #INC-2024-039
                          </span>
                          <span className="bg-secondary-container text-on-secondary-fixed-variant font-label-sm text-label-sm rounded px-2 py-0.5 font-semibold">
                            Cấp 3 - Kiểm kê
                          </span>
                          <span className="bg-surface-container-low text-tertiary font-label-sm text-label-sm rounded px-2 py-0.5 font-medium">
                            Đã xử lý xong
                          </span>
                        </div>
                        <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                          Sai lệch số lượng khi tiếp nhận lô máy để bàn từ FPT Telecom
                        </h2>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Thùng niêm phong bàn giao ghi 15 bộ nhưng thực đếm tại bàn phân luồng kiểm định là 14 bộ PC HP
                          ProDesk. Đã lập biên bản ghi nhận thiếu tại chỗ và được đối tác ký xác nhận bù.
                        </p>
                      </div>
                      <div className="shrink-0 space-y-1 text-right sm:min-w-[140px]">
                        <span className="bg-surface-container-high text-tertiary font-label-sm text-label-sm inline-block rounded px-2.5 py-1 font-semibold">
                          Đóng hồ sơ (Có BB)
                        </span>
                        <div className="font-code-num text-body-sm text-outline">19/10/2024 • 14:30</div>
                      </div>
                    </div>
                    <div className="bg-surface-container-low/30 mt-3 flex flex-wrap items-center justify-between gap-2 rounded p-2 pt-3">
                      <div className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                        <span>
                          Lập bởi: <strong className="text-on-surface font-medium">Trần Hùng (TK-MB-04)</strong>
                        </span>
                      </div>
                      <span className="font-code-num text-body-sm text-outline">Mã biên bản: BB-TN-00892</span>
                    </div>
                  </div>

                  {/* INCIDENT 3: TNV REPORT (#INC-TR-2024-015) - IMMUTABLE / READ-ONLY RULE */}
                  <div className="bg-surface-container-lowest from-error/5 via-surface-container-lowest to-surface-container-lowest relative overflow-hidden rounded-xl bg-gradient-to-r p-4 shadow-sm">
                    <div className="bg-error absolute top-0 bottom-0 left-0 w-1.5"></div>
                    <div className="flex flex-col justify-between gap-2 pl-2 sm:flex-row sm:items-start">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-code-num text-code-num text-error bg-error-container rounded px-2 py-0.5 font-bold">
                            #INC-TR-2024-015
                          </span>
                          <span className="bg-error text-on-error font-label-sm text-label-sm rounded px-2 py-0.5 font-bold">
                            Vận đơn: FAILED Tạm thời
                          </span>
                          <span className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1 rounded px-2 py-0.5 font-semibold">
                            <span className="material-symbols-outlined text-error text-[13px]">lock</span> [Kho Chỉ Xem
                            - Cấm Sửa]
                          </span>
                        </div>
                        <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                          Sự cố hành trình: Xe bán tải TNV gặp sạt lở đèo Mã Pí Lèng (Hà Giang)
                        </h2>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Vận đơn số <strong className="font-code-num text-on-surface">#WB-2024-HG14</strong> hướng về
                          Trường PTDTBT Mèo Vạc. Đường sạt lở cây cản đường, xe phải dừng 6 giờ. Thùng máy lót chống sốc
                          nguyên vẹn, không hư hại phần cứng bên trong.
                        </p>
                      </div>
                      <div className="shrink-0 space-y-1 text-right sm:min-w-[140px]">
                        <span className="bg-error-container text-error font-label-sm text-label-sm inline-flex items-center gap-1 rounded px-2.5 py-1 font-bold">
                          <span className="material-symbols-outlined text-[14px]">warning</span> TNV Báo Tuyến
                        </span>
                        <div className="font-code-num text-body-sm text-outline">22/10/2024 • 17:45</div>
                      </div>
                    </div>
                    {/* Rbac Enforcement Callout For Tnv Incident */}
                    <div className="bg-surface-container-low/70 mt-3 flex flex-wrap items-center justify-between gap-2 rounded p-2.5 pt-3 pl-2">
                      <div className="font-body-sm text-body-sm flex items-center gap-2">
                        <div className="bg-secondary text-on-secondary font-label-sm flex h-6 w-6 items-center justify-center rounded-full text-[10px]">
                          LH
                        </div>
                        <span>
                          TNV lập: <strong className="text-on-surface font-semibold">Lê Hoàng Long (TNV-VCH-88)</strong>
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-label-sm text-error bg-surface-container-lowest rounded px-2 py-0.5 text-[11px] font-semibold">
                          Tuân thủ RBAC: Thủ kho &amp; Admin không được can thiệp sửa báo cáo TNV
                        </span>
                        <button className="bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high rounded px-2.5 py-1 transition-all">
                          Xem định vị GPS
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* INCIDENT 4: (#INC-2024-031) */}
                  <div className="bg-surface-container-lowest hover:bg-surface-container-low/30 rounded-xl p-4 shadow-sm transition-all">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-code-num text-code-num text-on-surface bg-surface-container rounded px-2 py-0.5 font-bold">
                            #INC-2024-031
                          </span>
                          <span className="bg-secondary-container text-on-secondary-fixed-variant font-label-sm text-label-sm rounded px-2 py-0.5 font-semibold">
                            Cấp 2 - An toàn cháy nổ
                          </span>
                          <span className="bg-surface-container-low text-tertiary font-label-sm text-label-sm rounded px-2 py-0.5 font-medium">
                            Đã cô lập
                          </span>
                        </div>
                        <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                          Hỏng hóc trong kiểm định: 03 Pin phồng rộp dòng ThinkPad T480s
                        </h2>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Quá trình kiểm tra dung lượng pin phát hiện cell pin bị phồng, nguy cơ đoản mạch. Kỹ thuật
                          viên đã tháo rời, chuyển sang thùng cát cách ly chuyên dụng tại khu vực PCCC Kho Tầng 1.
                        </p>
                      </div>
                      <div className="shrink-0 space-y-1 text-right sm:min-w-[140px]">
                        <span className="bg-surface-container-high text-tertiary font-label-sm text-label-sm inline-block rounded px-2.5 py-1 font-semibold">
                          Đã xử lý &amp; Lưu kho an toàn
                        </span>
                        <div className="font-code-num text-body-sm text-outline">12/10/2024 • 11:00</div>
                      </div>
                    </div>
                    <div className="bg-surface-container-low/30 mt-3 flex flex-wrap items-center justify-between gap-2 rounded p-2 pt-3">
                      <div className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                        <span>
                          Lập bởi: <strong className="text-on-surface font-medium">Nguyễn Văn Định (KTV-02)</strong>
                        </span>
                      </div>
                      <span className="font-code-num text-body-sm text-outline">Biên bản cách ly số: CL-2024-019</span>
                    </div>
                  </div>
                </div>

                {/* Audit Integrity Footer */}
                <div className="bg-surface-container-low flex items-center justify-between gap-2 rounded-xl p-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[24px]">verified_user</span>
                    <div>
                      <div className="font-label-md text-label-md text-on-surface font-semibold">
                        Tính Bất Biến &amp; Toàn Vẹn Hồ Sơ Sự Cố
                      </div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant">
                        Mọi sự cố sau khi tạo lập tự động sinh khối chữ ký số và cập nhật sổ cái EduLedger. Không thể
                        chỉnh sửa, ghi đè hoặc xóa bỏ.
                      </div>
                    </div>
                  </div>
                  <span className="font-code-num text-label-sm text-outline font-mono">HASH: 4b9f..31c</span>
                </div>
              </div>

              {/* RIGHT COLUMN: INCIDENT DOSSIER (#INC-2024-042) & CREATION WORKFLOW (5 Cols) */}
              <div className="space-y-6 lg:col-span-5">
                {/* DOSSIER CARD: INCIDENT #INC-2024-042 */}
                <div className="bg-surface-container-lowest space-y-4 rounded-xl p-6 shadow-sm">
                  {/* Header Of Dossier */}
                  <div className="bg-surface-container-low/40 -mx-6 -mt-6 flex items-center justify-between rounded-t-xl p-6 pb-3">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-primary text-[22px]">folder_open</span>
                      <div>
                        <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          Hồ Sơ Sự Cố #INC-2024-042
                        </h2>
                        <span className="font-label-sm text-label-sm text-outline">
                          Kho Tổng Miền Bắc • Phân khu Kệ B2-T02
                        </span>
                      </div>
                    </div>
                    <span className="bg-surface-container text-primary font-code-num rounded px-2.5 py-1 text-[11px] font-bold">
                      IMMUTABLE LOG
                    </span>
                  </div>

                  {/* Metadata Grid */}
                  <div className="text-body-sm grid grid-cols-2 gap-2">
                    <div className="bg-surface-container-low rounded-lg p-2.5">
                      <span className="text-outline font-label-sm block text-[11px]">Người lập báo cáo:</span>
                      <span className="text-on-surface font-semibold">Trần Hùng</span>
                      <span className="font-code-num text-primary block text-[11px]">TK-MB-04 (Trưởng Kho)</span>
                    </div>
                    <div className="bg-surface-container-low rounded-lg p-2.5">
                      <span className="text-outline font-label-sm block text-[11px]">Thời gian tạo lập:</span>
                      <span className="text-on-surface font-code-num font-semibold">09:15:22 24/10/2024</span>
                      <span className="font-label-sm text-tertiary block text-[11px]">Đã khóa sửa đổi</span>
                    </div>
                  </div>

                  {/* Impacted Assets Specification */}
                  <div className="space-y-1.5">
                    <div className="font-label-sm text-label-sm text-outline font-semibold tracking-wider uppercase">
                      Thiết bị &amp; Lô hàng liên quan
                    </div>
                    <div className="bg-surface-container-low space-y-2 rounded-xl p-3">
                      <div className="font-body-sm flex items-center justify-between">
                        <span className="text-on-surface font-medium">05 Màn hình LCD Dell Professional P2419H</span>
                        <span className="font-code-num text-error font-bold">Hỏng nguồn phụ</span>
                      </div>
                      <div className="text-on-surface-variant font-code-num flex items-center justify-between text-[12px]">
                        <span>Thuộc lô tiếp nhận: #DON-2024-8842 (Tập đoàn FPT)</span>
                        <span>Kệ B2 - Tầng 02</span>
                      </div>
                      <div className="text-secondary font-code-num text-[11px]">
                        Serials: CN-0N867N-74261-(411, 412, 413, 414, 415)
                      </div>
                    </div>
                  </div>

                  {/* Evidence Photos */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-outline font-semibold tracking-wider uppercase">
                        Ảnh bằng chứng hiện trường (02 Ảnh)
                      </span>
                      <span className="font-label-sm text-tertiary flex items-center gap-0.5 font-semibold">
                        <span className="material-symbols-outlined text-[14px]">check</span> Đã đối soát GPS kho
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-1">
                        <div className="bg-surface-container group relative h-28 overflow-hidden rounded-lg">
                          <img
                            className="h-full w-full rounded-lg object-cover transition-transform group-hover:scale-105"
                            alt="Chụp cận cảnh góc hộp các tông đựng màn hình máy tính Dell bị ố vàng loang lổ do nước mưa dột từ mái tôn kho bãi, nhãn kiểm định EduShare bị ẩm rách nhẹ, ánh sáng kỹ thuật kho bãi"
                            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
                          />
                          <div className="bg-inverse-surface/80 text-inverse-on-surface font-code-num absolute right-1 bottom-1 rounded px-1.5 py-0.5 text-[10px]">
                            IMG_042_01.JPG
                          </div>
                        </div>
                        <span className="font-body-sm text-outline block text-[11px]">Vỏ hộp bị thấm ẩm tại Kệ B2</span>
                      </div>
                      <div className="space-y-1">
                        <div className="bg-surface-container group relative h-28 overflow-hidden rounded-lg">
                          <img
                            className="h-full w-full rounded-lg object-cover transition-transform group-hover:scale-105"
                            alt="Kỹ thuật viên phòng thí nghiệm kiểm định mạch nguồn bo mạch màn hình LCD mở bung nắp lưng, dấu vết ám đen đoản mạch do ẩm chân IC, dụng cụ đo đồng hồ vạn năng hiển thị lỗi"
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                          />
                          <div className="bg-inverse-surface/80 text-inverse-on-surface font-code-num absolute right-1 bottom-1 rounded px-1.5 py-0.5 text-[10px]">
                            IMG_042_02.JPG
                          </div>
                        </div>
                        <span className="font-body-sm text-outline block text-[11px]">Kiểm tra mạch nguồn thứ cấp</span>
                      </div>
                    </div>
                  </div>

                  {/* Damage Assessment & Recovery Plan */}
                  <div className="bg-surface-container-low space-y-2 rounded-xl p-3">
                    <div className="font-label-md text-label-md text-on-surface flex items-center justify-between font-semibold">
                      <span>Đánh giá thiệt hại &amp; Phương án</span>
                      <span className="text-primary font-code-num">1.250.000 VNĐ</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Phương án kỹ thuật: Đặt thay thế 05 board mạch nguồn thứ cấp chuẩn tương thích. Đề xuất trích Quỹ
                      linh kiện dự phòng EduShare VN. Đã cho chống thấm và trám khe mái tôn trên Kệ B2 trong sáng ngày
                      24/10.
                    </p>
                    <div className="font-body-sm text-outline flex items-center justify-between pt-1 text-[11px]">
                      <span>
                        Admin phụ trách phê duyệt:{" "}
                        <strong className="text-on-surface font-medium">Ban Điều Hành EduShare</strong>
                      </span>
                      <span className="text-tertiary font-semibold">Đã cấp ngân sách thay thế</span>
                    </div>
                  </div>

                  {/* Cryptographic Immutability Badge */}
                  <div className="bg-surface-container font-code-num flex items-center justify-between rounded-lg p-2.5 text-[11px]">
                    <div className="text-on-surface-variant flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-tertiary text-[16px]">fingerprint</span>
                      <span>SHA-256: 8f4a9b21dc3790ea12...c7</span>
                    </div>
                    <span className="text-primary font-bold">Khóa Sửa RBAC</span>
                  </div>
                </div>

                {/* INCIDENT REPORT CREATION FORM (STRICT RBAC: AS ONESELF TK-MB-04) */}
                <div
                  className="bg-surface-container-lowest space-y-4 rounded-xl p-6 shadow-sm"
                  id="form-create-incident"
                >
                  <div className="border-surface-container flex items-center justify-between border-b pb-3">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[22px]">post_add</span>
                      <div>
                        <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          Tạo Báo Cáo Sự Cố Kho Mới
                        </h2>
                        <span className="font-label-sm text-label-sm text-outline">
                          Tư cách cá nhân: Trần Hùng (TK-MB-04)
                        </span>
                      </div>
                    </div>
                    <span className="bg-primary-fixed text-on-primary-fixed-variant font-label-sm rounded px-2 py-0.5 text-[11px] font-bold">
                      RBAC LEVEL 3
                    </span>
                  </div>

                  {/* Strict Rbac Notice */}
                  <div className="bg-surface-container-low flex items-start gap-1 rounded-xl p-3">
                    <span className="material-symbols-outlined text-error mt-0.5 shrink-0 text-[20px]">verified</span>
                    <div className="font-body-sm text-body-sm text-on-surface">
                      <strong className="text-error font-semibold">Quy chuẩn RBAC bất biến:</strong> Bạn đang lập biên
                      bản với tư cách cá nhân <span className="text-primary font-bold">Trần Hùng</span>. Hệ thống không
                      cho phép sửa sau khi gửi và tuyệt đối{" "}
                      <strong>không báo cáo thay cho người khác hoặc can thiệp chuyến TNV</strong>.
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="space-y-2">
                    <div>
                      <label className="font-label-md text-label-md text-on-surface mb-1 block font-semibold">
                        Phân loại sự cố kho bãi <span className="text-error">*</span>
                      </label>
                      <select className="bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:bg-surface-container w-full rounded-xl px-3 py-2 transition-all focus:outline-none">
                        <option>Sự cố bảo quản kho bãi (Ẩm mốc, dột, côn trùng, nhiệt độ)</option>
                        <option>Hư hỏng linh kiện trong quá trình kiểm định kỹ thuật</option>
                        <option>Thất thoát / Sai lệch số lượng trong đợt tiếp nhận</option>
                        <option>Chập cháy, tai nạn an toàn lao động trong kho</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="font-label-md text-label-md text-on-surface mb-1 block font-semibold">
                          Vị trí Kệ / Khu vực <span className="text-error">*</span>
                        </label>
                        <input
                          className="bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:bg-surface-container w-full rounded-xl px-3 py-2 transition-all focus:outline-none"
                          placeholder="VD: Kệ B2-T02 hoặc Bàn KĐ-03"
                          type="text"
                          defaultValue="Kệ B4 - Kho Laptop"
                        />
                      </div>
                      <div>
                        <label className="font-label-md text-label-md text-on-surface mb-1 block font-semibold">
                          Lô hàng / Mã tài sản liên đới
                        </label>
                        <input
                          className="bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:bg-surface-container w-full rounded-xl px-3 py-2 transition-all focus:outline-none"
                          placeholder="VD: #DON-2024-XXXX"
                          type="text"
                          defaultValue="#DON-2024-9102"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="font-label-md text-label-md text-on-surface mb-1 block font-semibold">
                        Lý do &amp; Diễn biến chi tiết sự cố <span className="text-error">* (Bắt buộc ghi rõ)</span>
                      </label>
                      <textarea
                        className="bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:bg-surface-container w-full resize-none rounded-xl px-3 py-2 transition-all focus:outline-none"
                        placeholder="Mô tả cụ thể nguyên nhân xảy ra, tình trạng vật thể, mức độ hư hao và giải pháp xử lý ban đầu..."
                        rows="3"
                      ></textarea>
                    </div>

                    {/* Upload Evidence Placeholder */}
                    <div>
                      <label className="font-label-md text-label-md text-on-surface mb-1 block font-semibold">
                        Ảnh chụp hiện trường / Biên bản đính kèm
                      </label>
                      <div className="bg-surface-container-low border-outline-variant hover:bg-surface-container flex cursor-pointer items-center justify-between rounded-xl border border-dashed p-3 transition-all">
                        <div className="text-on-surface-variant font-body-sm text-body-sm flex items-center gap-1">
                          <span className="material-symbols-outlined text-primary text-[20px]">add_a_photo</span>
                          <span>Kéo thả tối đa 5 ảnh (PNG/JPG &lt; 10MB) hoặc chọn từ máy</span>
                        </div>
                        <span className="bg-surface-container-lowest font-label-sm text-label-sm text-primary rounded px-2.5 py-1 font-semibold shadow-sm">
                          Tải lên
                        </span>
                      </div>
                    </div>

                    {/* Submit Cta */}
                    <div className="pt-2">
                      <button className="bg-primary text-on-primary font-headline-sm text-headline-sm hover:bg-surface-tint flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold shadow-md transition-all">
                        <span className="material-symbols-outlined text-[20px]">send_and_archive</span>
                        <span>GỬI BÁO CÁO SỰ CỐ BẤT BIẾN (TK-MB-04)</span>
                      </button>
                      <span className="font-body-sm text-outline mt-1.5 block text-center text-[11px]">
                        Hệ thống sẽ gắn timestamp nguyên tử UTC+7 và mã định danh Trần Hùng (không thể hủy ngang).
                      </span>
                    </div>
                  </div>
                </div>

                {/* Rbac Standard Logistics Notice */}
                <div className="bg-surface-container-lowest space-y-2 rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[20px]">policy</span>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Quy Chuẩn RBAC Cổng Kho (v2.8.4)
                    </h2>
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="bg-surface-container-low text-primary font-code-num flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold">
                        1
                      </span>
                      <span>
                        <strong>Tự chịu trách nhiệm:</strong> Mọi báo cáo do Trưởng Kho hoặc Kỹ thuật viên tạo đều mang
                        giá trị pháp lý nội bộ, làm căn cứ thanh quyết toán quỹ hỗ trợ.
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="bg-surface-container-low text-primary font-code-num flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold">
                        2
                      </span>
                      <span>
                        <strong>Không can thiệp chuyến TNV:</strong> Chuyến xe gắn thẻ FAILED chỉ có TNV hiện trường
                        được quyền cập nhật lý do và hình ảnh. Kho chỉ nhận dữ liệu chỉ đọc.
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="bg-surface-container-low text-primary font-code-num flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold">
                        3
                      </span>
                      <span>
                        <strong>Đối soát EduLedger:</strong> Bất kỳ sai lệch số lượng linh kiện kiểm định đều đồng bộ về
                        Ban Điều Phối quốc gia để cấp bù từ đối tác bảo trợ.
                      </span>
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

export default WarehouseIncidentReportPage;
