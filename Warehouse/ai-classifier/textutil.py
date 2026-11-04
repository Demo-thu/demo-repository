import re, unicodedata

def normalize(s: str) -> str:
    """Chữ thường, bỏ dấu tiếng Việt (để 'vo' và 'vở' giống nhau), gọn khoảng trắng."""
    s = s.lower().replace("đ", "d")
    s = unicodedata.normalize("NFD", s)
    s = "".join(c for c in s if unicodedata.category(c) != "Mn")
    s = re.sub(r"[^a-z0-9]+", " ", s)
    return re.sub(r"\s+", " ", s).strip()
