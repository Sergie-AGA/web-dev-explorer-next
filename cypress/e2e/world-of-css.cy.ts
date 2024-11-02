describe("World of CSS Page", () => {
  beforeEach(() => {
    cy.visit("/world-of-css-effects");
  });

  it("Changes the current active session", () => {
    // Get current effect
    // Get current sidebar
    // Click on item, show new sidebar
    // Old sidebar not on screen
    // Click on effect, rerender new component
    // Old effect no on screen
    // Show active class on clicked item
  });

  it("Handles the Glitch effect correctly", () => {
    // Click on Glitch effect
    // Modify input text
    // Verify GlitchLetter component is rendered with three spans per letter and has specific class
  });
  it("Handles the Neon effect correctly", () => {
    // Click on Neon effect
    // Modify input text
    // Verify NeonLetter component is rendered with specific class
    // Toggle switch, check css class exists
  });
  it("Handles the Switching effect correctly", () => {
    // Click on Switching effect
    // Add new text
    // Verify SwitchLetter component is rendered with specific class. Verify how many messages
    // Remove text and verify how many messages
  });
  it("Handles the Random Colour effect correctly", () => {
    // Click on Random Colour effect
    // Verify RandomColourLetter component is rendered with specific class
    // Hover letters and check modified style exists
  });
  it("Handles the Moving Text effect correctly", () => {
    // Click on Moving Text effect
    // Verify MovingLetter component is rendered with specific class
    // Click on letters and check they move
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
  it("Handles the CSS Phone effect correctly", () => {
    // Click on CSS Phone effect
    // Send message as user, verify it rendered in the right spot
    // Send message as bot, verify it rendered in the right spot
  });
});
