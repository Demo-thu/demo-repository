export function downloadCsv(filename, header, rows) {
  const lines = [header, ...rows].map((row) =>
    row.map((cell) => `"${String(cell ?? "").replaceAll('"', '""')}"`).join(","),
  );
  const blob = new Blob([`\uFEFF${lines.join("\n")}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

export function openPrint() {
  window.print();
}

export async function copyText(value) {
  await navigator.clipboard.writeText(value);
}
