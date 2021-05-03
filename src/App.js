// (C) Copyright 2017-2021 Hewlett Packard Enterprise Development LP
import React from 'react';
import {
  Grommet,
  grommet,
} from 'grommet';
import { Router } from '@reach/router';
import { Main, About } from './screens/';
import Layout from './Layout';

function App() {
  return (
    <Grommet full theme={grommet}>
      <Layout>
        <Router>
          <Main path="/" />
          <About path="/about" />
        </Router>
      </Layout>
    </Grommet>
  );
}

export default App;
