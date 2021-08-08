import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Typography } from '@material-ui/core';
import { Add as AddIcon, Remove as RemoveIcon } from '@material-ui/icons';

import IconButton from './IconButton';

export default forwardRef((props, ref) => {
  const theme = useTheme();
  const {
    label,
    required,
    helperText,
    error,
    variant = theme.props.FormControlsContainer.variant,
    margin = theme.props.FormControlsContainer.margin,
    direction = theme.props.FormControlsContainer.direction,
    removeItemHandler,
    addItemHandler,
    children,
    className,
    ...rest
  } = props;
  const classes = useStyles({
    direction,
  });

  return (
    <div className={clsx(className, classes[margin])} {...rest} ref={ref}>
      <div className={classes.headerContainer}>
        {label && (
          <Typography className={classes.typography}>
            {label}
            {required && <span className={clsx(classes.required, error && classes.error)}>&thinsp;*</span>}
          </Typography>
        )}

        {(removeItemHandler || addItemHandler) && (
          <div className={classes.actionsContainer}>
            {removeItemHandler && (
              <IconButton size='small' onClick={removeItemHandler}>
                <RemoveIcon />
              </IconButton>
            )}
            {addItemHandler && (
              <IconButton size='small' onClick={addItemHandler}>
                <AddIcon />
              </IconButton>
            )}
          </div>
        )}
      </div>

      <div className={clsx(classes.bodyContainer, classes[variant], error && classes.error)}>{children}</div>

      {helperText && (
        <Typography variant='caption' className={clsx(classes.helperText, error && classes.error)}>
          {helperText}
        </Typography>
      )}
    </div>
  );
});

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  actionsContainer: {
    marginBottom: -6,
    '& > *:not(:last-child)': {
      marginRight: theme.spacing(1),
    },
  },
  normal: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(0.5),
  },
  none: {},
  typography: {
    marginTop: 3,
    color: theme.palette.grey[600],
    lineHeight: 1,
    fontSize: theme.typography.pxToRem(13),
    fontWeight: 500,
  },
  required: {
    '&$error': {
      color: theme.palette.error.main,
    },
  },
  bodyContainer: {
    display: 'flex',
    marginTop: 6,
    flexDirection: (props) => props.direction,
    '& > *': {
      width: '100%',
    },
    '& > *:not(:last-child)': {
      marginRight: (props) => (props.direction === 'row' ? 4 : undefined),
    },
  },
  classic: {
    padding: theme.spacing(1.5),
    border: `1px solid ${theme.palette.grey[400]}`,
    '&$error': {
      borderColor: theme.palette.error.main,
    },
  },
  transparent: {},
  helperText: {
    color: theme.palette.text.secondary,
    display: 'inline-block',
    marginTop: 3,
    '&$error': {
      color: theme.palette.error.main,
    },
  },
  error: {},
}));
