import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import MyMusics from './pages/MyMusics';

function Routes(){
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/minhas-musicas" component={MyMusics}/>
            </Switch>
        </Router>
    );
}

export default Routes;