import React, {Component} from 'react';
import { Layout, Menu, Icon } from 'antd';
import {Link} from 'react-router-dom'

const { Sider } = Layout;

class CusSider extends Component {
  render(){
    return (
      <Sider width={200} style={{ background: '#fff' }}  >
        <Menu
          mode="inline"
          style={{ height: '100%', borderRight: 0 }}
        >
        <Menu.Item key="home">
           <Link  to="/home">
             <Icon type="home" /><span>首页</span>
           </Link>
        </Menu.Item>
        <Menu.Item key="article">
           <Link  to="/home/article">
             <Icon type="book" /><span>文章分享</span>
           </Link>
        </Menu.Item>
        <Menu.Item key="resource">
           <Link  to="/home/resource">
             <Icon type="cloud-download" /><span>资源共享</span>
           </Link>
        </Menu.Item>
        <Menu.Item key="aboutme">
           <Link  to="/home/about">
             <Icon type="contacts" /><span>关于我</span>
           </Link>
        </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}
export default CusSider;
