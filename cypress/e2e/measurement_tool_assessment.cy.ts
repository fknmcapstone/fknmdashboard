describe("Measurement Tool Assessment Page Spec", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clickNavBarItem("measurement_tool_assessment");
  });

  it("Tests the page for accessibility", () => {
    cy.injectAxe();
    cy.checkA11y();
  });
});
