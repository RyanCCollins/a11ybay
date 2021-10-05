import { Router } from "@reach/router";
import { Grommet, SkipLink, SkipLinks } from "grommet";
import { hpe } from "grommet-theme-hpe";
import React from "react";
import Layout from "./Layout";
import { About, Main } from "./screens/";

function App() {
  return (
    <Grommet full theme={hpe}>
      <SkipLinks>
        <SkipLink id="main" label="Main Content" />
        <SkipLink id="footer" label="Footer" />
      </SkipLinks>
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
