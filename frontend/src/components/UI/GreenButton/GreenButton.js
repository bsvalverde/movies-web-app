import React from 'react';

import classes from './GreenButton.module.scss'

const GreenButton = (props) => {
  return (
    <button
      className={classes.GreenButton}
      type="button"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default GreenButton;
