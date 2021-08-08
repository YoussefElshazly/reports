import React, { forwardRef } from 'react';
import { useField } from 'formik';
import { makeStyles, useTheme, Switch } from '@material-ui/core';

export default forwardRef((props, ref) => {
  const theme = useTheme();
  let {
    name,
    value,
    onChange,
    onBlur,
    square = theme.props.ExtendedMuiSwitch.square,
    disableForm = theme.props.ExtendedMuiSwitch.disableForm,
    ...rest
  } = props;
  const classes = useStyles();

  if (!disableForm) {
    const [field] = useField({
      name,
    });

    value = value === undefined ? field.value : value;
    onChange = onChange || field.onChange;
    onBlur = onBlur || field.onBlur;
  }

  return (
    <Switch
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      checked={value}
      classes={
        square
          ? {
              root: classes.root,
              switchBase: classes.switchBase,
              colorPrimary: classes.colorPrimary,
              colorSecondary: classes.colorSecondary,
              sizeSmall: classes.sizeSmall,
              thumb: classes.thumb,
              track: classes.track,
              checked: classes.checked,
              disabled: classes.disabled,
            }
          : undefined
      }
      style={square ? { borderRadius: 0 } : undefined}
      {...rest}
      ref={ref}
    />
  );
});

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 12,
  },
  switchBase: {
    '&$checked': {
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: theme.palette.grey[600],
        opacity: 1,
      },
      '&$disabled': {
        color: theme.palette.grey[400],
      },
      '&$disabled + $track': {
        opacity: 0.12,
      },
    },
  },
  colorPrimary: {
    '&$checked': {
      '& + $track': {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
  colorSecondary: {
    '&$checked': {
      '& + $track': {
        backgroundColor: theme.palette.secondary.main,
      },
    },
  },
  sizeSmall: {
    padding: 7,
  },
  thumb: {
    borderRadius: 0,
    border: `1px solid ${theme.palette.grey[400]}`,
  },
  track: {
    borderRadius: 0,
  },
  checked: {},
  disabled: {},
}));
