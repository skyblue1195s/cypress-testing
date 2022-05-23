import { Then } from "cypress-cucumber-preprocessor/steps";

Then(`I see {string} in the title`, (title) => {
  cy.title().should("include", title);
});

Then(`I see {string} in the content`, (content) => {
  cy.contains(content).should('exist');
})
