import React from 'react';
import { mount } from 'enzyme';

import Item from './Item';

describe('Item', () => {
  let component;
  let deleteItemMock;

  beforeEach(() => {
    deleteItemMock = () => {};
    component = mount(<Item name="some text" deleteItem={deleteItemMock} />);
  });

  it('renders correctly', () => {
    expect(component).toMatchHtmlSnapshot();
  });

  it('should display item name', () => {
    expect(component).toIncludeText('some text');
  });

  it('button for deleting item within, should know how to delete item', () => {
    const deleteButton = component.find('button[data-delete-item-unit-test]');

    expect(deleteButton).toHaveProp('onClick', deleteItemMock);
  });
});
