describe('Home page tests', () => {
  it('Open the Home page', () => {
    cy.visit('http://localhost:3000')

    cy.contains('FCC Front End Projects')
  })

  it('Open the Home page and switch to Palidrome route', () => {
    cy.visit('http://localhost:3000')

    cy.get('a').contains('Palindrome').click()

    cy.url().should('include', '/palindrome')
  })

  it('Open the Home page and switch to Roman Converter route', () => {
    cy.visit('http://localhost:3000')

    cy.get('a').contains('Roman Converter').click()

    cy.url().should('include', '/roman-converter')
  })

  it('Open the Home page and switch to Cash Register route', () => {
    cy.visit('http://localhost:3000')

    cy.get('a').contains('Cash Register').click()

    cy.url().should('include', '/cash-register')
  })

  it('Open the Home page and switch to Pomodoro Clock route', () => {
    cy.visit('http://localhost:3000')

    cy.get('a').contains('Pomodoro').click()

    cy.url().should('include', '/pomodoro')
  })
})
