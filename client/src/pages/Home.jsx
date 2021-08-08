import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles, Container, CircularProgress, Typography } from '@material-ui/core';

import { actions } from '../store';
import { ReportCard } from '../components/home';
import { actionTypes } from '../constants';

export default () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    report: { reports },
    loader: { actions: loadingActions },
  } = useSelector((state) => state);
  const isLoading = loadingActions.includes(actionTypes.report.ADMIN_READ);

  useEffect(() => {
    (async () => {
      try {
        await dispatch(actions.report.read());
      } catch (error) {}
    })();
  }, [dispatch]);

  return (
    <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {isLoading ? (
        <div className={classes.circularProgressContainer}>
          <CircularProgress />
        </div>
      ) : (
        <>
          {reports.length > 0 && (
            <Container style={{ display: 'flex', flexDirection: 'column' }}>
              {reports.map((report) => (
                <ReportCard key={report._id} report={report} />
              ))}
            </Container>
          )}

          {!(reports.length > 0) && (
            <Typography variant='h5' color='textSecondary' align='center'>
              No reports available.
            </Typography>
          )}
        </>
      )}
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    minHeight: 300,
  },
  divider: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  circularProgressContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 300,
  },
}));
