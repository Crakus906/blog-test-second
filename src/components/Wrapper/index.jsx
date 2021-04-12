import React from 'react';
import { Link } from 'react-router-dom';
import { InputNumber, Layout, Menu } from 'antd';
import { ROOT } from '../../constants/routes';

import './style.scss';

export default function Wrapper(props) {

    const { children } = props;

    const { Header, Content, Footer } = Layout;
    
    return (
        <Layout className="layout">
            <Header>
            <div />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Link to={ROOT}><div className="logo" >Blog</div></Link>
            </Menu>
            </Header>
            <Content>
                <div className="site-layout-content">{children}</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}