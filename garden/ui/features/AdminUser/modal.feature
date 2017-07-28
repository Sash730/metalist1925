Feature: Modals catalog

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

  Scenario: I click Create catalog modal and I could see form with some initial data
    And I see Create Catalog button
    Then I click Create Catalog button
    And I should see the modal with id "catalog-create-modal"
    And I should see form with fields:
      | column                           |
      | NAME:                            |
      | SLUG NAME:                       |
      | SOPS:                            |
      | SLA:                             |
      | ARCHITECTURE DIAGRAMS:           |
      | MONITOR DASHBOARD:               |
      | SERVICE DESIGN PACKAGE:          |
      | SOURCE CODE:                     |
      | DESCRIPTION:                     |
      | NOC - NO                         |
      | HTTPS - NO                       |
      | SECURITY COMPLIANCE STATE:       |
      | DESIGN COMPLIANCE STATE:         |
      | SERVICE TYPE:                    |
      | TRACK:                           |
      | EXTERNAL MONITORING STRATEGY:    |
      | INTERNAL MONITORING STRATEGY:    |
      | APPLICATION MONITORING STRATEGY: |
      | LOG STRATEGY:                    |
      | REGIONS:                         |
      | TECH OWNER:                      |
      | BUSINESS OWNER:                  |
    When I click "Submit" button in "catalog-create-modal"
    Then I should see form`s fields with error class:
      | column                           |
      | NAME:                            |
      | SLUG NAME:                       |
      | SOPS:                            |
      | SLA:                             |
      | ARCHITECTURE DIAGRAMS:           |
      | MONITOR DASHBOARD:               |
      | SERVICE DESIGN PACKAGE:          |
      | SOURCE CODE:                     |
      | DESCRIPTION:                     |
      | SECURITY COMPLIANCE STATE:       |
      | DESIGN COMPLIANCE STATE:         |
      | SERVICE TYPE:                    |
      | TRACK:                           |
      | EXTERNAL MONITORING STRATEGY:    |
      | INTERNAL MONITORING STRATEGY:    |
      | APPLICATION MONITORING STRATEGY: |
      | LOG STRATEGY:                    |
      | REGIONS:                         |
      | TECH OWNER:                      |
      | BUSINESS OWNER:                  |
    And I should see "catalog-create-modal" form`s fields with error messages:
      | column                                        |
      | The name field is required.                   |
      | The slug_name field is required.              |
      | The sops field is required.                   |
      | The sla field is required.                    |
      | The architecture_diagrams field is required.  |
      | The monitor_dashboard field is required.      |
      | The service_design_package field is required. |
      | The source_code field is required.            |
      | The description field is required.            |
      | Please choose security compliance state       |
      | Please choose design compliance state         |
      | Please choose service type                    |
      | Please choose track                           |
      | Please choose external monitoring strategy    |
      | Please choose internal monitoring strategy    |
      | Please choose application monitoring strategy |
      | Please choose log strategy                    |
      | Please choose regions                         |
      | Please choose tech owner                      |
      | Please choose business owner                  |

  Scenario: Report card modal should be work correct
    Then I click the dropdown button
    And I should see dropdown menu with links:
      | column                    |
      | Report Card               |
      | Report a Policy Violation |
      | View Instances            |
      | Edit                      |
    When I click " Report Card" link dropdown menu
    Then I should see the modal with id "report-card-modal"
    And I click "Close" button in "report-card-modal"
    And I should see Service Catalog List table

  Scenario: Report a Policy Violation modal should be work correct
    Then I click the dropdown button
    And I should see dropdown menu with links:
      | column                    |
      | Report Card               |
      | Report a Policy Violation |
      | View Instances            |
      | Edit                      |
    When I click " Report a Policy Violation" link dropdown menu
    Then I should see the modal with id "report-policy-violation"
    And I click "Close" button in "report-policy-violation"
    And I should see Service Catalog List table

  Scenario: View Instances modal should be work correct
    Then I click the dropdown button
    And I should see dropdown menu with links:
      | column                    |
      | Report Card               |
      | Report a Policy Violation |
      | View Instances            |
      | Edit                      |
    When I click " View Instances" link dropdown menu
    Then I should see the modal with id "catalog-instance-list-modal"
    And I click "Close" button in "catalog-instance-list-modal"
    And I should see Service Catalog List table

  Scenario: Edit modal should be work correct
    Then I click the dropdown button
    And I should see dropdown menu with links:
      | column                    |
      | Report Card               |
      | Report a Policy Violation |
      | View Instances            |
      | Edit                      |
    When I click " Edit" link dropdown menu
    Then I should see the modal with id "catalog-edit-modal"
    And I click "×" button in "catalog-edit-modal"
    And I should see Service Catalog List table
