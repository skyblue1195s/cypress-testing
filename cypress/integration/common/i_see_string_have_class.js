import { Then } from "cypress-cucumber-preprocessor/steps";

Then(`I see {string} have class {string}`, (content, className) => {
    cy.contains(content).should('have.class', className);
  })
  