import { Given, When } from "cypress-cucumber-preprocessor/steps";

Given("I visit manomano", () => {
    cy.visit(Cypress.env('url'));
})

When('I click setup now button', () => {
    cy.contains('Set up now').click()
})
