import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { makeStyles, Typography } from '@material-ui/core';

export default forwardRef((props, ref) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();

  return (
    <Typography
      variant='subtitle2'
      color='textSecondary'
      className={clsx(className, classes.typography)}
      {...rest}
      ref={ref}
    >
      {children}
    </Typography>
  );
});

const useStyles = makeStyles((theme) => ({
  typography: {
    fontSize: theme.typography.pxToRem(13),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(5),
    marginBottom: 6,
  },
}));
