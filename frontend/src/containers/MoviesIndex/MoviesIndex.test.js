import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import { MoviesIndex } from './MoviesIndex';

import Navigator from '../../components/UI/Navigator/Navigator';

configure({adapter: new Adapter()});

describe('<MoviesIndex />', () => {
  let wrapper;

  beforeEach(() => {
    let match = {
      params: {}
    }
    wrapper = shallow(<MoviesIndex match={match} />);
  });

  it('should not render a <Navigator /> element if there are less results than shown on the page', () => {
    wrapper.setProps({ perPage: 10, totalResults: 5 });
    expect(wrapper.exists(Navigator)).toBeFalsy();
  });

  it('should render a <Navigator /> element if there are more results than shown on the page', () => {
    wrapper.setProps({ perPage: 5, totalResults: 10 });
    expect(wrapper.exists(Navigator)).toBeTruthy();
  });
});
