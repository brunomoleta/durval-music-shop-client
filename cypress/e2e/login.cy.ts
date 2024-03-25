export const schemaMessages = {
  firstName: "Favor coloque seu o nome :)",
  lastName: "Favor coloque seu sobrenome :)",
  email: "Por favor insira um e-mail válido",
  noConfirmation: "Favor confirmar a senha.",
  equalPassword: "As senhas hão de ser identicasíssimas.",
  minimumPassword: "O tamanho mínimo é de 8 caracteres :)",
};

describe("user login", () => {
  const userMockSuccess = {
    email: "fontoura@gmail.com",
    password: "Wq!-2phaAA",
  };
  const userMockFailure = {
    email: "fontouragmail.com",
    password: "",
  };


  it("should be able to make the user's login successfully", () => {
    cy.visit("");

    cy.contains("button", "CONTA").click();
    cy.wait(200);

    cy.get('input[name="email"]').type(`${userMockSuccess.email}{enter}`);

    cy.wait(200);

    cy.get('input[name="password"]').type(`${userMockSuccess.password}{enter}`);
    cy.wait(200);

    cy.get("div.Toastify__toast--success");
  });
  it("Should not be able to advance if there's invalid input", () => {
    cy.visit("");

    cy.contains("button", "CONTA").click();
    cy.wait(200);

    cy.get('input[name="email"]').type(`${userMockFailure.email}{enter}`);

    cy.wait(200);
    cy.get("span").should("contain.text", schemaMessages.email);
    cy.get('input[name="email"]')
      .clear()
      .type(`${userMockSuccess.email}{enter}`);
    cy.wait(200);

    cy.get('input[name="password"]').type(`${userMockFailure.password}{enter}`);
    cy.get("span").should("contain.text", schemaMessages.minimumPassword);
  });
  it("Login should fail.", () => {
    cy.visit("");

    cy.contains("button", "CONTA").click();
    cy.wait(200);

    cy.get('input[name="email"]').type(`${userMockSuccess.email}{enter}`);

    cy.wait(200);

    cy.get('input[name="password"]').type(`${userMockSuccess.password}654{enter}`);
    cy.wait(200);

    cy.get("div.Toastify__toast--error");
    cy.findByRole('dialog').should('not.exist');
  });

});
