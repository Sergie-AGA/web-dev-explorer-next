describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Navigates to an existing project", () => {
    cy.get('[data-testid="morphing-card"]').first().click();
    cy.get('[data-testid="project-modal"]')
      .find('[data-testid="tab-test-1"]')
      .click();

    cy.get('[data-testid="project-modal"]')
      .find('[data-testid="tab-test-0"]')
      .click();

    cy.url().then((initialUrl) => {
      cy.get("body").then(($body) => {
        if ($body.find('[data-testid="see-project-button"]').length > 0) {
          cy.get('[data-testid="see-project-button"]').click();
          cy.url({ timeout: 8000 }).should("not.equal", initialUrl);
        } else {
          cy.get('[data-testid="coming-soon"]').should(
            "contain.text",
            "Coming soon..."
          );
        }
      });
    });
  });

  it("Handles the About Modal and links to tech modal", () => {
    cy.get('[data-testid="icon-menu"]').click();
    cy.get('[data-testid="menu-about"]').click();
    cy.get('[data-testid="about-modal-title"]')
      .contains("About")
      .should("be.visible");

    cy.get('[data-testid="react-tech-badge"]').click();
    cy.get('[data-testid="tech-modal-title"]')
      .contains("Technologies")
      .should("be.visible");
  });

  it("Handles the tech modal", () => {
    cy.get('[data-testid="icon-menu"]').click();
    cy.get('[data-testid="menu-techs"]').click();
    cy.get('[data-testid="frontend-tech-badge"]').contains("React JS").click();

    cy.get('[data-testid="tech-modal-description-area"]').should(
      "contain.text",
      "A popular JavaScript library"
    );
  });

  it("Handles filtering project", () => {
    cy.get('[data-testid="icon-menu"]').click();
    cy.get('[data-testid="menu-filters"]').click();

    cy.get('[data-testid="search-input"]').click().type("product list poc");
    cy.get('[data-testid="frontend-tech-filter-badge"]')
      .contains("Next JS")
      .click();

    cy.get('[data-testid="apply-filter-button"]').click();
    cy.get('[data-testid="close-global-modal"]').click();

    cy.get('[data-testid="filters-applied-section"]').should("exist");

    cy.location("pathname").should("eq", "/");
    cy.location("search").should(
      "eq",
      "?text=product%20list%20poc&frontend=Next%20JS"
    );

    cy.get('[data-testid="morphing-card"]').should("have.length", 1);

    cy.get('[data-testid="menu-filters"]').click();
    cy.get('[data-testid="clear-icon"]').click();
    cy.get('[data-testid="apply-filter-button"]').click();
    cy.get('[data-testid="close-global-modal"]').click();

    cy.get('[data-testid="morphing-card"]').should(
      "have.length.greaterThan",
      1
    );
  });

  it("Handles removing filters", () => {
    cy.visit("/?text=product%20list%20poc");
    cy.get('[data-testid="morphing-card"]').should("have.length", 1);

    cy.get('[data-testid="remove-icon"]').each(($el) => {
      cy.wrap($el).click();
    });

    cy.location("search").should("be.empty");
    cy.get('[data-testid="morphing-card"]').should(
      "have.length.greaterThan",
      1
    );
  });
});
