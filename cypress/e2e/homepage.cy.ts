describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Navigatest to all existing projects", () => {
    // Open each project modal
    // Navigate between tabs
    // Navigate to project
  });

  it("Handles the About Modal", () => {
    // Open modal
    // Open tech modal from clicking on tech
  });

  it("Handles the tech modal", () => {
    // Render information about each technology
    // Swap between tabs
    // Render information about new tech on click
  });

  it("Handles filtering project", () => {
    // Open filter modal
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
