import React from 'react';

import classes from './Navigator.module.scss';

import GreenButton from '../GreenButton/GreenButton';

const Navigator = (props) => {
  const { current, total } = props;
  const { clickPrevious, clickNext } = props;

  let returnButton = null;
  if (current !== 1) {
    returnButton = (
      <div className={classes.Button}>
        <GreenButton onClick={clickPrevious}>{'<'}</GreenButton>
      </div>
    );
  }

  let nextButton = null;
  if (current !== total) {
    nextButton = (
      <div className={classes.Button}>
        <GreenButton onClick={clickNext}>{'>'}</GreenButton>
      </div>
    );
  }

  return (
    <div className={classes.Navigator}>
      { returnButton }
      <label>{ current }/{ total }</label>
      { nextButton }
    </div>
  );
};

export default Navigator;
