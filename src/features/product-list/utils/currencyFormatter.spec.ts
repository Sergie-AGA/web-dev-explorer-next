import { britishCurrencyFormatter } from "./currencyFormatter";

describe("britishCurrencyFormatter", () => {
  it("formats numbers as British currency", () => {
    expect(britishCurrencyFormatter(1000)).toBe("£1,000.00");
    expect(britishCurrencyFormatter(1234.56)).toBe("£1,234.56");
    expect(britishCurrencyFormatter(0)).toBe("£0.00");
    expect(britishCurrencyFormatter(-500)).toBe("-£500.00");
  });
});
