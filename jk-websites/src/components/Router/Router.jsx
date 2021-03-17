import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../../pages/Home';
import Header from '../Header'

class Router extends React.Component {
    render() {
        return (
        <React.Fragment>
            <Header></Header>
            <BrowserRouter>
                <React.Fragment>
                    <Switch>
                        <Route exact path="/" render={(props) => <Home {...props} /> }/>
                    </Switch>
                </React.Fragment>
            </BrowserRouter>
        </React.Fragment>
        )
    }
}

export default Router;