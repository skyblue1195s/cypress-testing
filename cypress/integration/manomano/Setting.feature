Feature: ManoMano Setting Page
  Scenario: Update user setting
    Given I open Setting page
    Then I see 'Einstellungen' in the content
    Then I see 'Grundeinstellungen' in the content
    Then I see 'Verbindungseinstellungen' in the content
    Then I see 'Automatikeinstellungen' in the content
    Then I see 'Benachrichtigungseinstellungen' in the content
    Then I see 'Daten-Importe' in the content
    Then I see 'Kategorien einlesen' in the content
    Then I see 'Artikeldaten einlesen' in the content
    Then I see disable button
    Then I update value on setting page
    When I change language to '[alt="en"]'
    Then I see 'Settings' in the content
    Then I see 'Basic Setting' in the content
    Then I see 'Connection Settings' in the content
    Then I see 'Automatic Settings' in the content
    Then I see 'Notification Settings' in the content
    Then I see 'Data Imports' in the content
    Then I see 'Import in categories data' in the content
    Then I see 'Import article data' in the content
    When I import categories
    Then I see 'Loading...' in the content
    Then I change other sub-account