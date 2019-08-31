import * as actionTypes from './actionTypes';

import api from '../../services/api';

const searchMoviesStart = () => {
  return {
    type: actionTypes.SEARCH_MOVIES_START
  };
};

const searchMoviesSuccess = (response) => {
  return {
    type: actionTypes.SEARCH_MOVIES_SUCCESS,
    movies: response.movies,
    totalResults: response.total
  };
};

const searchMoviesFail = (error) => {
  return {
    type: actionTypes.SEARCH_MOVIES_FAIL,
    error: error
  };
};

export const searchMovies = (searchParams, page, perPage) => {
  return dispatch => {
    dispatch(searchMoviesStart());
    const params = {
      amount: perPage,
      offset: (page - 1) * perPage,
      title: searchParams.title,
      upcoming: true
    }
    api.get('/movies', { params })
      .then(response => {
        dispatch(searchMoviesSuccess(response.data));
      })
      .catch(error => {
        dispatch(searchMoviesFail(error));
      });
  };
};
