import React from 'react';
import {Card, Button, message} from 'antd';

import './ui.less'

class Messages extends React.Component {

    showMessage = (type) => {
        message[type]('新增数据成功！');
    };


    render() {

        return (
            <div>
                <Card title="全局提示" className="card-wrap">
                    <Button type="primary" onClick={() => this.showMessage("success")}>Success</Button>
                    <Button type="primary" onClick={() => this.showMessage("info")}>info</Button>
                    <Button type="primary" onClick={() => this.showMessage("warning")}>warning</Button>
                    <Button type="primary" onClick={() => this.showMessage("error")}>error</Button>
                    <Button type="primary" onClick={() => this.showMessage("loading")}>loading</Button>
                </Card>

            </div>
        )
    }
}

export default Messages;