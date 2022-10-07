"use strict";

function estimateBtnClicked(event) {
  event.preventDefault();
  const arrivalDate = new Date(document.getElementById("arrivalDate").value);
  const numNights = document.querySelector("#numNights").value;
  let price = 0;
  let roomType = document.querySelector("input[name='roomType']:checked").value;
  let currentMonth = arrivalDate.getMonth();
  let inSeason = false;
  switch (currentMonth) {
    case 5:
    case 6:
    case 7:
      inSeason = true;
      break;
    default:
      inSeason = false;
      break;
  }
  if (inSeason) {
    if (roomType == "king" || roomType == "queen") {
      price = 250 * numNights;
    } else {
      price = 350 * numNights;
    }
  } else {
    if (roomType == "king" || roomType == "queen") {
      price = 150 * numNights;
    } else {
      price = 210 * numNights;
    }
  }
  let discount = 0;
  const selectedDiscount = document.querySelector("input[name='discount']:checked");
  if (selectedDiscount && selectedDiscount.value == "senior") {
    discount += 0.1 * price;
  }
  if (selectedDiscount && selectedDiscount.value == "military") {
    discount += 0.2 * price;
  }
  let discountedRoomCost = price - discount;
  let tax = discountedRoomCost * 0.12;
  let totalCost = discountedRoomCost + tax;

  document.getElementById("roomCost").innerText = `Your room costs $${price}`;
  document.getElementById("discount").innerText = `You have $${discount} discount`;
  document.getElementById("discountedRoom").innerText = `Room rates after discount: $${discountedRoomCost.toFixed(2)}`;
  document.getElementById("tax").innerText = `Tax = $${tax.toFixed(2)}`;
  document.getElementById("totalCost").innerText = `Total = $${totalCost.toFixed(2)}`;
}
