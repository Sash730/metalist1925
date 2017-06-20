Feature: Hide Get API for whitelable user

 Background:
  Given I am a guest and on homepage

 Scenario: Do not show my tickets Link
  When I should see the match
#    And I click on "Sales and Activity Report" in Report List dropdown
#    Then the tab for the "Sales and Activity Report" report should be active
#    And I should see the name "Sales and Activity Report" in the tab
#    And the "View Report" button should be disabled
#    And  I should see Campaigns multiselect component
#    And  I should see the '0 Campaigns Selected' tag-item
#    When I click on the '0 Campaigns Selected' tag-item
#    Then the Date Campaigns multiselect dropdown should open
#    And  I should see the following options in Campaigns multiselector:
#      | column        |
#      | All campaigns |
#      | Sathy         |
#      | Soffshoree    |
#      | Another one   |
#    When I choose "Sathy" from Campaigns multiselect dropdown
#    And  I click on "Apply" button in the Campaigns multiselect dropdown
#    And  I should see an overlay above the grid stating the following:
#  """
#Click "View Report" to see your changes.
#"""
#    And the "View Report" button should be enabled
#
#    When  I click on the View Report Menu dropdown
#    And Get Api link should not be visible
#
#  Scenario: Do not show get api for new reports
#    When I click on "Build a new report" button
#    Then I click on the "Add and Remove Columns" button
#    Then I click on the "Metrics (at least one required)" Column Group
#    And  I check "# of Items" in the "Metrics (at least one required)" category
#    And   I click on "Apply" button in the "Add and Remove Columns" dropdown
#
#    When  I click on the "Save Report" button
#    When I click on "Save Report" in the Manage Report dropdown
#    Then the Save Report modal should be visible
#
#    Given the Report Name field
#    And I enter "Whitelabel report 987" in the Report Name field
#
#    Given the Report Category menu
#    And I select "White Label Category" from the Report Category menu
#
#    Given the Report Description field
#    And I enter "This is a test report" in the Report Description field
#
#    When I click on the "Save Changes" button
#    Then the Save Report modal should not be visible
#    And the "View Report" button should be disabled
#    And  I should see Campaigns multiselect component
#    And  I should see the '0 Campaigns Selected' tag-item
#    When I click on the '0 Campaigns Selected' tag-item
#    Then the Date Campaigns multiselect dropdown should open
#    And  I should see the following options in Campaigns multiselector:
#      | column        |
#      | All campaigns |
#      | Sathy         |
#      | Soffshoree    |
#      | Another one   |
#    When I choose "Sathy" from Campaigns multiselect dropdown
#    And  I click on "Apply" button in the Campaigns multiselect dropdown
#    And  I should see an overlay above the grid stating the following:
#  """
#Click "View Report" to see your changes.
#"""
#    And the "View Report" button should be enabled
#    When  I click on the View Report Menu dropdown
#    And Get Api link should not be visible
#
