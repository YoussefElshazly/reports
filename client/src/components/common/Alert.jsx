import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Card, CardContent, Typography } from '@material-ui/core';
import { Error as ErrorIcon } from '@material-ui/icons';

export default forwardRef((props, ref) => {
  const theme = useTheme();
  const { title, message, square = theme.props.Alert.square, className, ...rest } = props;
  const classes = useStyles();

  return (
    <Card variant='outlined' square={square} className={clsx(className, classes.card)} {...rest} ref={ref}>
      <CardContent className={classes.cardContent}>
        <ErrorIcon color='error' fontSize='large' className={classes.icon} />
        <div>
          <Typography variant='h5' gutterBottom className={classes.title}>
            {title}
          </Typography>
          <Typography variant='subtitle1'>{message}</Typography>
        </div>
      </CardContent>
    </Card>
  );
});

const useStyles = makeStyles((theme) => ({
  card: {
    borderColor: theme.palette.error.main,
    backgroundColor: theme.palette.error.lighter,
  },
  cardContent: {
    display: 'flex',
    '&:last-child': {
      paddingBottom: theme.spacing(2),
    },
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontWeight: 500,
  },
}));
