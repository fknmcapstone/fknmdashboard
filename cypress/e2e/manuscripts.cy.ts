describe("Manuscripts Page Spec", () => {
  beforeEach(() => {
    cy.visit("/");
    /* Cypress has a known issue where it cannot detect the CSS pseudo-class hover.
     * Because Cypress cannot simulate a CSS hover, we must force-click instead.
     *
     * cy.get("#nav_publications").invoke("show");
     * cy.get("#nav_publications_submenu").should("be.visible");
     */
    cy.intercept("GET", "/manuscripts*").as("manuscriptsLoad");
    cy.get("#nav_manuscripts").click({ force: true });
    cy.wait("@manuscriptsLoad");
  });
  it("Smokes key elements", () => {
    cy.get("#manuscripts_title").should("exist");
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
