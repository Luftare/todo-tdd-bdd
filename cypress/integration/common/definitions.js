import kebabCase from 'lodash/fp/kebabCase';

const attr = value => `[data-${kebabCase(value)}-e2e-test]`;

When('I navigate to the todo app', () => {
  cy.visit('/');
});

When(/I type "(.+?)" to "(.+?)"/, (value, selector) => {
  cy.get(attr(selector)).type(value);
});

Then(/"(.+?)" contains "(.+?)"/, (selector, value) => {
  cy.contains(attr(selector), attr(value));
});

Then(/I see "(.+?)"/, selector => {
  cy.get(attr(selector));
});

Then(/I do not see "(.+?)"/, selector => {
  cy.get(attr(selector)).should('not.exist');
});

Then(/I see "(.+?)" containing "(.+?)"/, (selector, value) => {
  cy.get(attr(selector));
});

Then(/"(.+?)" does not contain "(.+?)"/, (selector, value) => {
  cy.contains(attr(selector), attr(value)).should('not.exist');
});

Then(/I click "(.+?)"/, selector => {
  cy.get(attr(selector)).click();
});
