import React from 'react';
import {Card, message, Tabs} from 'antd';

import {AppleOutlined, AndroidOutlined} from '@ant-design/icons';
import './ui.less';

const {TabPane} = Tabs;
class MyTabs extends React.Component {

    newTabIndex = 0;
    handleCallback = (key) => {
        message.info("选择的页签是" + key);
    };

    onChange = (activeKey) => {
        this.setState({activeKey});
    };

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    };

    add = () => {
        const {panes} = this.state;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({title: activeKey, content: 'Content of new Tab', key: activeKey});
        this.setState({panes, activeKey});
    };

    remove = (targetKey) => {
        let {activeKey} = this.state;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key;
            } else {
                activeKey = panes[0].key;
            }
        }
        this.setState({panes, activeKey});
    };

    componentWillMount() {
        const panes = [
            {
                'title': 'tab 1',
                'content': 'tab 1',
                'key': '1'
            },
            {
                'title': 'tab 2',
                'content': 'tab 2',
                'key': '2'
            },
            {
                'title': 'tab 3',
                'content': 'tab 3',
                'key': '3'
            },
        ];

        this.setState({
            activeKey: panes[0].key,
            panes: panes
        });
    }

    render() {

        return (
            <div>
                <Card title="tab页签" className="card-wrap">

                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab="react" key="1">
                            欢迎使用react
                        </TabPane>
                        <TabPane tab="欢迎" key="2" disabled>
                            欢迎使用react
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                            欢迎使用react
                        </TabPane>
                    </Tabs>

                </Card>

                <Card title="带图标的tab页签" className="card-wrap">

                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane
                            tab={
                                <span>
                                    <AppleOutlined />
                                    苹果
                                </span>
                            }
                            key="1"
                        >
                            欢迎使用react
                        </TabPane>
                        <TabPane
                            tab={
                                <span>
                                  <AndroidOutlined />
                                  安卓
                                </span>
                            }
                            key="2"
                        >
                            欢迎使用react
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                            欢迎使用react
                        </TabPane>
                    </Tabs>

                </Card>

                <Card title="tab页签" className="card-wrap">

                    <Tabs
                        type="editable-card"
                        defaultActiveKey="1"
                        activeKey={this.state.activeKey}
                        onChange={this.onChange}
                        onEdit={this.onEdit}
                    >

                        {
                            this.state.panes.map((pane) => {
                                return (
                                    <TabPane tab={pane.title} key={pane.key}>
                                        {pane.content}
                                    </TabPane>
                                )
                            })
                        }

                    </Tabs>

                </Card>
            </div>
        )
    }
}

export default MyTabs;