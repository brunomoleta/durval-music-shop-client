describe("products", () => {
  beforeEach(() => {
    cy.visit("");
    cy.wait(1000);
  });

  it("Should be able to search and find a product using the word 'guitar'", () => {
    cy.get("[id*='-search']").type("guitar{enter}");

    cy.visit("/catalog/guitar");

    cy.get('a[href^="/products/"]');
  });
  it("Should render an error message if no products are found.", () => {
    cy.get("[id*='-search']").type("chuteira total 90 do Ronaldinho{enter}");

    cy.get("h1").should(
      "have.text",
      "Infelizmente não há produtos para sua busca :(",
    );

    cy.contains('button', 'Voltar para a página inicial').click();
    cy.url().should('equal', Cypress.config().baseUrl);

  });

  it.only("Should be able to open a single product",()=> {
    cy.get("[id*='-products']").children().eq(2).click();

    cy.get("[id*='-name']");
    cy.get("[id*='-price']");
    cy.get("[id*='-condition']");
    cy.get("[id*='-owner']");
    cy.get("[id*='-description']");
    cy.contains('button', 'Adicionar ao carrinho').click();
  })
});
