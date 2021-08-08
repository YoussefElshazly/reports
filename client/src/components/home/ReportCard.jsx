import React, { forwardRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles, Typography, Card, CardActions, CardContent, CircularProgress } from '@material-ui/core';

import { Button } from '../common';
import { actionTypes } from '../../constants';
import { actions } from '../../store';

export default forwardRef((props, ref) => {
  const { event, className, ...rest } = props;
  const classes = useStyles();
  const dispatch = useDispatch();

  const {
    loader: { actions: loadingActions },
  } = useSelector((state) => state);

  const handleBlock = async () => {
    try {
      dispatch(
        actions.loader.addAction(`${actionTypes.report.ADMIN_UPDATE_BY_ID}_${props.report._id.toUpperCase()}Block`)
      );

      await dispatch(actions.report.updateById(props.report._id, { state: 'Blocked' }));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(
        actions.loader.removeAction(`${actionTypes.report.ADMIN_UPDATE_BY_ID}_${props.report._id.toUpperCase()}Block`)
      );
    }
  };

  const handleResolve = async () => {
    try {
      dispatch(
        actions.loader.addAction(`${actionTypes.report.ADMIN_UPDATE_BY_ID}_${props.report._id.toUpperCase()}Resolve`)
      );

      await dispatch(actions.report.updateById(props.report._id, { state: 'Resolved' }));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(
        actions.loader.removeAction(`${actionTypes.report.ADMIN_UPDATE_BY_ID}_${props.report._id.toUpperCase()}Resolve`)
      );
    }
  };

  return (
    <Card className={classes.root} {...rest} ref={ref}>
      <CardContent>
        <Typography className={classes.title} color='textSecondary' gutterBottom>
          {props.report._id}
        </Typography>
        <Typography variant='h5' component='h2'>
          {props.report.reportType}
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          {props.report.state}
        </Typography>
        <Typography variant='body2' component='p'>
          {props.report.message}
        </Typography>
      </CardContent>
      <CardActions style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button size='small' onClick={handleBlock}>
          {loadingActions.includes(
            `${actionTypes.report.ADMIN_UPDATE_BY_ID}_${props.report._id.toUpperCase()}Block`
          ) ? (
            <CircularProgress color='inherit' size='1.25rem' />
          ) : (
            'Block'
          )}
        </Button>
        <Button size='small' onClick={handleResolve}>
          {loadingActions.includes(
            `${actionTypes.report.ADMIN_UPDATE_BY_ID}_${props.report._id.toUpperCase()}Resolve`
          ) ? (
            <CircularProgress color='inherit' size='1.25rem' />
          ) : (
            'Resolve'
          )}
        </Button>
      </CardActions>
    </Card>
  );
});

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    margin: 30,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));
