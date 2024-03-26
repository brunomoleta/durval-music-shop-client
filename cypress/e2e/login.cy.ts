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
    cy.get('input[name="email"]').type(`${this.success.email}{enter}`);

    cy.wait(200);

    cy.get('input[name="password"]').type(`${this.success.password}{enter}`);
    cy.wait(200);

    cy.findByRole("dialog").should("not.exist");
    cy.get("div.Toastify__toast--success");

    cy.contains("button", "CONTA").click();
    cy.get('input[name="email"]').should(`not.exist`);
  });

  it("Should not be able to advance if there's invalid input", () => {
    cy.get('input[name="email"]').type(`${this.fail.email}{enter}`);

    cy.wait(200);
    cy.get("span").should("contain.text", this.messages.email);
    cy.get('input[name="email"]').clear().type(`${this.success.email}{enter}`);
    cy.wait(200);

    cy.get('input[name="password"]').type(`${this.fail.password}{enter}`);
    cy.get("span").should("contain.text", this.messages.minimumPassword);
  });

  it("Login should fail.", () => {
    cy.get('input[name="email"]').type(`${this.success.email}{enter}`);

    cy.wait(200);

    cy.get('input[name="password"]').type(`${this.success.password}654{enter}`);
    cy.wait(200);

    cy.get("div.Toastify__toast--error");
    cy.findByRole("dialog").should("not.exist");

    cy.contains("button", "CONTA").click();
    cy.get('input[name="email"]');
  });
});
