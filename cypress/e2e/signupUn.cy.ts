

describe("Feat: user login unsuccesful", () => {
  const buttonStrings = [/conta/i, /cadastrar/i, /enviar/i, /avançar/i];

  beforeEach(() => {
    cy.fixture("userFail").then((fail) => {
      this.fail = fail;
    });
    cy.fixture("schemaMessages").then((messages) => {
      this.messages = messages;
    });
    cy.fixture("userSuccess").then((success) => {
      this.success = success;
    });
    cy.visit("");
    cy.get('[id*="account"]').click();
    cy.wait(200);
    cy.get('[id*="switch-form"]').click();
  });

  it("Should not be able to create a user successfully as the email already exists.", () => {
    cy.typeUserData(this.success);

    cy.contains("button", buttonStrings[2]).click();

    cy.wait(200);

    cy.findByRole("dialog").should("exist");
    cy.get("div.Toastify__toast--error");
  });

  it("Should be able to navigate the dialog fully", () => {
    cy.typeInputData("firstName", this.fail.firstName);
    cy.typeInputData("lastName", this.fail.lastName);
    cy.hasErrorMessage(this.messages.firstName);
    cy.hasErrorMessage(this.messages.lastName);
    cy.clearAndTypeRightData("firstName", this.success.firstName);
    cy.clearAndTypeRightData("lastName", this.success.lastName);

    cy.typeInputData("email", this.fail.email);
    cy.hasErrorMessage(this.messages.email);
    cy.clearAndTypeRightData("email", this.success.email);

    cy.typeInputData("password", this.fail.password);
    cy.hasErrorMessage(this.messages.noConfirmation);
    cy.typeInputData("confirmPassword", this.fail.confirmPassword);

    cy.hasErrorMessage(this.messages.equalPassword);
    cy.clearAndTypeRightData("confirmPassword", this.success.password);

    cy.get("button").should("contain.text", "LOGIN");
    cy.get("button").should("contain.text", "ENVIAR");
    cy.contains("button", "Voltar ao início").click();

    cy.typeUserData(this.success);

    cy.contains("button", "LOGIN").click();
    cy.contains("h2", /login/i);
  });
});
