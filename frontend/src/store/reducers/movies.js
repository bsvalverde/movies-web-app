import * as actionTypes from '../actions/actionTypes';

const initialState = {
  movies: [],
  totalResults: 0,
  moviesPerPage: 10,
  isLoading: false,
  error: null
};

const searchMoviesStart = (state, action) => {
  return {
    ...state,
    movies: [],
    totalResults: 0,
    isLoading: true,
    error: null
  };
};

const searchMoviesSuccess = (state, action) => {
  return {
    ...state,
    isLoading: false,
    movies: action.movies,
    totalResults: action.totalResults
  };
};

const searchMoviesFail = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: action.error
  };
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SEARCH_MOVIES_START: return searchMoviesStart(state, action);
    case actionTypes.SEARCH_MOVIES_SUCCESS: return searchMoviesSuccess(state, action);
    case actionTypes.SEARCH_MOVIES_FAIL: return searchMoviesFail(state, action);
    default: return state;
  }
};

export default reducer;
