import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

Given('I visit register page', () => {
    cy.visit(Cypress.env('url'));
    cy.contains('Jetzt einrichten').click()
})

When('I click register form', () => {
    cy.contains('Authenticate').click()
})

Then('I will see the error popup', () => {
    cy.get('.visually-hidden').should('have.text', 'Loading...')
    cy.handlerAPIError()
    cy.contains('Registration failure').should('exist')
})

Then('I close error popup', () => {
    cy.wait(3000)
    cy.contains('Close').click()
})

When('I go back to setup page', () => {
    cy.get('button').contains('Back').click()
})
