Feature: ManoMano User-Log Page
    Scenario: Search User-Log
        Given I open ManoMano with credential info
        When I navigate to User-Log
        Then I see 'Benutzer-Log' in the content
        Then I see 'Nachricht' in the content
        Then I see 'Datum' in the content
        Then I change page number
        When I change sub-account
        Then I see loading
        Then I type 'cronjob' to '[type="search"]'
        When I click search button
        Then I see loading
        When I change page size
        Then I see loading
        When I fetch new user-log 
        Then I see loading
        When I change language to '[alt="en"]'
        Then I see 'Message' in the content
        Then I see 'Date' in the content
        
