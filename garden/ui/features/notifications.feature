Feature: App notification

  Scenario: I should see error auth notification if I unknown user
    Given I am on homepage
    And  I should see the following options in nav menu:
      | column         |
      | Home           |
      | Sign in        |
    Then I login with email "someone@test.com" and password "test"
    Then I should see alert with class "error" and message "Could not authenticate"
    And  I should see the following options in nav menu:
      | column         |
      | Home           |
      | Sign in        |

  Scenario: I should see success needs review notification
    Given I am on homepage
    And  I should see the following options in nav menu:
      | column         |
      | Home           |
      | Sign in        |
    Then I login with email "admin@test.com" and password "test"
    And I should see "Dashboard" link in nav menu
    Then I click "Dashboard" link in nav menu
    Then I should see Service Catalog List table
    And I should see Needs Review switch
    Then I click Needs Review switch
    And I should see the modal with id "trigger-needs-review-modal"
    Then I click "YES" button in "trigger-needs-review-modal"
    Then I should see alert with class "success" and message "The Service Review has been logged!"

  Scenario: I should see success report violation notification
    Given I am on homepage
    And  I should see the following options in nav menu:
      | column         |
      | Home           |
      | Sign in        |
    Then I login with email "admin@test.com" and password "test"
    And I should see "Dashboard" link in nav menu
    Then I click "Dashboard" link in nav menu
    Then I should see Service Catalog List table
    Then I click the dropdown button
    And I should see dropdown menu with links:
      | column                    |
      | Report Card               |
      | Report a Policy Violation |
      | View Instances            |
      | Edit                      |
    When I click " Report a Policy Violation" link dropdown menu
    And I should see the modal with id "report-policy-violation"
    Then I click "Submit" button in "report-policy-violation"
    And I should see "report-policy-violation" form`s fields with error messages:
      | column                                           |
      | The details of the violations field is required. |
    Then I enter "details of the violation" in textarea field
    Then I click "Submit" button in "report-policy-violation"
    And I should see alert with class "success" and message "Policy violation report successfully sent!"