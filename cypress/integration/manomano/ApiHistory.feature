Feature: ManoMano API-History Page
    Scenario: Search API-History
        Given I open ManoMano with credential info
        When I navigate to API-History
        Then I see 'API - History' in the content
        Then I see 'Erfolgreiche Anfragen' in the content
        Then I see 'Fehlerhafte Anfragen' in the content
        Then I see 'Ausstehende Anfragen' in the content
        Then I see 'Shop-Kenner' in the content
        Then I see 'API-Endpunkt' in the content
        Then I see 'SKU/Auftrags-Nr' in the content
        Then I see 'API-Antwort' in the content
        Then I see 'Datum' in the content
        When I change sub-account
        Then I see loading
        When I switch filter '0'
        Then I see loading
        When I switch filter '1'
        Then I see loading
        When I switch filter '2'
        Then I see loading
        Then I type 'api' to '[type="search"]'
        When I click search button
        Then I see loading
        When I change page size
        Then I see loading
        When I load api-history
        Then I see loading
        When I change language to '[alt="en"]'
        Then I see 'Successful requests' in the content
        Then I see 'Failure requests' in the content
        Then I see 'Pending requests' in the content
        Then I see 'Shop-Connoisseur' in the content
        Then I see 'API-End point' in the content
        Then I see 'SKU/Order number' in the content
        Then I see 'API-reply' in the content
        Then I see 'Date' in the content