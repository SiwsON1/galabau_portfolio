import { FormData, PriceData, AdditionalPriceData } from "./types";

export const calculatePrice = (
  formData: FormData,
  prices: { standardPrices: PriceData[] },
): number => {
  const selectedPrice = prices.standardPrices.find(
    price =>
      price.drahtstaerke.name === formData.drahtstaerke &&
      price.color.name === formData.color &&
      price.fenceSize.name === formData.fenceSize
  );

  let basePrice = selectedPrice ? selectedPrice.price : 0;


  const totalPrice = basePrice * parseFloat(formData.length || "0");

  return totalPrice;
};