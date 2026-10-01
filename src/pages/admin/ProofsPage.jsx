import React, { useState } from "react";

const podCards = [
  {
    id: "#POD-2024-8891",
    school: "Trường PTDTBT THCS Trà Dơn",
    province: "Quảng Nam",
    address: "Xã Trà Dơn, Huyện Nam Trà My, Quảng Nam",
    gps: "15.082°N, 108.051°E • 14:30 12/10/2024",
    img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
    icon: "laptop_mac",
    equipCount: "40 Thiết bị đã trao",
    equipDetail: "30 Laptop Dell, 10 PC HP, 50 Balo",
    tnvInit: "L",
    tnv: "TNV: Lê Hoàng Long (Đội Vượt Đèo)",
    signer: "Thầy Hồ Văn Hạnh (Hiệu trưởng)",
    featured: true,
  },
  {
    id: "#POD-2024-8892",
    school: "Trường Tiểu học Mường Lát",
    province: "Thanh Hóa",
    address: "Thị trấn Mường Lát, Huyện Mường Lát, Thanh Hóa",
    gps: "20.505°N, 104.622°E • 10:15 15/10/2024",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    icon: "desktop_windows",
    equipCount: "35 Bộ PC & Sách giáo khoa",
    equipDetail: "35 Màn hình 22 inch, 250 bộ SGK",
    tnvInit: "T",
    tnv: "TNV: Trần Đình Trọng (Ban Tiếp nhận 2)",
    signer: "Cô Lò Thị Mai (Phó Hiệu trưởng)",
  },
  {
    id: "#POD-2024-8893",
    school: "Trường THCS Vượt Đèo Hà Giang",
    province: "Hà Giang",
    address: "Thị trấn Đồng Văn, Huyện Đồng Văn, Hà Giang",
    gps: "23.278°N, 105.361°E • 16:45 18/10/2024",
    img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
    icon: "devices_other",
    equipCount: "32 Laptop & Pin lưu điện",
    equipDetail: "ThinkPad X1C, Trạm phát wifi 4G",
    tnvInit: "N",
    tnv: "TNV: Nguyễn Minh Tuấn (Tổ Điều phối Phía Bắc)",
    signer: "Thầy Giàng A Páo (Hiệu trưởng)",
  },
  {
    id: "#POD-2024-8894",
    school: "Trường Tiểu học Pa Tần",
    province: "Lai Châu",
    address: "Xã Pa Tần, Huyện Sìn Hồ, Lai Châu",
    gps: "22.381°N, 103.242°E • 09:20 20/10/2024",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    icon: "computer",
    equipCount: "25 Bộ máy tính & Bàn học",
    equipDetail: "HP EliteDesk, Tai nghe học tiếng Anh",
    tnvInit: "P",
    tnv: "TNV: Phạm Thị Lan (Hành Trình Xanh)",
    signer: "Thầy Lù Văn Sâm (Phó Hiệu trưởng)",
  },
  {
    id: "#POD-2024-8895",
    school: "Trường PTDTBT THCS Xín Mần",
    province: "Hà Giang",
    address: "Thị trấn Cốc Pài, Huyện Xín Mần, Hà Giang",
    gps: "22.652°N, 104.469°E • 11:30 22/10/2024",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    icon: "laptop_chromebook",
    equipCount: "28 Thiết bị tin học",
    equipDetail: "20 Laptop Acer, 8 Màn hình bổ trợ",
    tnvInit: "H",
    tnv: "TNV: Hoàng Văn Nam (Cánh Én Vùng Cao)",
    signer: "Thầy Vàng Seo Mìn (Hiệu trưởng)",
  },
  {
    id: "#POD-2024-8896",
    school: "Trường Tiểu học Lùng Cú",
    province: "Hà Giang",
    address: "Xã Lùng Cú, Huyện Đồng Văn, Hà Giang",
    gps: "23.365°N, 105.318°E • 15:10 24/10/2024",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    icon: "pedal_bike",
    equipCount: "20 Laptop & Xe đạp",
    equipDetail: "15 Laptop Dell, 10 Xe đạp địa hình",
    tnvInit: "Đ",
    tnv: "TNV: Đỗ Hữu Đạt (Biên Cương Yêu Thương)",
    signer: "Thầy Thào Seo Vần (Hiệu trưởng)",
  },
];

const equipmentRows = [
  {
    stt: "01",
    code: "#LT-2024-88",
    name: "Laptop Dell Latitude 5520",
    spec: "Core i5 11th, 8GB RAM, SSD 256GB",
    qty: "20",
    status: "Tốt 100%",
    warranty: "12 th EduCare",
  },
  {
    stt: "02",
    code: "#LT-2024-51",
    name: "ThinkPad X1 Carbon Gen 6",
    spec: "Core i7, 16GB RAM, SSD 512GB",
    qty: "10",
    status: "Grade A 95%",
    warranty: "12 th EduCare",
  },
  {
    stt: "03",
    code: "#PC-2024-42",
    name: "PC HP ProDesk 400 G6 SFF",
    spec: 'i3 10th, 8GB, Kèm màn hình Dell 24"',
    qty: "10",
    status: "Cài SGK Số",
    warranty: "24 th Bảo hành",
  },
  {
    stt: "04",
    code: "#PK-2024-12",
    name: "Bộ phím chuột Logitech & Hub",
    spec: "Chuột MK120, Cáp HDMI, Dây mạng Cat6",
    qty: "30",
    status: "Mới 100%",
    warranty: "6 th Đổi mới",
    statusBg: "bg-secondary-container text-on-secondary-fixed",
  },
];

const modalPhotos = [
  {
    src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    label: "Góc 1: Kho hàng bàn giao",
  },
  {
    src: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
    label: "Góc 2: Ký nhận thực địa",
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    label: "Góc 3: Lắp đặt phòng máy",
  },
];

function PodCard({ card, onOpen }) {
  return (
    <div className="bg-surface-container-lowest group flex flex-col overflow-hidden rounded-xl shadow-sm transition-all hover:shadow-md">
      <div className="bg-surface-dim relative h-56 w-full overflow-hidden">
        <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          alt={card.school}
          src={card.img}
        />
        <div className="bg-tertiary-container/90 text-on-tertiary-container font-label-sm absolute top-3 right-3 flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold shadow-sm backdrop-blur-md">
          <span className="material-symbols-outlined text-[14px]">verified</span>
          Đã xác nhận PoD
        </div>
        <div className="bg-inverse-surface/80 text-inverse-on-surface font-code-num text-body-sm absolute top-3 left-3 rounded px-2 py-0.5 backdrop-blur-md">
          {card.id}
        </div>
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 pt-6">
          <div className="font-code-num flex items-center gap-1.5 text-[11px] tracking-tight text-white">
            <span className="material-symbols-outlined text-tertiary-fixed text-[14px]">pin_drop</span>
            <span>{card.gps}</span>
          </div>
          <span className="material-symbols-outlined text-[16px] text-white/80">fingerprint</span>
        </div>
      </div>
      <div className="p-space-md gap-space-sm flex flex-1 flex-col justify-between">
        <div className="space-y-space-xs">
          <div className="flex items-center justify-between">
            <span className="text-secondary font-label-sm text-[11px] tracking-wider uppercase">
              Điểm trường thụ hưởng
            </span>
            <span className="bg-secondary-container text-on-secondary-fixed font-label-sm rounded-full px-2 py-0.5 text-[10px]">
              {card.province}
            </span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary line-clamp-1 font-semibold transition-colors">
            {card.school}
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">location_on</span>
            {card.address}
          </p>
        </div>
        <div className="bg-surface-container-low flex items-center justify-between rounded-lg p-2.5">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[20px]">{card.icon}</span>
            <div className="flex flex-col">
              <span className="font-label-md text-label-md text-on-surface font-semibold">{card.equipCount}</span>
              <span className="font-body-sm text-on-surface-variant line-clamp-1 text-[11px]">{card.equipDetail}</span>
            </div>
          </div>
          <span className="font-code-num text-label-sm text-primary bg-surface-container-lowest rounded px-2 py-1 font-bold">
            Đủ 100%
          </span>
        </div>
        <div className="font-body-sm text-body-sm space-y-1.5 pt-2">
          <div className="text-on-surface-variant flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-[12px]">
              <span className="bg-primary/10 text-primary flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold">
                {card.tnvInit}
              </span>
              {card.tnv}
            </span>
          </div>
          <div className="text-on-surface flex items-center justify-between">
            <span className="font-label-sm text-label-sm text-on-surface-variant">Ký nhận:</span>
            <span className="font-label-md text-label-md text-tertiary flex items-center gap-1 font-semibold">
              <span className="material-symbols-outlined text-[14px]">edit_document</span>
              {card.signer}
            </span>
          </div>
        </div>
        <button
          className={`font-label-md text-label-md mt-2 flex w-full items-center justify-center gap-1.5 rounded-lg py-2 transition-colors ${
            card.featured
              ? "bg-primary-container text-on-primary hover:bg-primary"
              : "bg-surface-container-high text-on-surface hover:bg-surface-variant"
          }`}
          onClick={onOpen}
        >
          <span>Xem chi tiết biên bản &amp; Chữ ký số</span>
          <span className="material-symbols-outlined text-[16px]">open_in_new</span>
        </button>
      </div>
    </div>
  );
}

export default function ProofsPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="bg-surface p-gutter-desktop relative min-h-screen w-full pt-0">
      <div className="flex w-full flex-col">
        {/* Breadcrumb */}
        <div className="gap-space-sm pb-space-lg flex flex-col">
          <nav className="gap-space-xs font-label-sm text-label-sm text-on-surface-variant flex items-center">
            <span className="hover:text-primary cursor-pointer transition-colors">EduShare VN</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="hover:text-primary cursor-pointer transition-colors">Cổng Trường Học</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-primary font-semibold">Biên bản bàn giao &amp; Minh chứng</span>
          </nav>

          {/* Header */}
          <div className="gap-space-md mt-space-xs flex flex-col justify-between lg:flex-row lg:items-center">
            <div className="space-y-space-xs max-w-3xl">
              <div className="gap-space-xs px-space-sm bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm inline-flex items-center rounded-full py-0.5 tracking-wider uppercase">
                <span className="material-symbols-outlined text-primary text-[14px]">verified</span>
                Minh bạch &amp; Xác thực thực địa (Proof of Delivery - PoD)
              </div>
              <h1 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                Biên bản Bàn giao &amp; Hồ sơ Minh chứng (PoD)
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Hệ thống lưu trữ ảnh chụp hiện trường bàn giao kèm Watermark tọa độ GPS thời gian thực, chữ ký số điện
                tử của đại diện nhà trường và bảng kê chi tiết thiết bị bàn giao.
              </p>
            </div>
            <div className="gap-space-sm flex shrink-0 items-center">
              <button
                className="gap-space-xs px-space-md bg-surface-container-high text-on-surface hover:bg-surface-container-highest font-label-md text-label-md inline-flex items-center rounded-lg py-2.5 shadow-sm transition-colors"
                type="button"
              >
                <span className="material-symbols-outlined text-secondary text-[18px]">download</span>
                Xuất báo cáo PoD (Excel/PDF)
              </button>
            </div>
          </div>
        </div>

        {/* KPI Metrics */}
        <div className="gap-gutter-desktop mb-space-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              label: "Tổng biên bản bàn giao",
              value: "1,248",
              change: "+18.5%",
              changeIcon: "arrow_upward",
              sub: "So với chu kỳ tháng trước",
              icon: "receipt_long",
              iconBg: "bg-primary-fixed text-primary",
            },
            {
              label: "Tọa độ GPS & Thời gian",
              value: "100%",
              badge: "Audit Pass",
              sub: "Chống gian lận thực địa tuyệt đối",
              icon: "share_location",
              iconBg: "bg-secondary-container text-primary",
              valueColor: "text-tertiary",
            },
            {
              label: "Thiết bị & Học phẩm",
              value: "4,120",
              unit: "hiện vật",
              sub: "Đã trao tận tay học sinh & giáo viên",
              icon: "devices",
              iconBg: "bg-tertiary-fixed text-tertiary",
            },
            {
              label: "Hoàn tất ký số điện tử",
              value: "148 / 152",
              unit: "điểm trường",
              sub: "Đại diện pháp lý đã ký chứng thư",
              icon: "draw",
              iconBg: "bg-surface-variant text-primary",
            },
          ].map((m) => (
            <div
              key={m.label}
              className="bg-surface-container-lowest p-space-md group relative flex flex-col justify-between overflow-hidden rounded-xl shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold uppercase">
                  {m.label}
                </span>
                <div className={`h-8 w-8 rounded-lg ${m.iconBg} flex items-center justify-center`}>
                  <span className="material-symbols-outlined text-[18px]">{m.icon}</span>
                </div>
              </div>
              <div className="mt-space-md gap-space-xs flex items-baseline">
                <span
                  className={`font-headline-lg text-headline-lg font-code-num font-bold ${m.valueColor || "text-on-surface"}`}
                >
                  {m.value}
                </span>
                {m.change && (
                  <span className="font-label-sm text-label-sm text-tertiary flex items-center font-semibold">
                    <span className="material-symbols-outlined text-[14px]">{m.changeIcon}</span> {m.change}
                  </span>
                )}
                {m.badge && (
                  <span className="bg-surface-container-high text-on-surface font-label-sm inline-block rounded px-1.5 py-0.5 text-[10px]">
                    {m.badge}
                  </span>
                )}
                {m.unit && <span className="font-label-sm text-label-sm text-secondary font-medium">{m.unit}</span>}
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{m.sub}</p>
            </div>
          ))}
        </div>

        {/* Filter Toolbar */}
        <div className="bg-surface-container-lowest p-space-md mb-space-lg gap-space-md flex flex-col items-center justify-between rounded-xl shadow-sm lg:flex-row">
          <div className="bg-surface-container-low px-space-md text-on-surface flex w-full items-center rounded-lg py-2 lg:w-96">
            <span className="material-symbols-outlined text-on-surface-variant mr-space-xs text-[20px]">search</span>
            <input
              className="font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant w-full bg-transparent focus:outline-none"
              placeholder="Tìm kiếm mã PoD, tên trường, thiết bị, TNV..."
              type="text"
            />
          </div>
          <div className="gap-space-sm flex w-full flex-wrap items-center lg:w-auto">
            {[
              {
                options: ["Địa bàn: Tất cả tỉnh", "Quảng Nam", "Hà Giang", "Thanh Hóa", "Lai Châu", "Điện Biên"],
              },
              {
                options: [
                  "Chiến dịch: Tất cả",
                  "Ánh Sáng Tri Thức",
                  "Mùa Đông Ấm Biên Cương",
                  "Cùng Em Đến Trường 2024",
                  "Số Hóa Vùng Cao",
                ],
              },
              {
                options: ["Trạng thái: Đã ký điện tử", "Chờ duyệt đối soát", "Tất cả trạng thái"],
              },
            ].map((dropdown, i) => (
              <div key={i} className="relative inline-block">
                <select className="bg-surface-container-low text-on-surface font-label-md text-label-md px-space-md cursor-pointer appearance-none rounded-lg py-2 pr-8 focus:outline-none">
                  {dropdown.options.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
                <span className="material-symbols-outlined text-on-surface-variant pointer-events-none absolute top-2.5 right-2.5 text-[16px]">
                  expand_more
                </span>
              </div>
            ))}
          </div>
          <div className="bg-surface-container-low flex shrink-0 items-center rounded-lg p-1">
            <button className="bg-surface-container-lowest text-primary font-label-sm text-label-sm flex items-center gap-1 rounded-lg px-3 py-1.5 font-semibold shadow-xs">
              <span className="material-symbols-outlined text-[16px]">grid_view</span>
              Thẻ ảnh PoD
            </button>
            <button className="text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm flex items-center gap-1 rounded-lg px-3 py-1.5 transition-colors">
              <span className="material-symbols-outlined text-[16px]">table_rows</span>
              Bảng đối soát
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="gap-gutter-desktop grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {podCards.map((card) => (
            <PodCard key={card.id} card={card} onOpen={() => setShowModal(true)} />
          ))}
        </div>

        {/* PoD Detail Modal */}
        {showModal && (
          <div
            className="bg-on-surface/50 fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 backdrop-blur-sm"
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowModal(false);
            }}
          >
            <div className="bg-surface-container-lowest my-8 flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl shadow-2xl">
              {/* Modal Header */}
              <div className="px-space-lg py-space-md bg-surface-container-low flex shrink-0 items-center justify-between border-b-0">
                <div className="gap-space-md flex items-center">
                  <div className="bg-primary text-on-primary flex h-10 w-10 items-center justify-center rounded-xl">
                    <span className="material-symbols-outlined text-[24px]">verified_user</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Chi tiết Biên bản Bàn giao &amp; Minh chứng Thực địa
                      </h2>
                      <span className="bg-primary-fixed text-on-primary-fixed font-code-num text-label-sm rounded px-2 py-0.5 font-bold">
                        #POD-2024-8891
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Chiến dịch: Ánh Sáng Tri Thức Miền Tây xứ Quảng • Bàn giao thành công lúc 14:30 12/10/2024
                    </p>
                  </div>
                </div>
                <div className="gap-space-sm flex items-center">
                  <button
                    className="bg-surface-container-high text-on-surface hover:bg-surface-container-highest font-label-md text-label-md inline-flex items-center gap-1 rounded-lg px-3 py-1.5 transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-primary text-[16px]">print</span>
                    In PDF có chữ ký số
                  </button>
                  <button
                    className="bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface flex h-8 w-8 items-center justify-center rounded-lg transition-colors"
                    onClick={() => setShowModal(false)}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[20px]">close</span>
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-space-lg space-y-space-lg overflow-y-auto">
                {/* Main Photo */}
                <div className="space-y-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-secondary flex items-center gap-1 font-bold tracking-wider uppercase">
                      <span className="material-symbols-outlined text-primary text-[16px]">photo_camera</span>
                      Ảnh chụp thực địa kèm Watermark pháp lý &amp; Hash chuỗi khối
                    </span>
                    <span className="font-code-num text-tertiary flex items-center gap-1 text-[11px] font-semibold">
                      <span className="bg-tertiary h-2 w-2 animate-pulse rounded-full"></span>
                      Xác thực GPS Độ tin cậy: Tuyệt đối (Sai số ±2.4m)
                    </span>
                  </div>
                  <div className="bg-inverse-surface relative overflow-hidden rounded-xl shadow-md">
                    <div className="h-80 w-full overflow-hidden">
                      <img
                        className="h-full w-full object-cover"
                        alt="Lễ bàn giao thiết bị tại Trường THCS Trà Dơn"
                        src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
                      />
                    </div>
                    <div className="bg-inverse-surface/90 text-inverse-on-surface p-space-md absolute inset-x-0 bottom-0 flex flex-col justify-between gap-2 text-left backdrop-blur-md md:flex-row md:items-center">
                      <div className="space-y-0.5">
                        <div className="font-code-num text-body-sm text-tertiary-fixed flex items-center gap-2 font-semibold">
                          <span className="material-symbols-outlined text-[16px]">location_on</span>
                          TỌA ĐỘ GPS: 15.0823° N, 108.0512° E (Trường PTDTBT THCS Trà Dơn, Nam Trà My)
                        </div>
                        <div className="font-code-num text-body-sm text-outline-variant">
                          THỜI GIAN CHỤP: 14:30:22 GMT+7 12/10/2024 • MẠNG THIẾT BỊ: 4G Viettel Cell ID #VT-QNM-4819
                        </div>
                      </div>
                      <div className="bg-surface-container-lowest/10 font-code-num text-label-sm text-tertiary-fixed-dim rounded px-3 py-1">
                        SHA256: #9921e3f88bc92d04a771c
                      </div>
                    </div>
                  </div>
                  {/* Thumbnails */}
                  <div className="gap-space-sm grid grid-cols-3 pt-1">
                    {modalPhotos.map((p) => (
                      <div key={p.label} className="group relative h-20 cursor-pointer overflow-hidden rounded-lg">
                        <img
                          className="h-full w-full object-cover transition-transform group-hover:scale-105"
                          alt={p.label}
                          src={p.src}
                        />
                        <div className="font-label-sm absolute inset-0 flex items-center justify-center bg-black/40 text-[11px] font-semibold text-white">
                          {p.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Split Panel */}
                <div className="gap-space-lg pt-space-xs grid grid-cols-1 lg:grid-cols-12">
                  {/* E-Signature (5 cols) */}
                  <div className="space-y-space-md lg:col-span-5">
                    <span className="font-label-sm text-label-sm text-secondary flex items-center gap-1 font-bold tracking-wider uppercase">
                      <span className="material-symbols-outlined text-primary text-[16px]">draw</span>
                      Chữ ký điện tử &amp; Xác thực pháp lý
                    </span>
                    <div className="bg-surface-container-low p-space-md space-y-space-sm rounded-xl">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">
                          CHỮ KÝ ĐẠI DIỆN TRƯỜNG
                        </span>
                        <span className="bg-tertiary-fixed text-on-tertiary-fixed font-label-sm rounded px-2 py-0.5 text-[10px] font-bold">
                          HỢP LỆ
                        </span>
                      </div>
                      <div className="bg-surface-container-lowest relative flex h-28 flex-col items-center justify-center rounded-lg p-2 shadow-xs">
                        <svg
                          className="text-primary h-16 w-48"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          viewBox="0 0 200 80"
                        >
                          <path d="M 20,50 Q 40,10 60,30 T 90,60 Q 110,20 130,45 T 160,20 Q 170,70 185,55"></path>
                          <path d="M 35,65 Q 90,75 165,60"></path>
                        </svg>
                        <span
                          className="font-body-sm text-on-surface-variant mt-1 text-[11px] italic"
                          style={{ fontFamily: "serif" }}
                        >
                          Đã ký bằng chữ ký số cảm ứng màn hình
                        </span>
                        <div className="font-code-num text-outline absolute right-2 bottom-1 text-[9px]">
                          14:38:10 12/10/2024
                        </div>
                      </div>
                      <div className="space-y-1 pt-1">
                        <div className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          Thầy Hồ Văn Hạnh
                        </div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant">
                          Hiệu trưởng Trường PTDTBT THCS Trà Dơn
                        </div>
                        <div className="font-code-num text-body-sm text-secondary">
                          CCCD: 04908200**** • SĐT: 0914.***.882
                        </div>
                      </div>
                      <div className="bg-surface-container-highest gap-space-sm mt-space-sm flex items-center rounded-lg p-2.5">
                        <div className="bg-tertiary text-on-tertiary flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                          <span className="material-symbols-outlined text-[18px]">workspace_premium</span>
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="font-label-sm text-label-sm text-on-surface font-bold">
                            CHỨNG THƯ SỐ GIÁO DỤC MOET CA
                          </span>
                          <span className="font-code-num text-on-surface-variant text-[11px] font-medium">
                            SERIAL: VN-EDU-9948218-QNM
                          </span>
                        </div>
                      </div>
                      <div className="pt-space-xs text-body-sm text-on-surface-variant flex items-center justify-between">
                        <span>Đại diện Đoàn Tiếp nhận:</span>
                        <span className="text-on-surface font-semibold">Lê Hoàng Long (Trưởng đoàn)</span>
                      </div>
                    </div>
                  </div>

                  {/* Equipment Table (7 cols) */}
                  <div className="space-y-space-md lg:col-span-7">
                    <span className="font-label-sm text-label-sm text-secondary flex items-center gap-1 font-bold tracking-wider uppercase">
                      <span className="material-symbols-outlined text-primary text-[16px]">inventory</span>
                      Bảng kê chi tiết thiết bị bàn giao theo mã định danh
                    </span>
                    <div className="bg-surface-container-low overflow-hidden rounded-xl shadow-xs">
                      <table className="font-body-sm text-body-sm w-full text-left">
                        <thead className="bg-surface-container text-on-surface-variant font-label-sm text-[11px] tracking-wider uppercase">
                          <tr>
                            <th className="px-3 py-2.5">STT</th>
                            <th className="px-3 py-2.5">Mã QR / Định danh</th>
                            <th className="px-3 py-2.5">Tên thiết bị &amp; Cấu hình</th>
                            <th className="px-3 py-2.5 text-center">SL</th>
                            <th className="px-3 py-2.5">Tình trạng &amp; BH</th>
                          </tr>
                        </thead>
                        <tbody className="text-on-surface divide-y-0">
                          {equipmentRows.map((r) => (
                            <tr key={r.stt} className="hover:bg-surface-container-lowest transition-colors">
                              <td className="font-code-num text-secondary px-3 py-3 font-semibold">{r.stt}</td>
                              <td className="font-code-num text-primary px-3 py-3 font-medium">{r.code}</td>
                              <td className="px-3 py-3">
                                <div className="text-on-surface font-semibold">{r.name}</div>
                                <div className="text-on-surface-variant text-[11px]">{r.spec}</div>
                              </td>
                              <td className="font-code-num px-3 py-3 text-center font-bold">{r.qty}</td>
                              <td className="px-3 py-3">
                                <span
                                  className={`font-label-sm inline-block rounded px-1.5 py-0.5 text-[10px] font-semibold ${r.statusBg || "bg-tertiary-fixed text-on-tertiary-fixed"}`}
                                >
                                  {r.status}
                                </span>
                                <div className="text-on-surface-variant mt-0.5 text-[10px]">{r.warranty}</div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="px-space-sm font-label-sm text-label-sm text-on-surface-variant flex items-center justify-between">
                      <span>
                        Đơn vị đồng hành vận chuyển:{" "}
                        <strong className="text-on-surface font-semibold">Viettel Post Logistics</strong>
                      </span>
                      <span className="font-code-num">Mã Vận Đơn: #VT-POD-9912803</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-space-lg bg-surface-container gap-space-md flex shrink-0 flex-col items-center justify-between py-3 sm:flex-row">
                <div className="gap-space-md text-on-surface font-label-md text-label-md flex items-center">
                  <span className="text-primary flex items-center gap-1 font-semibold">
                    <span className="material-symbols-outlined text-[18px]">check_circle</span>
                    Tổng cộng: 40 Máy tính + 30 Bộ phụ kiện
                  </span>
                  <span className="text-on-surface-variant text-body-sm hidden md:inline">
                    | Đã qua 3 lớp kiểm định chất lượng
                  </span>
                </div>
                <div className="gap-space-sm flex w-full items-center sm:w-auto">
                  <button
                    className="px-space-md bg-surface-container-highest text-on-surface hover:bg-surface-variant font-label-md text-label-md w-full rounded-lg py-2 transition-colors sm:w-auto"
                    onClick={() => setShowModal(false)}
                    type="button"
                  >
                    Đóng cửa sổ
                  </button>
                  <button
                    className="px-space-md bg-tertiary text-on-tertiary hover:bg-tertiary-container font-label-md text-label-md flex w-full items-center justify-center gap-1.5 rounded-lg py-2 shadow-sm transition-colors sm:w-auto"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">task_alt</span>
                    Xác nhận đối soát hoàn tất
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
