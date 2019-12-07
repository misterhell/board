import React, { Component } from 'react';
import BoardsList from 'pages/BoardsList';
import Board from 'pages/Board'


import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";


class Router extends Component {


    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" >
                        <BoardsList />
                    </Route>

                    <Route exact path="/board/:id" component={Board} />


                    <Route path="*">
                        <NoMatch />
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}


function NoMatch() {
    return (
        <div>
            <h1>404</h1>
            <h5><Link to="/">Go Home</Link></h5>
        </div>
    )
}

export default Router;
