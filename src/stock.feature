Feature: Retrieve stock information

Scenario: Retrieving stock data
    Given I want to retrieve stock data
    When I call the stock function with the bvmf code
    Then I should receive an object with the stock data
