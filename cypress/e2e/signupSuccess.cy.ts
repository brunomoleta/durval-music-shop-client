import {faker} from "@faker-js/faker";

describe("Feat: user login unsuccesful", () => {
    beforeEach(() => {
        cy.visit("");

        cy.get('[id*="account"]').click();
        cy.wait(200);
        cy.get('[id*="switch-account"]').click();
    });

    it("Should be able to create a user successfully.", () => {
        const writePassword = "1!abcdABCD";

        cy.typeInputData("firstName", faker.person.firstName());
        cy.typeInputData("lastName", faker.person.lastName());
        cy.typeInputData("email", faker.internet.email());

        cy.typeInputData("password", writePassword);
        cy.typeInputData("confirmPassword", writePassword);

        cy.get('[id*="advance"]').click();

        cy.findByRole("dialog").should("not.exist");
        // cy.get("div.Toastify__toast--error");
    });
})