import React, {useState} from 'react';
import withRoot from '../modules/withRoot';
import NavBar from '../modules/views/NavBar';
import NewsCard from '../modules/views/NewsCard';
const UserDashboard = () =>{
    const [pos, ] = useState('dashboard')

    return (
        <React.Fragment>
            <NavBar Pos = {pos}/>
            <NewsCard />
        </React.Fragment>
    )
}

export default withRoot(UserDashboard);