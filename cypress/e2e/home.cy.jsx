describe('PokemonCard App Home Page', () => {

  it('displays Pikachu on initial load', () => {
    cy.visit('/')
    cy.get('#cardHolder').children().should('have.length', 1);
  });

});