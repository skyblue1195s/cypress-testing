
Given('I open Setting page', () => {
    cy.visit(Cypress.env('url'))
    localStorage.setItem('token', Cypress.env('token'))
    localStorage.setItem('profile_info', Cypress.env('profile_info'))
})

Then('I see disable button', () => {
    cy.get('button').contains('Verbinden').should('exist').should('not.have.attr', 'disabled')
    cy.get('button').contains('Speichern').should('have.attr', 'disabled')
    cy.get('[aria-label="Shop URL"]').should('have.attr', 'disabled')
})

Then('I update value on setting page', () => {
    // 23199 is id of Portal-Account helloworld, if it selected, pls update to other id
    cy.changeSelectValue('[aria-label="Verbundener Portal-Account"]', '23199')
    // Switch auto cron jobs
    cy.get('.form-switch').first().click()
    cy.get('.collapse').then(($collpase) => {
        if ($collpase.hasClass('show')) {
            // set Order date
            cy.clickItem('.form-check-input', 1)
            cy.typeInputValue('[type="date"]', '2022-05-11')
            // Order number
            cy.clickItem('.form-check-input', 2)
            cy.typeInputValue('[aria-label="Bei dieser Bestellnummer im Shop starten"]', 22)
        }
    })
    // if email notify is disabled => enable email notify and fill new email 
    const email = cy.get('[type="email"]')
    email.then(($e) => {
        if ($e && $e.attr('disabled')) {
            cy.clickItem('.form-check-input', 3)
            cy.typeInputValue('[type="email"]', 'dieu.tran@dreamrobot.de')
        }
    })
    cy.get('button').contains('Speichern').click()
})

When('I import categories', () => {
    cy.get('button').contains('Import').first().click()
    cy.handlerAPIError()
})

When('I change other sub-account', () => {
    // 2 is subaccountId - if just have more one subaccount in list, pls uncomment this line
    // cy.wait(3000)
    // cy.get('select').first().select('2').should('have.value', '2')
})

