import React, { useState, useRef } from "react";

const SchoolSupportPage = () => {
  const [submitState, setSubmitState] = useState("idle"); // idle | submitting | done
  const fileInputRef = useRef(null);

  const handleSubmit = () => {
    if (submitState !== "idle") return;
    setSubmitState("submitting");
    setTimeout(() => {
      setSubmitState("done");
    }, 1200);
  };

  const handleClearSignature = (e) => {
    e.preventDefault();
    alert("Chữ ký đã sẵn sàng để vẽ lại hoặc xác thực bằng Token USB.");
  };

  return (
    <main className="bg-background relative min-h-screen pt-0">
      {/* Breadcrumb */}
      <div className="px-gutter-desktop py-space-sm bg-surface-container-low w-full">
        <div className="gap-space-xs font-label-md text-label-md text-on-surface-variant flex items-center">
          <span className="hover:text-primary cursor-pointer">EduShare VN</span>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="hover:text-primary cursor-pointer">Điều hành</span>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-primary font-semibold">Không gian làm việc</span>
        </div>
      </div>

      <div className="px-gutter-desktop py-space-lg w-full">
        <div className="gap-space-lg flex w-full flex-col">
          {/* Active Institutional Banner */}
          <div className="bg-surface-container-lowest p-space-lg gap-space-md relative flex flex-col items-start justify-between overflow-hidden rounded-xl shadow-sm md:flex-row md:items-center">
            <div className="bg-primary/5 pointer-events-none absolute -right-10 -bottom-10 h-64 w-64 rounded-full blur-2xl"></div>
            <div className="gap-space-md flex min-w-0 items-center">
              <div className="bg-primary-container/10 text-primary flex h-14 w-14 shrink-0 items-center justify-center rounded-xl">
                <span className="material-symbols-outlined text-[32px]">school</span>
              </div>
              <div className="flex min-w-0 flex-col">
                <div className="gap-space-xs flex flex-wrap items-center">
                  <span className="text-tertiary bg-tertiary-fixed font-label-sm text-label-sm rounded px-2 py-0.5">
                    Đơn vị thụ hưởng công lập
                  </span>
                  <span className="font-code-num text-code-num text-secondary">
                    Mã định danh: <span className="text-on-surface font-semibold">SCH-TH-3829</span>
                  </span>
                </div>
                <h1 className="font-headline-lg text-headline-lg text-on-surface mt-1 truncate">
                  Trường PTDTBT THCS Mường Lát
                </h1>
                <p className="font-body-sm text-body-sm text-secondary mt-0.5 flex items-center gap-1">
                  <span className="material-symbols-outlined text-tertiary text-[16px]">location_on</span>
                  Khu phố I, Thị trấn Mường Lát, Huyện Mường Lát, Tỉnh Thanh Hóa
                </p>
              </div>
            </div>
            <div className="gap-space-sm flex w-full shrink-0 items-center justify-end md:w-auto">
              <div className="px-space-md bg-surface-container-low flex flex-col items-end rounded-lg py-1.5">
                <span className="font-label-sm text-label-sm text-secondary">Người đại diện phụ trách</span>
                <span className="font-label-md text-label-md text-on-surface font-semibold">
                  Thầy Lò Văn Thuận (Hiệu trưởng)
                </span>
              </div>
              <button className="px-space-md bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-1.5 rounded-lg py-2.5 transition-colors">
                <span className="material-symbols-outlined text-[18px]">contact_support</span>
                <span>Hỗ trợ khẩn cấp</span>
              </button>
            </div>
          </div>

          {/* Progress Workflow Tracker */}
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
            <div className="mb-space-lg flex flex-col justify-between gap-2 md:flex-row md:items-center">
              <div>
                <span className="font-label-sm text-label-sm text-tertiary font-bold tracking-wider uppercase">
                  Hành trình tiếp nhận &amp; Phân bổ nguồn lực
                </span>
                <h2 className="font-headline-md text-headline-md text-on-surface">
                  Tiến độ đợt tài trợ thiết bị tin học học đường (Đợt IV/2024)
                </h2>
              </div>
              <div className="gap-space-xs text-secondary font-label-md text-label-md flex items-center">
                <span className="bg-primary inline-block h-2.5 w-2.5 animate-ping rounded-full"></span>
                <span className="text-primary font-semibold">Bước 4: Đang vận chuyển liên tỉnh</span>
              </div>
            </div>

            {/* Stepper Pipeline */}
            <div className="relative grid grid-cols-1 gap-3 md:grid-cols-5">
              {/* Step 1: Hoàn tất */}
              <div className="bg-surface-container-low flex flex-col gap-2 rounded-lg p-3.5 transition-all">
                <div className="flex items-center justify-between">
                  <span className="bg-tertiary text-on-tertiary font-label-sm text-label-sm flex h-7 w-7 items-center justify-center rounded-full">
                    <span className="material-symbols-outlined text-[16px]">check</span>
                  </span>
                  <span className="font-code-num text-tertiary text-[11px] font-medium">18/10/2024</span>
                </div>
                <div>
                  <div className="font-label-md text-label-md text-on-surface font-semibold">1. Gửi đề xuất</div>
                  <p className="font-body-sm text-body-sm text-secondary mt-0.5 line-clamp-2">
                    35 Bộ máy tính để bàn kèm danh sách học sinh
                  </p>
                </div>
                <span className="font-label-sm text-tertiary text-[11px] font-semibold">Đã hoàn thành</span>
              </div>

              {/* Step 2: Hoàn tất */}
              <div className="bg-surface-container-low flex flex-col gap-2 rounded-lg p-3.5 transition-all">
                <div className="flex items-center justify-between">
                  <span className="bg-tertiary text-on-tertiary font-label-sm text-label-sm flex h-7 w-7 items-center justify-center rounded-full">
                    <span className="material-symbols-outlined text-[16px]">check</span>
                  </span>
                  <span className="font-code-num text-tertiary text-[11px] font-medium">25/10/2024</span>
                </div>
                <div>
                  <div className="font-label-md text-label-md text-on-surface font-semibold">2. Thẩm định hồ sơ</div>
                  <p className="font-body-sm text-body-sm text-secondary mt-0.5 line-clamp-2">
                    Hội đồng Quốc gia phê duyệt chỉ tiêu tối đa
                  </p>
                </div>
                <span className="font-label-sm text-tertiary text-[11px] font-semibold">Đã duyệt 100%</span>
              </div>

              {/* Step 3: Hoàn tất */}
              <div className="bg-surface-container-low flex flex-col gap-2 rounded-lg p-3.5 transition-all">
                <div className="flex items-center justify-between">
                  <span className="bg-tertiary text-on-tertiary font-label-sm text-label-sm flex h-7 w-7 items-center justify-center rounded-full">
                    <span className="material-symbols-outlined text-[16px]">check</span>
                  </span>
                  <span className="font-code-num text-tertiary text-[11px] font-medium">02/11/2024</span>
                </div>
                <div>
                  <div className="font-label-md text-label-md text-on-surface font-semibold">
                    3. Lập kế hoạch phân bổ
                  </div>
                  <p className="font-body-sm text-body-sm text-secondary mt-0.5 line-clamp-2">
                    Xuất kho trung tâm Hà Nội: Lô mã #BG-2024-110
                  </p>
                </div>
                <span className="font-label-sm text-tertiary text-[11px] font-semibold">Đã điều phối kho</span>
              </div>

              {/* Step 4: Active Highlight */}
              <div className="bg-primary-container text-on-primary relative flex flex-col gap-2 overflow-hidden rounded-lg p-3.5 shadow-md">
                <div className="flex items-center justify-between">
                  <span className="bg-on-primary text-primary-container font-label-sm text-label-sm flex h-7 w-7 items-center justify-center rounded-full font-bold">
                    4
                  </span>
                  <span className="font-code-num bg-on-primary/20 rounded px-1.5 py-0.5 text-[11px] font-medium">
                    Đang diễn ra
                  </span>
                </div>
                <div>
                  <div className="font-label-md text-label-md font-semibold">4. Đang giao hàng</div>
                  <p className="font-body-sm text-body-sm text-on-primary/80 mt-0.5 line-clamp-2">
                    TNV Đội xe Chuyến Xe Tương Lai trên đường
                  </p>
                </div>
                <div className="text-on-primary/90 flex items-center gap-1 text-[11px] font-semibold">
                  <span className="material-symbols-outlined text-[14px]">local_shipping</span>
                  <span>Dự kiến đến: Hôm nay 16:30</span>
                </div>
              </div>

              {/* Step 5: Đang chờ */}
              <div className="bg-surface-container flex flex-col gap-2 rounded-lg p-3.5 opacity-80 transition-all">
                <div className="flex items-center justify-between">
                  <span className="bg-surface-container-highest text-secondary font-label-sm text-label-sm flex h-7 w-7 items-center justify-center rounded-full font-bold">
                    5
                  </span>
                  <span className="font-code-num text-outline text-[11px] font-medium">Giai đoạn cuối</span>
                </div>
                <div>
                  <div className="font-label-md text-label-md text-on-surface font-semibold">
                    5. Bàn giao &amp; Ký số
                  </div>
                  <p className="font-body-sm text-body-sm text-secondary mt-0.5 line-clamp-2">
                    Biên bản nghiệm thu tại trường &amp; Báo cáo ảnh
                  </p>
                </div>
                <span className="font-label-sm text-secondary text-[11px] font-medium">Chờ kiểm đếm</span>
              </div>
            </div>
          </div>

          {/* Two-Column Workspace Layout */}
          <div className="gap-space-lg grid grid-cols-1 items-start lg:grid-cols-12">
            {/* LEFT PANEL (7 Cols) */}
            <section className="gap-space-lg flex flex-col lg:col-span-7">
              {/* Top Action & Overview Card */}
              <div className="bg-surface-container-lowest p-space-lg gap-space-md flex flex-col rounded-xl shadow-sm">
                <div className="gap-space-sm pb-space-sm flex flex-col items-start justify-between sm:flex-row sm:items-center">
                  <div>
                    <h3 className="font-headline-md text-headline-md text-on-surface">
                      Hồ sơ Đề xuất Thiết bị Phòng Tin
                    </h3>
                    <p className="font-body-sm text-body-sm text-secondary">
                      Chi tiết đề xuất nhu cầu thực tế kèm văn bản xác minh của Phòng GD&amp;ĐT
                    </p>
                  </div>
                  <div className="gap-space-xs flex w-full items-center sm:w-auto">
                    <button className="px-space-md bg-primary text-on-primary hover:bg-primary/90 font-label-md text-label-md flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2 shadow-sm transition-all sm:flex-none">
                      <span className="material-symbols-outlined text-[18px]">add_circle</span>
                      <span>Tạo đề xuất mới</span>
                    </button>
                    <button className="px-space-md bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-1.5 rounded-lg py-2 transition-all">
                      <span className="material-symbols-outlined text-[18px]">upload_file</span>
                      <span>Tải minh chứng</span>
                    </button>
                  </div>
                </div>

                {/* Metrics Snapshot Bento */}
                <div className="gap-space-sm grid grid-cols-3">
                  <div className="p-space-md bg-surface-container-low flex flex-col rounded-lg">
                    <span className="font-label-sm text-label-sm text-secondary">Nhu cầu đăng ký</span>
                    <span className="font-headline-lg text-headline-lg text-primary mt-1">
                      35 <span className="text-secondary text-sm font-normal">Bộ</span>
                    </span>
                    <span className="font-body-sm text-body-sm text-secondary mt-0.5">Desktop Core i5/8G</span>
                  </div>
                  <div className="p-space-md bg-surface-container-low flex flex-col rounded-lg">
                    <span className="font-label-sm text-label-sm text-secondary">Học sinh hoàn cảnh</span>
                    <span className="font-headline-lg text-headline-lg text-tertiary mt-1">
                      142 <span className="text-secondary text-sm font-normal">Em</span>
                    </span>
                    <span className="font-body-sm text-body-sm text-tertiary mt-0.5">100% Dân tộc thiểu số</span>
                  </div>
                  <div className="p-space-md bg-surface-container-low flex flex-col rounded-lg">
                    <span className="font-label-sm text-label-sm text-secondary">Phòng máy khả dụng</span>
                    <span className="font-headline-lg text-headline-lg text-on-surface mt-1">
                      01 <span className="text-secondary text-sm font-normal">Phòng</span>
                    </span>
                    <span className="font-body-sm text-body-sm text-tertiary mt-0.5">Đã kéo mạng LAN 1Gb</span>
                  </div>
                </div>
              </div>

              {/* Student List & Evidence */}
              <div className="bg-surface-container-lowest p-space-lg gap-space-md flex flex-col rounded-xl shadow-sm">
                <div className="gap-space-xs flex flex-col items-start justify-between sm:flex-row sm:items-center">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">
                        Danh sách học sinh khó khăn &amp; Hồ sơ chứng thực
                      </h3>
                      <span className="bg-tertiary-fixed text-tertiary rounded px-2 py-0.5 text-[11px] font-semibold">
                        Đã kiểm duyệt địa phương
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-secondary mt-0.5">
                      Căn cứ theo Nghị định số 07/2021/NĐ-CP và xác nhận UBND Huyện Mường Lát
                    </p>
                  </div>
                  <span className="font-code-num text-code-num text-secondary">5/142 hồ sơ hiển thị</span>
                </div>

                {/* Student Evidence Table */}
                <div className="bg-surface-container-lowest overflow-x-auto rounded-lg">
                  <table className="font-body-md text-body-md w-full text-left">
                    <thead>
                      <tr className="bg-surface-container-low text-secondary font-label-sm text-label-sm tracking-wider uppercase">
                        <th className="px-space-md py-3">Mã HS / Họ và tên</th>
                        <th className="px-space-md py-3">Lớp</th>
                        <th className="px-space-md py-3">Phân loại hoàn cảnh</th>
                        <th className="px-space-md py-3">Nhu cầu thiết bị</th>
                        <th className="px-space-md py-3 text-right">Minh chứng đính kèm</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-transparent">
                      <tr className="hover:bg-surface-container-low/70 transition-colors">
                        <td className="px-space-md py-3">
                          <div className="flex flex-col">
                            <span className="font-label-md text-label-md text-on-surface font-semibold">
                              Hà Thị Mai
                            </span>
                            <span className="font-code-num text-secondary text-[11px]">HS-ML-2024-001</span>
                          </div>
                        </td>
                        <td className="px-space-md font-label-md text-label-md text-on-surface py-3">7A1</td>
                        <td className="px-space-md py-3">
                          <span className="bg-error-container text-on-error-container font-label-sm inline-flex items-center gap-1 rounded px-2 py-0.5 text-[11px]">
                            Hộ nghèo (Dân tộc Thái)
                          </span>
                        </td>
                        <td className="px-space-md text-on-surface font-body-sm text-body-sm py-3">
                          Thực hành Tin học &amp; Học online
                        </td>
                        <td className="px-space-md py-3 text-right">
                          <button className="text-primary font-label-sm text-label-sm inline-flex items-center gap-1 hover:underline">
                            <span className="material-symbols-outlined text-[16px]">picture_as_pdf</span>
                            <span>XN_UBND_01.pdf</span>
                          </button>
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container-low/70 transition-colors">
                        <td className="px-space-md py-3">
                          <div className="flex flex-col">
                            <span className="font-label-md text-label-md text-on-surface font-semibold">Thao A Vừ</span>
                            <span className="font-code-num text-secondary text-[11px]">HS-ML-2024-042</span>
                          </div>
                        </td>
                        <td className="px-space-md font-label-md text-label-md text-on-surface py-3">8B</td>
                        <td className="px-space-md py-3">
                          <span className="bg-error-container text-on-error-container font-label-sm inline-flex items-center gap-1 rounded px-2 py-0.5 text-[11px]">
                            Hộ nghèo (Dân tộc Mông)
                          </span>
                        </td>
                        <td className="px-space-md text-on-surface font-body-sm text-body-sm py-3">
                          Học lập trình Scratch cơ bản
                        </td>
                        <td className="px-space-md py-3 text-right">
                          <button className="text-primary font-label-sm text-label-sm inline-flex items-center gap-1 hover:underline">
                            <span className="material-symbols-outlined text-[16px]">picture_as_pdf</span>
                            <span>XN_UBND_042.pdf</span>
                          </button>
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container-low/70 transition-colors">
                        <td className="px-space-md py-3">
                          <div className="flex flex-col">
                            <span className="font-label-md text-label-md text-on-surface font-semibold">
                              Vi Văn Toàn
                            </span>
                            <span className="font-code-num text-secondary text-[11px]">HS-ML-2024-077</span>
                          </div>
                        </td>
                        <td className="px-space-md font-label-md text-label-md text-on-surface py-3">9A2</td>
                        <td className="px-space-md py-3">
                          <span className="bg-secondary-container text-on-secondary-fixed font-label-sm inline-flex items-center gap-1 rounded px-2 py-0.5 text-[11px]">
                            Cận nghèo / Mồ côi
                          </span>
                        </td>
                        <td className="px-space-md text-on-surface font-body-sm text-body-sm py-3">
                          Ôn thi chuyển cấp THPT
                        </td>
                        <td className="px-space-md py-3 text-right">
                          <button className="text-primary font-label-sm text-label-sm inline-flex items-center gap-1 hover:underline">
                            <span className="material-symbols-outlined text-[16px]">picture_as_pdf</span>
                            <span>XN_UBND_077.pdf</span>
                          </button>
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container-low/70 transition-colors">
                        <td className="px-space-md py-3">
                          <div className="flex flex-col">
                            <span className="font-label-md text-label-md text-on-surface font-semibold">
                              Lương Thị Chi
                            </span>
                            <span className="font-code-num text-secondary text-[11px]">HS-ML-2024-098</span>
                          </div>
                        </td>
                        <td className="px-space-md font-label-md text-label-md text-on-surface py-3">6A3</td>
                        <td className="px-space-md py-3">
                          <span className="bg-error-container text-on-error-container font-label-sm inline-flex items-center gap-1 rounded px-2 py-0.5 text-[11px]">
                            Hộ đặc biệt khó khăn
                          </span>
                        </td>
                        <td className="px-space-md text-on-surface font-body-sm text-body-sm py-3">
                          Kỹ năng số nhập môn
                        </td>
                        <td className="px-space-md py-3 text-right">
                          <button className="text-primary font-label-sm text-label-sm inline-flex items-center gap-1 hover:underline">
                            <span className="material-symbols-outlined text-[16px]">picture_as_pdf</span>
                            <span>XN_UBND_098.pdf</span>
                          </button>
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container-low/70 transition-colors">
                        <td className="px-space-md py-3">
                          <div className="flex flex-col">
                            <span className="font-label-md text-label-md text-on-surface font-semibold">
                              Giàng A Tủa
                            </span>
                            <span className="font-code-num text-secondary text-[11px]">HS-ML-2024-115</span>
                          </div>
                        </td>
                        <td className="px-space-md font-label-md text-label-md text-on-surface py-3">8A1</td>
                        <td className="px-space-md py-3">
                          <span className="bg-secondary-container text-on-secondary-fixed font-label-sm inline-flex items-center gap-1 rounded px-2 py-0.5 text-[11px]">
                            Hộ nghèo (Dân tộc Mông)
                          </span>
                        </td>
                        <td className="px-space-md text-on-surface font-body-sm text-body-sm py-3">
                          Tra cứu học liệu STEM
                        </td>
                        <td className="px-space-md py-3 text-right">
                          <button className="text-primary font-label-sm text-label-sm inline-flex items-center gap-1 hover:underline">
                            <span className="material-symbols-outlined text-[16px]">picture_as_pdf</span>
                            <span>XN_UBND_115.pdf</span>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Pagination & Evidence Notice */}
                <div className="gap-space-sm pt-space-xs font-body-sm text-body-sm text-secondary flex flex-col items-center justify-between sm:flex-row">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-tertiary text-[16px]">verified_user</span>
                    <span>Toàn bộ học sinh đã được đối soát qua Cơ sở Dữ liệu Dân cư Quốc gia VNeID.</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="bg-surface-container text-secondary hover:bg-surface-container-high font-label-sm rounded px-2.5 py-1">
                      Trước
                    </button>
                    <span className="font-code-num text-on-surface px-2 font-semibold">1 / 29</span>
                    <button className="bg-surface-container text-secondary hover:bg-surface-container-high font-label-sm rounded px-2.5 py-1">
                      Tiếp
                    </button>
                  </div>
                </div>
              </div>

              {/* Real Classroom & Transport Photos */}
              <div className="gap-space-md grid grid-cols-1 sm:grid-cols-2">
                <div className="bg-surface-container-lowest p-space-md flex flex-col gap-2 rounded-xl shadow-sm">
                  <div className="relative h-44 w-full overflow-hidden rounded-lg">
                    <img
                      className="h-full w-full object-cover"
                      alt="Phòng học bộ môn Tin học hiện tại tại trường THCS Mường Lát"
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                    />
                    <span className="bg-inverse-surface/80 text-inverse-on-surface font-label-sm absolute bottom-2 left-2 rounded px-2 py-0.5 text-[11px] backdrop-blur-sm">
                      Hiện trạng điểm trường
                    </span>
                  </div>
                  <span className="font-headline-sm text-on-surface mt-1 text-[14px]">
                    Phòng học bộ môn Tin học hiện tại
                  </span>
                  <p className="font-body-sm text-body-sm text-secondary">
                    Đã hoàn thành lắp đặt hệ thống dây mạng âm tường và ổn áp Lioa do phụ huynh hỗ trợ.
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-space-md flex flex-col gap-2 rounded-xl shadow-sm">
                  <div className="relative h-44 w-full overflow-hidden rounded-lg">
                    <img
                      className="h-full w-full object-cover"
                      alt="Đoàn xe vận chuyển thiết bị EduShare trên đường đèo Thanh Hóa"
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                    />
                    <span className="bg-inverse-surface/80 text-inverse-on-surface font-label-sm absolute bottom-2 left-2 rounded px-2 py-0.5 text-[11px] backdrop-blur-sm">
                      Chuyến xe vận chuyển
                    </span>
                  </div>
                  <span className="font-headline-sm text-on-surface mt-1 text-[14px]">
                    Hành trình tiếp cận Mường Lát
                  </span>
                  <p className="font-body-sm text-body-sm text-secondary">
                    Đội ngũ TNV kỹ thuật đã vượt đèo Tây Tiến, cách trường 18km theo định vị GPS thời gian thực.
                  </p>
                </div>
              </div>
            </section>

            {/* RIGHT PANEL (5 Cols) */}
            <aside className="gap-space-lg flex flex-col lg:col-span-5">
              {/* Shipment Specification Ticket Card */}
              <div className="bg-surface-container-lowest p-space-lg gap-space-md flex flex-col rounded-xl shadow-sm">
                <div className="pb-space-xs flex items-center justify-between">
                  <div className="gap-space-xs flex items-center">
                    <span className="material-symbols-outlined text-primary text-[24px]">fact_check</span>
                    <h3 className="font-headline-md text-headline-md text-on-surface">Đợt Bàn Giao #BG-2024-110</h3>
                  </div>
                  <span className="bg-secondary-container text-on-secondary-fixed font-code-num rounded px-2.5 py-1 text-[12px] font-bold">
                    LÔ SỐ: 110-ML
                  </span>
                </div>

                <div className="p-space-md bg-surface-container-low flex flex-col gap-2 rounded-lg">
                  <span className="font-label-sm text-label-sm text-secondary uppercase">
                    Danh mục trang thiết bị cấp phát
                  </span>
                  <div className="flex items-center justify-between py-1.5">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">desktop_windows</span>
                      <span className="font-label-md text-label-md text-on-surface font-medium">
                        35 Bộ máy vi tính đồng bộ HP ProDesk
                      </span>
                    </div>
                    <span className="bg-tertiary-fixed text-tertiary font-code-num text-label-sm rounded px-2 py-0.5 font-semibold">
                      Đã kiểm định A+
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">battery_charging_full</span>
                      <span className="font-label-md text-label-md text-on-surface font-medium">
                        10 Bộ lưu điện UPS Santak 1000VA
                      </span>
                    </div>
                    <span className="bg-tertiary-fixed text-tertiary font-code-num text-label-sm rounded px-2 py-0.5 font-semibold">
                      Mới 100%
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">router</span>
                      <span className="font-label-md text-label-md text-on-surface font-medium">
                        02 Switch mạng Gigabit 24 cổng TP-Link
                      </span>
                    </div>
                    <span className="bg-tertiary-fixed text-tertiary font-code-num text-label-sm rounded px-2 py-0.5 font-semibold">
                      Sẵn sàng
                    </span>
                  </div>
                  <div className="text-secondary mt-2 flex items-center justify-between pt-2 text-[12px]">
                    <span>Nguồn tài trợ:</span>
                    <span className="text-primary font-semibold">
                      Cộng đồng Nhà hảo tâm EduShare &amp; Tập đoàn FPT
                    </span>
                  </div>
                </div>

                {/* Digital Signature */}
                <div className="gap-space-sm pt-space-xs flex flex-col">
                  <div className="flex items-center justify-between">
                    <label className="font-label-md text-label-md text-on-surface flex items-center gap-1.5 font-semibold">
                      <span className="material-symbols-outlined text-tertiary text-[18px]">draw</span>
                      <span>Chữ ký số BGH Nhà trường tiếp nhận</span>
                    </label>
                    <button
                      className="font-label-sm text-secondary hover:text-primary text-[12px] transition-colors"
                      onClick={handleClearSignature}
                    >
                      Ký lại
                    </button>
                  </div>
                  <div className="bg-surface-container-low group relative flex h-36 w-full flex-col items-center justify-center rounded-lg p-2">
                    <svg
                      className="text-primary h-full w-full"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2"
                      viewBox="0 0 320 120"
                    >
                      <path className="opacity-80" d="M 20 80 Q 50 20 90 70 T 150 60 Q 180 30 220 75 T 290 50"></path>
                      <path className="opacity-60" d="M 80 85 Q 120 110 200 85" strokeWidth="1.5"></path>
                    </svg>
                    <div className="text-secondary pointer-events-none absolute right-3 bottom-2 left-3 flex items-center justify-between text-[11px]">
                      <span className="font-code-num">Mã băm xác thực: SHA256-99A1-F4B2-880C</span>
                      <span className="text-tertiary flex items-center gap-0.5 font-semibold">
                        <span className="material-symbols-outlined text-[12px]">verified</span> Hợp lệ
                      </span>
                    </div>
                  </div>
                  <p className="font-body-sm text-secondary text-[11px]">
                    Xác nhận bởi: <span className="text-on-surface font-medium">Lò Văn Thuận</span> • Căn cước công dân
                    số: <span className="font-code-num">038081******</span> (Đã đối khớp chữ ký token VNPT-CA).
                  </p>
                </div>

                {/* Photo Upload */}
                <div className="gap-space-xs flex flex-col">
                  <label className="font-label-md text-label-md text-on-surface flex items-center gap-1.5 font-semibold">
                    <span className="material-symbols-outlined text-primary text-[18px]">add_a_photo</span>
                    <span>Tải lên hình ảnh nghiệm thu thực tế phòng máy</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="relative h-20 overflow-hidden rounded-lg">
                      <img
                        className="h-full w-full object-cover"
                        alt="Tình nguyện viên kỹ thuật lắp đặt máy tính tại trường"
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                      />
                      <button className="bg-error text-on-error absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-full text-[12px]">
                        ×
                      </button>
                    </div>
                    <div className="relative h-20 overflow-hidden rounded-lg">
                      <img
                        className="h-full w-full object-cover"
                        alt="Phòng máy tính đã lắp đặt xong tại trường vùng cao"
                        src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
                      />
                      <button className="bg-error text-on-error absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-full text-[12px]">
                        ×
                      </button>
                    </div>
                    <label className="bg-surface-container hover:bg-surface-container-high text-secondary hover:text-primary flex h-20 cursor-pointer flex-col items-center justify-center rounded-lg transition-colors">
                      <span className="material-symbols-outlined text-[20px]">cloud_upload</span>
                      <span className="font-label-sm mt-0.5 text-[11px]">Thêm ảnh</span>
                      <input ref={fileInputRef} accept="image/*" className="hidden" multiple type="file" />
                    </label>
                  </div>
                </div>

                {/* Gratitude Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-md text-label-md text-on-surface flex items-center gap-1.5 font-semibold">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">favorite</span>
                    <span>Thông điệp tri ân gửi cộng đồng Nhà hảo tâm</span>
                  </label>
                  <textarea
                    className="bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:bg-surface-container-lowest placeholder:text-outline w-full rounded-lg p-2.5 transition-all outline-none"
                    placeholder="Nhập lời cảm ơn chân thành từ thầy cô và các em học sinh điểm trường..."
                    rows="3"
                    defaultValue="Thay mặt thầy và trò Trường PTDTBT THCS Mường Lát, xin trân trọng cảm ơn các anh chị nhà hảo tâm và đội ngũ EduShare Vietnam. 35 chiếc máy tính này là giấc mơ lớn, giúp học trò vùng cao lần đầu tiên được tiếp cận công nghệ thông tin bài bản!"
                  />
                </div>

                {/* Master CTA Button */}
                <div className="pt-space-xs flex flex-col gap-2">
                  <button
                    className={`px-space-md font-headline-sm flex w-full items-center justify-center gap-2 rounded-lg py-3 text-[15px] shadow-md transition-all active:scale-[0.99] ${
                      submitState === "done"
                        ? "bg-tertiary text-on-tertiary"
                        : submitState === "submitting"
                          ? "bg-primary text-on-primary opacity-75"
                          : "bg-primary hover:bg-primary-container text-on-primary"
                    }`}
                    onClick={handleSubmit}
                    disabled={submitState !== "idle"}
                  >
                    {submitState === "done" ? (
                      <>
                        <span className="material-symbols-outlined text-[20px]">task_alt</span>
                        <span>Đã xác nhận bàn giao thành công!</span>
                      </>
                    ) : submitState === "submitting" ? (
                      <>
                        <span className="material-symbols-outlined animate-spin text-[20px]">sync</span>
                        <span>Đang ghi nhận chữ ký điện tử...</span>
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-[20px]">check_circle</span>
                        <span>Ký hoàn tất bàn giao &amp; Phát hành chứng từ</span>
                      </>
                    )}
                  </button>
                  <div className="font-label-sm text-secondary flex items-center justify-center gap-2 text-[11px]">
                    <span className="material-symbols-outlined text-tertiary text-[14px]">lock</span>
                    <span>Biên bản được lưu trữ vĩnh viễn trên sổ cái minh bạch EduShare Ledger</span>
                  </div>
                </div>
              </div>

              {/* QR Transparency Card */}
              <div className="bg-surface-container-lowest p-space-md gap-space-sm flex items-center justify-between rounded-xl shadow-sm">
                <div className="gap-space-sm flex items-center">
                  <div className="bg-secondary-container text-primary flex h-10 w-10 items-center justify-center rounded-lg">
                    <span className="material-symbols-outlined text-[22px]">qr_code_2</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">
                      Mã QR Minh bạch Công khai
                    </span>
                    <span className="font-body-sm text-secondary text-[12px]">
                      Quét để theo dõi toàn bộ nhật ký bàn giao
                    </span>
                  </div>
                </div>
                <button className="bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md text-label-md rounded-lg px-3 py-1.5 transition-colors">
                  Xuất QR
                </button>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SchoolSupportPage;
