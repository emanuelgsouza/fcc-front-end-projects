describe('Palidrome Route Test', () => {
  it('Render the route and find a input to type a word', () => {
    cy.visit('http://localhost:3000')

    cy.get('a').contains('Palindrome').click()

    cy.url().should('include', '/palindrome')

    cy.get('#word').type('Hello')
  });

  it(`When check if Hello is a palidrome, returns it's not`, () => {
    const stub = cy.stub()

    cy.on('window:alert', stub)

    cy.visit('http://localhost:3000')

    cy.get('a').contains('Palindrome').click()

    cy.get('#word').type('Hello')

    cy
      .get('button')
      .contains('Check!')
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith(`It's not a palindrome!`)
      })
  });

  it(`When check if Anna is a palidrome, returns it's`, () => {
    const stub = cy.stub()

    cy.on('window:alert', stub)

    cy.visit('http://localhost:3000')

    cy.get('a').contains('Palindrome').click()

    cy.get('#word').type('Anna')

    cy
      .get('button')
      .contains('Check!')
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith(`It's a palindrome!`)
      })
  });
});
