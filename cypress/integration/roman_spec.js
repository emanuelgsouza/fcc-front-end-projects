describe('Roman Converter Route Test', () => {
  it('Render the route and find a input to type a word', () => {
    cy.visit('http://localhost:3000')

    cy.get('a').contains('Roman Converter').click()

    cy.url().should('include', '/roman-converter')

    cy.get('#number').type('Hello')
  });

  it(`Convert 40 to XL`, () => {
    cy.visit('http://localhost:3000')

    cy.get('a').contains('Roman Converter').click()

    cy.get('#number').type(40)

    cy.get('button').contains('Check!').click()

    cy.get('.notification').contains('The number 40 in Roman numeral is XL')
  });

  it(`Convert 50 to X`, () => {
    cy.visit('http://localhost:3000')

    cy.get('a').contains('Roman Converter').click()

    cy.get('#number').type(50)

    cy.get('button').contains('Check!').click()

    cy.get('.notification').contains('The number 50 in Roman numeral is L')
  });
});
