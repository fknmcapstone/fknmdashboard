describe("Intake Visuals Page Spec", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clickNavBarItem("intake_visuals");
  });

  it("Tests the page for accessibility", () => {
    cy.injectAxe();
    cy.checkA11y();
  });
});
