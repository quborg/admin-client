import { useState } from 'react';

import { Box, Container, CssBaseline, Paper, withStyles } from '@material-ui/core';
import { IrinaBackground, Transition } from 'src/theme/components';
import { CssGlobal } from 'src/theme/styles';

import { Copyright, Footer, Forms, Title } from './components';
import style from './style';

const Sign: React.FC<TYPES.ClassesProps> = (props) => {
  const { classes } = props;
  const [up, setUp] = useState(false);
  const [reset, setReset] = useState(false);

  return (
    <Container className={classes.container} component="main" maxWidth="sm">
      <CssBaseline />
      <CssGlobal />
      <Box alignItems="center" display="flex" height="100vh" position="relative">
        <IrinaBackground />
        <Box
          display="flex"
          flexDirection="column"
          height="inherit"
          mx={3}
          width="1"
          zIndex={1}>
          <Box mt="auto">
            <Transition in={reset || (!reset && up) || (!reset && !up)}>
              <Paper className={classes.paper} elevation={10}>
                <Title reset={reset} up={up} />
                <Forms reset={reset} up={up} />
                <Footer reset={reset} setReset={setReset} setUp={setUp} up={up} />
              </Paper>
            </Transition>
          </Box>
          <Box mb={2} mt="auto">
            <Copyright />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default withStyles(style)(Sign);
