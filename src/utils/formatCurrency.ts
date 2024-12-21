export const formatCurrency = (amount: number): string => {
  return `LKR ${amount.toLocaleString('en-LK')}`;
};

export const formatDiscountedPrice = (originalPrice: number, discountPercentage: number): string => {
  const discountedAmount = originalPrice * (1 - discountPercentage / 100);
  return formatCurrency(discountedAmount);
};

export const formatOriginalPrice = (price: number): string => {
  return formatCurrency(price);
};
