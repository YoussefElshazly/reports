import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { makeStyles, Typography } from '@material-ui/core';

export default forwardRef((props, ref) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();

  return (
    <Typography variant='h4' className={clsx(className, classes.typography)} {...rest} ref={ref}>
      {children}
    </Typography>
  );
});

const useStyles = makeStyles((theme) => ({
  typography: {
    fontWeight: 500,
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(5),
    marginBottom: 6,
  },
}));
