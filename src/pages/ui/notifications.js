import React from 'react';
import {Card, Button, notification} from 'antd';

import './ui.less'

class Notifications extends React.Component {


    openNotification = (type, placement) => {

        if (placement) {
            notification.config({
                placement: placement
            })
        }

        notification[type]({
            message: 'success',
            description: '哈哈哈哈哈，这是ok的',
        });
    };


    render() {

        return (
            <div>
                <Card title="通知提醒框" className="card-wrap">
                    <Button type="primary" onClick={() => this.openNotification('success')}>success</Button>
                    <Button type="primary" onClick={() => this.openNotification('info')}>info</Button>
                    <Button type="primary" onClick={() => this.openNotification('warning')}>warning</Button>
                    <Button type="primary" onClick={() => this.openNotification('error')}>error</Button>
                </Card>

                <Card title="通知提醒框位置" className="card-wrap">
                    <Button type="primary" onClick={() => this.openNotification('success', 'topLeft')}>topLeft</Button>
                    <Button type="primary" onClick={() => this.openNotification('info', 'topRight')}>topRight</Button>
                    <Button type="primary"
                            onClick={() => this.openNotification('warning', 'bottomLeft')}>bottomLeft</Button>
                    <Button type="primary"
                            onClick={() => this.openNotification('error', 'bottomRight')}>bottomRight</Button>
                </Card>


            </div>
        )
    }
}

export default Notifications;