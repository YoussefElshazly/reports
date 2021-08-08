import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { makeStyles, useTheme, Breadcrumbs, Typography, Container } from '@material-ui/core';

export default forwardRef((props, ref) => {
  const theme = useTheme();
  const {
    title,
    links,
    color = theme.props.Breadcrumbs.color,
    background = theme.props.Breadcrumbs.background,
    margin = theme.props.Breadcrumbs.margin,
    className,
    ...rest
  } = props;
  const classes = useStyles();

  return (
    <div className={clsx(className, classes[color], classes[background])} {...rest} ref={ref}>
      <Container maxWidth='xl' className={classes[margin]}>
        <Breadcrumbs className={classes.breadcrumbs}>
          {links.map((link, index) => (
            <NavLink
              key={index}
              exact
              to={link.path}
              className={classes.navLink}
              activeClassName={classes.activeNavLink}
            >
              {link.name}
            </NavLink>
          ))}
        </Breadcrumbs>
        {title && (
          <Typography variant='h2' color='inherit' className={classes.typography}>
            {title}
          </Typography>
        )}
      </Container>
    </div>
  );
});

const useStyles = makeStyles((theme) => ({
  primary: {
    backgroundColor: theme.palette.primary.main,
  },
  secondary: {
    backgroundColor: theme.palette.secondary.main,
  },
  transparent: {},
  white: {
    color: theme.palette.common.white,
  },
  black: {
    color: theme.palette.common.black,
  },
  normal: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  dense: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  none: {},
  breadcrumbs: {
    color: 'inherit',
  },
  typography: {
    fontWeight: 700,
    marginTop: theme.spacing(3),
  },
  navLink: {
    color: 'inherit',
    textDecoration: 'none',
    fontSize: theme.typography.body2.fontSize,
  },
  activeNavLink: {
    pointerEvents: 'none',
    textDecoration: 'underline',
  },
}));
