import React, { useState } from 'react';

const podCards = [
  {
    id: '#POD-2024-8891', school: 'Trường PTDTBT THCS Trà Dơn', province: 'Quảng Nam',
    address: 'Xã Trà Dơn, Huyện Nam Trà My, Quảng Nam',
    gps: '15.082°N, 108.051°E • 14:30 12/10/2024',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNgkeJ2UAXI0nFjDrKOcx-4Kv4nj6UL8YH9dNiuleTl_QClinjiT0Lk39Fcde2KZ1tQuUS_kqtfmjkGDp1ppifOQW7mfSIKVor07Jsx0RM0UTOehDwz0IobZsJfTlXX5shPDJg_Hgy7j5YLVcikfxTiIFfa8epe36U4NHvpiYEZX_larGuVTX8YHLnLv2_5ShWIFgo8Jo4beOWcx0uE4I9yyKR4YcZFEazkngBjeVpFx91lAnBCEk3eQ',
    icon: 'laptop_mac', equipCount: '40 Thiết bị đã trao', equipDetail: '30 Laptop Dell, 10 PC HP, 50 Balo',
    tnvInit: 'L', tnv: 'TNV: Lê Hoàng Long (Đội Vượt Đèo)',
    signer: 'Thầy Hồ Văn Hạnh (Hiệu trưởng)', featured: true,
  },
  {
    id: '#POD-2024-8892', school: 'Trường Tiểu học Mường Lát', province: 'Thanh Hóa',
    address: 'Thị trấn Mường Lát, Huyện Mường Lát, Thanh Hóa',
    gps: '20.505°N, 104.622°E • 10:15 15/10/2024',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCj-IXw4-rBThcCQ_6zeNSCuj8BLdxPcr0iCotjcE6ziOpgOevF3ki4GA0pqBtm6oIaWiNBrkLphOcDMoJoQG84WXGZCUvtEU1kEoGTtThSBs0itFfkuk6EPG7K3Y-KtSCsGFkALUAhCbONi74_7kmICBx1pv4RcEP2HOgAAYSEogjuOXZ8Z0Im475Zx_0jK9mxgmF23ak4NCB2Q2qmC_-wRtMQIsxqjuFjR1XV0NV0QqwUA8ZW3iXjQ',
    icon: 'desktop_windows', equipCount: '35 Bộ PC & Sách giáo khoa', equipDetail: '35 Màn hình 22 inch, 250 bộ SGK',
    tnvInit: 'T', tnv: 'TNV: Trần Đình Trọng (Ban Tiếp nhận 2)',
    signer: 'Cô Lò Thị Mai (Phó Hiệu trưởng)',
  },
  {
    id: '#POD-2024-8893', school: 'Trường THCS Vượt Đèo Hà Giang', province: 'Hà Giang',
    address: 'Thị trấn Đồng Văn, Huyện Đồng Văn, Hà Giang',
    gps: '23.278°N, 105.361°E • 16:45 18/10/2024',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDm8IJ495BlT0rvYcn6Tu3D-TG4EkVRRq5YlwA6I2BtXHQr7edkQmQ0OTNBh7VIapSrCSA9rl7oFVQl7iCl70J-LLktEDOpBKrOrtYFaxZO9ye67Gsp0no77MgksjvnECLK3-y95K53MT5Rl5b3aE1Lfm1IzmePbTGnrZePEcyZowGsLiXpwO8u1EWZqv2WjkwkbClzhdxxWub8mqZ2s0MvH79agjuWkDm7Yi9Xr7l9nWcqONmz5BmU_Q',
    icon: 'devices_other', equipCount: '32 Laptop & Pin lưu điện', equipDetail: 'ThinkPad X1C, Trạm phát wifi 4G',
    tnvInit: 'N', tnv: 'TNV: Nguyễn Minh Tuấn (Tổ Điều phối Phía Bắc)',
    signer: 'Thầy Giàng A Páo (Hiệu trưởng)',
  },
  {
    id: '#POD-2024-8894', school: 'Trường Tiểu học Pa Tần', province: 'Lai Châu',
    address: 'Xã Pa Tần, Huyện Sìn Hồ, Lai Châu',
    gps: '22.381°N, 103.242°E • 09:20 20/10/2024',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsBtkGhBgHULak5uUJlkXH5IQoODywtrf7aRxiaK2x7360-mA4YehPAGsgrtXaaMfUyv6yvSzTQDVRKm6D0puWcxAQx6PcTW3enCqN6lkBZk0AcOxal3Fwy7PNboiGPWHFYdZ0EX0ZGnMOrBTMUuTFo4SOcAW-mvUCHV9SmwibJDdwt7adoRLGfcHOo2vtKCYJeGFezlpw2qwezUMNGltx4hxPL57hXI6u7L9b7h82u3f6aP_vsjk80A',
    icon: 'computer', equipCount: '25 Bộ máy tính & Bàn học', equipDetail: 'HP EliteDesk, Tai nghe học tiếng Anh',
    tnvInit: 'P', tnv: 'TNV: Phạm Thị Lan (Hành Trình Xanh)',
    signer: 'Thầy Lù Văn Sâm (Phó Hiệu trưởng)',
  },
  {
    id: '#POD-2024-8895', school: 'Trường PTDTBT THCS Xín Mần', province: 'Hà Giang',
    address: 'Thị trấn Cốc Pài, Huyện Xín Mần, Hà Giang',
    gps: '22.652°N, 104.469°E • 11:30 22/10/2024',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGnF1cD0Y7SI2hu-1sqKiTDel5ykVoCWjVpJSLx1zOPhmBBTP3z1kF_ExIKiJ3bjexj58-KyN5dx0STh0NAGZhL0HMB3Wm-0ODqyIX6WSEls2-3rng9XqYbD4QCAoo_BR2yzwumI8JPOLBYMtUaF61lppqAE4mAFqzL34dGhqj2QMLWp8l9G1MRKdSOpq1x4fDSkNOjBCpENvvyKu1AuPEsG677_99T474BSqf8c9L5j4TPzYZVkaaMw',
    icon: 'laptop_chromebook', equipCount: '28 Thiết bị tin học', equipDetail: '20 Laptop Acer, 8 Màn hình bổ trợ',
    tnvInit: 'H', tnv: 'TNV: Hoàng Văn Nam (Cánh Én Vùng Cao)',
    signer: 'Thầy Vàng Seo Mìn (Hiệu trưởng)',
  },
  {
    id: '#POD-2024-8896', school: 'Trường Tiểu học Lùng Cú', province: 'Hà Giang',
    address: 'Xã Lùng Cú, Huyện Đồng Văn, Hà Giang',
    gps: '23.365°N, 105.318°E • 15:10 24/10/2024',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqrAJjWdfNGjwvY0vC5t1K9VAVTd0DGWXi6TvDCg7GtGyQILzErj0YJb7ZYHUrgR2sKusIuQh7m2LnB_xFe2Se1fbjZkRrtgsIOy24T8M6BUGVd-iBwhO69tz5MwN4PiLjhbEKVoz6cjUXnYsn5wX-I27SeO81Y8fMF0plmKW8Ozjz4X6Q2Y0MpPx9dpBroLVMLGojl7v5_9iOwMkK-dzQWGrPj5M43ZP_MqQPO13PI6Yytmu6_QAm_g',
    icon: 'pedal_bike', equipCount: '20 Laptop & Xe đạp', equipDetail: '15 Laptop Dell, 10 Xe đạp địa hình',
    tnvInit: 'Đ', tnv: 'TNV: Đỗ Hữu Đạt (Biên Cương Yêu Thương)',
    signer: 'Thầy Thào Seo Vần (Hiệu trưởng)',
  },
];

const equipmentRows = [
  { stt: '01', code: '#LT-2024-88', name: 'Laptop Dell Latitude 5520', spec: 'Core i5 11th, 8GB RAM, SSD 256GB', qty: '20', status: 'Tốt 100%', warranty: '12 th EduCare' },
  { stt: '02', code: '#LT-2024-51', name: 'ThinkPad X1 Carbon Gen 6', spec: 'Core i7, 16GB RAM, SSD 512GB', qty: '10', status: 'Grade A 95%', warranty: '12 th EduCare' },
  { stt: '03', code: '#PC-2024-42', name: 'PC HP ProDesk 400 G6 SFF', spec: 'i3 10th, 8GB, Kèm màn hình Dell 24"', qty: '10', status: 'Cài SGK Số', warranty: '24 th Bảo hành' },
  { stt: '04', code: '#PK-2024-12', name: 'Bộ phím chuột Logitech & Hub', spec: 'Chuột MK120, Cáp HDMI, Dây mạng Cat6', qty: '30', status: 'Mới 100%', warranty: '6 th Đổi mới', statusBg: 'bg-secondary-container text-on-secondary-fixed' },
];

const modalPhotos = [
  { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSrOty4as0R5kSg1cnPvPNnxuNDSTBIsJP98JHcz04nWjWHFLKeEOzY1eVD3yhR9qq9q3vN4UW9w4qY7URXsjBEJFc1rPd0rthGgBVaFu5PRD0dNNZgTe2O8s7H1UVJ1PLOji8BHejVj7Rq-CM3FFqRXY45WNEY4r1cf2C2ONgKrKXHaJWr8zwUi4G5un2x6_4NOAaYr2hgitT6ZSoyJE77FJOHSPpeQ3WwMjwhjlnEQ2YjrTn7jk5_g', label: 'Góc 1: Kho hàng bàn giao' },
  { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuvLp46XDwLR3uytogF_zgPveAo_3WYfn01MlUCwQEd_hp_NyyE-q7dmuj0qRgVdFob0gARbzh0c3PeVgBfB--y5kbN7ptHoXhSqCjabOICjeKVbusbnQ0YngwpvgpL4zC8zQoIzBe77PkvuofyawciQDWnwBYAbwT9hj2RSbjRzbiX0Qb_7P3jZzqejbdMo0uWxDFpDEiMBuxdLdoiO15t1dACd_ueDRyN1j2i8c9tejOnL3NiSgH2A', label: 'Góc 2: Ký nhận thực địa' },
  { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArfGlWorPMu4Qzoy4jWdvuZUH9SO_rTk4MdQNvXBQBbKXa86Mn4tw8FnV1h5zxofEXAiUtEKdd2x3Sth_h2YcgtBULcg9UNLQrhfDSTXzmoUX0WyysjIsD21EecFPGD9AwrucDW-DpsBgmAFN16Hpzn1p7lBg5DMlkxzXwWnn6Y6rFJ4KIEslo7aPUJmAO5laAsdd8uIpjTeUOP4plw3bJX9ZuJvQb98igbaXkcgWNjYT1SymacuC7QQ', label: 'Góc 3: Lắp đặt phòng máy' },
];

function PodCard({ card, onOpen }) {
  return (
    <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group">
      <div className="relative h-56 w-full overflow-hidden bg-surface-dim">
        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={card.school} src={card.img} />
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-tertiary-container/90 text-on-tertiary-container backdrop-blur-md font-label-sm text-[11px] shadow-sm font-semibold">
          <span className="material-symbols-outlined text-[14px]">verified</span>
          Đã xác nhận PoD
        </div>
        <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-inverse-surface/80 text-inverse-on-surface backdrop-blur-md font-code-num text-body-sm">
          {card.id}
        </div>
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 pt-6 flex items-end justify-between">
          <div className="text-white flex items-center gap-1.5 font-code-num text-[11px] tracking-tight">
            <span className="material-symbols-outlined text-[14px] text-tertiary-fixed">pin_drop</span>
            <span>{card.gps}</span>
          </div>
          <span className="material-symbols-outlined text-white/80 text-[16px]">fingerprint</span>
        </div>
      </div>
      <div className="p-space-md flex flex-col flex-1 justify-between gap-space-sm">
        <div className="space-y-space-xs">
          <div className="flex items-center justify-between">
            <span className="text-secondary font-label-sm text-[11px] uppercase tracking-wider">Điểm trường thụ hưởng</span>
            <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-[10px]">{card.province}</span>
          </div>
          <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface line-clamp-1 group-hover:text-primary transition-colors">
            {card.school}
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">location_on</span>
            {card.address}
          </p>
        </div>
        <div className="bg-surface-container-low rounded-lg p-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[20px]">{card.icon}</span>
            <div className="flex flex-col">
              <span className="font-label-md text-label-md font-semibold text-on-surface">{card.equipCount}</span>
              <span className="font-body-sm text-[11px] text-on-surface-variant line-clamp-1">{card.equipDetail}</span>
            </div>
          </div>
          <span className="font-code-num text-label-sm font-bold text-primary px-2 py-1 bg-surface-container-lowest rounded">Đủ 100%</span>
        </div>
        <div className="pt-2 space-y-1.5 font-body-sm text-body-sm">
          <div className="flex items-center justify-between text-on-surface-variant">
            <span className="flex items-center gap-1.5 text-[12px]">
              <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-[10px]">{card.tnvInit}</span>
              {card.tnv}
            </span>
          </div>
          <div className="flex items-center justify-between text-on-surface">
            <span className="font-label-sm text-label-sm text-on-surface-variant">Ký nhận:</span>
            <span className="font-label-md text-label-md font-semibold text-tertiary flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">edit_document</span>
              {card.signer}
            </span>
          </div>
        </div>
        <button
          className={`w-full mt-2 py-2 rounded-lg font-label-md text-label-md flex items-center justify-center gap-1.5 transition-colors ${
            card.featured
              ? 'bg-primary-container text-on-primary hover:bg-primary'
              : 'bg-surface-container-high text-on-surface hover:bg-surface-variant'
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
    <main className="relative pt-0 bg-surface w-full p-gutter-desktop min-h-screen">
      <div className="flex flex-col w-full">

        {/* Breadcrumb */}
        <div className="flex flex-col gap-space-sm pb-space-lg">
          <nav className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
            <span className="hover:text-primary transition-colors cursor-pointer">EduShare VN</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Cổng Trường Học</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-primary font-semibold">Biên bản bàn giao &amp; Minh chứng</span>
          </nav>

          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md mt-space-xs">
            <div className="space-y-space-xs max-w-3xl">
              <div className="inline-flex items-center gap-space-xs px-space-sm py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm uppercase tracking-wider">
                <span className="material-symbols-outlined text-[14px] text-primary">verified</span>
                Minh bạch &amp; Xác thực thực địa (Proof of Delivery - PoD)
              </div>
              <h1 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                Biên bản Bàn giao &amp; Hồ sơ Minh chứng (PoD)
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Hệ thống lưu trữ ảnh chụp hiện trường bàn giao kèm Watermark tọa độ GPS thời gian thực, chữ ký số điện tử của đại diện nhà trường và bảng kê chi tiết thiết bị bàn giao.
              </p>
            </div>
            <div className="flex items-center gap-space-sm shrink-0">
              <button className="inline-flex items-center gap-space-xs px-space-md py-2.5 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest font-label-md text-label-md transition-colors shadow-sm" type="button">
                <span className="material-symbols-outlined text-[18px] text-secondary">download</span>
                Xuất báo cáo PoD (Excel/PDF)
              </button>
            </div>
          </div>
        </div>

        {/* KPI Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter-desktop mb-space-xl">
          {[
            { label: 'Tổng biên bản bàn giao', value: '1,248', change: '+18.5%', changeIcon: 'arrow_upward', sub: 'So với chu kỳ tháng trước', icon: 'receipt_long', iconBg: 'bg-primary-fixed text-primary' },
            { label: 'Tọa độ GPS & Thời gian', value: '100%', badge: 'Audit Pass', sub: 'Chống gian lận thực địa tuyệt đối', icon: 'share_location', iconBg: 'bg-secondary-container text-primary', valueColor: 'text-tertiary' },
            { label: 'Thiết bị & Học phẩm', value: '4,120', unit: 'hiện vật', sub: 'Đã trao tận tay học sinh & giáo viên', icon: 'devices', iconBg: 'bg-tertiary-fixed text-tertiary' },
            { label: 'Hoàn tất ký số điện tử', value: '148 / 152', unit: 'điểm trường', sub: 'Đại diện pháp lý đã ký chứng thư', icon: 'draw', iconBg: 'bg-surface-variant text-primary' },
          ].map((m) => (
            <div key={m.label} className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm uppercase text-on-surface-variant font-semibold">{m.label}</span>
                <div className={`w-8 h-8 rounded-lg ${m.iconBg} flex items-center justify-center`}>
                  <span className="material-symbols-outlined text-[18px]">{m.icon}</span>
                </div>
              </div>
              <div className="mt-space-md flex items-baseline gap-space-xs">
                <span className={`font-headline-lg text-headline-lg font-bold font-code-num ${m.valueColor || 'text-on-surface'}`}>{m.value}</span>
                {m.change && (
                  <span className="font-label-sm text-label-sm font-semibold text-tertiary flex items-center">
                    <span className="material-symbols-outlined text-[14px]">{m.changeIcon}</span> {m.change}
                  </span>
                )}
                {m.badge && <span className="inline-block px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-[10px]">{m.badge}</span>}
                {m.unit && <span className="font-label-sm text-label-sm text-secondary font-medium">{m.unit}</span>}
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{m.sub}</p>
            </div>
          ))}
        </div>

        {/* Filter Toolbar */}
        <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm mb-space-lg flex flex-col lg:flex-row items-center justify-between gap-space-md">
          <div className="w-full lg:w-96 flex items-center bg-surface-container-low rounded-lg px-space-md py-2 text-on-surface">
            <span className="material-symbols-outlined text-on-surface-variant text-[20px] mr-space-xs">search</span>
            <input className="w-full bg-transparent font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none" placeholder="Tìm kiếm mã PoD, tên trường, thiết bị, TNV..." type="text" />
          </div>
          <div className="w-full lg:w-auto flex flex-wrap items-center gap-space-sm">
            {[
              { options: ['Địa bàn: Tất cả tỉnh', 'Quảng Nam', 'Hà Giang', 'Thanh Hóa', 'Lai Châu', 'Điện Biên'] },
              { options: ['Chiến dịch: Tất cả', 'Ánh Sáng Tri Thức', 'Mùa Đông Ấm Biên Cương', 'Cùng Em Đến Trường 2024', 'Số Hóa Vùng Cao'] },
              { options: ['Trạng thái: Đã ký điện tử', 'Chờ duyệt đối soát', 'Tất cả trạng thái'] },
            ].map((dropdown, i) => (
              <div key={i} className="relative inline-block">
                <select className="appearance-none bg-surface-container-low text-on-surface font-label-md text-label-md px-space-md py-2 pr-8 rounded-lg focus:outline-none cursor-pointer">
                  {dropdown.options.map((o) => <option key={o}>{o}</option>)}
                </select>
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant absolute right-2.5 top-2.5 pointer-events-none">expand_more</span>
              </div>
            ))}
          </div>
          <div className="flex items-center bg-surface-container-low p-1 rounded-lg shrink-0">
            <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container-lowest text-primary font-label-sm text-label-sm shadow-xs font-semibold">
              <span className="material-symbols-outlined text-[16px]">grid_view</span>
              Thẻ ảnh PoD
            </button>
            <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-colors">
              <span className="material-symbols-outlined text-[16px]">table_rows</span>
              Bảng đối soát
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-desktop">
          {podCards.map((card) => (
            <PodCard key={card.id} card={card} onOpen={() => setShowModal(true)} />
          ))}
        </div>

        {/* PoD Detail Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-surface/50 backdrop-blur-sm overflow-y-auto" onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false); }}>
            <div className="bg-surface-container-lowest rounded-2xl w-full max-w-5xl overflow-hidden shadow-2xl my-8 flex flex-col max-h-[92vh]">
              {/* Modal Header */}
              <div className="px-space-lg py-space-md bg-surface-container-low flex items-center justify-between shrink-0 border-b-0">
                <div className="flex items-center gap-space-md">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-on-primary">
                    <span className="material-symbols-outlined text-[24px]">verified_user</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Chi tiết Biên bản Bàn giao &amp; Minh chứng Thực địa</h2>
                      <span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-code-num text-label-sm font-bold">#POD-2024-8891</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Chiến dịch: Ánh Sáng Tri Thức Miền Tây xứ Quảng • Bàn giao thành công lúc 14:30 12/10/2024</p>
                  </div>
                </div>
                <div className="flex items-center gap-space-sm">
                  <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest font-label-md text-label-md transition-colors" type="button">
                    <span className="material-symbols-outlined text-[16px] text-primary">print</span>
                    In PDF có chữ ký số
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-colors" onClick={() => setShowModal(false)} type="button">
                    <span className="material-symbols-outlined text-[20px]">close</span>
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-space-lg overflow-y-auto space-y-space-lg">
                {/* Main Photo */}
                <div className="space-y-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase text-secondary font-bold tracking-wider flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-primary">photo_camera</span>
                      Ảnh chụp thực địa kèm Watermark pháp lý &amp; Hash chuỗi khối
                    </span>
                    <span className="font-code-num text-[11px] text-tertiary font-semibold flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                      Xác thực GPS Độ tin cậy: Tuyệt đối (Sai số ±2.4m)
                    </span>
                  </div>
                  <div className="relative rounded-xl overflow-hidden bg-inverse-surface shadow-md">
                    <div className="h-80 w-full overflow-hidden">
                      <img className="w-full h-full object-cover" alt="Lễ bàn giao thiết bị tại Trường THCS Trà Dơn" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFMj4-GaLp-kTk90lxPfNwHPULFjVy7t21_WS2aU9aPS-gtM1wK-S573F7cOiQnW9tcnn1yn8nRMlDENUe6KdzFyjUtHqnAxi3eonYaJGdGDCQmW-IpkFGte5nXCOWywmlhJZH2Ji-vz60i7NApuDee5PnBcRjdQMR9P8WF6P9wP79VBAYtgJVTojrt-aNpIJ7wn-E9BUv9KrdqTOfdjZibfO444q1icl7zlE1zp3N1LouokPVv5AjRw" />
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-inverse-surface/90 text-inverse-on-surface p-space-md backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-2 text-left">
                      <div className="space-y-0.5">
                        <div className="font-code-num text-body-sm font-semibold flex items-center gap-2 text-tertiary-fixed">
                          <span className="material-symbols-outlined text-[16px]">location_on</span>
                          TỌA ĐỘ GPS: 15.0823° N, 108.0512° E (Trường PTDTBT THCS Trà Dơn, Nam Trà My)
                        </div>
                        <div className="font-code-num text-body-sm text-outline-variant">
                          THỜI GIAN CHỤP: 14:30:22 GMT+7 12/10/2024 • MẠNG THIẾT BỊ: 4G Viettel Cell ID #VT-QNM-4819
                        </div>
                      </div>
                      <div className="bg-surface-container-lowest/10 px-3 py-1 rounded font-code-num text-label-sm text-tertiary-fixed-dim">
                        SHA256: #9921e3f88bc92d04a771c
                      </div>
                    </div>
                  </div>
                  {/* Thumbnails */}
                  <div className="grid grid-cols-3 gap-space-sm pt-1">
                    {modalPhotos.map((p) => (
                      <div key={p.label} className="h-20 rounded-lg overflow-hidden relative group cursor-pointer">
                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt={p.label} src={p.src} />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-label-sm text-[11px] font-semibold">{p.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Split Panel */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg pt-space-xs">
                  {/* E-Signature (5 cols) */}
                  <div className="lg:col-span-5 space-y-space-md">
                    <span className="font-label-sm text-label-sm uppercase text-secondary font-bold tracking-wider flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-primary">draw</span>
                      Chữ ký điện tử &amp; Xác thực pháp lý
                    </span>
                    <div className="bg-surface-container-low rounded-xl p-space-md space-y-space-sm">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm font-semibold text-on-surface-variant">CHỮ KÝ ĐẠI DIỆN TRƯỜNG</span>
                        <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[10px] font-bold">HỢP LỆ</span>
                      </div>
                      <div className="h-28 bg-surface-container-lowest rounded-lg flex flex-col items-center justify-center p-2 relative shadow-xs">
                        <svg className="w-48 h-16 text-primary" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 200 80">
                          <path d="M 20,50 Q 40,10 60,30 T 90,60 Q 110,20 130,45 T 160,20 Q 170,70 185,55"></path>
                          <path d="M 35,65 Q 90,75 165,60"></path>
                        </svg>
                        <span className="font-body-sm text-[11px] text-on-surface-variant italic mt-1" style={{ fontFamily: 'serif' }}>Đã ký bằng chữ ký số cảm ứng màn hình</span>
                        <div className="absolute bottom-1 right-2 font-code-num text-[9px] text-outline">14:38:10 12/10/2024</div>
                      </div>
                      <div className="space-y-1 pt-1">
                        <div className="font-headline-sm text-headline-sm font-bold text-on-surface">Thầy Hồ Văn Hạnh</div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant">Hiệu trưởng Trường PTDTBT THCS Trà Dơn</div>
                        <div className="font-code-num text-body-sm text-secondary">CCCD: 04908200**** • SĐT: 0914.***.882</div>
                      </div>
                      <div className="bg-surface-container-highest rounded-lg p-2.5 flex items-center gap-space-sm mt-space-sm">
                        <div className="w-8 h-8 rounded-full bg-tertiary flex items-center justify-center text-on-tertiary shrink-0">
                          <span className="material-symbols-outlined text-[18px]">workspace_premium</span>
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="font-label-sm text-label-sm font-bold text-on-surface">CHỨNG THƯ SỐ GIÁO DỤC MOET CA</span>
                          <span className="font-code-num text-[11px] text-on-surface-variant font-medium">SERIAL: VN-EDU-9948218-QNM</span>
                        </div>
                      </div>
                      <div className="pt-space-xs flex items-center justify-between text-body-sm text-on-surface-variant">
                        <span>Đại diện Đoàn Tiếp nhận:</span>
                        <span className="font-semibold text-on-surface">Lê Hoàng Long (Trưởng đoàn)</span>
                      </div>
                    </div>
                  </div>

                  {/* Equipment Table (7 cols) */}
                  <div className="lg:col-span-7 space-y-space-md">
                    <span className="font-label-sm text-label-sm uppercase text-secondary font-bold tracking-wider flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-primary">inventory</span>
                      Bảng kê chi tiết thiết bị bàn giao theo mã định danh
                    </span>
                    <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-xs">
                      <table className="w-full text-left font-body-sm text-body-sm">
                        <thead className="bg-surface-container text-on-surface-variant font-label-sm text-[11px] uppercase tracking-wider">
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
                              <td className="px-3 py-3 font-code-num font-semibold text-secondary">{r.stt}</td>
                              <td className="px-3 py-3 font-code-num text-primary font-medium">{r.code}</td>
                              <td className="px-3 py-3">
                                <div className="font-semibold text-on-surface">{r.name}</div>
                                <div className="text-[11px] text-on-surface-variant">{r.spec}</div>
                              </td>
                              <td className="px-3 py-3 text-center font-code-num font-bold">{r.qty}</td>
                              <td className="px-3 py-3">
                                <span className={`inline-block px-1.5 py-0.5 rounded font-label-sm text-[10px] font-semibold ${r.statusBg || 'bg-tertiary-fixed text-on-tertiary-fixed'}`}>{r.status}</span>
                                <div className="text-[10px] text-on-surface-variant mt-0.5">{r.warranty}</div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="flex items-center justify-between px-space-sm font-label-sm text-label-sm text-on-surface-variant">
                      <span>Đơn vị đồng hành vận chuyển: <strong className="text-on-surface font-semibold">Viettel Post Logistics</strong></span>
                      <span className="font-code-num">Mã Vận Đơn: #VT-POD-9912803</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-space-lg py-3 bg-surface-container flex flex-col sm:flex-row items-center justify-between gap-space-md shrink-0">
                <div className="flex items-center gap-space-md text-on-surface font-label-md text-label-md">
                  <span className="flex items-center gap-1 font-semibold text-primary">
                    <span className="material-symbols-outlined text-[18px]">check_circle</span>
                    Tổng cộng: 40 Máy tính + 30 Bộ phụ kiện
                  </span>
                  <span className="text-on-surface-variant text-body-sm hidden md:inline">| Đã qua 3 lớp kiểm định chất lượng</span>
                </div>
                <div className="flex items-center gap-space-sm w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-space-md py-2 rounded-lg bg-surface-container-highest text-on-surface hover:bg-surface-variant font-label-md text-label-md transition-colors" onClick={() => setShowModal(false)} type="button">
                    Đóng cửa sổ
                  </button>
                  <button className="w-full sm:w-auto px-space-md py-2 rounded-lg bg-tertiary text-on-tertiary hover:bg-tertiary-container font-label-md text-label-md flex items-center justify-center gap-1.5 transition-colors shadow-sm" type="button">
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
