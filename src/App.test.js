import React from 'react';
import { mount } from 'enzyme';

import App from './App';

describe('App', () => {
  let component;

  beforeEach(() => {
    component = mount(<App />);
  });

  it('renders correctly', () => {
    expect(component).toMatchHtmlSnapshot();
  });
});
