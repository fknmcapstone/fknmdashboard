describe("Landing Page Spec", () => {
  it("Checks key elements", () => {
    cy.visit("/");
    cy.clickNavBarItem("school_food_programs");
  });
});
