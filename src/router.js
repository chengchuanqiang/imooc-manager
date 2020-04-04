import React, {Component} from 'react';
import App from './App';
import Admin from './admin';
import Login from './pages/login';
import Buttons from './pages/ui/buttons';
import Models from './pages/ui/models';

import NoMatch from './pages/noMatch'
import {HashRouter, Route, Switch} from 'react-router-dom'

class IRouter extends Component {

    render() {

        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/admin" render={() =>
                            <Admin>
                                <Switch>
                                    <Route path="/admin/ui/buttons" component={Buttons}/>
                                    <Route path="/admin/ui/modals" component={Models}/>

                                    <Route component={NoMatch}/>
                                </Switch>
                            </Admin>
                        }/>
                    </Switch>
                </App>
            </HashRouter>
        )
    }

}

export default IRouter;