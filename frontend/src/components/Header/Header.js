import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './Header.module.scss';

const Header = (props) => {
  const { t } = useTranslation();

  return (
    <div className={classes.Header}>
      <h1>{t('moviesWebApp')}</h1>
    </div>
  );
};

export default Header;
