describe("World of CSS Page", () => {
  let inputTestString = "Lorem Ipsum";

  beforeEach(() => {
    cy.visit("/world-of-css-effects");
  });

  it("Changes the current active section", () => {
    cy.get('[data-testid="sidebar-neon"]').then(($el) => {
      if (!$el.hasClass("pointer-events-none")) {
        cy.wrap($el).click();
      }
    });
    cy.contains("This is the neon text effect");
    cy.get('[data-testid="sidebar-glitch"]').should("exist");

    cy.get('[data-testid="sidebar-background"]').then(($el) => {
      if (!$el.hasClass("pointer-events-none")) {
        cy.wrap($el).click().should("have.class", "pointer-events-none");
      }
    });
    cy.get('[data-testid="sidebar-glitch"]').should("not.be.visible");
    cy.get('[data-testid="sidebar-bIcons"]')
      .click()
      .should("have.class", "pointer-events-none");
    cy.get(".neonText").should("not.exist");
  });

  it("Handles the Glitch effect correctly", () => {
    cy.get('[data-testid="sidebar-glitch"]').then(($el) => {
      if (!$el.hasClass("pointer-events-none")) {
        cy.wrap($el).click();
      }
    });
    cy.get('[data-testid="iconX"]').click();
    cy.get("input").clear().type(inputTestString);
    cy.get("div.glitch-container").each(($div) => {
      cy.wrap($div).find("span").should("have.length", 3);
    });
  });
  it("Handles the Neon effect correctly", () => {
    cy.get('[data-testid="sidebar-neon"]').then(($el) => {
      if (!$el.hasClass("pointer-events-none")) {
        cy.wrap($el).click();
      }
    });
    cy.get('[data-testid="iconX"]').click();
    cy.get("input").clear().type(inputTestString);
    cy.get('button[role="switch"]').click();
    cy.get(".neonText")
      .should("have.class", "neon-flicker")
      .and("have.text", inputTestString);
  });
  it("Handles the Switching effect correctly", () => {
    cy.get('[data-testid="sidebar-switch"]').then(($el) => {
      if (!$el.hasClass("pointer-events-none")) {
        cy.wrap($el).click();
      }
    });
    cy.get('[data-testid="iconX"]').click();

    cy.get("input").type(inputTestString);
    cy.get('[data-testid="switch-text-button"]').click();

    cy.get('[data-testid="switching-text-list"]')
      .find("li")
      .should("have.length", 3)
      .last()
      .as("thirdListItem");

    cy.get("@thirdListItem").find(".cursor-pointer").click();

    cy.get('[data-testid="switching-text-list"]')
      .find("li")
      .should("have.length", 2);
  });
  it("Handles the Random Colour effect correctly", () => {
    cy.get('[data-testid="sidebar-ranCol"]').then(($el) => {
      if (!$el.hasClass("pointer-events-none")) {
        cy.wrap($el).click();
      }
    });
    cy.get('[data-testid="iconX"]').click();
    cy.get("input").clear().type(inputTestString);

    cy.get('[data-testid="random-colour"]')
      .find("span")
      .each(($span) => {
        cy.wrap($span).should("not.contain", "color");
        cy.wrap($span).trigger("mouseover");
        cy.wrap($span).should("have.attr", "style").and("include", "color");
      });
  });
  it("Handles the Moving Text effect correctly", () => {
    cy.get('[data-testid="sidebar-move"]').then(($el) => {
      if (!$el.hasClass("pointer-events-none")) {
        cy.wrap($el).click();
      }
    });
    cy.get('[data-testid="iconX"]').click();
    cy.get("input").clear().type(inputTestString);

    cy.get('[data-testid="moving-text"]')
      .find("span")
      .each(($span) => {
        cy.wrap($span).should(
          "have.css",
          "transform",
          "matrix(1, 0, 0, 1, 0, 0)"
        );
      })
      .then(($spans) => {
        $spans.each((index, span) => {
          cy.wrap(span)
            .trigger("mouseover")
            .should("not.have.css", "transform", "matrix(1, 0, 0, 1, 0, 0)");
        });
        cy.wait(2000);
        $spans.each((index, span) => {
          cy.wrap(span).should(
            "have.css",
            "transform",
            "matrix(1, 0, 0, 1, 0, 0)"
          );
        });
      });
  });
  it("Handles the Icon Background Generation effect correctly", () => {
    // Click on Icon Background Generation effect
    // Verify items are being rendered
    // Verify items are disappearing
    // Modify slider size and verify size changed
  });
  it("Handles the Square Background Generation effect correctly", () => {
    // Click on Square Background Generation effect
    // Verify items are being rendered
    // Verify items are disappearing
    // Toggle checkbox, modify slider size and verify size changed
  });
  it.only("Handles the CSS Phone effect correctly", () => {
    cy.get('[data-testid="sidebar-art"]').then(($el) => {
      if (!$el.hasClass("pointer-events-none")) {
        cy.wrap($el).click();
      }
    });
    cy.get('[data-testid="sidebar-phone"]').then(($el) => {
      if (!$el.hasClass("pointer-events-none")) {
        cy.wrap($el).click();
      }
    });
    cy.get('[data-testid="iconX"]').click();

    cy.get('[data-testid="user-input"]').type(inputTestString);
    cy.get('[data-testid="user-button"]').click();
    cy.get("#screen")
      .children()
      .first()
      .should("contain.text", inputTestString);

    cy.get('[data-testid="bot-input"]').type(inputTestString + "2");
    cy.get('[data-testid="bot-button"]').click();
    cy.get("#screen")
      .children()
      .eq(1)
      .should("contain.text", inputTestString + "2");
  });
});
