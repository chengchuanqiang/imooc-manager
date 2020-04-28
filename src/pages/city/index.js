import React from "react";
import {Button, Card, Form, message, Modal, Select, Table} from "antd";
import axios from "./../../axios/index";
import Utils from "./../../utils/utils";

import "./index.less";

const FormItem = Form.Item;
const Opinion = Select.Option;

class City extends React.Component {

    formRef = React.createRef();

    state = {
        cityList: [],
        isShowOpenCity: false
    };
    params = {
        page: 1
    };

    componentDidMount() {

        this.requestList();

    }

    requestList() {
        axios.ajax({
            "url": "/city/list",
            data: {
                params: {
                    page: this.params.page
                }
            }
        }).then((res) => {
            let _this = this;

            // 给数据动态添加key
            res.result.list.map((item, index) => {
                item.key = index;
            });

            if (res.code == 0) {
                this.setState({
                    cityList: res.result.list,
                    pagination: Utils.pagination(res, (current) => {
                        _this.params.page = current;
                        _this.requestList();
                    })
                });
            }
        })
    }

    // 开通城市
    handleOpenCity = () => {

        this.setState({
            isShowOpenCity: true
        });

    };

    // 开通城市提交
    handleOpenCitySubmit = () => {
        let openCity = this.formRef.current.getFieldsValue();

        axios.ajax({
            url: 'city/open',
            data: {
                params: openCity
            }
        }).then((res) => {
            if (res.code == '0') {
                message.success('开通成功');

                console.log(openCity);
                this.setState({
                    isShowOpenCity: false
                });

                this.requestList();
            }
        });
    };

    handleSearch = (userInfo) => {
        console.log('Received values of form: ', userInfo);
        this.requestList();
    };

    render() {

        const columns = [
            {
                title: "城市id",
                dataIndex: "id"
            },
            {
                title: "城市名称",
                dataIndex: "name"
            },
            {
                title: "用车模式",
                dataIndex: "mode",
                render(mode){
                    return mode == 1 ? "停车点" : "禁停区";
                }
            },
            {
                title: "营运模式",
                dataIndex: "opMode",
                render(mode){
                    return mode == 1 ? "自营" : "加盟";
                }
            },
            {
                title: "授权加盟商",
                dataIndex: "franchiseName"
            },
            {
                title: "城市管理员",
                dataIndex: "cityAdmins",
                render(arr){
                    return arr.map((item) => {
                        return item.userName;
                    }).join('，');
                }
            },
            {
                title: "城市开通时间",
                dataIndex: "openTime"
            },
            {
                title: "操作时间",
                dataIndex: "updateTime",
                render(updateTime){
                    return Utils.formatDate(updateTime);
                }
            },
            {
                title: "操作人",
                dataIndex: "sysUserName"
            },
        ];

        const formItemLayout = {
            labelCol: {
                span: 8
            },
            wrapperCol: {
                span: 12
            }

        };

        return (
            <div className="filter-wrap">
                <Card className="card-wrap">
                    <FilterForm handleSearch={this.handleSearch}/>
                </Card>

                <Card>
                    <Button type="primary" onClick={this.handleOpenCity}>开通城市</Button>
                </Card>

                <div className="content-wrap">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.cityList}
                        pagination={this.state.pagination}
                    />
                </div>

                <Modal
                    title="开通城市"
                    visible={this.state.isShowOpenCity}
                    onCancel={() => {
                        this.setState({
                            isShowOpenCity: false
                        })
                    }}
                    onOk={this.handleOpenCitySubmit}
                >
                    <Form
                        layout="horizontal"
                        initialValues={{
                            cityId: "1",
                            mode: "1",
                            useMode: "1"
                        }}

                        ref={this.formRef}
                    >
                        <FormItem label="选择城市" name="cityId"{...formItemLayout}>
                            <Select>
                                <Opinion value="">全部</Opinion>
                                <Opinion value="1">北京市</Opinion>
                                <Opinion value="2">上海市</Opinion>
                                <Opinion value="3">广州市</Opinion>
                                <Opinion value="4">深圳市</Opinion>
                            </Select>
                        </FormItem>

                        <FormItem label="营用模式" name="mode" {...formItemLayout}>
                            <Select>
                                <Opinion value="1">自营</Opinion>
                                <Opinion value="2">加盟</Opinion>
                            </Select>
                        </FormItem>

                        <FormItem label="用车模式" name="useMode" {...formItemLayout}>
                            <Select>
                                <Opinion value="1">指定停车点</Opinion>
                                <Opinion value="2">禁停区</Opinion>
                            </Select>
                        </FormItem>
                    </Form>

                </Modal>
            </div>
        )
    }

}

class FilterForm extends React.Component {

    filterFormRef = React.createRef();

    onFinish = (userInfo) => {
        this.props.handleSearch(userInfo);
    };

    onReSet = () => {
        this.filterFormRef.current.resetFields();
    };

    render() {
        return (
            <Form
                layout="inline"
                onFinish={this.onFinish}
                initialValues={{
                    cityId: "1",
                    mode: "1",
                    opMode: "1",
                    authStatus: "1",
                }}
                ref={this.filterFormRef}
            >
                <FormItem label="城市" name="cityId">
                    <Select
                        placeholder="全部"
                        style={{width: 100}}
                    >
                        <Opinion value="">全部</Opinion>
                        <Opinion value="1">北京市</Opinion>
                        <Opinion value="2">上海市</Opinion>
                        <Opinion value="3">广州市</Opinion>
                        <Opinion value="4">深圳市</Opinion>
                    </Select>
                </FormItem>

                <FormItem label="用车模式" name="mode">
                    <Select
                        placeholder="全部"
                        style={{width: 150}}
                    >
                        <Opinion value="">全部</Opinion>
                        <Opinion value="1">指定停车点模式</Opinion>
                        <Opinion value="2">禁停区模式</Opinion>
                    </Select>
                </FormItem>

                <FormItem label="营运模式" name="opMode">
                    <Select
                        placeholder="全部"
                        style={{width: 80}}
                    >
                        <Opinion value="">全部</Opinion>
                        <Opinion value="1">自营</Opinion>
                        <Opinion value="2">加盟</Opinion>
                    </Select>
                </FormItem>

                <FormItem label="加盟商授权状态" name="authStatus">
                    <Select
                        placeholder="全部"
                        style={{width: 100}}
                    >
                        <Opinion value="">全部</Opinion>
                        <Opinion value="1">已授权</Opinion>
                        <Opinion value="2">未授权</Opinion>
                    </Select>
                </FormItem>

                <FormItem>
                    <Button type="primary" style={{margin: '0 20px'}} htmlType="submit">查询</Button>
                    <Button onClick={this.onReSet}>重置</Button>
                </FormItem>
            </Form>
        )
    }
}

export default City;