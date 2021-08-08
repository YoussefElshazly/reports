import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, IconButton } from '@material-ui/core';

export default forwardRef((props, ref) => {
  const theme = useTheme();
  const { square = theme.props.ExtendedMuiIconButton.square, children, className, ...rest } = props;
  const classes = useStyles();

  return (
    <IconButton className={clsx(className, square && classes.square)} {...rest} ref={ref}>
      {children}
    </IconButton>
  );
});

const useStyles = makeStyles(() => ({
  square: {
    borderRadius: 0,
  },
}));
