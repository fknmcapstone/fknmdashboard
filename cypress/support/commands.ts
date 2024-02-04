/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add("clickNavBarItem", (name) => {
  /* Cypress has a known issue where it cannot detect the CSS pseudo-class hover.
   * Because Cypress cannot simulate a CSS hover, we must force-click instead for the hovering sub menus.
   * Otherwise this would be the code:
   * cy.get("#nav_publications").invoke("show");
   * cy.get("#nav_publications_submenu").should("be.visible");
   */
  cy.intercept("GET", "/" + name + "*").as("load");
  cy.get('[data-cy="nav_' + name + '"]').click({ force: true });
  cy.wait("@load");
});

declare global {
  namespace Cypress {
    interface Chainable {
      clickNavBarItem(name: string): Chainable<void>;
    }
  }
}
