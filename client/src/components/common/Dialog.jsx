import React, { forwardRef } from 'react';
import { makeStyles, useTheme, Dialog } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';

import IconButton from './IconButton';

export default forwardRef((props, ref) => {
  const theme = useTheme();
  const { square = theme.props.ExtendedMuiDialog.square, onClose, children, ...rest } = props;
  const classes = useStyles();

  return (
    <Dialog
      onClose={onClose}
      PaperProps={{
        square,
      }}
      classes={{
        paper: classes.paper,
      }}
      {...rest}
      ref={ref}
    >
      {children}

      <IconButton size='small' onClick={onClose} className={classes.iconButton}>
        <CloseIcon />
      </IconButton>
    </Dialog>
  );
});

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
  },
  iconButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));
