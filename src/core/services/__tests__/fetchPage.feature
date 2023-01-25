Feature: Fetching a page
As a user
I want to fetch a page
So that I can extract information from it

Scenario: Fetching a page
  Given I want to fetch a page
  When I make a request to the page
  Then I should receive the body of the response
