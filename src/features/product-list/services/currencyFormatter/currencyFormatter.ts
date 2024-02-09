export const britishCurrencyFormatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
}).format;
