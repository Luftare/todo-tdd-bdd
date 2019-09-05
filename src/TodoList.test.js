import React from 'react';
import { mount } from 'enzyme';

import TodoList from './TodoList';

describe('TodoList', () => {
  let component;
  let addItemStub;
  let setNewItemNameStub;
  let deleteItemStub;

  beforeEach(() => {
    addItemStub = () => {};
    setNewItemNameStub = jest.fn();
    deleteItemStub = jest.fn();

    component = mount(
      <TodoList
        items={['some-text-a', 'some-text-b', 'some-text-c']}
        setNewItemName={setNewItemNameStub}
        addItem={addItemStub}
        deleteItem={deleteItemStub}
      />
    );
  });

  it('renders correctly', () => {
    expect(component).toMatchHtmlSnapshot();
  });

  it('button for add item within, knows how to add item', () => {
    const button = component.find('button[data-add-item-unit-test]');

    expect(button).toHaveProp('onClick', addItemStub);
  });

  it('input for new item name within, knows how to set new item name', () => {
    const input = component.find('input[data-new-item-name-unit-test]');

    input.simulate('focus');
    input.simulate('change', { target: { value: 'something' } });

    expect(setNewItemNameStub).toHaveBeenCalledWith('something');
  });

  it('button to delete item within, knows how to delete item', () => {
    const deleteItemButton = component.find(
      'button[data-delete-item-unit-test="some-text-a"]'
    );

    deleteItemButton.simulate('click');

    expect(deleteItemStub).toHaveBeenCalledWith('some-text-a');
  });
});
