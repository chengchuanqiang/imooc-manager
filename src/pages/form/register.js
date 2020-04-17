import React from 'react';
import {
    Card,
    Form,
    Input,
    InputNumber,
    Button,
    Checkbox,
    message,
    Radio,
    Select,
    Switch,
    DatePicker,
    TimePicker,
    Upload
} from 'antd';
import {LoadingOutlined, PlusOutlined} from '@ant-design/icons';

import moment from 'moment'

import './index.less'

const FromItem = Form.Item;
const RadioGroup = Radio.Group;
const {Option} = Select;
const TextArea = Input.TextArea;
class FormRegister extends React.Component {

    onFinish = (userInfo) => {

        console.log('Received values of form: ', userInfo);

        const userInfoJson = JSON.stringify(userInfo);

        message.success(`接受信息：${userInfoJson}`);

        console.log(userInfo);
    };

    state = {
        loading: false,
    };

    getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    };

    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({loading: true});
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl: imageUrl,
                    loading: false,
                }),
            );
        }
    };


    render() {

        const formItemLayout = {
            labelCol: {
                xs: 24,
                sm: 4
            },
            wrapperCol: {
                xs: 24,
                sm: 12
            }
        };

        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 12,
                    offset: 4,
                },
            },
        };

        const uploadButton = (
            <div>
                {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const {imageUrl} = this.state;

        return (

            <div>

                <Card title="注册表单" className="card-wrap">
                    <Form
                        initialValues={{
                            sex: '2',
                            age: 20,
                            state: '2',
                            interest: ['2', '3'],
                            birthday: moment('2018-01-08'),
                            address: '北京市海淀区奥林匹克公园'
                        }}
                        onFinish={this.onFinish}
                    >
                        <FromItem
                            label="用户名"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: "用户名不能为空！"
                                }
                            ]}
                            hasFeedback
                            {...formItemLayout}
                        >
                            <Input placeholder="请输入用户名"/>

                        </FromItem>

                        <FromItem
                            label="密码"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "密码不能为空！"
                                }
                            ]}
                            hasFeedback
                            {...formItemLayout}
                        >

                            <Input.Password placeholder="请输入密码"/>
                        </FromItem>

                        <FromItem
                            name="sex"
                            label="性别"
                            rules={[
                                {
                                    required: true,
                                    message: "性别不能为空！"
                                }
                            ]}
                            {...formItemLayout}
                        >
                            <RadioGroup>
                                <Radio value="1">男</Radio>
                                <Radio value="2">女</Radio>
                            </RadioGroup>
                        </FromItem>

                        <FromItem
                            label="年龄"
                            name="age"
                            rules={[
                                {
                                    required: true,
                                    message: "年龄不能为空！"
                                }
                            ]}
                            {...formItemLayout}
                        >
                            <InputNumber min={1} max={1000}/>
                        </FromItem>

                        <FromItem
                            label="当前状态"
                            name="state"
                            rules={[
                                {
                                    required: true,
                                    message: "当前状态不能为空！"
                                }
                            ]}
                            {...formItemLayout}
                        >

                            <Select>
                                <Option value="1">咸鱼一条</Option>
                                <Option value="2">风华浪子</Option>
                                <Option value="3">北大才子</Option>
                                <Option value="4">百度FE</Option>
                                <Option value="5">创业者</Option>
                            </Select>

                        </FromItem>

                        <FromItem
                            label="爱好"
                            name="interest"
                            rules={[
                                {
                                    required: true,
                                    message: "爱好不能为空！"
                                }
                            ]}
                            {...formItemLayout}
                        >
                            <Select mode="multiple">
                                <Option value="1">跑步</Option>
                                <Option value="2">游泳</Option>
                                <Option value="3">滑雪</Option>
                                <Option value="4">蹦极</Option>
                                <Option value="5">溜冰</Option>
                                <Option value="6">爬山</Option>
                                <Option value="7">桌球</Option>
                                <Option value="8">桌球</Option>
                                <Option value="9">桌球</Option>
                                <Option value="10">桌球</Option>
                                <Option value="11">桌球</Option>
                            </Select>
                        </FromItem>

                        <FromItem
                            label="是否已婚"
                            name="isMarried"
                            {...formItemLayout}
                        >
                            <Switch defaultChecked/>
                        </FromItem>

                        <FromItem
                            label="生日"
                            name="birthday"
                            {...formItemLayout}
                        >
                            <DatePicker
                                showTime
                                format="YYYY-MM-DD HH:mm:ss"
                            />
                        </FromItem>

                        <FromItem
                            label="联系地址"
                            name="address"
                            {...formItemLayout}
                        >
                            <TextArea
                                placeholder="Autosize height with minimum and maximum number of lines"
                                autoSize={{minRows: 4, maxRows: 8}}
                            />
                        </FromItem>

                        <FromItem
                            label="早起时间"
                            name="time"
                            {...formItemLayout}
                        >
                            <TimePicker/>
                        </FromItem>

                        <FromItem
                            label="头像"
                            name="userImg"
                            {...formItemLayout}
                        >
                            <Upload
                                listType="picture-card"
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                showUploadList={false}
                                onChange={this.handleChange}
                            >
                                {imageUrl ? <img src={imageUrl} alt="avatar" style={{width: '100%'}}/> : uploadButton}

                            </Upload>
                        </FromItem>

                        <FromItem {...tailFormItemLayout}>
                            <Checkbox>我已阅读<a href="#">慕课协议</a></Checkbox>

                        </FromItem>

                        <FromItem {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit">注册</Button>
                        </FromItem>
                    </Form>

                </Card>

            </div>
        )
    }
}

export default FormRegister;