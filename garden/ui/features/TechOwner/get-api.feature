Feature: Get API for tech-owner user

  Background:
    Given I am on homepage
    And  I should see the following options in nav menu:
      | column         |
      | Home           |
      | Sign in        |
    Then I login with email "tech-owner@test.com" and password "test"

  Scenario: I should not see Dashboard link in nav menu
    Then I should not see "Sign in" link nav menu
    And I should see the following options in nav menu:
      | column         |
      | Home           |
      | Sign out       |
    Then I click "Sign out" link in nav menu
    Then I should see alert with class "success" and message "You`ve been successfully logged out!"
    And  I should see the following options in nav menu:
      | column         |
      | Home           |
      | Sign in        |