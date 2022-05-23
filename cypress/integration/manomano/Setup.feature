Feature: ManoMano Setup Page
  Scenario: visting manomano setup page
    Given I visit manomano
    Then I see "ManoMano Einrichtung" in the content
    Then I see "Geben Sie Ihre ManoMano Daten ein." in the content
    Then I see "Bestätigen Sie die ManoMano Authentifizierung." in the content
    Then I see "Bestätigen Sie die DreamRobot Authentifizierung." in the content
    Then I see "Konfigurieren Sie Ihre Einstellungen." in the content
    Then I see "Jetzt einrichten" in the content
    When I change language to '[alt="en"]'
    Then I see "ManoMano Setup" in the content
    Then I see "Enter your ManoMano data." in the content
    Then I see "Confirm the ManoMano authentication." in the content
    Then I see "Confirm DreamRobot authentication." in the content
    Then I see "Configure your settings." in the content
    Then I see "Set up now" in the content
    When I click setup now button
    Then I see "Enter ManoMano shop data" in the content


