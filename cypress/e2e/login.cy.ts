describe("user login", () => {
  const userMockSuccess = {
    email: "fontoura@gmail.com",
    password: "Wq!-2phaAA"
  }

  it("should be able to create a user successfully", () => {
    cy.visit("");

    cy.contains('button', 'CONTA').click();
    cy.wait(200);

    cy.get('input[name="email"]').type(`${userMockSuccess.email}{enter}`);

    cy.wait(200);

    cy.get('input[name="password"]').type(`${userMockSuccess.password}{enter}`);
    cy.wait(200);

    cy.get('div.Toastify__toast--success');

  });
});
