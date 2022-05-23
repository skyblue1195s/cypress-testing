
Given('I open Setting page', () => {
    cy.visit(Cypress.env('url'))
    localStorage.setItem('token', Cypress.env('token'))
    localStorage.setItem('profile_info', Cypress.env('profile_info'))
})

When('I click connect button', () => {
    cy.get('button').contains('Verbinden').click()
})

When('I click register form', () => {
    cy.contains('Authentifizieren').click()
})

Then('I will see the error popup', () => {
    cy.get('.visually-hidden').should('have.text', 'Loading...')
    cy.handlerAPIError()
    cy.contains('Registrierungsfehler').should('exist')
})

Then('I close error popup', () => {
    cy.wait(3000)
    cy.get('.modal-footer > .btn').click()
})

When('I go back to setup page', () => {
    cy.get('button').contains('Abbrechen').click()
})
