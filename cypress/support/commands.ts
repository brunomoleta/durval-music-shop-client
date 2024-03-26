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

/* eslint-disable @typescript-eslint/no-namespace */
declare global {
  namespace Cypress {
    interface Chainable {
      typeInput(
        field: string,
        write: string,
        pressEnter?: boolean,
      ): Chainable<void>;

      hasErrorMessage(error: string): Chainable<void>;

      typeUserInfo(object): Chainable<void>;

      notExist(element: string): Chainable<void>;
    }
  }
}

Cypress.Commands.add("notExist", (element: string) => {
  cy.findByRole(element).should("not.exist");
});
Cypress.Commands.add("hasErrorMessage", (error: string) => {
  cy.get("span").should("contain.text", error);
});
Cypress.Commands.add(
  "typeInput",
  (field: string, write: string, pressEnter: boolean = true) => {
    cy.get(`input[name="${field}"]`).type(`${write}${pressEnter && "{enter}"}`);
    cy.wait(200);
  },
);

Cypress.Commands.add("typeUserInfo", (user: User) => {
  cy.typeInput("firstName", user.firstName);
  cy.typeInput("lastName", user.lastName);
  cy.typeInput("email", user.email);
  cy.typeInput("password", user.password);
  cy.typeInput("confirmPassword", user.password);
});

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

import "@testing-library/cypress/add-commands";
