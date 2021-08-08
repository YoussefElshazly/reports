import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { makeStyles, DialogActions } from '@material-ui/core';

export default forwardRef((props, ref) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();

  return (
    <DialogActions className={clsx(className, classes.dialogActions)} {...rest} ref={ref}>
      {children}
    </DialogActions>
  );
});

const useStyles = makeStyles((theme) => ({
  dialogActions: {
    padding: theme.spacing(2),
  },
}));
