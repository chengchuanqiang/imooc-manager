import React from 'react'
import './index.less'
import {Col} from 'antd';


export default class Home extends React.Component {

    render() {

        return (
            <Col span={24} className="home-wrap">
                欢迎学习慕课网后台管理系统
            </Col>
        )

    }

}