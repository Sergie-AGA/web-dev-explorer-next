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

  it.only("Handles the tech modal", () => {
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
    // Filter by text
    // Apply filter generates filtered list, check for correct url
    // Click on tag makes it enable
    // Filtering makes only that enabled
    // Clear tech removes tags, apply tags, check url
  });

  it("Handles removing filters", () => {
    // Click on filter removal rerenders all projects and label is gone, check url
  });
});
