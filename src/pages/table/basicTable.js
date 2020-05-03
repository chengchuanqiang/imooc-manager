import React from 'react';
import {Card, Table, Modal, Button, message} from 'antd';
import axios from '../../axios'
import Utils from '../../utils/utils'

import './index.less'

class BasicTable extends React.Component {

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
                    selectedRowKeys: [],
                    selectedRows: null,
                    pagination: Utils.pagination(res, (current) => {
                        _this.params.page = current;
                        this.request();
                    })
                });
            }
        })
    };

    onRowClick = (record, index) => {
        let selectKey = [index];
        Modal.info({
            title: '信息',
            content: `用户名：${record.userName},用户爱好：${record.interest}`
        });
        this.setState({
            selectedRowKeys: selectKey,
            selectedItem: record
        })
    };

    // 多选执行删除动作
    handleDelete = (() => {
        let rows = this.state.selectedRows;
        let ids = [];
        rows.map((item) => {
            ids.push(item.id)
        });
        Modal.confirm({
            title: '删除提示',
            content: `您确定要删除这些数据吗？${ids.join(',')}`,
            onOk: () => {
                message.success('删除成功');
                this.request();
            }
        })
    });

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

        const {selectedRowKeys} = this.state;
        const rowSelection = {
            type: 'radio',
            selectedRowKeys: selectedRowKeys
        };

        const rowCheckSelection = {
            type: 'checkbox',
            selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
                this.setState({
                    selectedRowKeys: selectedRowKeys,
                    selectedRows: selectedRows
                })
            }
        };

        return (

            <div className="card-group-wrap">

                <Card title="基础表格" className="card-wrap">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>

                <Card title="动态数据渲染表格-mock" className="card-wrap">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>

                <Card title="mock-单选" className="card-wrap">
                    <Table
                        rowSelection={rowSelection}
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}

                        onRow={(record, index) => {
                            return {
                                onClick: () => {
                                    this.onRowClick(record, index);
                                }
                            };
                        }}
                    />
                </Card>

                <Card title="Mock-多选" className="card-wrap">
                    <div style={{marginBottom: 10}}>
                        <Button onClick={this.handleDelete}>删除</Button>
                    </div>
                    <Table
                        bordered
                        rowSelection={rowCheckSelection}
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>

                <Card title="Mock-分页" className="card-wrap">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={this.state.pagination}
                    />
                </Card>

            </div>
        )
    }
}

export default BasicTable;