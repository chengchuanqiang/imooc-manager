import React from 'react';
import {Card, Table, Modal, Button, message} from 'antd';
import axios from '../../axios'

import './index.less'

class HighTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: []
        };

        this.params = {
            page: 1
        }
    }

    componentDidMount() {
        this.request();
    }

    // 动态获取mock数据
    request = () => {

        let _this = this;

        axios.ajax({
            url: '/table/list1',
            data: {
                params: {
                    page: _this.params.page
                }
            }
        }).then((res) => {
            // 给数据动态添加key
            res.result.list.map((item, index) => {
                item.key = index;
            });

            if (res.code == 0) {
                this.setState({
                    dataSource: res.result.list,
                });
            }
        })
    };

    render() {

        const columns = [
            {
                title: 'id',
                dataIndex: 'id',
                width: 80
            },
            {
                title: '用户名',
                dataIndex: 'userName',
                width: 80
            },
            {
                title: '性别',
                dataIndex: 'sex',
                width: 80,
                render(sex){
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                dataIndex: 'state',
                width: 80,
                render(state){
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    };
                    return config[state];
                }
            },
            {
                title: '爱好',
                dataIndex: 'interest',
                width: 80,
                render(abc) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '跑步',
                        '5': '爬山',
                        '6': '骑行',
                        '7': '桌球',
                        '8': '麦霸'
                    };
                    return config[abc];
                }
            },
            {
                title: '生日',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                width: 120,
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                width: 80,
                dataIndex: 'time'
            }
        ];

        const columns2 = [
            {
                title: 'id',
                dataIndex: 'id',
                width: 80,
                fixed: 'left'
            },
            {
                title: '用户名',
                dataIndex: 'userName',
                width: 80,
                fixed: 'left'
            },
            {
                title: '用户名',
                dataIndex: 'userName',
                width: 80
            },
            {
                title: '用户名',
                dataIndex: 'userName',
                width: 80
            },
            {
                title: '用户名',
                dataIndex: 'userName',
                width: 80
            },
            {
                title: '用户名',
                dataIndex: 'userName',
                width: 80
            }, {
                title: '用户名',
                dataIndex: 'userName',
                width: 80
            },
            {
                title: '用户名',
                dataIndex: 'userName',
                width: 80
            },
            {
                title: '性别',
                dataIndex: 'sex',
                width: 80,
                render(sex){
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                dataIndex: 'state',
                width: 80,
                render(state){
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    };
                    return config[state];
                }
            },
            {
                title: '爱好',
                dataIndex: 'interest',
                width: 80,
                render(abc) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '跑步',
                        '5': '爬山',
                        '6': '骑行',
                        '7': '桌球',
                        '8': '麦霸'
                    };
                    return config[abc];
                }
            },
            {
                title: '生日',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                width: 120,
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                width: 80,
                dataIndex: 'time',
                fixed: 'right'
            }
        ];

        return (

            <div>
                <Card title="表头固定表格" className="card-wrap">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{y: 240}}
                    />
                </Card>

                <Card title="左侧固定表格" className="card-wrap">
                    <Table
                        bordered
                        columns={columns2}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{x: 1500, y: 240}}
                    />
                </Card>
            </div>
        )
    }
}

export default HighTable;