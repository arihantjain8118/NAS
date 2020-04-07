import React, {useState} from 'react';
import withRoot from '../modules/withRoot';
import IndexPage from '../modules/views/IndexPage';
import NavBar from '../modules/views/NavBar';

function Home() {
  const [pos, ] = useState('home')
  return (
    <React.Fragment>
      <NavBar Pos = {pos}/>
      <IndexPage />
    </React.Fragment>
  );
}

export default withRoot(Home);
