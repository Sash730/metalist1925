Feature: Get API for admin user

  Background:
    Given I am on homepage
    And  I should see the following options in nav menu:
      | column         |
      | Home           |
      | Sign in        |
    Then I login with email "admin@test.com" and password "test"

  Scenario: I should see right nav menu for login user
    Then I should not see "Sign in" link nav menu
    And  I should see the following options in nav menu:
      | column         |
      | Home           |
      | Dashboard      |
      | Sign out       |
    Then I click "Sign out" link in nav menu
    Then I should see alert with class "success" and message "You`ve been successfully logged out!"

  Scenario: I should see errors when I enter wrong data in login form
    Then I should see "Dashboard" link in nav menu
    And I click "Sign out" link in nav menu
    Then I should not see "Sign out" link nav menu
    And  I should see the following options in nav menu:
      | column         |
      | Home           |
      | Sign in        |
    Then I click "Sign in" link in nav menu
    And I click "Sign in" button
    Then I should see login form`s fields with error class:
      | column   |
      | E-MAIL   |
      | PASSWORD |
    And I should see login form`s fields with error messages:
      | column                          |
      | The email field is required.    |
      | The password field is required. |
    When I reload browser
    Then I enter "roo" in "email" input
    Then I should see login form`s fields with error class:
      | column   |
      | E-MAIL   |
    And I should see login form`s fields with error messages:
      | column                                 |
      | The email field must be a valid email. |
    Then I enter "123" in "password" input
    Then I should see login form`s fields with error class:
      | column   |
      | E-MAIL   |
      | PASSWORD |
    And I should see login form`s fields with error messages:
      | column                                            |
      | The email field must be a valid email.            |
      | The password field must be at least 4 characters. |

  Scenario: I should see right nav menu for logout user
    Then I should see "Dashboard" link in nav menu
    And I click "Sign out" link in nav menu
    Then I should not see "Sign out" link nav menu
    Then I should see the following options in nav menu:
      | column         |
      | Home           |
      | Sign in        |

  Scenario: I should see Dashboard page with scm-list
    Then I should see "Dashboard" link in nav menu
    Then I click "Dashboard" link in nav menu
    Then I should see Service Catalog List table
    And I should see the follow columns in the Service Catalog List:
      | column         |
      | NAME           |
      | TECH OWNER     |
      | BUSINESS OWNER |
      | DESCRIPTION    |
      | NEEDS REVIEW   |
      | ACTION         |
