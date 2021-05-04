import { withStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';

const CssGlobal = withStyles(({ spacing, palette }) => ({
  '@global': {
    '.AppGutterLeftZero': {
      paddingLeft: '0',
    },
    '::-webkit-scrollbar': {
      width: spacing(0.5),
      height: spacing(0.625),
    },
    '::-webkit-scrollbar-track': {
      boxShadow: ['inset 0 0 6px', fade(palette.common.grayDark, 0.2)].join(' '),
    },
    '::-webkit-scrollbar-thumb': {
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
  },
}))(() => null);

export default CssGlobal;
