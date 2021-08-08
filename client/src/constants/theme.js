export default {
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
    },
    h2: {
      fontSize: '2rem',
    },
    h3: {
      fontSize: '1.75rem',
    },
    h4: {
      fontSize: '1.5rem',
    },
    h5: {
      fontSize: '1.25rem',
    },
    h6: {
      fontSize: '1rem',
    },
    subtitle1: {
      fontSize: '1rem',
    },
    subtitle2: {
      fontSize: '0.875rem',
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
  },
  palette: {
    primary: {
      dark: 'rgba(1, 80, 167, 1)',
      main: 'rgba(2, 108, 223, 1)',
    },
    secondary: {
      main: 'rgba(31, 38, 45, 1)',
    },
    error: {
      main: 'rgba(217, 58, 58, 1)',
      lighter: 'rgba(253, 243, 243, 1)',
    },
  },
  mixins: {
    toolbar: {
      minHeight: 64,
      '@media (min-width:0px) and (orientation: landscape)': {
        minHeight: 56,
      },
      '@media (min-width:768px)': {
        minHeight: 96,
      },
    },
    sidebar: {
      expanded: {
        width: 64,
        '@media (min-width:768px)': {
          width: 280,
        },
      },
      shrunk: {
        width: 0,
        '@media (min-width:768px)': {
          width: 64,
        },
      },
      toolbar: {
        expanded: {
          width: 'calc(100% - 64px)',
          '@media (min-width:768px)': {
            width: 'calc(100% - 280px)',
          },
        },
        shrunk: {
          width: 'calc(100% - 0)',
          '@media (min-width:768px)': {
            width: 'calc(100% - 64px)',
          },
        },
      },
    },
  },
  props: {
    ExtendedMuiAccordion: {
      square: true,
      variant: 'standard',
    },
    Alert: {
      square: true,
    },
    ExtendedMuiAppBar: {
      gradient: true,
      color: 'primary',
    },
    Breadcrumbs: {
      color: 'black',
      background: 'transparent',
      margin: 'normal',
    },
    ExtendedMuiButton: {
      square: true,
    },
    MuiCheckbox: {
      color: 'primary',
    },
    ExtendedMuiCheckbox: {
      square: true,
      disableForm: false,
    },
    MuiDialog: {
      scroll: 'body',
    },
    ExtendedMuiDialog: {
      square: true,
    },
    ExtendedMuiFormControlLabel: {
      margin: 'dense',
    },
    FormControlsContainer: {
      variant: 'classic',
      margin: 'normal',
      direction: 'row',
    },
    MuiIconButton: {
      centerRipple: false,
    },
    ExtendedMuiIconButton: {
      square: true,
    },
    MuiRadio: {
      color: 'primary',
    },
    ExtendedMuiRadio: {
      square: true,
      disableForm: false,
    },
    SectionTitle: {
      align: 'center',
      color: 'primary',
      size: 'normal',
    },
    Select: {
      variant: 'classic',
    },
    SnackbarProvider: {
      square: true,
    },
    MuiSwitch: {
      color: 'primary',
    },
    ExtendedMuiSwitch: {
      square: true,
      disableForm: false,
    },
    MuiTextField: {
      margin: 'normal',
    },
    ExtendedMuiTextField: {
      variant: 'classic',
      disableForm: false,
    },
    ExtendedMuiTable: {
      variant: 'enhanced',
    },
  },
};
