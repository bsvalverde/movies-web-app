import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import Navigator from './Navigator';

import GreenButton from '../GreenButton/GreenButton';

configure({adapter: new Adapter()});

describe('<Navigator />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Navigator />);
  });

  it('should not render a <GreenButton /> element to go to the previous item if the current one is the first', () => {
    wrapper.setProps({ current: 1 });
    expect(wrapper.contains(
      <GreenButton>{'<'}</GreenButton>
    )).toBeFalsy();
  });

  it('should render a <GreenButton /> element to go to the previous item if the current one is not the first', () => {
    wrapper.setProps({ current: 2 });
    expect(wrapper.contains(
      <GreenButton>{'<'}</GreenButton>
    )).toBeTruthy();
  });

  it('should not render a <GreenButton /> element to go to the next item if the current one is the last', () => {
    wrapper.setProps({ current: 3, total: 3 });
    expect(wrapper.contains(
      <GreenButton>{'>'}</GreenButton>
    )).toBeFalsy();
  });

  it('should render a <GreenButton /> element to go to the next item if the current one is not the last', () => {
    wrapper.setProps({ current: 2, total: 3 });
    expect(wrapper.contains(
      <GreenButton>{'>'}</GreenButton>
    )).toBeTruthy();
  });
});
