import React from 'react';
import {Card, Button, Modal} from 'antd';

import './ui.less'

class Models extends React.Component {

    state = {
        showModel1: false,
        showModel2: false,
        showModel3: false,
        showModel4: false
    };

    handleShowModal = (type) => {
        this.setState({
            [type]: true
        })
    };

    handleConfirm = (type) => {
        Modal[type]({
            title: "确认",
            content: "你确定你学会了吗？",
            onOk() {
                console.log('Ok')
            },
            onCancel(){
                console.log('Cancel')
            }
        });
    };

    render() {
        return (
            <div className="card-group-wrap">
                <Card title="基础模态框" className="card-wrap">
                    <Button type="primary" onClick={() => this.handleShowModal('showModel1')}>open</Button>
                    <Button type="primary" onClick={() => this.handleShowModal('showModel2')}>自定义页脚</Button>
                    <Button type="primary" onClick={() => this.handleShowModal('showModel3')}>顶部20px弹框</Button>
                    <Button type="primary" onClick={() => this.handleShowModal('showModel4')}>水平居中</Button>
                </Card>

                <Modal
                    title="Basic Modal"
                    visible={this.state.showModel1}
                    onOk={() => {
                        this.setState({
                            showModel1: false
                        })
                    }}
                    onCancel={() => {
                        this.setState({
                            showModel1: false
                        })
                    }}
                >
                    <p>欢迎使用弹框</p>
                </Modal>


                <Modal
                    title="Basic Modal"
                    visible={this.state.showModel2}
                    onOk={() => {
                        this.setState({
                            showModel2: false
                        })
                    }}
                    onCancel={() => {
                        this.setState({
                            showModel2: false
                        })
                    }}
                    okText="好的"
                    cancelText="取消"
                >
                    <p>欢迎使用弹框</p>
                </Modal>

                <Modal
                    title="Basic Modal"
                    visible={this.state.showModel3}
                    onOk={() => {
                        this.setState({
                            showModel3: false
                        })
                    }}
                    onCancel={() => {
                        this.setState({
                            showModel3: false
                        })
                    }}
                    style={{top: 20}}
                >
                    <p>欢迎使用弹框</p>
                </Modal>

                <Modal
                    title="Basic Modal"
                    visible={this.state.showModel4}
                    onOk={() => {
                        this.setState({
                            showModel4: false
                        })
                    }}
                    onCancel={() => {
                        this.setState({
                            showModel4: false
                        })
                    }}
                    centered
                >
                    <p>欢迎使用弹框</p>
                </Modal>


                <Card title="信息确认框" className="card-wrap">
                    <Button type="primary" onClick={() => this.handleConfirm('confirm')}>Confirm</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('info')}>info</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('success')}>success</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('warning')}>waring</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('error')}>error</Button>
                </Card>

            </div>
        )
    }
}


export default Models;