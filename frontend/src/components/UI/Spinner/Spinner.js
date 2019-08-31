import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './Spinner.module.scss';

const Spinner = () => {
  const { t } = useTranslation();

  return <div className={classes.Loader}>{t('loading')}</div>;
};

export default Spinner;
