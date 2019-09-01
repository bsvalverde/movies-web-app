import i18n from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './MovieDetails.module.scss';

import forbidden from '../../../assets/icons/forbidden.svg';

const MovieDetails = (props) => {
  const { t } = useTranslation();
  const { movie } = props;

  let imagePath = forbidden;
  if (movie.poster_path || movie.backdrop_path) {
    imagePath = `https://image.tmdb.org/t/p/original/${movie.poster_path || movie.backdrop_path}`;
  }

  const genres = movie.genres.map(genre => genre.name).sort();
  const [releaseDate,] = movie.release_date.split('T');

  return (
    <div className={classes.MovieDetails}>
      <div className={classes.Poster} >
        <img src={imagePath} alt={movie.title} />
      </div>
      <div className={classes.Info}>
        <div className={classes.Title}>
          <p>{movie.title}</p>
        </div>
        <div className={classes.Field}>
          <p className={classes.FieldName}>{t('genres')}</p>
          <p>{genres.join(', ') || '-'}</p>
        </div>
        <div className={classes.Field}>
          <p className={classes.FieldName}>{t('releaseDate')}</p>
          <p>{new Date(releaseDate).toLocaleDateString(i18n.language)}</p>
        </div>
        <div className={classes.Field}>
          <p className={classes.FieldName}>{t('overview')}</p>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
