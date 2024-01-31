describe("Landing Page Spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Smokes key elements", () => {
    cy.get("#header").should("exist");
    cy.get("#header_logo").should("exist");
    cy.get("#header_title").should("exist");
    cy.get("#nav_bar").should("exist");
    cy.get("#research_title").should("exist");
    const textIDs = ["landing", "school_food_programs", "research"];

    for (var text of textIDs) {
      cy.get("#" + text + "_text").should("exist");
    }
  });

  it("Tests all links", () => {
    cy.get("a").each((link) => {
      if (link.prop("href"))
        cy.request({
          url: link.prop("href"),

          failOnStatusCode: false,
        });
    });
  });
});
