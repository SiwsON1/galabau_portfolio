import { FormData, PriceData, AdditionalPriceData } from "./types";

export const calculatePrice = (
  formData: FormData,
  prices: { standardPrices: PriceData[] },
  additionalPrices: AdditionalPriceData
): number => {
  const selectedPrice = prices.standardPrices.find(
    price =>
      price.drahtstaerke.name === formData.drahtstaerke &&
      price.color.name === formData.color &&
      price.fenceSize.name === formData.fenceSize
  );

  let basePrice = selectedPrice ? selectedPrice.price : 0;

  const cornerPrice = additionalPrices.corners.find(
    corner => corner.name === formData.corner
  )?.price || 0;

  const singleCornerPrice = additionalPrices.corners[0]?.price || 0;
  const totalCornerPrice = singleCornerPrice * parseInt(formData.corner || "0", 10);

  let additionalMountingCost = 0;
  if (formData.mounting === "type3") {
    const length = parseFloat(formData.length || "0");
    additionalMountingCost = (Math.ceil(length / 2.5) + 1) * 10;
  }

  const totalPrice = basePrice * parseFloat(formData.length || "0") + totalCornerPrice + additionalMountingCost;

  return totalPrice;
};