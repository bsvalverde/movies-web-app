import i18n from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import classes from './MovieSummary.module.scss';

import forbidden from '../../../assets/icons/forbidden.svg';

import GreenButton from '../../UI/GreenButton/GreenButton';

const MovieSummary = (props) => {
  const { t } = useTranslation();

  const movie = props.movie;

  let imagePath = forbidden;
  if (movie.poster_path || movie.backdrop_path) {
    imagePath = `https://image.tmdb.org/t/p/original/${movie.poster_path || movie.backdrop_path}`;
  }

  const [releaseDate,] = movie.release_date.split('T');

  return (
    <tr className={classes.MovieSummary}>
      <td><img src={imagePath} alt={movie.title}/></td>
      <td>{movie.title}</td>
      <td>{new Date(releaseDate).toLocaleDateString(i18n.language)}</td>
      <td>
        <NavLink to={`/movie/${movie.movieDatabaseId}`}>
          <GreenButton>{t('seeMore')}</GreenButton>
        </NavLink>
      </td>
    </tr>
  );
};

export default MovieSummary;