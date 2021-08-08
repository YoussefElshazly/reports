import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { makeStyles, DialogContent } from '@material-ui/core';

export default forwardRef((props, ref) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();

  return (
    <DialogContent className={clsx(className, classes.dialogContent)} {...rest} ref={ref}>
      {children}
    </DialogContent>
  );
});

const useStyles = makeStyles((theme) => ({
  dialogContent: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    '&:first-child': {
      paddingTop: theme.spacing(2),
      marginTop: theme.spacing(3),
    },
  },
}));
