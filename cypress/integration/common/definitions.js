import kebabCase from 'lodash/fp/kebabCase';

const attr = name => `[data-${kebabCase(name)}-e2e-test]`;

const attrVal = (name, value) =>
  `[data-${kebabCase(name)}-e2e-test="${value}"]`;

When('I navigate to the todo app', () => {
  cy.visit('/');
});

When(/I type "(.+?)" to "(.+?)"/, (value, selector) => {
  cy.get(attr(selector)).type(value);
});

Then(/I see "(.+?)" for "(.+?)"/, (selector, value) => {
  cy.get(attrVal(selector, value));
});

Then(/I see "(.+?)"/, selector => {
  cy.get(attr(selector));
});

Then(/"(.+?)" value is "(.*?)"/, (selector, value = '') => {
  cy.get(attr(selector)).should('have.value', value);
});

Then(/I do not see "(.+?) for "(.+?)"/, (selector, value) => {
  cy.get(attrVal(selector, value)).should('not.exist');
});

Then(/I do not see "(.+?)"/, selector => {
  cy.get(attr(selector)).should('not.exist');
});

Then(/I click "(.+?)" for "(.+?)"/, (selector, value) => {
  cy.get(attrVal(selector, value)).click();
});

Then(/I click "(.+?)"/, selector => {
  cy.get(attr(selector)).click();
});
