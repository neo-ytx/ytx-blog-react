import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import HeadNav from './layouts/HeadNav'
import CusSider from './layouts/CusSider'
import ContentRouter from './layouts/ContentRouter'
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Router>
        <Layout className="layout">
          <Header theme="light">
            <HeadNav />
          </Header>
          <Layout>
            <CusSider />
            <Content style={{ padding: '0 50px' }}>
              <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                <p>
                啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
                </p>
                <ContentRouter />
              </div>
            </Content>
          </Layout>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
