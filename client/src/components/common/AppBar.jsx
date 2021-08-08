import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, AppBar } from '@material-ui/core';

export default forwardRef((props, ref) => {
  const theme = useTheme();
  const {
    gradient = theme.props.ExtendedMuiAppBar.gradient,
    color = theme.props.ExtendedMuiAppBar.color,
    children,
    className,
    ...rest
  } = props;
  const classes = useStyles();

  return (
    <AppBar color={color} className={clsx(className, gradient && classes[color])} {...rest} ref={ref}>
      {children}
    </AppBar>
  );
});

const useStyles = makeStyles((theme) => ({
  primary: {
    backgroundImage: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
  },
  secondary: {
    backgroundImage: `linear-gradient(to right, ${theme.palette.secondary.dark}, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`,
  },
}));
