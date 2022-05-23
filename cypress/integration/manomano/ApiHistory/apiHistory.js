
Given('I open ManoMano with credential info', () => {
    cy.visit(Cypress.env('url'))
    localStorage.setItem('token', Cypress.env('token'))
    localStorage.setItem('profile_info', Cypress.env('profile_info'))
})

When('I navigate to API-History', () => {
    cy.get('#dropdown-basic').click()
    cy.contains('API-History').click()
})

When('I change sub-account', () => {
    cy.wait(3000)
    cy.changeSelectValue('.col > select', '2')
})

Then('I see loading', () => {
    cy.get('i').should('have.class', 'spinner-border')
})

When('I switch filter {string}', (index) => {
    cy.clickItem('.form-check-input', index)
})

When('I click search button', () => {
    cy.get('.input-search-button ').click()
})

When('I change page size', () => {
    cy.changeSelectValue('form > select', '100')
})

When('I load api-history', () => {
    cy.get('.fa-sync').click()
})