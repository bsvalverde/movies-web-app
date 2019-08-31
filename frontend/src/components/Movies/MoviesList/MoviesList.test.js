import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import { MoviesList } from './MoviesList';
import classes from './MoviesList.module.scss';

import i18n from '../../../i18n';
import Spinner from '../../UI/Spinner/Spinner';

configure({adapter: new Adapter()});

describe('<MoviesList />', () => {
  let wrapper;
  let movies;

  beforeEach(() => {
    movies = [];
    for (var i = 1; i <= 7; i++) {
      movies.push({
        _id: i
      });
    }
    wrapper = shallow(<MoviesList movies={movies} perPage={10} />);
  });

  it('should render a <Spinner /> element if the movies are loading', () => {
    wrapper.setProps({ isLoading: true });
    expect(wrapper.exists(Spinner)).toBeTruthy();
  });

  it('should not render a <Spinner /> element if the movies are not loading', () => {
    wrapper.setProps({ isLoading: false });
    expect(wrapper.exists(Spinner)).toBeFalsy();
  });

  it('should render a message if there was an error loading', () => {
    wrapper.setProps({ error: true });
    expect(wrapper.contains(
      <p className={classes.Message}>{i18n.t('loadingError')}</p>
    )).toBeTruthy();
  });

  it('should render a message if there are no movies to show', () => {
    wrapper.setProps({ movies: [] });
    expect(wrapper.contains(
      <p className={classes.Message}>{i18n.t('nothingToShow')}</p>
    )).toBeTruthy();
  });

  it('should not render a message if there are movies to show', () => {
    expect(wrapper.exists(`p.${classes.Message}`)).toBeFalsy();
  });

  it('should render a <table /> element if there are movies to show', () => {
    expect(wrapper.exists('table')).toBeTruthy();
  });
});
