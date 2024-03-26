describe("user login", () => {
  const buttonStrings = [/conta/i, /cadastrar/i, /enviar/i];

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
    cy.contains("button", buttonStrings[0]).click();
    cy.wait(200);
    cy.contains("button", buttonStrings[1]).click();
  });

  it("Should not be able to create a user successfully as the email already exists.", () => {
    cy.typeUserInfo(this.success);

    cy.contains("button", buttonStrings[2]).click();

    cy.wait(200);

    cy.findByRole("dialog").should("exist");
    cy.get("div.Toastify__toast--error");
  });

  it.only("Should be able to navigate the dialog fully", () => {
    cy.typeInput("firstName", this.fail.firstName);
    cy.typeInput("lastName", this.fail.lastName);

    cy.hasErrorMessage(this.messages.firstName);
    cy.hasErrorMessage(this.messages.lastName);

    cy.get('input[name="firstName"]').clear().type(`${this.success.firstName}`);
    cy.get('input[name="lastName"]')
      .clear()
      .type(`${this.success.lastName}{enter}`);
    cy.wait(200);

    cy.typeInput("email", this.fail.email);
    cy.hasErrorMessage(this.messages.email);
    cy.get('input[name="email"]').clear().type(`${this.success.email}{enter}`);

    cy.typeInput("password", this.fail.password);
    cy.hasErrorMessage(this.messages.noConfirmation);
    cy.typeInput("confirmPassword", this.fail.confirmPassword);
    cy.hasErrorMessage(this.messages.equalPassword);

    cy.get('input[name="confirmPassword"]')
      .clear()
      .type(`${this.fail.password}{enter}`);

    cy.get("button").should("contain.text", "LOGIN");
    cy.get("button").should("contain.text", "ENVIAR");
    cy.contains("button", "Voltar ao início").click();

    cy.typeUserInfo(this.success);

    cy.contains("button", "LOGIN").click();
    cy.contains("h2", /login/i);
  });
});
