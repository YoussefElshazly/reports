import React, { forwardRef } from 'react';
import { makeStyles, useTheme, MenuItem } from '@material-ui/core';

import TextField from './TextField';

export default forwardRef((props, ref) => {
  const theme = useTheme();
  const { options, placeholder, variant = theme.props.Select.variant, MenuItemProps, ...rest } = props;
  const classes = useStyles();

  const customVariants = ['classic'];
  const isCustomVariant = customVariants.includes(variant);

  const menuItemClasses = {
    classic: {
      root: classes.classicRoot,
      selected: classes.classicSelected,
    },
  };

  return (
    <TextField select variant={variant} {...rest} ref={ref}>
      {placeholder && (
        <MenuItem value='' {...MenuItemProps}>
          {placeholder}
        </MenuItem>
      )}
      {options.map((option, index) => (
        <MenuItem
          key={index}
          value={option.value}
          disabled={option.disabled}
          classes={isCustomVariant ? menuItemClasses[variant] : undefined}
          {...MenuItemProps}
        >
          {option.name}
        </MenuItem>
      ))}
    </TextField>
  );
});

const useStyles = makeStyles((theme) => ({
  classicRoot: {
    '&$classicSelected': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.grey[100],
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
  classicSelected: {},
}));
