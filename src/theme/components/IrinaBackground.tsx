import { fade, Theme, withStyles } from '@material-ui/core';

const style = (theme: Theme): any => ({
  lines: {
    zIndex: '0',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '500px',
    height: '100%',
    margin: 'auto',
  },
  line: {
    position: 'absolute',
    width: '1px',
    height: '100%',
    top: '0',
    background: fade(theme.palette.primary.main, 0.1),
    overflow: 'hidden',
    '&::after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      height: '15vh',
      width: '100%',
      top: '-50%',
      left: '0',
      background:
        'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #ffffff 75%, #ffffff 100%)',
      animation: 'irinaDrop 7s 0s infinite',
      animationFillMode: 'forwards',
      animationTimingFunction: 'cubic-bezier(0.4, 0.26, 0, 0.97)',
    },
    '&:nth-child(1)': {
      marginLeft: '10%',
      '&::after': {
        animationDelay: '5s',
      },
    },
    '&:nth-child(2)': {
      marginLeft: '30%',
      '&::after': {
        animationDelay: '2s',
      },
    },
    '&:nth-child(3)': {
      marginLeft: '50%',
    },
    '&:nth-child(4)': {
      marginLeft: '70%',
      '&::after': {
        animationDelay: '2.5s',
      },
    },
    '&:nth-child(5)': {
      marginLeft: '90%',
      '&::after': {
        animationDelay: '4.5s',
      },
    },
  },
});

const IrinaBackground: React.FC<TYPES.ClassesProps> = ({ classes }) => (
  <div className={classes.lines}>
    <div className={classes.line} />
    <div className={classes.line} />
    <div className={classes.line} />
    <div className={classes.line} />
    <div className={classes.line} />
  </div>
);

export default withStyles(style)(IrinaBackground);
