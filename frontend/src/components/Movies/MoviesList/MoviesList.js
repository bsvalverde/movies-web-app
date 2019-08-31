import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import classes from './MoviesList.module.scss';

import MovieSummary from '../MovieSummary/MovieSummary';
import Spinner from '../../UI/Spinner/Spinner';

export const MoviesList = (props) => {
  const { t } = useTranslation();

  const { error, isLoading, movies } = props;

  if (error) {
    return <p className={classes.Message}>{t('loadingError')}</p>;
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (movies.length === 0) {
    return <p className={classes.Message}>{t('nothingToShow')}</p>
  }

  return (
    <table className={classes.MoviesList}>
      <thead>
        <tr>
          <th></th>
          <th>{t('title')}</th>
          <th>{t('releaseDate')}</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        { 
        	movies.map(movie =>
            <MovieSummary
              key={movie._id}
              movie={movie}
            />
          )
        }
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
    isLoading: state.movies.isLoading,
    error: state.movies.error
  };
};

export default connect(mapStateToProps)(MoviesList);
