import React from 'react';
import {Card, Table} from 'antd';
import axios from '../../axios'

import './index.less'

class BasicTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            dataSource2: []
        };
    }

    componentDidMount() {

        const dataSource = [
            {
                id: '1',
                userName: 'ccq',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '北京市海淀区奥林匹克公园',
                time: '09:00'

            },
            {
                id: '2',
                userName: 'ccq',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '北京市海淀区奥林匹克公园',
                time: '09:00'

            },
            {
                id: '3',
                userName: 'ccq',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '北京市海淀区奥林匹克公园',
                time: '09:00'

            }
        ];

        this.setState({
            dataSource: dataSource
        });

        this.request();

    }

    // 动态获取mock数据
    request = () => {
        axios.ajax({
            url: '/table/list1',
            data: {
                params: {
                    page: 1
                }
            }
        }).then((res) => {
            if (res.code == 0) {
                this.setState({
                    dataSource2: res.result.list
                });
            }
        })
    };

    render() {

        const columns = [
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'userName'
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

        return (

            <div>

                <Card title="基础表格" className="card-wrap">

                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />

                </Card>

                <Card title="动态数据渲染表格" className="card-wrap">

                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />

                </Card>


            </div>
        )
    }
}

export default BasicTable;