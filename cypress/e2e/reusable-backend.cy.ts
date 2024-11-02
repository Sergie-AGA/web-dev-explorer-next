describe("Reusable Backend page", () => {
  beforeEach(() => {
    cy.visit("/reusable-backend");
  });

  it("renders each repository with correct title, description, and status", () => {
    cy.get("ul li").each(($el) => {
      cy.wrap($el).find("h2").should("be.visible");
      cy.wrap($el)
        .find("p")
        .should("have.class", "text-gray-400")
        .and("be.visible");
      cy.wrap($el)
        .find("span")
        .should("have.class", "capitalize")
        .and("be.visible");
    });
  });

  it('disables button for repos with status "development"', () => {
    cy.get("ul li").each(($el) => {
      cy.wrap($el)
        .find("span")
        .then(($status) => {
          if ($status.text().includes("development")) {
            cy.wrap($el)
              .find("a[disabled], .pointer-events-none")
              .should("exist");
          } else {
            cy.wrap($el).find("a[href]").should("exist");
          }
        });
    });
  });

  it("links each repository button to the correct GitHub URL", () => {
    cy.get("ul li").each(($el) => {
      cy.wrap($el)
        .find('a[href^="https://github.com/"]')
        .should("have.attr", "href")
        .and("match", /^https:\/\/github.com\//);
    });
  });
});
