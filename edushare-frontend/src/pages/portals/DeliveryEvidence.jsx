import { useState } from "react";
import { Camera, X } from "lucide-react";
import { fmtDateTime } from "./kit";

function EvidenceImages({ urls, label, onPreview }) {
  if (!urls.length) {
    return <p className="mt-2 text-xs text-slate-500">Chưa có ảnh minh chứng.</p>;
  }

  return (
    <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
      {urls.map((url, index) => (
        <button
          key={`${index}-${url.slice(0, 40)}`}
          type="button"
          onClick={() => onPreview({ url, label: `${label} ${index + 1}` })}
          aria-label={`Xem ${label.toLowerCase()} ${index + 1}`}
          className="group relative overflow-hidden rounded-lg border border-slate-200 bg-slate-100"
        >
          <img
            src={url}
            alt={`${label} ${index + 1}`}
            loading="lazy"
            className="aspect-video w-full object-cover transition group-hover:scale-105"
          />
          <span className="absolute inset-x-0 bottom-0 bg-slate-950/65 px-2 py-1 text-left text-[10px] text-white">
            {label} {index + 1}
          </span>
        </button>
      ))}
    </div>
  );
}

export default function DeliveryEvidence({ proof, showSchool = true, showVolunteer = true }) {
  const [preview, setPreview] = useState(null);
  if (!proof) {
    return <p className="rounded-lg bg-slate-50 p-3 text-sm text-slate-500">Chưa có biên bản bàn giao.</p>;
  }

  const schoolPhotos = Array.isArray(proof.proofPhotoUrls) ? proof.proofPhotoUrls : [];
  const volunteerPhotos = Array.isArray(proof.volunteerPhotoUrls) ? proof.volunteerPhotoUrls : [];

  return (
    <>
      <div className={`grid gap-4 ${showSchool && showVolunteer ? "lg:grid-cols-2" : ""}`}>
        {showSchool ? (
          <section className="rounded-lg border border-slate-200 p-3">
            <h3 className="text-sm font-semibold text-slate-800">Biên bản nhà trường</h3>
            <p className="mt-1 text-xs text-slate-600">
              {proof.recipientName} · {proof.recipientTitle} · {fmtDateTime(proof.signedAt)}
            </p>
            {proof.recipientSignatureUrl ? (
              <button
                type="button"
                onClick={() => setPreview({ url: proof.recipientSignatureUrl, label: "Chữ ký người nhận" })}
                className="mt-3 block rounded border border-slate-200 bg-white p-2"
                aria-label="Xem chữ ký người nhận"
              >
                <img
                  src={proof.recipientSignatureUrl}
                  alt="Chữ ký người nhận"
                  className="h-24 max-w-full object-contain"
                />
              </button>
            ) : null}
            <p className="mt-3 text-xs font-semibold text-slate-600">
              Ảnh bàn giao tại trường ({schoolPhotos.length})
            </p>
            <EvidenceImages urls={schoolPhotos} label="Ảnh nhà trường" onPreview={setPreview} />
          </section>
        ) : null}

        {showVolunteer ? (
          <section className="rounded-lg border border-slate-200 p-3">
            <h3 className="text-sm font-semibold text-slate-800">Báo cáo tình nguyện viên</h3>
            {proof.volunteerReportedAt ? (
              <>
                <p className="mt-1 text-xs text-emerald-700">
                  Đã nộp lúc {fmtDateTime(proof.volunteerReportedAt)}
                </p>
                {proof.volunteerReportNote ? (
                  <p className="mt-3 whitespace-pre-wrap rounded-lg bg-slate-50 p-3 text-sm text-slate-700">
                    {proof.volunteerReportNote}
                  </p>
                ) : null}
                <p className="mt-3 text-xs font-semibold text-slate-600">
                  Ảnh tình nguyện viên ({volunteerPhotos.length})
                </p>
                <EvidenceImages urls={volunteerPhotos} label="Ảnh tình nguyện viên" onPreview={setPreview} />
              </>
            ) : (
              <p className="mt-2 text-xs text-slate-500">Tình nguyện viên chưa nộp báo cáo hoàn tất.</p>
            )}
          </section>
        ) : null}
      </div>

      {preview ? (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-slate-950/85 p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setPreview(null);
          }}
        >
          <button
            type="button"
            onClick={() => setPreview(null)}
            aria-label="Đóng ảnh"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <X size={20} />
          </button>
          <div className="max-h-full max-w-full text-center">
            <img
              src={preview.url}
              alt={preview.label}
              className="max-h-[80vh] max-w-full rounded-lg object-contain"
            />
            <p className="mt-2 flex items-center justify-center gap-1 text-sm text-white">
              <Camera size={15} />{preview.label}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
