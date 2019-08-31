import * as actionTypes from '../actions/actionTypes';

import reducer from './movies';

describe('movies reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      movies: [],
      totalResults: 0,
      moviesPerPage: 10,
      isLoading: false,
      error: null
    };
  });


  it('should return the current state when no valid action is passed', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('should set isLoading to true, error to null, totalResults to 0 and empty the list of movies on SEARCH_MOVIES_START', () => {
    const action = {
      type: actionTypes.SEARCH_MOVIES_START
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      movies: [],
      totalResults: 0,
      isLoading: true,
      error: null
    });
  });

  it('should set isLoading to false and receive the movies and totalResults from the action on SEARCH_MOVIES_SUCCESS', () => {
    const movies = [1, 2, 3, 4, 5];
    const total = 13;
    const action = {
      type: actionTypes.SEARCH_MOVIES_SUCCESS,
      movies: movies,
      totalResults: total
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      movies: movies,
      totalResults: total
    });
  });

  it('should set isLoading to false and receive the error from the action on SEARCH_MOVIES_FAIL', () => {
    const error = 'mock error';
    const action = {
      type: actionTypes.SEARCH_MOVIES_FAIL,
      error: error
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      error: error
    });
  });
});
