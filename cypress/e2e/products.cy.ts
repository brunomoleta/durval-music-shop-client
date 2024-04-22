describe("Feat: products", () => {
  beforeEach(() => {
    cy.visit("");
    cy.wait(3000);
  });
  afterEach(() => {
    cy.screenshot();
  });

  it("Should be able to search and find a product using the word 'guitar'", () => {
    cy.get("[id*='-searchInput']").type("guitar{enter}");

    cy.visit("/catalog/guitar");

    cy.get('a[href^="/products/"]');
  });
  it("Should render an error message if no products are found.", () => {
    cy.get("[id*='-searchInput']").type(
      "chuteira total 90 do Ronaldinho{enter}",
    );
    cy.get("h1").should(
      "have.text",
      "Infelizmente não há produtos para sua busca :(",
    );
    cy.get("h1").should("exist");

    cy.contains("button", "Voltar para a página inicial").click();
    cy.url().should("equal", Cypress.config().baseUrl);
  });

  it("Should be able to open a single product", () => {
    cy.get("[id*='-products']").children().eq(2).click();
    cy.wait(250);
    cy.get("[id*='-nome']");
    cy.get("[id*='-preço']");
    cy.get("[id*='-condição']");
    cy.get("[id*='-vendedor']");
    cy.get("[id*='-description']");
    cy.contains("button", "Adicionar ao carrinho").click();
  });
});
