import assert from "node:assert/strict";
import test from "node:test";
import { classifyDonationCondition, hasProhibitedDonation } from "./donorItemPolicy.js";

test("classifies new and unopened donation condition phrases", () => {
  for (const phrase of ["mới tinh", "nguyên seal", "chưa qua sử dụng", "còn nguyên tem mác", "sách chưa viết", "mới một cái bàn"]) {
    assert.equal(classifyDonationCondition(phrase), "Mới 100%", phrase);
  }
});

test("classifies used items and percentages below new", () => {
  for (const phrase of [
    "đã qua sử dụng, pin khỏe", "laptop mới 95%", "sách không rách, đủ bộ", "mời nhận sách", "mới 99%",
  ]) {
    assert.equal(classifyDonationCondition(phrase), "Đã dùng - hoạt động tốt", phrase);
  }
});

test("maps damaged items, including severe damage, to repair", () => {
  for (const phrase of [
    "không lên nguồn", "hoạt động chập chờn", "hư hoàn toàn", "gãy khung xe đạp", "mối mọt", "sửa chữa nhẹ",
    "hộp bút móp nhẹ",
  ]) {
    assert.equal(classifyDonationCondition(phrase), "Cần sửa chữa nhẹ", phrase);
  }
});

test("rejects prohibited donations and handles medicine expiration context", () => {
  for (const phrase of [
    "súng", "đạn", "dao găm", "sách lậu", "hàng lậu", "hàng giả", "thuốc lá điện tử", "bài tây",
    "ngà voi", "camera quay lén ngụy trang", "thuốc tân dược hết hạn",
  ]) {
    assert.equal(hasProhibitedDonation(phrase), true, phrase);
  }
  assert.equal(hasProhibitedDonation("thực phẩm chức năng không rõ nguồn gốc"), true);
  assert.equal(hasProhibitedDonation("thuốc tân dược còn hạn, rõ nguồn gốc"), false);
});

test("does not mistake safe mentions for prohibited items", () => {
  for (const phrase of [
    "bìa hồ sơ", "đào tạo học sinh", "không có súng", "mời nhận sách", "hàng lâu bền", "sách lâu năm",
    "đào gấm",
  ]) {
    assert.equal(hasProhibitedDonation(phrase), false, phrase);
  }
});
