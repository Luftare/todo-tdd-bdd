Feature: Todo app
  Scenario: Navigating to the todo app
    When I navigate to the todo app
    Then I see "title"
    And I see "new item text field"
    And I see "create new item button"
    And I see "todo list"

  Scenario: Creating and deleting items
    When I navigate to the todo app
    And I type "some text" to "new item text field"
    And I click "create new item button"
    Then I see "todo item" containing "some text"
    And "todo item" contains "some text"
    And "todo item" contains "done button"
    When I click "done button"
    Then "todo list" does not contain "some text"