import React, {useState} from 'react';
import withRoot from '../modules/withRoot';
import NavBar from '../modules/views/NavBar';
import NewsCardList from '../modules/views/NewsCardList';

class UserDashboard extends React.Component{
    constructor(){
        super();
        this.state = {
            pos: 'dashboard',
            data: []
        }
    }

    componentDidMount(){
        fetch('http://newsapi.org/v2/top-headlines?' +
              'country=us&' +
              'apiKey=4e38f93bbfa044e88fc3166b688f48a9')
        .then(function(response) {
            return response.json()
        })
        .then((res) =>{
            this.setState({data: res.articles});
            console.log(this.state.data);
        })
    }
    render(){
        if(this.state.data.length === 0){
            return(
                <h1>LOADING..</h1>
            )
        } else {
            return(
                <React.Fragment>
                    <NavBar Pos = {this.state.pos}/>
                    <NewsCardList Data = {this.state.data}/>
                </React.Fragment>
            );
        }
    }
}

export default withRoot(UserDashboard);