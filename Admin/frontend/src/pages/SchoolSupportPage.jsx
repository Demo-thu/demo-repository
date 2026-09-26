import React, { useEffect, useState, useRef } from 'react';
import api, { apiError } from '../lib/api';
import { downloadCsv } from '../lib/actions';

const SchoolSupportPage = () => {
  const [submitState, setSubmitState] = useState('idle'); // idle | submitting | done
  const [message, setMessage] = useState('Thay mặt thầy và trò Trường PTDTBT THCS Mường Lát, xin trân trọng cảm ơn các anh chị nhà hảo tâm và đội ngũ EduShare Vietnam.');
  const [waybillId, setWaybillId] = useState('');
  const [waybillStatus, setWaybillStatus] = useState('');
  const [schoolId, setSchoolId] = useState('');
  const [notice, setNotice] = useState('');
  const [progressLabel, setProgressLabel] = useState('Bước 4: Đang vận chuyển liên tỉnh');
  const [evidencePage, setEvidencePage] = useState(1);
  const [hiddenPhotos, setHiddenPhotos] = useState({});
  const fileInputRef = useRef(null);

  useEffect(() => {
    api.get('/users?role=SCHOOL_REP&limit=5').then((response) => {
      const school = response.data.data?.[0];
      if (school) setSchoolId(school.id);
    }).catch(() => undefined);
    api.get('/waybills?limit=10').then((response) => {
      const rows = response.data.data ?? [];
      const open = rows.find((row) => row.status === 'IN_TRANSIT' || row.status === 'PENDING_PICKUP') || rows[0];
      if (!open) return;
      setWaybillId(open.id);
      setWaybillStatus(open.status);
    }).catch(() => undefined);
  }, []);

  const handleSubmit = async () => {
    if (submitState !== 'idle') return;
    setSubmitState('submitting');
    try {
      const title = message.trim().slice(0, 180);
      if (waybillId && (waybillStatus === 'IN_TRANSIT' || waybillStatus === 'PENDING_PICKUP')) {
        let targetId = waybillId;
        if (waybillStatus === 'PENDING_PICKUP') {
          const picked = await api.patch(`/waybills/${waybillId}/pickup`);
          targetId = picked.data.id;
        }
        await api.post(`/waybills/${targetId}/proof`, {
          recipientName: 'Lò Văn Thuận',
          recipientTitle: 'Hiệu trưởng',
          recipientSignatureUrl: 'https://edushare.vn/signatures/school-rep',
          proofPhotoUrls: ['https://edushare.vn/proofs/classroom.jpg'],
        });
        setWaybillStatus('DELIVERED');
        setProgressLabel('Bước 5: Đã bàn giao và phát hành chứng từ');
        setNotice('Biên bản bàn giao đã được tạo. Vận đơn chuyển sang đã giao.');
      } else {
        const created = await api.post('/requisitions', {
          ...(schoolId ? { schoolId } : {}),
          title: title.length >= 5 ? title : 'Đề xuất hỗ trợ thiết bị tin học từ nhà trường',
          urgencyLevel: 'HIGH',
          items: [{ category: 'IT_DEVICES', quantityNeeded: 1 }],
        });
        setProgressLabel(`Đã tạo đề xuất ${created.data.code} và đang chờ duyệt`);
        setNotice(`Đề xuất ${created.data.code} đã vào hàng chờ phê duyệt.`);
      }
      setSubmitState('done');
    } catch (error) {
      setSubmitState('idle');
      setNotice(apiError(error, 'Không lưu được thao tác.'));
    }
  };

  async function createRequisition(urgencyLevel, title) {
    if (!schoolId) {
      setNotice('Chưa tải được tài khoản trường học.');
      return;
    }
    try {
      const created = await api.post('/requisitions', {
        schoolId,
        title,
        urgencyLevel,
        items: [{ category: 'IT_DEVICES', quantityNeeded: urgencyLevel === 'CRITICAL' ? 5 : 1 }],
      });
      setProgressLabel(`Đã tạo đề xuất ${created.data.code}`);
      setNotice(`Đề xuất ${created.data.code} (${urgencyLevel}) đã vào hàng chờ phê duyệt.`);
    } catch (error) {
      setNotice(apiError(error, 'Không tạo được đề xuất.'));
    }
  }

  function downloadEvidence(filename) {
    downloadCsv(filename.replace('.pdf', '.csv'), ['Hồ sơ', 'Nội dung'], [[filename, message], ['Vận đơn', waybillId || 'chưa có']]);
    setNotice(`Đã tải minh chứng ${filename}.`);
  }

  const handleClearSignature = (e) => {
    e.preventDefault();
    setNotice('Đã xóa chữ ký tạm. Hãy ký lại trước khi phát hành chứng từ.');
  };

  return (
    <main className="relative pt-0 bg-background min-h-screen">
      {/* Breadcrumb */}
      <div className="w-full px-gutter-desktop py-space-sm bg-surface-container-low">
        <div className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant">
          <span className="hover:text-primary cursor-pointer">EduShare VN</span>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="hover:text-primary cursor-pointer">Điều hành</span>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-primary font-semibold">Không gian làm việc</span>
        </div>
      </div>

      {notice && <div className="mx-gutter-desktop mt-4 rounded-lg bg-teal-50 px-4 py-3 text-sm text-teal-800">{notice}</div>}
      <div className="w-full px-gutter-desktop py-space-lg">
        <div className="flex flex-col w-full gap-space-lg">

          {/* Active Institutional Banner */}
          <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm p-space-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-primary/5 pointer-events-none blur-2xl"></div>
            <div className="flex items-center gap-space-md min-w-0">
              <div className="w-14 h-14 rounded-xl bg-primary-container/10 flex items-center justify-center shrink-0 text-primary">
                <span className="material-symbols-outlined text-[32px]">school</span>
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-space-xs flex-wrap">
                  <span className="px-2 py-0.5 rounded text-tertiary bg-tertiary-fixed font-label-sm text-label-sm">Đơn vị thụ hưởng công lập</span>
                  <span className="font-code-num text-code-num text-secondary">Mã định danh: <span className="text-on-surface font-semibold">SCH-TH-3829</span></span>
                </div>
                <h1 className="font-headline-lg text-headline-lg text-on-surface truncate mt-1">Trường PTDTBT THCS Mường Lát</h1>
                <p className="font-body-sm text-body-sm text-secondary flex items-center gap-1 mt-0.5">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">location_on</span>
                  Khu phố I, Thị trấn Mường Lát, Huyện Mường Lát, Tỉnh Thanh Hóa
                </p>
              </div>
            </div>
            <div className="flex items-center gap-space-sm shrink-0 w-full md:w-auto justify-end">
              <div className="flex flex-col items-end px-space-md py-1.5 bg-surface-container-low rounded-lg">
                <span className="font-label-sm text-label-sm text-secondary">Người đại diện phụ trách</span>
                <span className="font-label-md text-label-md text-on-surface font-semibold">Thầy Lò Văn Thuận (Hiệu trưởng)</span>
              </div>
              <button type="button" onClick={() => createRequisition('CRITICAL', 'Hỗ trợ khẩn cấp thiết bị tin học')} className="px-space-md py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-1.5 transition-colors">
                <span className="material-symbols-outlined text-[18px]">contact_support</span>
                <span>Hỗ trợ khẩn cấp</span>
              </button>
            </div>
          </div>

          {/* Progress Workflow Tracker */}
          <div className="rounded-xl bg-surface-container-lowest shadow-sm p-space-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-space-lg">
              <div>
                <span className="font-label-sm text-label-sm text-tertiary font-bold uppercase tracking-wider">Hành trình tiếp nhận &amp; Phân bổ nguồn lực</span>
                <h2 className="font-headline-md text-headline-md text-on-surface">Tiến độ đợt tài trợ thiết bị tin học học đường (Đợt IV/2024)</h2>
              </div>
              <div className="flex items-center gap-space-xs text-secondary font-label-md text-label-md">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary animate-ping"></span>
                <span className="font-semibold text-primary">{progressLabel}</span>
              </div>
            </div>

            {/* Stepper Pipeline */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
              {/* Step 1: Hoàn tất */}
              <div className="flex flex-col gap-2 p-3.5 rounded-lg bg-surface-container-low transition-all">
                <div className="flex items-center justify-between">
                  <span className="w-7 h-7 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[16px]">check</span>
                  </span>
                  <span className="font-code-num text-[11px] text-tertiary font-medium">18/10/2024</span>
                </div>
                <div>
                  <div className="font-label-md text-label-md text-on-surface font-semibold">1. Gửi đề xuất</div>
                  <p className="font-body-sm text-body-sm text-secondary line-clamp-2 mt-0.5">35 Bộ máy tính để bàn kèm danh sách học sinh</p>
                </div>
                <span className="font-label-sm text-[11px] text-tertiary font-semibold">Đã hoàn thành</span>
              </div>

              {/* Step 2: Hoàn tất */}
              <div className="flex flex-col gap-2 p-3.5 rounded-lg bg-surface-container-low transition-all">
                <div className="flex items-center justify-between">
                  <span className="w-7 h-7 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[16px]">check</span>
                  </span>
                  <span className="font-code-num text-[11px] text-tertiary font-medium">25/10/2024</span>
                </div>
                <div>
                  <div className="font-label-md text-label-md text-on-surface font-semibold">2. Thẩm định hồ sơ</div>
                  <p className="font-body-sm text-body-sm text-secondary line-clamp-2 mt-0.5">Hội đồng Quốc gia phê duyệt chỉ tiêu tối đa</p>
                </div>
                <span className="font-label-sm text-[11px] text-tertiary font-semibold">Đã duyệt 100%</span>
              </div>

              {/* Step 3: Hoàn tất */}
              <div className="flex flex-col gap-2 p-3.5 rounded-lg bg-surface-container-low transition-all">
                <div className="flex items-center justify-between">
                  <span className="w-7 h-7 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[16px]">check</span>
                  </span>
                  <span className="font-code-num text-[11px] text-tertiary font-medium">02/11/2024</span>
                </div>
                <div>
                  <div className="font-label-md text-label-md text-on-surface font-semibold">3. Lập kế hoạch phân bổ</div>
                  <p className="font-body-sm text-body-sm text-secondary line-clamp-2 mt-0.5">Xuất kho trung tâm Hà Nội: Lô mã #BG-2024-110</p>
                </div>
                <span className="font-label-sm text-[11px] text-tertiary font-semibold">Đã điều phối kho</span>
              </div>

              {/* Step 4: Active Highlight */}
              <div className="flex flex-col gap-2 p-3.5 rounded-lg bg-primary-container text-on-primary shadow-md relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="w-7 h-7 rounded-full bg-on-primary text-primary-container flex items-center justify-center font-label-sm text-label-sm font-bold">
                    4
                  </span>
                  <span className="font-code-num text-[11px] bg-on-primary/20 px-1.5 py-0.5 rounded font-medium">Đang diễn ra</span>
                </div>
                <div>
                  <div className="font-label-md text-label-md font-semibold">4. Đang giao hàng</div>
                  <p className="font-body-sm text-body-sm text-on-primary/80 line-clamp-2 mt-0.5">TNV Đội xe Chuyến Xe Tương Lai trên đường</p>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-on-primary/90">
                  <span className="material-symbols-outlined text-[14px]">local_shipping</span>
                  <span>Dự kiến đến: Hôm nay 16:30</span>
                </div>
              </div>

              {/* Step 5: Đang chờ */}
              <div className="flex flex-col gap-2 p-3.5 rounded-lg bg-surface-container transition-all opacity-80">
                <div className="flex items-center justify-between">
                  <span className="w-7 h-7 rounded-full bg-surface-container-highest text-secondary flex items-center justify-center font-label-sm text-label-sm font-bold">
                    5
                  </span>
                  <span className="font-code-num text-[11px] text-outline font-medium">Giai đoạn cuối</span>
                </div>
                <div>
                  <div className="font-label-md text-label-md text-on-surface font-semibold">5. Bàn giao &amp; Ký số</div>
                  <p className="font-body-sm text-body-sm text-secondary line-clamp-2 mt-0.5">Biên bản nghiệm thu tại trường &amp; Báo cáo ảnh</p>
                </div>
                <span className="font-label-sm text-[11px] text-secondary font-medium">Chờ kiểm đếm</span>
              </div>
            </div>
          </div>

          {/* Two-Column Workspace Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

            {/* LEFT PANEL (7 Cols) */}
            <section className="lg:col-span-7 flex flex-col gap-space-lg">

              {/* Top Action & Overview Card */}
              <div className="rounded-xl bg-surface-container-lowest shadow-sm p-space-lg flex flex-col gap-space-md">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm pb-space-sm">
                  <div>
                    <h3 className="font-headline-md text-headline-md text-on-surface">Hồ sơ Đề xuất Thiết bị Phòng Tin</h3>
                    <p className="font-body-sm text-body-sm text-secondary">Chi tiết đề xuất nhu cầu thực tế kèm văn bản xác minh của Phòng GD&amp;ĐT</p>
                  </div>
                  <div className="flex items-center gap-space-xs w-full sm:w-auto">
                    <button type="button" onClick={() => createRequisition('HIGH', message.trim().slice(0, 180) || 'Đề xuất hỗ trợ thiết bị tin học từ nhà trường')} className="flex-1 sm:flex-none px-space-md py-2 rounded-lg bg-primary text-on-primary hover:bg-primary/90 font-label-md text-label-md flex items-center justify-center gap-1.5 transition-all shadow-sm">
                      <span className="material-symbols-outlined text-[18px]">add_circle</span>
                      <span>Tạo đề xuất mới</span>
                    </button>
                    <button type="button" onClick={() => fileInputRef.current?.click()} className="px-space-md py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-1.5 transition-all">
                      <span className="material-symbols-outlined text-[18px]">upload_file</span>
                      <span>Tải minh chứng</span>
                    </button>
                  </div>
                </div>

                {/* Metrics Snapshot Bento */}
                <div className="grid grid-cols-3 gap-space-sm">
                  <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col">
                    <span className="font-label-sm text-label-sm text-secondary">Nhu cầu đăng ký</span>
                    <span className="font-headline-lg text-headline-lg text-primary mt-1">35 <span className="text-sm font-normal text-secondary">Bộ</span></span>
                    <span className="font-body-sm text-body-sm text-secondary mt-0.5">Desktop Core i5/8G</span>
                  </div>
                  <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col">
                    <span className="font-label-sm text-label-sm text-secondary">Học sinh hoàn cảnh</span>
                    <span className="font-headline-lg text-headline-lg text-tertiary mt-1">142 <span className="text-sm font-normal text-secondary">Em</span></span>
                    <span className="font-body-sm text-body-sm text-tertiary mt-0.5">100% Dân tộc thiểu số</span>
                  </div>
                  <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col">
                    <span className="font-label-sm text-label-sm text-secondary">Phòng máy khả dụng</span>
                    <span className="font-headline-lg text-headline-lg text-on-surface mt-1">01 <span className="text-sm font-normal text-secondary">Phòng</span></span>
                    <span className="font-body-sm text-body-sm text-tertiary mt-0.5">Đã kéo mạng LAN 1Gb</span>
                  </div>
                </div>
              </div>

              {/* Student List & Evidence */}
              <div className="rounded-xl bg-surface-container-lowest shadow-sm p-space-lg flex flex-col gap-space-md">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-xs">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">Danh sách học sinh khó khăn &amp; Hồ sơ chứng thực</h3>
                      <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-tertiary-fixed text-tertiary">Đã kiểm duyệt địa phương</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-secondary mt-0.5">Căn cứ theo Nghị định số 07/2021/NĐ-CP và xác nhận UBND Huyện Mường Lát</p>
                  </div>
                  <span className="font-code-num text-code-num text-secondary">5/142 hồ sơ hiển thị</span>
                </div>

                {/* Student Evidence Table */}
                <div className="overflow-x-auto rounded-lg bg-surface-container-lowest">
                  <table className="w-full text-left font-body-md text-body-md">
                    <thead>
                      <tr className="bg-surface-container-low text-secondary font-label-sm text-label-sm uppercase tracking-wider">
                        <th className="py-3 px-space-md">Mã HS / Họ và tên</th>
                        <th className="py-3 px-space-md">Lớp</th>
                        <th className="py-3 px-space-md">Phân loại hoàn cảnh</th>
                        <th className="py-3 px-space-md">Nhu cầu thiết bị</th>
                        <th className="py-3 px-space-md text-right">Minh chứng đính kèm</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-transparent">
                      <tr className="hover:bg-surface-container-low/70 transition-colors">
                        <td className="py-3 px-space-md">
                          <div className="flex flex-col">
                            <span className="font-label-md text-label-md text-on-surface font-semibold">Hà Thị Mai</span>
                            <span className="font-code-num text-[11px] text-secondary">HS-ML-2024-001</span>
                          </div>
                        </td>
                        <td className="py-3 px-space-md font-label-md text-label-md text-on-surface">7A1</td>
                        <td className="py-3 px-space-md">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-[11px]">
                            Hộ nghèo (Dân tộc Thái)
                          </span>
                        </td>
                        <td className="py-3 px-space-md text-on-surface font-body-sm text-body-sm">Thực hành Tin học &amp; Học online</td>
                        <td className="py-3 px-space-md text-right">
                          <button type="button" onClick={(event) => downloadEvidence(event.currentTarget.innerText.trim())} className="inline-flex items-center gap-1 text-primary hover:underline font-label-sm text-label-sm">
                            <span className="material-symbols-outlined text-[16px]">picture_as_pdf</span>
                            <span>XN_UBND_01.pdf</span>
                          </button>
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container-low/70 transition-colors">
                        <td className="py-3 px-space-md">
                          <div className="flex flex-col">
                            <span className="font-label-md text-label-md text-on-surface font-semibold">Thao A Vừ</span>
                            <span className="font-code-num text-[11px] text-secondary">HS-ML-2024-042</span>
                          </div>
                        </td>
                        <td className="py-3 px-space-md font-label-md text-label-md text-on-surface">8B</td>
                        <td className="py-3 px-space-md">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-[11px]">
                            Hộ nghèo (Dân tộc Mông)
                          </span>
                        </td>
                        <td className="py-3 px-space-md text-on-surface font-body-sm text-body-sm">Học lập trình Scratch cơ bản</td>
                        <td className="py-3 px-space-md text-right">
                          <button type="button" onClick={(event) => downloadEvidence(event.currentTarget.innerText.trim())} className="inline-flex items-center gap-1 text-primary hover:underline font-label-sm text-label-sm">
                            <span className="material-symbols-outlined text-[16px]">picture_as_pdf</span>
                            <span>XN_UBND_042.pdf</span>
                          </button>
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container-low/70 transition-colors">
                        <td className="py-3 px-space-md">
                          <div className="flex flex-col">
                            <span className="font-label-md text-label-md text-on-surface font-semibold">Vi Văn Toàn</span>
                            <span className="font-code-num text-[11px] text-secondary">HS-ML-2024-077</span>
                          </div>
                        </td>
                        <td className="py-3 px-space-md font-label-md text-label-md text-on-surface">9A2</td>
                        <td className="py-3 px-space-md">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-secondary-container text-on-secondary-fixed font-label-sm text-[11px]">
                            Cận nghèo / Mồ côi
                          </span>
                        </td>
                        <td className="py-3 px-space-md text-on-surface font-body-sm text-body-sm">Ôn thi chuyển cấp THPT</td>
                        <td className="py-3 px-space-md text-right">
                          <button type="button" onClick={(event) => downloadEvidence(event.currentTarget.innerText.trim())} className="inline-flex items-center gap-1 text-primary hover:underline font-label-sm text-label-sm">
                            <span className="material-symbols-outlined text-[16px]">picture_as_pdf</span>
                            <span>XN_UBND_077.pdf</span>
                          </button>
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container-low/70 transition-colors">
                        <td className="py-3 px-space-md">
                          <div className="flex flex-col">
                            <span className="font-label-md text-label-md text-on-surface font-semibold">Lương Thị Chi</span>
                            <span className="font-code-num text-[11px] text-secondary">HS-ML-2024-098</span>
                          </div>
                        </td>
                        <td className="py-3 px-space-md font-label-md text-label-md text-on-surface">6A3</td>
                        <td className="py-3 px-space-md">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-[11px]">
                            Hộ đặc biệt khó khăn
                          </span>
                        </td>
                        <td className="py-3 px-space-md text-on-surface font-body-sm text-body-sm">Kỹ năng số nhập môn</td>
                        <td className="py-3 px-space-md text-right">
                          <button type="button" onClick={(event) => downloadEvidence(event.currentTarget.innerText.trim())} className="inline-flex items-center gap-1 text-primary hover:underline font-label-sm text-label-sm">
                            <span className="material-symbols-outlined text-[16px]">picture_as_pdf</span>
                            <span>XN_UBND_098.pdf</span>
                          </button>
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container-low/70 transition-colors">
                        <td className="py-3 px-space-md">
                          <div className="flex flex-col">
                            <span className="font-label-md text-label-md text-on-surface font-semibold">Giàng A Tủa</span>
                            <span className="font-code-num text-[11px] text-secondary">HS-ML-2024-115</span>
                          </div>
                        </td>
                        <td className="py-3 px-space-md font-label-md text-label-md text-on-surface">8A1</td>
                        <td className="py-3 px-space-md">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-secondary-container text-on-secondary-fixed font-label-sm text-[11px]">
                            Hộ nghèo (Dân tộc Mông)
                          </span>
                        </td>
                        <td className="py-3 px-space-md text-on-surface font-body-sm text-body-sm">Tra cứu học liệu STEM</td>
                        <td className="py-3 px-space-md text-right">
                          <button type="button" onClick={(event) => downloadEvidence(event.currentTarget.innerText.trim())} className="inline-flex items-center gap-1 text-primary hover:underline font-label-sm text-label-sm">
                            <span className="material-symbols-outlined text-[16px]">picture_as_pdf</span>
                            <span>XN_UBND_115.pdf</span>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Pagination & Evidence Notice */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm pt-space-xs font-body-sm text-body-sm text-secondary">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-tertiary">verified_user</span>
                    <span>Toàn bộ học sinh đã được đối soát qua Cơ sở Dữ liệu Dân cư Quốc gia VNeID.</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button type="button" onClick={() => setEvidencePage((current) => Math.max(1, current - 1))} className="px-2.5 py-1 rounded bg-surface-container text-secondary hover:bg-surface-container-high font-label-sm">Trước</button>
                    <span className="px-2 font-code-num text-on-surface font-semibold">{evidencePage} / 29</span>
                    <button type="button" onClick={() => setEvidencePage((current) => Math.min(29, current + 1))} className="px-2.5 py-1 rounded bg-surface-container text-secondary hover:bg-surface-container-high font-label-sm">Tiếp</button>
                  </div>
                </div>
              </div>

              {/* Real Classroom & Transport Photos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div className="rounded-xl bg-surface-container-lowest shadow-sm p-space-md flex flex-col gap-2">
                  <div className="relative w-full h-44 rounded-lg overflow-hidden">
                    <img className="w-full h-full object-cover" alt="Phòng học bộ môn Tin học hiện tại tại trường THCS Mường Lát" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQLaZNheX_jTxUm_PT4oucmGzKPtCsiw83wx8n0bO_uc0cJxL5UmoQoGe24Y0l-eQn6b8wpfBuyoF8eC1ETNK4EB-ezpn4IcErTA8Ayh5tj0tcMcN45rt8pFiTZO6E8_APDguPXgEuYSnYx9yIxoepO4nWEKf_BHhVdKH4m3D8WQbNj99ZnZbOHXj-28SjujLH0DO3YvgO6ggoCpQynmr6RtXwRQfL7wIwARvTvVoe8035KIRRvZU1" />
                    <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-inverse-surface/80 text-inverse-on-surface font-label-sm text-[11px] backdrop-blur-sm">Hiện trạng điểm trường</span>
                  </div>
                  <span className="font-headline-sm text-[14px] text-on-surface mt-1">Phòng học bộ môn Tin học hiện tại</span>
                  <p className="font-body-sm text-body-sm text-secondary">Đã hoàn thành lắp đặt hệ thống dây mạng âm tường và ổn áp Lioa do phụ huynh hỗ trợ.</p>
                </div>
                <div className="rounded-xl bg-surface-container-lowest shadow-sm p-space-md flex flex-col gap-2">
                  <div className="relative w-full h-44 rounded-lg overflow-hidden">
                    <img className="w-full h-full object-cover" alt="Đoàn xe vận chuyển thiết bị EduShare trên đường đèo Thanh Hóa" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_4qGKGrx_UI2VFLuSTCvVlwTBjPcNFDp7mAxbrIQ-pst67varniwCpVq49f6NWJcJxo3R0ZO25CZc1WQ8Y2uvgn8IU8MkWQBa9lBggrd7byQly2XKVC7P9LpB9iSnhx5dGEpCwG2VU2G4gRCczRh_aLKFufGyE5AK3MQ1EI3WtP4Kk4kR4w-btbQkul4dnFydughQz0W55vtyGkBh3T_X_rPWYBfrVcNUq8lprC9Hx12qZXBzkg_V" />
                    <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-inverse-surface/80 text-inverse-on-surface font-label-sm text-[11px] backdrop-blur-sm">Chuyến xe vận chuyển</span>
                  </div>
                  <span className="font-headline-sm text-[14px] text-on-surface mt-1">Hành trình tiếp cận Mường Lát</span>
                  <p className="font-body-sm text-body-sm text-secondary">Đội ngũ TNV kỹ thuật đã vượt đèo Tây Tiến, cách trường 18km theo định vị GPS thời gian thực.</p>
                </div>
              </div>
            </section>

            {/* RIGHT PANEL (5 Cols) */}
            <aside className="lg:col-span-5 flex flex-col gap-space-lg">

              {/* Shipment Specification Ticket Card */}
              <div className="rounded-xl bg-surface-container-lowest shadow-sm p-space-lg flex flex-col gap-space-md">
                <div className="flex items-center justify-between pb-space-xs">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[24px]">fact_check</span>
                    <h3 className="font-headline-md text-headline-md text-on-surface">Đợt Bàn Giao #BG-2024-110</h3>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-secondary-container text-on-secondary-fixed font-code-num text-[12px] font-bold">LÔ SỐ: 110-ML</span>
                </div>

                <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-2">
                  <span className="font-label-sm text-label-sm text-secondary uppercase">Danh mục trang thiết bị cấp phát</span>
                  <div className="flex items-center justify-between py-1.5">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-primary">desktop_windows</span>
                      <span className="font-label-md text-label-md text-on-surface font-medium">35 Bộ máy vi tính đồng bộ HP ProDesk</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-tertiary font-code-num text-label-sm font-semibold">Đã kiểm định A+</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-primary">battery_charging_full</span>
                      <span className="font-label-md text-label-md text-on-surface font-medium">10 Bộ lưu điện UPS Santak 1000VA</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-tertiary font-code-num text-label-sm font-semibold">Mới 100%</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-primary">router</span>
                      <span className="font-label-md text-label-md text-on-surface font-medium">02 Switch mạng Gigabit 24 cổng TP-Link</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-tertiary font-code-num text-label-sm font-semibold">Sẵn sàng</span>
                  </div>
                  <div className="mt-2 pt-2 text-[12px] text-secondary flex items-center justify-between">
                    <span>Nguồn tài trợ:</span>
                    <span className="font-semibold text-primary">Cộng đồng Nhà hảo tâm EduShare &amp; Tập đoàn FPT</span>
                  </div>
                </div>

                {/* Digital Signature */}
                <div className="flex flex-col gap-space-sm pt-space-xs">
                  <div className="flex items-center justify-between">
                    <label className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[18px] text-tertiary">draw</span>
                      <span>Chữ ký số BGH Nhà trường tiếp nhận</span>
                    </label>
                    <button className="font-label-sm text-[12px] text-secondary hover:text-primary transition-colors" onClick={handleClearSignature}>Ký lại</button>
                  </div>
                  <div className="relative w-full h-36 rounded-lg bg-surface-container-low flex flex-col items-center justify-center p-2 group">
                    <svg className="w-full h-full text-primary" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" viewBox="0 0 320 120">
                      <path className="opacity-80" d="M 20 80 Q 50 20 90 70 T 150 60 Q 180 30 220 75 T 290 50"></path>
                      <path className="opacity-60" d="M 80 85 Q 120 110 200 85" strokeWidth="1.5"></path>
                    </svg>
                    <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px] text-secondary pointer-events-none">
                      <span className="font-code-num">Mã băm xác thực: SHA256-99A1-F4B2-880C</span>
                      <span className="text-tertiary font-semibold flex items-center gap-0.5">
                        <span className="material-symbols-outlined text-[12px]">verified</span> Hợp lệ
                      </span>
                    </div>
                  </div>
                  <p className="font-body-sm text-[11px] text-secondary">
                    Xác nhận bởi: <span className="text-on-surface font-medium">Lò Văn Thuận</span> • Căn cước công dân số: <span className="font-code-num">038081******</span> (Đã đối khớp chữ ký token VNPT-CA).
                  </p>
                </div>

                {/* Photo Upload */}
                <div className="flex flex-col gap-space-xs">
                  <label className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px] text-primary">add_a_photo</span>
                    <span>Tải lên hình ảnh nghiệm thu thực tế phòng máy</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {!hiddenPhotos[1] && <div className="relative h-20 rounded-lg overflow-hidden">
                      <img className="w-full h-full object-cover" alt="Tình nguyện viên kỹ thuật lắp đặt máy tính tại trường" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwQp9z1gvtyYpqfDps0S1GXqHMaNIvpxIXig6WMJNUZtyZ23WP9JqBMAeumibPlplvoP_VPr7ZEwrthA-N2AandgYq-csM_-XXwaWyzrX3uSde32phLCpiWnDGCNNRPOtjvuCQqzOrpq-vlRY4L2Lw26fHoqwDweMxqsjRqvZEs7haaF7OVm-KcdidyqZ04kkETmiONDdEUr-1ffzKWFO-adtuCFv8waBbAQ1QtQAFjmYcMJFDk-N6" />
                      <button type="button" onClick={() => setHiddenPhotos((current) => ({ ...current, 1: true }))} className="absolute top-1 right-1 w-5 h-5 rounded-full bg-error text-on-error flex items-center justify-center text-[12px]">×</button>
                    </div>}
                    {!hiddenPhotos[2] && <div className="relative h-20 rounded-lg overflow-hidden">
                      <img className="w-full h-full object-cover" alt="Phòng máy tính đã lắp đặt xong tại trường vùng cao" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUtjFNoA5_ifwLD6yk9FrrYWU-asvWssTQBnZBc8msiLJnEBLc5jSbG_5NKYqqyF_ZTRsRKwO9uTUJYzO7iikYoqPEctAUchrH87tptgwK64xX2A390SC4nbMJd1aJeQrj77eUffqTBjZ1-gFvq0PG6zcz4sStR_iW6sjs2PovuQh8_6DUp_Mp2mwjDRMdU_g0_BW--hQCjGo9Ee8Edn7qbZfOmvmWWIgSw36h40-7Gxm4IdsM2S0G" />
                      <button type="button" onClick={() => setHiddenPhotos((current) => ({ ...current, 2: true }))} className="absolute top-1 right-1 w-5 h-5 rounded-full bg-error text-on-error flex items-center justify-center text-[12px]">×</button>
                    </div>}
                    <label className="h-20 rounded-lg bg-surface-container hover:bg-surface-container-high flex flex-col items-center justify-center cursor-pointer transition-colors text-secondary hover:text-primary">
                      <span className="material-symbols-outlined text-[20px]">cloud_upload</span>
                      <span className="font-label-sm text-[11px] mt-0.5">Thêm ảnh</span>
                      <input ref={fileInputRef} accept="image/*" className="hidden" multiple type="file" onChange={(event) => setNotice(event.target.files?.length ? `Đã chọn ${event.target.files.length} ảnh minh chứng.` : '')} />
                    </label>
                  </div>
                </div>

                {/* Gratitude Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px] text-tertiary">favorite</span>
                    <span>Thông điệp tri ân gửi cộng đồng Nhà hảo tâm</span>
                  </label>
                  <textarea
                    className="w-full p-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:bg-surface-container-lowest transition-all placeholder:text-outline"
                    placeholder="Nhập lời cảm ơn chân thành từ thầy cô và các em học sinh điểm trường..."
                    rows="3"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                  />
                </div>

                {/* Master CTA Button */}
                <div className="pt-space-xs flex flex-col gap-2">
                  <button
                    className={`w-full py-3 px-space-md rounded-lg font-headline-sm text-[15px] flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.99] ${
                      submitState === 'done'
                        ? 'bg-tertiary text-on-tertiary'
                        : submitState === 'submitting'
                        ? 'bg-primary text-on-primary opacity-75'
                        : 'bg-primary hover:bg-primary-container text-on-primary'
                    }`}
                    onClick={handleSubmit}
                    disabled={submitState !== 'idle'}
                  >
                    {submitState === 'done' ? (
                      <>
                        <span className="material-symbols-outlined text-[20px]">task_alt</span>
                        <span>Đã xác nhận bàn giao thành công!</span>
                      </>
                    ) : submitState === 'submitting' ? (
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
                  <div className="flex items-center justify-center gap-2 font-label-sm text-[11px] text-secondary">
                    <span className="material-symbols-outlined text-[14px] text-tertiary">lock</span>
                    <span>Biên bản được lưu trữ vĩnh viễn trên sổ cái minh bạch EduShare Ledger</span>
                  </div>
                </div>
              </div>

              {/* QR Transparency Card */}
              <div className="rounded-xl bg-surface-container-lowest shadow-sm p-space-md flex items-center justify-between gap-space-sm">
                <div className="flex items-center gap-space-sm">
                  <div className="w-10 h-10 rounded-lg bg-secondary-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[22px]">qr_code_2</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">Mã QR Minh bạch Công khai</span>
                    <span className="font-body-sm text-[12px] text-secondary">Quét để theo dõi toàn bộ nhật ký bàn giao</span>
                  </div>
                </div>
                <button type="button" onClick={() => downloadCsv('qr-minh-bach.csv', ['Trường', 'Vận đơn', 'Trạng thái'], [[schoolId, waybillId, waybillStatus]])} className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md text-label-md transition-colors">
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
