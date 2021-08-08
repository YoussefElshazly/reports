import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { useField } from 'formik';
import { makeStyles, useTheme, Checkbox } from '@material-ui/core';
import {
  CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon,
  CheckBoxOutlineBlankSharp as CheckBoxOutlineBlankSharpIcon,
  CheckBox as CheckBoxIcon,
  CheckBoxSharp as CheckBoxSharpIcon,
  IndeterminateCheckBox as IndeterminateCheckBoxIcon,
  IndeterminateCheckBoxSharp as IndeterminateCheckBoxSharpIcon,
} from '@material-ui/icons';

export default forwardRef((props, ref) => {
  const theme = useTheme();
  let {
    name,
    value,
    checked,
    onChange,
    onBlur,
    square = theme.props.ExtendedMuiCheckbox.square,
    disableForm = theme.props.ExtendedMuiCheckbox.disableForm,
    className,
    ...rest
  } = props;
  const classes = useStyles();

  if (!disableForm) {
    const [field] = useField({
      name,
    });

    value = value === undefined ? field.value : value;
    checked = checked === undefined ? field.value : checked;
    onChange = onChange || field.onChange;
    onBlur = onBlur || field.onBlur;
  }

  return (
    <Checkbox
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      checked={checked}
      icon={square ? <CheckBoxOutlineBlankSharpIcon /> : <CheckBoxOutlineBlankIcon />}
      checkedIcon={square ? <CheckBoxSharpIcon /> : <CheckBoxIcon />}
      indeterminateIcon={square ? <IndeterminateCheckBoxSharpIcon /> : <IndeterminateCheckBoxIcon />}
      className={clsx(className, square && classes.square)}
      {...rest}
      ref={ref}
    />
  );
});

const useStyles = makeStyles(() => ({
  square: {
    borderRadius: 0,
  },
}));
