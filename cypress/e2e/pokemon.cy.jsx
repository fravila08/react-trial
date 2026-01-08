describe("Pokemon App", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays Pikachu on initial load", () => {
    cy.get("#cardHolder").children().should("have.length", 1);
    cy.get("#cardHolder").find(".pokeCard").should("exist");
  });

  it("can add Bulbasaur and Charizard", () => {
    cy.get('input[name="pokemonName"]').type("Bulbasaur");
    cy.get('button[type="submit"]').click();
    cy.get("#cardHolder").contains(".pokeCard", "bulbasaur").should("exist");

    cy.get('input[name="pokemonName"]').clear().type("Charizard");
    cy.get('button[type="submit"]').click();
    cy.get("#cardHolder").contains("charizard");

    cy.get("#cardHolder").children().should("have.length", 3);
  });

  it("can toggle shiny on a Pokemon", () => {
    cy.get("#cardHolder button").contains("shine").first().click();
    cy.get("#cardHolder img")
      .first()
      .should("have.attr", "src")
      .and("include", "shiny");

    cy.get("#cardHolder button").contains("un-shine").first().click();
    cy.get("#cardHolder img")
      .first()
      .should("have.attr", "src")
      .and("not.include", "shiny");
  });

  it("navigates correctly between pages", () => {
    cy.get("nav a").contains("About").click();
    cy.url().should("include", "/about");

    cy.get("nav a").contains("Home").click();
    cy.url().should("eq", `${Cypress.config("baseUrl")}`);

    // Navigate to details page
    cy.get("#cardHolder button").contains("See Details").first().click();
    cy.url().should("include", "/pokemon/");
    cy.get("h1").should("exist"); // Pokemon name displayed
  });

  it("can remove a Pokemon", () => {
    cy.get("#cardHolder button").contains("Remove").first().click();
    cy.get("#cardHolder").children().should("have.length", 0); // Pikachu removed
  });

  it("maintains shiny state after navigation", () => {
    cy.get('input[name="pokemonName"]').type("Bulbasaur");
    cy.get('button[type="submit"]').click();
    cy.get('input[name="pokemonName"]').clear().type("Charizard");
    cy.get('button[type="submit"]').click();
    
    cy.get("#cardHolder button").contains("shine").first().click();
    cy.get("#cardHolder button").contains("See Details").first().click();

    // Return to Home
    cy.get("nav a").contains("Home").click();
    cy.get("#cardHolder button").contains("un-shine").should("exist");
  });
});
