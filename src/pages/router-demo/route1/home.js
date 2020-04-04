import React from 'react';
import {HashRouter, Route, Link} from 'react-router-dom'

import Main from './main';
import Topic from './topic';
import About from './about';

class Home extends React.Component {


    render() {
        return (
            <HashRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/topic">Topic</Link>
                        </li>
                    </ul>
                    <hr/>

                    <Route path="/" component={Main}/>
                    <Route path="/about" component={About}/>
                    <Route path="/topic" component={Topic}/>
                </div>
            </HashRouter>
        )
    }
}

export default Home;