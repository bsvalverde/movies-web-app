import React from 'react';

import classes from './Navigator.module.scss';

import GreenButton from '../GreenButton/GreenButton';

const Navigator = (props) => {
  const { current, total } = props;
  const { clickPrevious, clickNext } = props;

  return (
    <div className={classes.Navigator}>
      <div className={classes.Button}>
        { current !== 1 && <GreenButton onClick={clickPrevious}>{'<'}</GreenButton> }
      </div>
      <label>{ current }/{ total }</label>
      <div className={classes.Button}>
        { current !== total && <GreenButton onClick={clickNext}>{'>'}</GreenButton> }
      </div>
    </div>
  );
};

export default Navigator;
