import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';

import TodoModel from './TodoModel';

describe('TodoModel', () => {
  let component;
  let items;
  let addItem;
  let deleteItem;
  let newItemName;
  let setNewItemName;

  beforeEach(() => {
    component = mount(
      <TodoModel
        render={props => {
          items = props.items;
          addItem = props.addItem;
          deleteItem = props.deleteItem;
          newItemName = props.newItemName;
          setNewItemName = props.setNewItemName;
          return null;
        }}
      />
    );
  });

  it('resets new item name field when new item is added', () => {
    act(() => {
      setNewItemName('some text');
    });

    act(() => {
      addItem();
    });

    expect(newItemName).toEqual('');
  });

  it('holds list of items', () => {
    expect(items).toEqual([]);
  });

  it('can add new item', () => {
    act(() => {
      setNewItemName('some item');
    });

    act(() => {
      addItem();
    });

    expect(items).toEqual(['some item']);
  });

  it('can add multiple items', () => {
    act(() => {
      setNewItemName('some item');
    });

    act(() => {
      addItem();
    });

    act(() => {
      setNewItemName('another item');
    });

    act(() => {
      addItem();
    });

    expect(items).toEqual(['some item', 'another item']);
  });

  it('can delete item', () => {
    act(() => {
      setNewItemName('some item');
      addItem();
      deleteItem('some item');
    });

    expect(items).toEqual([]);
  });

  it('has new item name', () => {
    expect(newItemName).toEqual('');
  });

  it('can set new item name', () => {
    act(() => {
      setNewItemName('some new name');
    });

    expect(newItemName).toEqual('some new name');
  });
});
