describe("user login", () => {
  beforeEach(() => {
    cy.fixture("schemaMessages").then((messages) => {
      this.messages = messages;
    });
    cy.fixture("loginFailure").then((fail) => {
      this.fail = fail;
    });
    cy.fixture("loginSuccess").then((success) => {
      this.success = success;
    });
    cy.visit("");
    cy.wait(1000);
    cy.contains("button", "CONTA").click();
  });


  it("should be able to make the user's login successfully", () => {
    cy.typeInput("email", this.success.email)
    cy.typeInput("password", this.success.password)

    cy.notExist("dialog");
    cy.get("div.Toastify__toast--success");

    cy.contains("button", "CONTA").click();
    cy.notExist("input[name=email]");

  });

  it("Should not be able to advance if there's invalid input", () => {
    cy.typeInput("email", this.fail.email)


    cy.hasErrorMessage(this.messages.email);

    cy.get('input[name="email"]').clear().type(`${this.success.email}{enter}`);
    cy.wait(200);

    cy.typeInput("password", this.fail.password)

    cy.hasErrorMessage(this.messages.minimumPassword);
  });

  it("Login should fail.", () => {
    cy.typeInput("email", this.success.email)
    cy.typeInput("password", `${this.success.password}650`)

    cy.get("div.Toastify__toast--error");
    cy.notExist("dialog");

    cy.contains("button", "CONTA").click();
    cy.get('input[name="email"]');
  });
});
