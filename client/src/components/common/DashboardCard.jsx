import React, { forwardRef, cloneElement } from 'react';
import clsx from 'clsx';
import { makeStyles, fade, Card, Typography, CardContent } from '@material-ui/core';

export default forwardRef((props, ref) => {
  const { title, value, icon, filter, ...rest } = props;
  const classes = useStyles();

  return (
    <Card variant='outlined' square {...rest} ref={ref}>
      <CardContent className={classes.cardContent}>
        <div className={classes.cardHeader}>
          <Typography color='textSecondary' variant='subtitle1' className={classes.title}>
            {title}
          </Typography>

          {filter &&
            cloneElement(filter, {
              className: clsx(filter.props.className, classes.filter),
            })}
        </div>

        <div className={classes.cardBody}>
          <Typography variant='h4' className={classes.value}>
            {value}
          </Typography>

          {icon &&
            cloneElement(icon, {
              className: clsx(icon.props.className, classes.icon),
            })}
        </div>
      </CardContent>
    </Card>
  );
});

const useStyles = makeStyles((theme) => ({
  cardContent: {
    padding: theme.spacing(3),
    '&:last-child': {
      paddingBottom: theme.spacing(3),
    },
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
  },
  title: {
    textTransform: 'uppercase',
    marginRight: theme.spacing(3),
  },
  cardBody: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  value: {
    fontWeight: 700,
    marginRight: theme.spacing(3),
  },
  icon: {
    color: fade(theme.palette.primary.main, 0.8),
    alignSelf: 'center',
    fontSize: theme.typography.pxToRem(64),
  },
  filter: {
    minWidth: 100,
  },
}));
