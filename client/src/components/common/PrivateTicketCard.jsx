import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

import Button from './Button';

export default (props) => {
  const { title, fields, autoFillOnClick, autoFillDisabled, ...rest } = props;
  const classes = useStyles();

  return (
    <div {...rest}>
      <div className={classes.headerContainer}>
        <Typography variant='h6'>{title}</Typography>

        <Button size='small' onClick={autoFillOnClick} disabled={autoFillDisabled}>
          Auto Fill
        </Button>
      </div>

      <div className={classes.fieldsContainer}>{fields}</div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  fieldsContainer: {
    '& > *:not(:last-child)': {
      marginBottom: theme.spacing(1.5),
    },
  },
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2),
  },
}));
