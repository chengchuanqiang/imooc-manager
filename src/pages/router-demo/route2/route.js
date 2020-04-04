import React from 'react';

import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import Main from '../route1/main';
import Topic from '../route1/topic';
import About from '../route1/about';

import Home from './home';

class IRoute extends React.Component {

    render() {

        return (
            <Router>
                <Switch>
                    <Home>
                        <Route path="/main" render={() => {
                            return (
                                <Main>
                                    <Route path="/main/a" component={About}/>
                                </Main>
                            )
                        }}/>
                        <Route path="/about" component={About}/>
                        <Route path="/topic" component={Topic}/>
                    </Home>
                </Switch>
            </Router>

        )

    }

}

export default IRoute;