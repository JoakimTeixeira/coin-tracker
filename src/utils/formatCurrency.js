export const formatCurrency = (currency) => {
  if (currency !== null) {
    return currency.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }
  return 'Unknown';
};
