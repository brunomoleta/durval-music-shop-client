describe("Given you are a user at the homepage", () => {
  let messages: Messages;
  let fail: Response;
  let success: Response;
  beforeEach(() => {
    cy.fixture("schemaMessages").then((data) => {
      messages = data;
    });
    cy.fixture("loginFailure").then((data) => {
      fail = data;
    });
    cy.fixture("loginSuccess").then((data) => {
      success = data;
    });
    cy.visit("");
    cy.wait(1000);
    cy.get('[id*="account"]').click();
  });
  context("when you insert valid login data", () => {
    it("then you should go to the dashboard.", () => {
      cy.typeInputData("email", success.email);
      cy.typeInputData("password", success.password, true);

      cy.notExist("dialog");
      cy.get("div.Toastify__toast--success");

      cy.get('[id*="account"]').click();
      cy.notExist("input[name=email]");
    });
  });
  context("when you insert incomplete login data", () => {
    it("then You should be shown an error message.", () => {
      cy.typeInputData("email", fail.email);

      cy.hasErrorMessage(messages.email);

      cy.clearAndTypeRightData("email", success.email);

      cy.typeInputData("password", fail.password, true);

      cy.hasErrorMessage(messages.minimumPassword);
    });
  });
  context("when you insert invalid login data", () => {
    it("then you should remain on the same page.", () => {
      cy.typeInputData("email", success.email);
      cy.typeInputData("password", `${success.password}650`, true);

      cy.get("div.Toastify__toast--error");
      cy.notExist("dialog");

      cy.get('[id*="account"]').click();
      cy.get('input[name="email"]');
    });
  });
});

