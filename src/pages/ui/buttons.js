import React from 'react';
import {Card, Button, Radio} from 'antd';
import {
    PlusOutlined, EditOutlined, DeleteOutlined,
    SearchOutlined, DownloadOutlined

} from '@ant-design/icons';


import './ui.less';


class Buttons extends React.Component {

    state = {
        loading: false,
        iconLoading: false,
    };

    enterLoading = () => {
        this.setState({loading: true});
    };

    removeLoading = () => {
        this.setState({loading: false});
    };

    render() {
        return (
            <div>
                <Card title="基础按钮" className="card-wrap">
                    <Button type="primary">Imooc</Button>
                    <Button>Imooc</Button>
                    <Button type="dashed">Imooc</Button>
                    <Button danger>Imooc</Button>
                    <Button disabled>Imooc</Button>
                </Card>

                <Card title="图形按钮" className="card-wrap">
                    <Button icon={<PlusOutlined />}>创建</Button>
                    <Button icon={<EditOutlined />}> 修改</Button>
                    <Button icon={<DeleteOutlined />}>删除</Button>
                    <Button icon={<SearchOutlined/>} shape="circle"/>
                    <Button icon={<SearchOutlined />} type="primary">搜索</Button>
                    <Button icon={<DownloadOutlined/>} type="primary">下载</Button>
                </Card>

                <Card title="Loading按钮" className="card-wrap">
                    <Button type="primary" loading>确定</Button>
                    <Button type="primary" shape="circle" loading/>

                    <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>点击加载</Button>
                    <Button type="primary" loading={this.state.loading} shape="circle"/>
                    <Button type="primary" onClick={this.removeLoading}>关闭</Button>
                </Card>

                <Card title="按钮组" className="card-wrap">
                    <Radio.Group>
                        <Radio.Button value="large">Large</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="small">Small</Radio.Button>
                    </Radio.Group>
                </Card>

                <Card title="按钮尺寸" className="card-wrap">
                    <Button type="primary" size="large">Large</Button>
                    <Button type="primary" size="default">Default</Button>
                    <Button type="primary" size="small">Small</Button>
                </Card>

            </div>
        )
    }
}

export default Buttons;