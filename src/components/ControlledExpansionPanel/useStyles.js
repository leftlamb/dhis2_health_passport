import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(20),
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      '& span': {
          margin: '4px 0'
      },
  },
  undefined: {
      color: '#f00',
  },
  }));
