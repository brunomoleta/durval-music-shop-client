describe("Feat: user login unsuccesful", () => {
  const buttonStrings = [/conta/i, /cadastrar/i, /enviar/i, /avançar/i];
  let messages: Messages;
  let fail: UserFeedback;
  let success: UserFeedback;

  beforeEach(() => {
    cy.fixture("schemaMessages").then((data) => {
      messages = data;
    });
    cy.fixture("userFail").then((data) => {
      fail = data;
    });
    cy.fixture("userSuccess").then((data) => {
      success = data;
    });
    cy.visit("");
    cy.get('[id*="account"]').click();
    cy.wait(200);
    cy.get('[id*="switch-form"]').click();
  });

  it("Should not be able to create a user successfully as the email already exists.", () => {
    cy.typeUserData(success);

    cy.contains("button", buttonStrings[2]).click();

    cy.wait(200);

    cy.findByRole("dialog").should("exist");
    cy.get("div.Toastify__toast--error");
  });

  it("Should be able to navigate the dialog fully", () => {
    cy.typeInputData("firstName", fail.firstName);
    cy.typeInputData("lastName", fail.lastName);
    cy.hasErrorMessage(messages.firstName);
    cy.hasErrorMessage(messages.lastName);
    cy.clearAndTypeRightData("firstName", success.firstName);
    cy.clearAndTypeRightData("lastName", success.lastName);

    cy.typeInputData("email", fail.email);
    cy.hasErrorMessage(messages.email);
    cy.clearAndTypeRightData("email", success.email);

    cy.typeInputData("password", fail.password);
    cy.hasErrorMessage(messages.noConfirmation);
    cy.typeInputData("confirmPassword", fail.confirmPassword);

    cy.hasErrorMessage(messages.equalPassword);
    cy.clearAndTypeRightData("confirmPassword", success.password);

    cy.get("button").should("contain.text", "LOGIN");
    cy.get("button").should("contain.text", "ENVIAR");
    cy.contains("button", "Voltar ao início").click();

    cy.typeUserData(success);

    cy.contains("button", "LOGIN").click();
    cy.contains("h2", /login/i);
  });
});
