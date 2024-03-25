export const schemaMessages = {
  firstName: "Favor coloque seu o nome :)",
  lastName: "Favor coloque seu sobrenome :)",
  email: "Por favor insira um e-mail válido",
  noConfirmation: "Favor confirmar a senha.",
  equalPassword: "As senhas hão de ser identicasíssimas.",
  minimumPassword: "O tamanho mínimo é de 8 caracteres :)",
};

describe("user login", () => {
  const typeUserInfo = () => {
    cy.get('input[name="firstName"]').type(`${userSuccess.firstName}`);
    cy.get('input[name="lastName"]').type(`${userSuccess.lastName}{enter}`);
    cy.wait(200);

    cy.get('input[name="email"]').type(`${userSuccess.email}{enter}`);
    cy.wait(200);

    cy.get('input[name="password"]').type(`${userSuccess.password}{enter}`);
    cy.get('input[name="confirmPassword"]').type(
      `${userSuccess.confirmPassword}{enter}`,
    );
    cy.wait(200);
  };
  const userSuccess = {
    firstName: "Rulian",
    lastName: "Ramirez",
    email: "rulianramirez@gmail.com",
    password: "aA0123!aaa",
    confirmPassword: "aA0123!aaa",
  };
  const userFail = {
    firstName: " ",
    lastName: "   ",
    email: "rulianramirezgmail.com",
    password: "aA0123!aaa",
    confirmPassword: "aA0123!aaaA",
  };

  const buttonStrings = [/conta/i, /cadastrar/i, /enviar/i];

  beforeEach(() => {
    cy.visit("");
    cy.contains("button", buttonStrings[0]).click();
    cy.wait(200);
    cy.contains("button", buttonStrings[1]).click();
  });

  it("Should not be able to create a user successfully as the email already exists.", () => {
    typeUserInfo();

    cy.contains("button", buttonStrings[2]).click();

    cy.wait(200);

    cy.findByRole("dialog").should("exist");
    cy.get("div.Toastify__toast--error");
  });

  it.only("Should be able to navigate the dialog fully", () => {
    cy.get('input[name="firstName"]').type(`${userFail.firstName}`);
    cy.get('input[name="lastName"]').type(`${userFail.lastName}{enter}`);

    cy.get("span").should("contain.text", schemaMessages.firstName);
    cy.get("span").should("contain.text", schemaMessages.lastName);

    cy.get('input[name="firstName"]').clear().type(`${userSuccess.firstName}`);
    cy.get('input[name="lastName"]')
      .clear()
      .type(`${userSuccess.lastName}{enter}`);
    cy.wait(200);

    cy.get('input[name="email"]').type(`${userFail.email}{enter}`);
    cy.get("span").should("contain.text", schemaMessages.email);
    cy.get('input[name="email"]').clear().type(`${userSuccess.email}{enter}`);

    cy.get('input[name="password"]').type(`${userFail.password}{enter}`);
    cy.get("span").should("contain.text", schemaMessages.noConfirmation);
    cy.get('input[name="confirmPassword"]').type(
      `${userFail.confirmPassword}{enter}`,
    );
    cy.get("span").should("contain.text", schemaMessages.equalPassword);
    cy.get('input[name="confirmPassword"]')
      .clear()
      .type(`${userFail.password}{enter}`);

    cy.get("button").should("contain.text", "LOGIN");
    cy.get("button").should("contain.text", "ENVIAR");
    cy.contains("button", "Voltar ao início").click();

    typeUserInfo();

    cy.contains("button", "LOGIN").click();
    cy.contains("h2",/login/i);
  });
});
