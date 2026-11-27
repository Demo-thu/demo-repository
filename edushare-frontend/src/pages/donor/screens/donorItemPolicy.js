export const DONATION_CONDITIONS = ["Mới 100%", "Đã dùng - hoạt động tốt", "Cần sửa chữa nhẹ"];

const REPAIR_TERMS = [
  "can sua", "sua nhe", "sua chua nhe", "hu nhe", "hong nhe", "loi nhe", "loi vat", "hu nang", "hong nang",
  "khong hoat dong",
  "chet nguon", "khong len nguon", "nat", "cu nat", "rach nat", "mop meo", "xuong cap", "thieu linh kien",
  "mat phu kien", "thieu phu kien nho", "can bao duong", "bao duong", "can tan trang", "tan trang", "can ve sinh lai",
  "ve sinh lai", "hoat dong chap chon", "can nang cap ssd",
  "do xac", "hu hoan toan", "hong hoan toan", "thanh ly phe lieu", "tray xuoc nhieu", "chai pin", "pin yeu", "pin tut nhanh",
  "hong pin", "phong pin", "khong pin", "mat sac", "thieu cuc sac", "vo man hinh", "nut man hinh", "soc man hinh",
  "chay muc", "chet diem anh", "liet phim", "ket phim", "hong ban phim", "hong chuot", "trackpad", "chuot do",
  "loa re", "mat tieng", "gay ban le", "long ban le", "chay main", "loi o cung", "hong ram", "ket giay", "het muc",
  "khong nhan wifi", "khong nhan mang", "long chan sac", "cai lai win", "cai lai phan mem", "bung gay", "son bia",
  "mat bia", "rach bia", "rach trang", "mat trang", "dinh nuoc", "o vang", "am moc", "viet ve nhieu", "quan goc",
  "thieu cuon", "gay ngoi", "mop hop", "hop but mop", "kho muc", "viet but bi", "ghi chu ben trong",
  "sut chi", "dut cuc", "mat nut", "ket khoa keo", "hong day keo", "son nhe",
  "rach vai", "thung lo", "son rach", "dinh vet ban", "o mau", "phai mau", "co rut", "bung duong may", "dut quai",
  "hong khoa cap", "long oc vit", "lung lay", "gay chan ban", "gay chan ghe", "nut mat ban", "vo mat go", "troc son",
  "bong troc", "xuoc sau", "muc nat", "gi set", "ket ngan keo", "mat nut cao su chan de", "xep lop",
  "thung sam", "thung ruot xe", "no lop", "mon lop", "kho dau", "tuot xich", "dut xich", "chung sen",
  "hong phanh", "hong thang", "dut day phanh", "dut sen", "cong vanh", "gay nan hoa", "gi set khung", "gay khung",
  "gay ban dap", "hong yen", "rach yen", "mat chan chong", "chai binh ac quy", "hong dong co xe dien",
  "mat sac xe dien", "khong sua duoc", "khong the su dung", "needs repair", "minor repair", "not working",
  "out of order", "broken",
];

const USED_TERMS = [
  "da dung", "da qua su dung", "do cu", "second hand", "second-hand", "2hand", "like new", "ngoai hinh dep",
  "con moi", "giu gin ky", "it dung", "dung luot", "con tot", "dung tot", "su dung binh thuong", "hoat dong tot",
  "chay muot", "on dinh", "khong loi lam", "chay em", "khoi dong nhanh", "pin tot", "pin khoe", "man hinh sang dep",
  "khong diem chet", "ban phim nay tot", "day du sac cap", "da cai san he dieu hanh", "cau hinh on dinh",
  "van phong muot", "sach cu con dep", "khong rach", "khong mat trang", "du bo", "chu ro net", "chi viet chi nhe",
  "da tay sach", "co boc bia", "khong quan mep", "khong tham nuoc", "da giat sach se", "khong son chi",
  "khong phai mau", "con lanh lan", "khoa keo tron tru", "ban ghe chac chan", "khong lung lay", "khong moi mot",
  "mat ban phang dep", "xe chay em", "phanh an", "thang an", "lop con moi", "con gai lop", "sen lip tron tru",
  "khung suon chac chan", "khong gi set nang", "dap nhe", "dung ngay duoc", "da dung roi", "used", "pre-owned", "lightly used",
  "good condition", "works well", "90%", "91%", "92%", "93%", "94%", "95%",
  "96%", "97%", "98%", "99%",
];

const NEW_TERMS = [
  "moi", "moi tinh", "moi cung", "moi cong", "moi toanh", "moi nguyen", "hang moi", "chua dung", "chua su dung",
  "chua qua su dung", "nguyen seal", "nguyen tem", "nguyen hop", "fullbox", "full box", "nguyen dai nguyen kien",
  "nguyen bao bi", "chua boc", "chua mo hop", "hang ton kho", "du dung chua xai", "chua kich hoat",     "unactive", "unactivated", "new",
  "not activated", "nguyen zin nha san xuat", "con bao hanh hang", "nguyen thung xop", "chua lan banh", "unused",
  "never used",
  "con nguyen boc bao ve", "sach moi", "chua viet", "chua ve", "chua ghi chep", "trang giay trang tinh",
  "chua gap mep", "nguyen loc", "nguyen xap", "con nguyen mang co", "boc nilon", "chua cat mac",
  "con nguyen tem mac", "chua mac lan nao", "chua giat", "moi xuat xuong", "chua qua lap rap", "brand new",
  "unopened", "sealed",
];

const PROHIBITED_TERMS = [
  "vu khi", "hung khi", "ma tau", "con nhi khuc", "binh xit hoi cay", "roi dien", "gay ba khuc", "vat lieu no", "phao no",
  "phao hoa lau", "thuoc no", "chat de chay", "xang dau", "hoa chat doc hai", "axit", "binh gas",
  "thiet bi kich dien", "ma tuy", "can sa", "chat gay nghien", "thuoc la dien tu", "vape", "pod", "tinh dau vape",
  "shisha", "bong cuoi", "n2o", "thuoc la dieu", "ruou", "do uong co con",
  "tai lieu phan dong", "chong pha nha nuoc", "xuyen tac lich su", "sach bao khieu dam", "doi truy",
  "an pham bao luc", "me tin di doan", "boi toan", "dung cu co bac", "bai tay", "xoc dia", "may danh bac", "do trom cap",
  "hang gian", "san pham dong vat hoang da", "dong vat hoang da quy hiem", "thiet bi nghe len",
  "camera quay len nguy trang", "thiet bi pha song", "jammer",
];

const RAW_PROHIBITED_TERMS = [
  "súng", "đạn", "đao", "kiếm", "bia", "dao găm", "hàng giả", "hàng nhái", "hàng lậu", "sách lậu",
  "sách in lậu", "ngà voi", "sừng tê giác", "da thú", "camera quay lén",
];

function normalizeText(value) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d");
}

const termMatchers = new Map();

function isNegated(prefix) {
  return /(?:^|[^a-z0-9])(?:khong|chua|not|without)(?:\s+[a-z0-9]+){0,2}\s*$/.test(prefix);
}

function hasAnyTerm(normalized, terms) {
  return terms.some((term) => {
    const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const matcher = termMatchers.get(term) || new RegExp(`(^|[^a-z0-9])(${escaped})(?=$|[^a-z0-9])`, "g");
    termMatchers.set(term, matcher);
    matcher.lastIndex = 0;
    let match = matcher.exec(normalized);
    while (match) {
      const prefix = normalized.slice(0, match.index + match[1].length);
      if (term.startsWith("khong ") || term.startsWith("chua ") || !isNegated(prefix)) return true;
      match = matcher.exec(normalized);
    }
    return false;
  });
}

function hasRawTerm(value, term) {
  const lowerValue = value.toLowerCase();
  let index = lowerValue.indexOf(term);
  while (index >= 0) {
    const prefix = normalizeText(lowerValue.slice(0, index)).trimEnd();
    if (!isNegated(prefix)) return true;
    index = lowerValue.indexOf(term, index + term.length);
  }
  return false;
}

export function classifyDonationCondition(value) {
  const text = String(value || "").replace(/mời/gi, " ");
  const normalized = normalizeText(text);
  if (
    hasAnyTerm(normalized, REPAIR_TERMS)
    || hasRawTerm(text, "vỡ")
    || hasRawTerm(text, "gãy")
    || hasRawTerm(text, "nứt")
    || hasRawTerm(text, "mối mọt")
  ) return DONATION_CONDITIONS[2];
  if (/\b9[0-9]\s*%/.test(normalized) || hasAnyTerm(normalized, USED_TERMS) || hasRawTerm(text, "cũ")) {
    return DONATION_CONDITIONS[1];
  }
  if (hasAnyTerm(normalized, NEW_TERMS) || hasRawTerm(text, "mới")) return DONATION_CONDITIONS[0];
  return DONATION_CONDITIONS[1];
}

export function hasProhibitedDonation(value) {
  const text = String(value || "");
  const normalized = normalizeText(text);
  if (
    hasAnyTerm(normalized, PROHIBITED_TERMS)
    || RAW_PROHIBITED_TERMS.some((term) => hasRawTerm(text, term))
  ) return true;

  const isMedicineOrSupplement = hasAnyTerm(normalized, ["thuoc tan duoc", "thuc pham chuc nang"]);
  const isUnverifiedOrExpired = hasAnyTerm(normalized, [
    "khong ro nguon goc", "khong ro xuat xu", "het han", "qua han", "expired",
  ]);
  return isMedicineOrSupplement && isUnverifiedOrExpired;
}
