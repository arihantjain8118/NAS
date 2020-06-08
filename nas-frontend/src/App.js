import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import UserDashboard from './pages/UserDashboard';
import NewsArticle from './pages/NewsArticle';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path = '/coverWorld' component={Home} />
          <Route exact path = '/coverWorld/sign-in' component = {SignIn} />
          <Route exact path = '/coverWorld/sign-up' component = {SignUp} />
          <Route exact path = '/coverWorld/dashboard' component = {UserDashboard} />
          <Route exact path = '/coverWorld/article' component = {NewsArticle} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
