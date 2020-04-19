import React, {Component} from 'react';
import App from './App';
import Admin from './admin';
import Login from './pages/login';
import Buttons from './pages/ui/buttons';
import Models from './pages/ui/models';
import Loadings from './pages/ui/loadings';
import Notifications from './pages/ui/notifications';
import Messages from './pages/ui/messages';
import MyTabs from './pages/ui/myTabs';
import Gallery from './pages/ui/gallery';
import MyCarousel from './pages/ui/carousel';
import FormLogin from './pages/form/login';
import FormRegister from './pages/form/register';
import BasicTable from './pages/table/basicTable';

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
                                    <Route path="/admin/ui/loadings" component={Loadings}/>
                                    <Route path="/admin/ui/notification" component={Notifications}/>
                                    <Route path="/admin/ui/messages" component={Messages}/>
                                    <Route path="/admin/ui/tabs" component={MyTabs}/>
                                    <Route path="/admin/ui/gallery" component={Gallery}/>
                                    <Route path="/admin/ui/carousel" component={MyCarousel}/>

                                    <Route path="/admin/form/login" component={FormLogin}/>
                                    <Route path="/admin/form/reg" component={FormRegister}/>

                                    <Route path="/admin/table/basic" component={BasicTable}/>

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