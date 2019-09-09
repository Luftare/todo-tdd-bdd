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
    Then "new item text field" value is ""
    And I see "todo item" for "some text"
    And I see "delete button" for "some text"
    Then I type "other text" to "new item text field"
    And I click "create new item button"
    And I see "todo item" for "other text"
    And I see "delete button" for "other text"
    When I click "delete button" for "some text"
    Then I do not see "todo item" for "some text"
    And I see "todo item" for "other text"