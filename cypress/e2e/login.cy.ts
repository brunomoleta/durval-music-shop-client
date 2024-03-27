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
    cy.typeInputData("email", this.success.email)
    cy.typeInputData("password", this.success.password)

    cy.notExist("dialog");
    cy.get("div.Toastify__toast--success");

    cy.contains("button", "CONTA").click();
    cy.notExist("input[name=email]");

  });

  it("Should not be able to advance if there's invalid input", () => {
    cy.typeInputData("email", this.fail.email)


    cy.hasErrorMessage(this.messages.email);

    cy.clearAndTypeRightData('email', this.success.email)

    cy.typeInputData("password", this.fail.password)

    cy.hasErrorMessage(this.messages.minimumPassword);
  });

  it("Login should fail.", () => {
    cy.typeInputData("email", this.success.email)
    cy.typeInputData("password", `${this.success.password}650`)

    cy.get("div.Toastify__toast--error");
    cy.notExist("dialog");

    cy.contains("button", "CONTA").click();
    cy.get('input[name="email"]');
  });
});
