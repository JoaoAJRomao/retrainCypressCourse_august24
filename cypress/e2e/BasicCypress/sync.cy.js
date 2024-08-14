/// <reference types="cypress" />

describe("Waits...", () => {
  beforeEach(() => {
    cy.visit("https://www.wcaquino.me/cypress/componentes.html");
  });

  it("Must wait available element", () => {
    cy.get("#novoCampo").should("not.exist");
    cy.get("#buttonDelay").click();
    cy.get("#novoCampo").should("not.exist");
    cy.get("#novoCampo").should("exist");
    cy.get("#novoCampo").type("it work");
  });

  it("Must retry", () => {
    cy.get("#novoCampo").should("not.exist");
    cy.get("#buttonDelay").click();
    cy.get("#novoCampo").should("not.exist");
    cy.get("#novoCampo").should("exist").type("it work");
  });

  it("Find feature use", () => {
    cy.get("#buttonList").click();
    cy.get("#lista li").find("span").should("contain", "Item 1");
    cy.get("#lista li span").should("contain", "Item 2");
  });

  it("Timeout use", () => {
    // cy.get("#buttonDelay").click();
    // cy.get("#novoCampo", { timeout: 1000 }).should("exist");

    // cy.get("#buttonListDOM").click();
    // cy.wait(5000);
    // cy.get("#lista li span", { timeout: 30000 }).should("contain", "Item 2");

    cy.get("#buttonListDOM").click();
    cy.get("#lista li span").should("have.length", 1);

    cy.get("#lista li span").should("have.length", 2);
  });
});
