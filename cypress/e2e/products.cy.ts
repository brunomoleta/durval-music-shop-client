describe("products", () => {
    beforeEach(() => {
        cy.visit("");
        cy.wait(1000);
    });

    it("should be able to search for a product", () => {
        cy.get("[id*='-search']").type("guitarra{enter}")
    });
})