import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, FormControlLabel } from '@material-ui/core';

export default forwardRef((props, ref) => {
  const theme = useTheme();
  const { margin = theme.props.ExtendedMuiFormControlLabel.margin, children, className, ...rest } = props;
  const classes = useStyles();

  return <FormControlLabel className={clsx(className, classes[margin])} {...rest} ref={ref} />;
});

const useStyles = makeStyles((theme) => ({
  normal: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(0.5),
  },
  none: {},
}));
