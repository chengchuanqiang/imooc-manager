import React, {Component} from 'react';

import {NavLink} from 'react-router-dom'

import menuList from '../../config/menuConfig';
import './index.less';

import {Menu} from 'antd';


const {SubMenu} = Menu;

class Nav extends Component {

    componentWillMount() {
        const menuTreeNode = this.renderMenu(menuList);

        this.setState({
            menuTreeNode: menuTreeNode
        })
    }

    // 菜单渲染
    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item key={item.key}>
                    <NavLink to={item.key}>{item.title}</NavLink>
                </Menu.Item>
            )
        });
    };

    render() {

        return (
            <div className="nav-left">
                <div className="logo">
                    <img alt="" src="/assets/logo-ant.svg"/>
                    <h1>Imooc MS</h1>
                </div>

                <Menu theme="dark">
                    {this.state.menuTreeNode}
                </Menu>

            </div>
        )
    }
}

export default Nav;