
Given('I open ManoMano with credential info', () => {
    cy.visit(Cypress.env('url'))
    localStorage.setItem('token', Cypress.env('token'))
    localStorage.setItem('profile_info', Cypress.env('profile_info'))
})

When('I navigate to User-Log', () => {
    cy.get('#dropdown-basic').click()
    cy.contains('Benutzer-Log').click()
})

When('I change sub-account', () => {
    cy.wait(3000)
    cy.changeSelectValue('.col > select', '2')
})

Then('I see loading', () => {
    cy.get('i').should('have.class', 'spinner-border')
})

When('I click search button', () => {
    cy.get('.input-search-button ').click()
})

When('I change page size', () => {
    cy.changeSelectValue('form > select', '100')
})

When('I fetch new user-log', () => {
    cy.get('.fa-sync').click()
})

When('I click change language', () => {
    cy.get('svg').click()
    cy.get('[alt="en"]').click()
})

When('I change page number', () => {
    const linkNumber = cy.get('a').contains('2')
    linkNumber.then(($page) => {
        if ($page) {
            linkNumber.click()
            cy.get('i').should('have.class', 'spinner-border')
        }
    })
})