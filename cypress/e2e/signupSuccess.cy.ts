import { faker } from "@faker-js/faker";

describe("Feat: user login unsuccesful", () => {
  beforeEach(() => {
    cy.visit("");

    cy.get('[id*="account"]').click();
    cy.wait(200);
    cy.get('[id*="switch-account"]').click();
  });

  it("Should be able to create a user successfully.", () => {
    const writePassword = "1!abcdABCD";
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    cy.typeInputData("firstName", firstName);
    cy.typeInputData("lastName", lastName);
    cy.typeInputData("email", faker.internet.email({ firstName, lastName }));

    cy.typeInputData("password", writePassword);
    cy.typeInputData("confirmPassword", writePassword);

    cy.get('[id*="advance"]').click();

    cy.findByRole("dialog").should("not.exist");
    // cy.get("div.Toastify__toast--error");
  });
});
