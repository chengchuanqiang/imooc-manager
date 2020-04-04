import React from 'react';

import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import Main from './main';
import Topic from '../route1/topic';
import About from '../route1/about';
import Info from './info';
import NoMatch from './noMatch';

import Home from './home';

class IRoute extends React.Component {

    render() {

        return (
            <Router>
                <Home>
                    <Switch>
                        <Route path="/main" render={() => {
                            return (
                                <Main>
                                    <Route path="/main/:value" component={Info}/>
                                </Main>
                            )
                        }}/>
                        <Route path="/about" component={About}/>
                        <Route path="/topic" component={Topic}/>
                        <Route component={NoMatch}/>
                    </Switch>
                </Home>
            </Router>

        )

    }

}

export default IRoute;