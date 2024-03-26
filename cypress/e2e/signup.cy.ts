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
  const typeUserInfo = () => {
    cy.get('input[name="firstName"]').type(`${this.success.firstName}`);
    cy.get('input[name="lastName"]').type(`${this.success.lastName}{enter}`);
    cy.wait(200);

    cy.get('input[name="email"]').type(`${this.success.email}{enter}`);
    cy.wait(200);

    cy.get('input[name="password"]').type(`${this.success.password}{enter}`);
    cy.get('input[name="confirmPassword"]').type(
      `${this.success.password}{enter}`,
    );
    cy.wait(200);
  };

  it("Should not be able to create a user successfully as the email already exists.", () => {
    typeUserInfo();

    cy.contains("button", buttonStrings[2]).click();

    cy.wait(200);

    cy.findByRole("dialog").should("exist");
    cy.get("div.Toastify__toast--error");
  });

  it("Should be able to navigate the dialog fully", () => {
    cy.get('input[name="firstName"]').type(`${this.fail.firstName}`);
    cy.get('input[name="lastName"]').type(`${this.fail.lastName}{enter}`);

    cy.get("span").should("contain.text", this.messages.firstName);
    cy.get("span").should("contain.text", this.messages.lastName);

    cy.get('input[name="firstName"]').clear().type(`${this.success.firstName}`);
    cy.get('input[name="lastName"]')
      .clear()
      .type(`${this.success.lastName}{enter}`);
    cy.wait(200);

    cy.get('input[name="email"]').type(`${this.fail.email}{enter}`);
    cy.get("span").should("contain.text", this.messages.email);
    cy.get('input[name="email"]').clear().type(`${this.success.email}{enter}`);

    cy.get('input[name="password"]').type(`${this.fail.password}{enter}`);
    cy.get("span").should("contain.text", this.messages.noConfirmation);
    cy.get('input[name="confirmPassword"]').type(
      `${this.fail.confirmPassword}{enter}`,
    );
    cy.get("span").should("contain.text", this.messages.equalPassword);
    cy.get('input[name="confirmPassword"]')
      .clear()
      .type(`${this.fail.password}{enter}`);

    cy.get("button").should("contain.text", "LOGIN");
    cy.get("button").should("contain.text", "ENVIAR");
    cy.contains("button", "Voltar ao início").click();

    typeUserInfo();

    cy.contains("button", "LOGIN").click();
    cy.contains("h2", /login/i);
  });
});
