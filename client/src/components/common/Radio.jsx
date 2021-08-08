import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { useField } from 'formik';
import { makeStyles, useTheme, Radio } from '@material-ui/core';

export default forwardRef((props, ref) => {
  const theme = useTheme();
  let {
    name,
    value,
    checked,
    onChange,
    onBlur,
    disableForm,
    square = theme.props.ExtendedMuiRadio.square,
    children,
    className,
    ...rest
  } = props;
  const classes = useStyles();

  if (!disableForm) {
    const [field] = useField({
      name,
    });

    checked = checked === undefined ? field.value === value : checked;
    onChange = onChange || field.onChange;
    onBlur = onBlur || field.onBlur;
  }
  return (
    <Radio
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      onBlur={onBlur}
      className={clsx(className, square && classes.square)}
      {...rest}
      ref={ref}
    >
      {children}
    </Radio>
  );
});

const useStyles = makeStyles(() => ({
  square: {
    borderRadius: 0,
  },
}));
