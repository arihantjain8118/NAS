import React from 'react';
import withRoot from '../modules/withRoot';
import IndexPage from '../modules/views/IndexPage';
import NavBar from '../modules/views/NavBar';

function Home() {
  return (
    <React.Fragment>
      <NavBar />
      <IndexPage />
    </React.Fragment>
  );
}

export default withRoot(Home);
