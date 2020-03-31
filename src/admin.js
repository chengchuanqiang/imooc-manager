import React, {Component} from 'react';
import {Row, Col} from 'antd';
import './style/common.less'


import Header from './components/header';
import Footer from './components/footer';
import Nav from "./components/nav/index";

class Admin extends Component {

    render() {
        return (
            <Row className="container">
                <Col span={4} className="nav-left">
                    <Nav>

                    </Nav>
                </Col>
                <Col span={20} className="main">
                    <Header>
                        header
                    </Header>
                    <Row className="content">
                        content
                    </Row>
                    <Footer>
                        footer
                    </Footer>
                </Col>
            </Row>
        );
    }
}

export default Admin;