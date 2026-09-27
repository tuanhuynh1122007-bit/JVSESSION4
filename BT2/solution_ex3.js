// Dinh muc gia do uong theo chuan kich thuoc Highlands Coffee
const basePriceSizeS = 35000;
const extraPriceSizeM = 6000;
const extraPriceSizeL = 10000;
const toppingPrice = 8000;

// Thong tin don hang thuc te tai quay
const orderSizes = "MLXSM";
const toppingCount = 2;
const isGoldMember = true;

let totalDrinkAmount = 0;

// Duyet qua tung ky tu size trong chuoi orderSizes
for (let orderIndex = 0; orderIndex < orderSizes.length; orderIndex++) {
  const currentDrinkSize = orderSizes[orderIndex];

  // Khac phuc loi: Dung 'continue' de bo qua ly bi huy ('X') va tiep tuc duyet cac ly ke tiep
  if (currentDrinkSize === "X") {
    continue;
  }

  // Tinh tong tien theo tung size hop le
  if (currentDrinkSize === "S") {
    totalDrinkAmount += basePriceSizeS;
  } else if (currentDrinkSize === "M") {
    totalDrinkAmount += (basePriceSizeS + extraPriceSizeM);
  } else if (currentDrinkSize === "L") {
    totalDrinkAmount += (basePriceSizeS + extraPriceSizeL);
  }
}

// Tinh tong hoa don sau khi cong topping va ap dung chiet khau (neu co)
const discountRate = isGoldMember ? 0.9 : 1.0;
const finalBillAmount = (totalDrinkAmount + toppingCount * toppingPrice) * discountRate;

console.log("Tổng tiền hóa đơn:", finalBillAmount, "VNĐ");

