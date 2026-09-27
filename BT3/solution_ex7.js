

// 1. Định mức bảng giá chuẩn (VNĐ)
const PRICE_S = 35000;
const PRICE_M = 42000;
const PRICE_L = 48000;
const PRICE_T = 10000; // Topping

// 2. Dữ liệu đợt phục vụ gồm 3 bàn
// - Bàn 1: "MLT"  -> Size M + Size L + Topping T (100.000đ -> Không giảm)
// - Bàn 2: "SSX"  -> Size S + Size S + Hủy X (70.000đ -> Không giảm)
// - Bàn 3: "LLTT" -> Size L + Size L + 2 Topping T (116.000đ -> Giảm 10%)
const tableOrders = ["MLT", "SSX", "LLTT"];
const DISCOUNT_THRESHOLD = 100000;
const DISCOUNT_RATE = 0.10;

let totalShiftRevenue = 0;

console.log("=== BÁO CÁO DOANH THU CHI TIẾT CA PHỤC VỤ ===");

// 3. Vòng lặp ngoài: Duyệt qua từng bàn (Table 1 .. N)
for (let tableIndex = 0; tableIndex < tableOrders.length; tableIndex++) {
  const currentTableOrder = tableOrders[tableIndex];
  const tableNumber = tableIndex + 1;
  let rawTableBill = 0;

  // Vòng lặp trong: Duyệt qua từng ký tự mã món trong chuỗi order của bàn
  for (let itemIndex = 0; itemIndex < currentTableOrder.length; itemIndex++) {
    const itemCode = currentTableOrder[itemIndex];

    // Gặp mã món hủy 'X': Bỏ qua món này bằng continue
    if (itemCode === "X") {
      continue;
    }

    // Tính tiền theo từng loại mã món
    if (itemCode === "S") {
      rawTableBill += PRICE_S;
    } else if (itemCode === "M") {
      rawTableBill += PRICE_M;
    } else if (itemCode === "L") {
      rawTableBill += PRICE_L;
    } else if (itemCode === "T") {
      rawTableBill += PRICE_T;
    }
  }

  // 4. Áp dụng quy tắc chiết khấu: Giảm 10% nếu hóa đơn trên 100.000 VNĐ
  let finalTableBill = rawTableBill;
  let discountAmount = 0;

  if (rawTableBill > DISCOUNT_THRESHOLD) {
    discountAmount = rawTableBill * DISCOUNT_RATE;
    finalTableBill = rawTableBill - discountAmount;
  }

  // Cộng dồn vào tổng doanh thu cả ca
  totalShiftRevenue += finalTableBill;

  // 5. In chi tiết hóa đơn từng bàn
  console.log(`\n--- [BÀN ${tableNumber}] ---`);
  console.log(`- Chuỗi món gọi: "${currentTableOrder}"`);
  console.log(`- Tiền trước giảm: ${rawTableBill.toLocaleString("vi-VN")} VNĐ`);
  if (discountAmount > 0) {
    console.log(`- Chiết khấu (10%): -${discountAmount.toLocaleString("vi-VN")} VNĐ`);
  } else {
    console.log(`- Chiết khấu: 0 VNĐ`);
  }
  console.log(`- Thực thu bàn ${tableNumber}: ${finalTableBill.toLocaleString("vi-VN")} VNĐ`);
}

// 6. Báo cáo tổng kết ca làm việc
console.log("\n=============================================");
console.log(`TỔNG DOANH THU TOÀN CA: ${totalShiftRevenue.toLocaleString("vi-VN")} VNĐ`);
console.log("=============================================");

