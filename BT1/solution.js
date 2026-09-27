
const drinkName = "Phin Sữa Đá";
const basePrice = 29000;
const drinkSize = "M";
const toppingsPerCup = 2;
const orderQuantity = 3;
const isGoldMember = true;
const toppingPrice = 8000;

let sizeUpcharge = 0;
if (drinkSize === "M") {
  sizeUpcharge = 6000;
} else if (drinkSize === "L") {
  sizeUpcharge = 10000;
}

// Tính tiền 1 ly hoàn chỉnh: Giá gốc + phụ thu size + tiền topping
const singleCupPrice = basePrice + sizeUpcharge + (toppingsPerCup * toppingPrice);

let totalBill = 0;

// Sửa lỗi 1: Dùng toán tử <= để duyệt đủ số lượng orderQuantity (3 ly)
for (let cupIndex = 1; cupIndex <= orderQuantity; cupIndex++) {
  totalBill += singleCupPrice;
}

// Sửa lỗi 2: Chuyển chiết khấu ra ngoài vòng lặp để áp dụng trên toàn bộ hóa đơn
if (isGoldMember) {
  totalBill = totalBill * 0.9;
}

console.log("Món đã đặt:", drinkName);
console.log("Tổng thanh toán:", totalBill, "VNĐ");