import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { Link } from 'react-scroll';
import { makeStyles, Container, Tabs, Tab } from '@material-ui/core';

import AppBar from './AppBar';

export default forwardRef((props, ref) => {
  const { tabs, tab, onChange, className, ...rest } = props;
  const classes = useStyles();

  return (
    <AppBar position='static' gradient={false} className={clsx(className, classes.appBar)} {...rest} ref={ref}>
      <Container maxWidth='xl'>
        <Tabs value={tab} onChange={onChange} indicatorColor='primary'>
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              to={tab.to}
              smooth={true}
              duration={1000}
              component={Link}
              className={classes.tab}
            />
          ))}
        </Tabs>
      </Container>
    </AppBar>
  );
});

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.common.white,
  },
  tab: {
    color: theme.palette.common.black,
  },
}));
