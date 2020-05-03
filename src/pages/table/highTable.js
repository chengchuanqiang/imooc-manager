import React from 'react';
import {Card, Table, Modal, Button, message, Badge} from 'antd';
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
            url: '/table/high/list',
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

    handleChange = (pagination, filters, sorter, extra) => {
        this.setState({
            sortOrder: sorter.order
        });
    };

    handleDelete = (text, record) => {
        let id = record.id;

        Modal.confirm({
            title: "确认",
            content: '您确认删除此条数据吗？id=' + id,
            onOk: () => {
                message.success("删除成功");
                this.request();
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

        const columns3 = [
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'userName',
            },
            {
                title: '年龄',
                dataIndex: 'age',
                sorter: (a, b) => {
                    return a.age - b.age;
                },
                sortOrder: this.state.sortOrder
            },
            {
                title: '性别',
                dataIndex: 'sex',
                render(sex){
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                dataIndex: 'state',
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
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                dataIndex: 'time'
            }
        ];

        const columns4 = [
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'userName',
            },
            {
                title: '年龄',
                dataIndex: 'age',
            },
            {
                title: '性别',
                dataIndex: 'sex',
                render(sex){
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                dataIndex: 'state',
                render(state){
                    let config = {
                        '1': <Badge status="success" text="咸鱼一条"/>,
                        '2': <Badge status="default" text="风华浪子"/>,
                        '3': <Badge status="processing" text="北大才子"/>,
                        '4': <Badge status="warning" text="百度FE"/>,
                        '5': <Badge status="error" text="创业者"/>
                    };
                    return config[state];
                }
            },
            {
                title: '爱好',
                dataIndex: 'interest',
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
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                dataIndex: 'address'
            },
            {
                title: '操作',
                render: (text, record) => {
                    return <Button size="small" type="primary" onClick={() => {
                        this.handleDelete(text, record)
                    }}>删除</Button>
                }
            }
        ];


        return (

            <div className="card-group-wrap">
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

                <Card title="排序" className="card-wrap">
                    <Table
                        bordered
                        columns={columns3}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        onChange={this.handleChange}
                    />
                </Card>

                <Card title="操作按钮" className="card-wrap">
                    <Table
                        bordered
                        columns={columns4}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>
            </div>
        )
    }
}

export default HighTable;