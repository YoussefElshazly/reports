import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Button } from '@material-ui/core';

export default forwardRef((props, ref) => {
  const theme = useTheme();
  const { square = theme.props.ExtendedMuiButton.square, children, className, ...rest } = props;
  const classes = useStyles();

  return (
    <Button className={clsx(className, square && classes.square)} {...rest} ref={ref}>
      {children}
    </Button>
  );
});

const useStyles = makeStyles(() => ({
  square: {
    borderRadius: 0,
  },
}));
