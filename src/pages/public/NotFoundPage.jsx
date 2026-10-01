import { ArrowLeft, FileQuestion } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="grid min-h-[calc(100vh-4rem)] place-items-center p-6">
      <section className="max-w-md rounded-xl bg-white p-10 text-center shadow-sm">
        <FileQuestion className="mx-auto text-blue-600" size={48} />
        <p className="mt-5 text-xs font-semibold tracking-widest text-blue-600">
          ERROR 404
        </p>
        <h1 className="mt-2 font-display text-2xl font-semibold">
          Không tìm thấy trang
        </h1>
        <p className="mt-3 text-sm leading-6 text-slate-500">
          Chức năng này chưa được triển khai trong phiên bản giao diện hiện tại.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white"
        >
          <ArrowLeft size={16} />
          Về Tổng quan
        </Link>
      </section>
    </main>
  );
}
