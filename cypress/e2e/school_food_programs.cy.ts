describe("School Food Programs Page Spec", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clickNavBarItem("school_food_programs");
  });

  it("Tests the page for accessibility", () => {
    cy.injectAxe();
    cy.checkA11y();
  });
});
