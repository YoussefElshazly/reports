import React, { forwardRef } from 'react';
import { useField } from 'formik';
import { makeStyles, useTheme, TextField } from '@material-ui/core';

export default forwardRef((props, ref) => {
  const theme = useTheme();
  let {
    name,
    value,
    onChange,
    onBlur,
    error,
    helperText,
    disableForm = theme.props.ExtendedMuiTextField.disableForm,
    variant = theme.props.ExtendedMuiTextField.variant,
    children,
    ...rest
  } = props;
  const classes = useStyles();

  const customVariants = ['classic'];
  const isCustomVariant = customVariants.includes(variant);

  const inputLabelClasses = {
    classic: {
      focused: classes.classicInputLabelFocused,
      disabled: classes.classicInputLabelDisabled,
      error: classes.classicInputLabelError,
      formControl: classes.classicInputLabelFormControl,
    },
  };
  const inputClasses = {
    classic: {
      root: classes.classicInputRoot,
      formControl: classes.classicInputFormControl,
      focused: classes.classicInputFocused,
      disabled: classes.classicInputDisabled,
      colorSecondary: classes.classicInputColorSecondary,
      underline: classes.classicInputUnderline,
      error: classes.classicInputError,
      inputMarginDense: classes.classicInputInputMarginDense,
    },
  };
  const selectClasses = {
    classic: {
      select: classes.classicSelectSelect,
    },
  };
  const menuClasses = {
    classic: {
      paper: classes.classicMenuPaper,
    },
  };

  if (!disableForm) {
    const [field, meta] = useField({
      name,
    });

    value = value === undefined ? field.value : value;
    onChange = onChange || field.onChange;
    onBlur = onBlur || field.onBlur;
    error = meta.error && meta.touched;
    helperText = meta.touched && meta.error;
  }

  return (
    <TextField
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      helperText={helperText}
      variant={isCustomVariant ? 'standard' : variant}
      InputLabelProps={
        isCustomVariant
          ? {
              classes: inputLabelClasses[variant],
              shrink: true,
            }
          : undefined
      }
      InputProps={
        isCustomVariant
          ? {
              classes: inputClasses[variant],
            }
          : undefined
      }
      SelectProps={
        isCustomVariant
          ? {
              classes: selectClasses[variant],
              MenuProps: {
                classes: menuClasses[variant],
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'left',
                },
                transformOrigin: {
                  vertical: 'top',
                  horizontal: 'left',
                },
                getContentAnchorEl: null,
                elevation: 0,
              },
              displayEmpty: true,
            }
          : {
              displayEmpty: true,
            }
      }
      inputProps={
        isCustomVariant
          ? {
              style: {
                paddingLeft: 6,
                paddingRight: 6,
              },
            }
          : undefined
      }
      {...rest}
      ref={ref}
    >
      {children}
    </TextField>
  );
});

const useStyles = makeStyles((theme) => ({
  classicInputLabelFocused: {},
  classicInputLabelDisabled: {},
  classicInputLabelError: {},
  classicInputLabelFormControl: {
    position: 'relative',
    transform: 'translate(0)',
    marginTop: 3,
    color: theme.palette.grey[600],
    fontWeight: 500,
    fontSize: theme.typography.pxToRem(13),
    '&$classicInputLabelFocused': {
      color: theme.palette.grey[600],
    },
    '&$classicInputLabelDisabled': {
      color: theme.palette.grey[600],
    },
    '&$classicInputLabelError': {
      color: theme.palette.grey[600],
    },
  },
  classicInputRoot: {
    border: `1px solid ${theme.palette.grey[400]}`,
    '&$classicInputFocused': {
      borderColor: theme.palette.primary.main,
    },
    '&$classicInputDisabled': {
      borderColor: theme.palette.grey[400],
      backgroundColor: theme.palette.grey[100],
    },
    '&$classicInputError': {
      borderColor: theme.palette.error.main,
    },
  },
  classicInputFormControl: {
    'label + &': {
      marginTop: 6,
    },
  },
  classicInputFocused: {},
  classicInputDisabled: {},
  classicInputColorSecondary: {
    '&$classicInputFocused': {
      borderColor: theme.palette.secondary.main,
    },
  },
  classicInputUnderline: {
    '&:after': {
      borderBottom: 'none',
    },
    '&:before': {
      borderBottom: 'none',
    },
    '&:hover:not($classicInputDisabled):before': {
      borderBottom: 'none',
      '@media (hover: none)': {
        borderBottom: 'none',
      },
    },
    '&$classicInputDisabled:before': {
      borderBottomStyle: 'none',
    },
  },
  classicInputError: {},
  classicInputInputMarginDense: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  classicSelectSelect: {
    paddingLeft: 6,
    '&:focus': {
      backgroundColor: 'transparent',
    },
  },
  classicMenuPaper: {
    borderRadius: 0,
    border: `1px solid ${theme.palette.grey[300]}`,
    maxHeight: 200,
  },
}));
