/// <reference types="cypress" />

describe("Cypress basic", () => {
  //   beforeEach(() => {
  //     cy.visit('example.com');
  //     // cy.visit("https://www.wcaquino.me/cypress/componentes.html");
  //   });

  it("Should visit a page and assert a title", () => {
    cy.visit("https://www.wcaquino.me/cypress/componentes.html");
    cy.title().should("be.equal", "Campo de Treinamento");
    cy.title().should("contain", "Campo");

    cy.title()
      .should("be.equal", "Campo de Treinamento")
      .and("contain", "Campo");
  });

  it.only("Should find and interact with an element", () => {
    cy.visit("https://www.wcaquino.me/cypress/componentes.html");
    cy.get("#buttonSimple").click().should("have.value", "Obrigado!");
  });
});
