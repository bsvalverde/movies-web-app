import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import classes from './MovieInformation.module.scss';

import api from '../../services/api';

import GreenButton from '../../components/UI/GreenButton/GreenButton';
import MovieDetails from '../../components/Movies/MovieDetails/MovieDetails';
import Spinner from '../../components/UI/Spinner/Spinner';

const MovieInformation = (props) => {
  const [information, setInformation] = useState({
    movie: null,
    isLoading: true,
    error: null
  });
  const { t } = useTranslation();

  const { id } = props.match.params;

  useEffect(() => {
    setInformation(prevState => ({ ...prevState, isLoading: true }));
    api.get(`/movie/${id}`)
      .then(response => {
        setInformation({
          movie: response.data,
          isLoading: false,
          error: null
        });
      })
      .catch(error => {
        setInformation({
          movie: null,
          isLoading: false,
          error: error.message
        });
      });
  }, [id, setInformation]);

  const goBack = () => {
    props.history.push('/upcoming');
  };

  if (information.isLoading) {
    return <Spinner />;
  }

  if (information.error) {
    return <p>{t('loadingError')}</p>;
  }

  return (
    <div className={classes.MovieInformation}>
      <MovieDetails movie={information.movie} />
      <GreenButton onClick={goBack}>{t('goBack')}</GreenButton>
    </div>
  );
};

export default MovieInformation;
