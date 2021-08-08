import React, { forwardRef } from 'react';
import { Formik, Form } from 'formik';
import { makeStyles } from '@material-ui/core';

export default forwardRef((props, ref) => {
  const { children, ...rest } = props;
  const classes = useStyles();

  return (
    <Formik {...rest} ref={ref}>
      <Form noValidate className={classes.form}>
        {children}
      </Form>
    </Formik>
  );
});

const useStyles = makeStyles(() => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
}));
