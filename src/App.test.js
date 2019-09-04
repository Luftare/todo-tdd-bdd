import React from 'react';
import TestRenderer, { act } from 'react-test-renderer';
import App from './App';

describe('App', () => {
  let renderer;
  let instance;

  beforeEach(() => {
    renderer = TestRenderer.create(<App />);
    instance = renderer.root;
  });

  it('renders correctly', () => {
    const output = renderer.toJSON();

    expect(output).toMatchSnapshot();
  });

  describe('given create new item button is clicked', () => {
    let todoList;
    let item;

    beforeEach(() => {
      todoList = instance.find(e => e.props['data-todo-list-unit-test']);
      const createNewItemButton = instance.find(
        e => e.props['data-create-new-item-button-unit-test']
      );

      act(() => {
        createNewItemButton.props.onClick();
      });

      item = instance.find(e => e.props['data-todo-item-unit-test']);
    });

    it('new item is added to items list', () => {
      expect(item).toBeDefined();
    });
  });
});
