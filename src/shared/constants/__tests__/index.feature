Feature: Verify STATUS_INVEST_BASE_URL constant

Scenario: Verify the value of the constant
    Given the file containing the STATUS_INVEST_BASE_URL constant has been imported
    When the constant is accessed
    Then the value of the constant should be valid URL
