import React, {Component} from 'react';
import { Menu, Icon } from 'antd';
import {Link} from 'react-router-dom'

class HeadNav extends Component {
  state = {
    current: 'home',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
       <div id="HeadNav">
           <Menu
               theme="dark"
               mode="horizontal"
               style={{ lineHeight: '64px' }}
               onClick={this.handleClick}
           >
               <Menu.Item key="home">
                  <Link  to="/home">
                    <Icon type="home" />首页
                  </Link>
               </Menu.Item>
               <Menu.Item key="article">
                  <Link  to="/home/article">
                    <Icon type="book" />文章分享
                  </Link>
               </Menu.Item>
               <Menu.Item key="resource">
                  <Link  to="/home/resource">
                    <Icon type="cloud-download" />资源共享
                  </Link>
               </Menu.Item>
               <Menu.Item key="aboutme">
                  <Link  to="/home/about">
                    <Icon type="contacts" />关于我
                  </Link>
               </Menu.Item>
               <Link  to="/login">
                 <Icon type="contacts" />登录
               </Link>
           </Menu>


       </div>
    );
  }
}

export default HeadNav;
