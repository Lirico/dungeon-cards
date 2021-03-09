import React from 'react';

import Cards from './components/cards';
import Form from './components/form';

import Dungeon from './images/background/fondo.png';

import styled from '@emotion/styled';
import {
  Box,
  Grid
} from '@material-ui/core';

const BgImage = styled.div`
    background: url(${Dungeon}) no-repeat;
    background-attachment: fixed;
    background-size: cover;
    color: #fff;
    height: 250vh;
`;

function App() {
  return (
    <BgImage>
      <Box ml={5} mr={5}>
        <Box align="center" mb={8}>
          <h4 style={{paddingTop: "2rem"}}>Welcome to the most</h4>
          <h2 className="maintitle">coded dungeon</h2>
        </Box>
        <Grid container>
          <Grid container items sm={6} justify="center">
            <Form />
          </Grid>
          <Grid container items sm={6}>
            <Cards />
          </Grid>
        </Grid>
      </Box>
    </BgImage>
  );
}

export default App;
