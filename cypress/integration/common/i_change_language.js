When('I change language to {string}', (item) => {
    cy.get('svg').click()
    cy.get(item).click()
})