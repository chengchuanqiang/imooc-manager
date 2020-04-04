import React from 'react';
import {Link} from 'react-router-dom'

class Home extends React.Component {


    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/main">Home2</Link>
                    </li>
                    <li>
                        <Link to="/about">About2</Link>
                    </li>
                    <li>
                        <Link to="/topic">Topic2</Link>
                    </li>

                    <li>
                        <Link to="/imooc1">imooc1</Link>
                    </li>
                    <li>
                        <Link to="/imooc2">imooc2</Link>
                    </li>
                </ul>
                <hr/>
                {this.props.children}
            </div>
        )
    }
}

export default Home;