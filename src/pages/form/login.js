import React from 'react';
import {Card, Form, Input, Button, message, Checkbox} from 'antd';

import {UserOutlined, LockOutlined} from '@ant-design/icons';

import './index.less'

const FromItem = Form.Item;
class FormLogin extends React.Component {

    onFinish = (userInfo) => {
        console.log('Received values of form: ', userInfo);

        message.success(`用户名 ${userInfo.username}, 密码 ${userInfo.password}`);
    };

    render() {
        return (

            <div>

                <Card title="登录行内表单" className="card-wrap">

                    <Form layout="inline">

                        <FromItem>
                            <Input placeholder="请输入用户名"/>
                        </FromItem>

                        <FromItem>
                            <Input placeholder="请输入密码"/>
                        </FromItem>

                        <FromItem>
                            <Button type="primary">登录</Button>
                        </FromItem>

                    </Form>

                </Card>

                <Card title="登录水平表单" className="card-wrap">

                    <Form
                        layout="horizontal"
                        className="login-form"
                        initialValues={{remember: true}}
                        onFinish={this.onFinish}
                    >

                        <FromItem
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: "用户名不能为空！"
                                },
                                {
                                    min: 1,
                                    max: 10,
                                    message: "长度不在范围内！(1-10)"
                                },
                                {
                                    pattern: /^\w+$/g,
                                    message: "用户名称必须为字母或数字！"
                                }
                            ]}
                        >

                            <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="请输入用户名"/>
                        </FromItem

                        >

                        <FromItem
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "密码不能为空！"
                                }
                            ]}
                        >

                            <Input
                                type="password"
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                placeholder="请输入密码"
                            />

                        </FromItem>

                        <FromItem>
                            <FromItem name="remember" valuePropName="checked" noStyle>
                                <Checkbox>记住密码</Checkbox>
                            </FromItem>

                            <a className="login-form-forgot" href="#">
                                忘记密码
                            </a>
                        </FromItem>

                        <FromItem>
                            <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                        </FromItem>

                    </Form>

                </Card>

            </div>
        )
    }
}

export default FormLogin;