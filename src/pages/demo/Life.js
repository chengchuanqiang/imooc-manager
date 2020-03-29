import React from "react";
import Child from "./Child";

import {Button} from 'antd';

import './style.less';

export default class Life extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    handleAdd = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    handleClick() {
        this.setState({
            count: this.state.count + 1
        });
    }


    render() {

        return (
            <div className="content">
                <p>react的生命周期</p>
                <Button type="primary" onClick={this.handleAdd}>点击一下</Button>
                <Button onClick={this.handleClick.bind(this)}>点击一下</Button>
                <p>{this.state.count}</p>

                <Child name={this.state.count}/>
            </div>
        )


    }


}
