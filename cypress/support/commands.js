// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

/**
 * Add handler error from web API
 * returning false here prevents Cypress from
 * failing the test
 */
Cypress.Commands.add('handlerAPIError', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false
    })
})

/**
 * Command click to item (button, switch) with special index
 * @param item like (type, name, id, text...)
 */
Cypress.Commands.add('clickItem', (item, index) => {
    cy.get(item).eq(index).click()
})

/**
 * Command typing value into input
 * @param item like (type, name, id, text...)
 */
Cypress.Commands.add('typeInputValue', (item, value) => {
    cy.get(item).type(value)
})

/**
 * Command change select value
 * @param item like (type, name, id, text...)
 */
 Cypress.Commands.add('changeSelectValue', (item, value) => {
    cy.get(item).select(value)
})