describe("Product List POC Page", () => {
  beforeEach(() => {
    cy.visit("/product-list-poc");
  });

  it("Viewing products details", () => {
    cy.get('[data-testid="product-lamp"]').click();
    cy.location("pathname").should("eq", "/product-list-poc/lamp");

    cy.get('[data-testid="product-title"]').should("contain.text", "Desk Lamp");

    cy.get('[data-testid="product-back-button"]').click();
    cy.location("pathname").should("eq", "/product-list-poc");
  });

  it("Allows managing cart products", () => {
    cy.get('[data-testid="product-lamp"]').click();

    cy.get('[data-testid="discount-standard-price"]').click();
    cy.get('[data-testid="product-back-button"]').click();
    cy.get('[data-testid="product-l-desk"]').click();
    cy.get('[data-testid="discount-pick-up-price"]').click();

    cy.get('[data-testid="product-count"]').should("contain.text", "2");
    cy.get('[data-testid="cart-icon"]').click();

    cy.get('[data-testid="product-cart-item"]').should("have.length", 2);

    cy.get('[data-testid="product-remove-icon"]').first().click();
    cy.get('[data-testid="product-cart-item"]').should("have.length", 1);
  });
});
