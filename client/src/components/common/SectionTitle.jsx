import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Typography } from '@material-ui/core';

export default forwardRef((props, ref) => {
  const theme = useTheme();
  const {
    align = theme.props.SectionTitle.align,
    color = theme.props.SectionTitle.color,
    size = theme.props.SectionTitle.size,
    children,
    className,
    ...rest
  } = props;
  const classes = useStyles({
    align,
    color,
    size,
  });

  return (
    <Typography align={align} className={clsx(className, classes.typography)} {...rest} ref={ref}>
      {children}
    </Typography>
  );
});

const useStyles = makeStyles((theme) => ({
  typography: {
    marginBottom: (props) => ({ normal: theme.spacing(4), small: theme.spacing(3) }[props.size]),
    position: 'relative',
    paddingBottom: (props) => ({ normal: 4, small: 0 }[props.size]),
    fontSize: (props) => ({ normal: theme.typography.h4.fontSize, small: theme.typography.h5.fontSize }[props.size]),
    fontWeight: (props) => ({ normal: 900, small: 700 }[props.size]),
    textTransform: 'uppercase',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: (props) => ({ center: '50%', left: '0%', right: '100%' }[props.align]),
      transform: (props) =>
        ({ center: 'translateX(-50%)', left: 'translateX(0%)', right: 'translateX(-100%)' }[props.align]),
      width: 50,
      borderBottom: (props) =>
        `${{ normal: '4px', small: '2px' }[props.size]} solid ${
          { primary: theme.palette.primary.main, black: theme.palette.common.black }[props.color]
        }`,
    },
  },
}));
