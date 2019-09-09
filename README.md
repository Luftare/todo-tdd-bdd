# Todo app in React

This is a simple todo app to demonstrate the implementation process of a simple web app with TDD and BDD. It has a sufficient level of automation and abstraction for the given scope of the app. As the feature set grows more automation and abstraction may emerge.

## Development

Run `npm install` to install all dependencies. Run `npm start` to host the app.

### Testing

- `npm run test:unit` for unit tests
- `npm run test:e2e` for end-to-end test (app must be hosted first with `npm start`)

## Next steps

Write changed spec where:

- todo items will be marked as done instead of deleting immediately
- finished items can be hidden with a filter
- finished items can be bulk-deleted
- all items can be toggle selected / unselected
