/// <reference types="cypress" />

describe("Cypress basic", () => {
  //   beforeEach(() => {
  //     cy.visit('example.com');
  //     // cy.visit("https://www.wcaquino.me/cypress/componentes.html");
  //   });

  it("Should visit a page and assert a title", () => {
    cy.visit("https://www.wcaquino.me/cypress/componentes.html");
    cy.pause();
    cy.title().should("be.equal", "Campo de Treinamento");
    cy.title().debug().should("contain", "Campo");

    cy.title()
      .should("be.equal", "Campo de Treinamento")
      .and("contain", "Campo");
  });

  it("Should find and interact with an element", () => {
    cy.visit("https://www.wcaquino.me/cypress/componentes.html");
    cy.get("#buttonSimple").click().should("have.value", "Obrigado!");
  });
});
