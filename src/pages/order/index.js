import React from "react";
import {Button, Card, Form, message, Modal, Select, Table, DatePicker} from "antd";
import axios from "./../../axios/index";
import Utils from "./../../utils/utils";

import './index.less';

const FormItem = Form.Item;
const Option = Select.Option;
const {RangePicker} = DatePicker;

class Order extends React.Component {

    state = {
        orderList: [],
        orderInfo: {},
        orderConfirmVisible: false,
        selectedItem: undefined,
        selectedRowKeys: []
    };

    params = {
        page: 1
    };

    componentDidMount() {
        this.requestList()
    }

    requestList = () => {
        axios.ajax({
            "url": "order/list",
            data: {
                params: {
                    page: this.params.page
                }
            }
        }).then((res) => {

            let _this = this;

            //数据添加key
            res.result.list.map((item, index) => {
                item.key = index;
            });

            if (res.code == 0) {
                this.setState({
                    orderList: res.result.list,
                    pagination: Utils.pagination(res, (current) => {
                        _this.state.page = current;
                        _this.requestList();
                    })
                });
            }

        });
    };

    handleSearch = (searchInfo) => {

        console.log(searchInfo);
        this.requestList();

    };

    onRowClick = (record, index) => {
        let selectKey = [index];
        this.setState({
            selectedRowKeys: selectKey,
            selectedItem: record
        })
    };

    // 结束订单
    handleFinishOrder = () => {
        let item = this.state.selectedItem;
        axios.ajax({
            url: '/order/finishOrder',
            data: {
                params: {
                    orderId: item.id
                }
            }
        }).then((res) => {
            if (res.code === 0) {
                message.success('订单结束成功');
                this.setState({
                    orderConfirmVisible: false,
                    selectedItem: undefined,
                    selectedRowKeys: []
                });
                this.requestList();
            }
        })
    };

    // 订单结束提交
    handleConfirm = () => {

        let item = this.state.selectedItem;
        if (!item) {
            Modal.info({
                title: "信息",
                content: "请选择一条订单结束"
            });
            return;
        }

        axios.ajax({
            url: "/order/ebikeInfo",
            data: {
                params: {
                    orderId: item.id
                }
            }
        }).then((res) => {
            if (res.code === 0) {
                this.setState({
                    orderInfo: res.result,
                    orderConfirmVisible: true
                });
            }
        });
    };

    // 订单详情
    openOrderDetail = () => {
        let item = this.state.selectedItem;
        if (!item) {
            Modal.info({
                title: "信息",
                content: "请先选择一条订单"
            });
            return;
        }

        // 打新页面 订单详情
        window.open("/#/common/order/detail/" + item.id, '_blank');
    };


    render() {

        const columns = [
            {
                title: "订单id",
                dataIndex: "id"
            },
            {
                title: "订单编号",
                dataIndex: "orderSn"
            },
            {
                title: "车辆编号",
                dataIndex: "bikeSn"
            },
            {
                title: "用户名",
                dataIndex: "userName",
            },
            {
                title: "手机号",
                dataIndex: "mobile"
            },
            {
                title: "里程",
                dataIndex: "distance",
                render(distance){
                    return distance / 1000 + "Km"
                }
            },
            {
                title: "行驶时长",
                dataIndex: "totalTime"
            },
            {
                title: "状态",
                dataIndex: "status",
                render(status){
                    return status === 1 ? "进行中" : "行程结束";
                }
            },
            {
                title: "开始时间",
                dataIndex: "startTime"
            },
            {
                title: "结束时间",
                dataIndex: "endTime"
            },
            {
                title: "订单金额",
                dataIndex: "totalFee"
            },
            {
                title: "实付金额",
                dataIndex: "userPay"
            },
        ];

        const selectedRowKeys = this.state.selectedRowKeys;
        const rowSelection = {
            type: 'radio',
            selectedRowKeys: selectedRowKeys
        };

        const formItemLayout = {
            labelCol: {span: 5},
            wrapperCol: {span: 19}
        };

        return (
            <div className="order-wrap">
                <Card className="card-wrap">
                    <FilterForm search={this.handleSearch}/>
                </Card>

                <Card>
                    <Button type="primary" onClick={this.openOrderDetail}>订单详情</Button>
                    <Button type="primary" style={{marginLeft: 10}} onClick={this.handleConfirm}>结束订单</Button>
                </Card>

                <div className="content-wrap">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.orderList}
                        pagination={this.state.pagination}
                        rowSelection={rowSelection}
                        onRow={(record, index) => {
                            return {
                                onClick: () => {
                                    this.onRowClick(record, index);
                                }
                            };
                        }}
                    />
                </div>

                <Modal
                    title="结束订单"
                    visible={this.state.orderConfirmVisible}
                    onCancel={() => {
                        this.setState({
                            orderConfirmVisible: false
                        })
                    }}
                    onOk={this.handleFinishOrder}
                >
                    <Form layout="horizontal">
                        <FormItem label="车辆编号" {...formItemLayout}>
                            {this.state.orderInfo.bikeSn}
                        </FormItem>
                        <FormItem label="剩余电量" {...formItemLayout}>
                            {this.state.orderInfo.battery + '%'}
                        </FormItem>
                        <FormItem label="行程开始时间" {...formItemLayout}>
                            {this.state.orderInfo.startTime}
                        </FormItem>
                        <FormItem label="当前位置" {...formItemLayout}>
                            {this.state.orderInfo.location}
                        </FormItem>

                    </Form>
                </Modal>
            </div>
        );
    }

}

class FilterForm extends React.Component {

    filterFormRef = React.createRef();
    onFinish = (searchInfo) => {
        this.props.search(searchInfo);
    };

    onReSet = () => {
        this.filterFormRef.current.resetFields();
    };

    handleRangePickerChange = (date) => {
        console.log(date);
    };

    render() {
        return (
            <Form
                layout="inline"
                onFinish={this.onFinish}
                initialValues={{
                    cityId: "",
                    status: ""
                }}
                ref={this.filterFormRef}
            >
                <FormItem label="城市" name="cityId">
                    <Select
                        placeholder="全部"
                        style={{width: 100}}
                    >
                        <Option value="">全部</Option>
                        <Option value="1">北京市</Option>
                        <Option value="2">上海市</Option>
                        <Option value="3">广州市</Option>
                        <Option value="4">深圳市</Option>
                    </Select>
                </FormItem>

                <FormItem label="订单状态" name="status">
                    <Select
                        placeholder="全部"
                        style={{width: 100}}
                    >
                        <Option value="">全部</Option>
                        <Option value="1">进行中</Option>
                        <Option value="2">行程结束</Option>
                    </Select>
                </FormItem>

                <FormItem label="订单时间" name="orderTime">
                    <RangePicker
                        onChange={this.handleRangePickerChange}
                    />
                </FormItem>

                <FormItem>
                    <Button type="primary" style={{margin: '0 20px'}} htmlType="submit">查询</Button>
                    <Button onClick={this.onReSet}>重置</Button>
                </FormItem>
            </Form>
        )
    }
}

export default Order;