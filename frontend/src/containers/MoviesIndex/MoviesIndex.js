import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';

import classes from './MoviesIndex.module.scss';

import GreenButton from '../../components/UI/GreenButton/GreenButton';
import Input from '../../components/UI/Input/Input';
import MoviesList from '../../components/Movies/MoviesList/MoviesList';
import Navigator from '../../components/UI/Navigator/Navigator';

export const MoviesIndex = (props) => {
  const [titleInput, setTitleInput] = useState('');
  const [searchParams, setSearchParams] = useState({});
  const initialPage = props.match.params.page;
  const [page, setPage] = useState(initialPage ? parseInt(initialPage) : 1);
  const { t } = useTranslation();

  const { onPageLoad, perPage, totalResults } = props;

  const lastPage = Math.max(parseInt(totalResults / perPage), 1);

  useEffect(() => {
    onPageLoad(searchParams, page, perPage);
  }, [onPageLoad, searchParams, page, perPage]);

  const updateSearchParams = () => {
    const params = {};
    if (titleInput !== '') {
      params.title = titleInput;
    }
    setSearchParams(params);
  }

  const search = () => {
    setPage(1);
    updateSearchParams();
    props.history.push('/upcoming');
  };

  const goToPreviousPage = () => {
    props.history.push(`/upcoming/${page - 1}`);
    setPage(prevState => prevState - 1);
  };

  const goToNextPage = () => {
    props.history.push(`/upcoming/${page + 1}`);
    setPage(prevState => prevState + 1);
  };

  return (
    <div className={classes.Row}>
      <div className={classes.Input}>
        <Input
          onChange={(event) => setTitleInput(event.target.value)}
          placeholder={t('titleInputPlaceholder')}
        />
      </div>
      <div className={classes.SearchButton}>
        <GreenButton onClick={search}>
          {t('search')}
        </GreenButton>
      </div>
      <div className={classes.List}>
        <MoviesList />
      </div>
      <div className={classes.Navigation}>
        {
          totalResults > perPage &&
          <Navigator
            current={page}
            total={lastPage}
            clickPrevious={goToPreviousPage}
            clickNext={goToNextPage}
          />
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    perPage: state.movies.moviesPerPage,
    totalResults: state.movies.totalResults
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPageLoad: (searchParams, page, perPage) => dispatch(actions.searchMovies(searchParams, page, perPage))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesIndex);
