import React, { forwardRef } from 'react';
import { makeStyles, useTheme, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';

export default forwardRef((props, ref) => {
  const theme = useTheme();
  const {
    square = theme.props.ExtendedMuiAccordion.square,
    variant = theme.props.ExtendedMuiAccordion.variant,
    summary,
    AccordionSummaryProps,
    AccordionDetailsProps,
    details,
    ...rest
  } = props;
  const classes = useStyles();

  const accordionClasses = {
    classic: {
      root: classes.classicAccordionRoot,
    },
    standard: {
      root: classes.standardAccordionRoot,
    },
  };

  return (
    <Accordion square={square} classes={accordionClasses[variant]} {...rest} ref={ref}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        IconButtonProps={{ disableRipple: true }}
        classes={{ root: classes.accordionSummaryRoot, focused: classes.accordionSummaryFocused }}
        {...AccordionSummaryProps}
      >
        {summary}
      </AccordionSummary>
      <AccordionDetails {...AccordionDetailsProps}>{details}</AccordionDetails>
    </Accordion>
  );
});

const useStyles = makeStyles((theme) => ({
  standardAccordionRoot: {
    boxShadow: 'none',
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    backgroundColor: theme.palette.background.default,
    '&:before': {
      display: 'none',
    },
  },
  classicAccordionRoot: {
    boxShadow: 'none',
    border: `1px solid ${theme.palette.grey[300]}`,
    '&:before': {
      display: 'none',
    },
  },
  accordionSummaryRoot: {
    '&$accordionSummaryFocused': {
      backgroundColor: theme.palette.background.default,
    },
  },
  accordionSummaryFocused: {},
}));
