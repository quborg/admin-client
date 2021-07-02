import { Theme, withStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';

const CssGlobal = withStyles(({ spacing, palette }: Theme) => ({
  '@global': {
    '.AppGutterLeftZero': {
      paddingLeft: '0',
    },
    '.scrollbar::-webkit-scrollbar': {
      width: spacing(0.5),
      height: spacing(0.625),
    },
    '.scrollbar::-webkit-scrollbar-track': {
      boxShadow: ['inset 0 0 6px', fade(palette.common.grayDark, 0.2)].join(' '),
    },
    '.scrollbar::-webkit-scrollbar-thumb': {
      backgroundColor: fade(palette.common.gray, 0.5),
      borderRadius: '2rem',
      '&:hover': {
        backgroundColor: fade(palette.common.cyan, 0.2),
      },
    },
    '.MuiTableRow-root.MuiTableRow-hover:hover': {
      backgroundColor: fade(palette.common.cyan, 0.05),
      cursor: 'pointer',
    },
    '[hidden]': {
      display: 'none !important',
    },
    body: {
      backgroundColor: palette.common.chocolate,
    },
    '@keyframes irinaDrop': {
      '0%': {
        top: '-50%',
      },
      '100%': {
        top: '110%',
      },
    },
    input: {
      '&:-webkit-autofill': {
        '-webkit-box-shadow': `inset 0 0 0 100px ${palette.warning.dark}`,
      },
    },
  },
}))(() => null);

export default CssGlobal;
