Feature: ManoMano Register Page
  Scenario: Register new account
    Given I visit register page
    Then I see 'ManoMano Shop Daten eingeben' in the content
    Then I see 'Shop-URL' in the content
    Then I see 'Geben Sie hier Ihre ManoMano Shop URL ein.' in the content
    Then I see 'Benutzername' in the content
    Then I see 'Geben Sie hier Ihre Benutzername Ihrer ManoMano API-Integration ein.' in the content
    Then I see 'Passwort' in the content
    Then I see 'Geben Sie hier Ihre Passwort Ihrer ManoMano API-Integration ein.' in the content
    Then I see 'Abbrechen' have class 'btn-danger'
    Then I see 'Authentifizieren' have class 'btn-secondary'
    When I change language to '[alt="en"]'
    Then I see 'Enter ManoMano shop data' in the content
    Then I see 'Shop URL' in the content
    Then I see 'Enter your ManoMano Shop URL here.' in the content
    Then I see 'Username' in the content
    Then I see 'Enter your username for your ManoMano API integration here.' in the content
    Then I see 'Password' in the content
    Then I see 'Enter your password for your ManoMano API integration here.' in the content
    Then I type 'https://manomano.dr-shopware.de' to '[name="domain"]'
    Then I type 'Dreamrobot' to '[name="username"]'
    Then I type 'Dreamrobot' to '[name="password"]'
    When I click register form
    Then I will see the error popup
    Then I close error popup
    When I go back to setup page
    Then I see 'ManoMano Setup' in the content