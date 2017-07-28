Feature: Aws instances

  Background:
    Given I am on homepage
    And  I should see the following options in nav menu:
      | column         |
      | Home           |
      | Sign in        |
    Then I login with email "admin@test.com" and password "test"
    Then I should see "Dashboard" link in nav menu
    Then I click "Dashboard" link in nav menu
    Then I should see Service Catalog List table
    Then I click the dropdown button
    And I should see dropdown menu with links:
      | column                    |
      | Report Card               |
      | Report a Policy Violation |
      | View Instances            |
      | Edit                      |
    When I click " View Instances" link dropdown menu
    Then I should see the modal with id "catalog-instance-list-modal"

  Scenario: Aws Tab should be active
    Then I should see "AWS" tab as active
    Then I should see the "aws-tab" Instance List table
    And I should see "aws-tab" table with fields:
      | column |
      | IP     |
      | NAME   |
