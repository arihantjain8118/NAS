import React, {useState} from 'react';
import withRoot from '../modules/withRoot';
import NavBar from '../modules/views/NavBar';

const UserDashboard = () =>{
    const [pos, ] = useState('dashboard')
    return (
        <React.Fragment>
            <NavBar Pos = {pos}/>
        </React.Fragment>
    )
}

export default withRoot(UserDashboard);