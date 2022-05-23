import { Then } from "cypress-cucumber-preprocessor/steps"

Then(`I type {string} to {string}`, (text, content) => {
    cy.get(content).type(text)
})
  