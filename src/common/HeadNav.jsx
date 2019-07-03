import React, {Component} from 'react';
import { Menu, Icon } from 'antd';
import './HeadNav.less'
import {Link} from 'react-router-dom'

const { SubMenu } = Menu;

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
           <div className="nav-wrap">
               <div className="nav-logo-wrap">
                   <Icon type="global" className="nav-logo" />
               </div>
               <div className="nav-list-wrap">
                   <Menu
                       onClick={this.handleClick}
                       selectedKeys={[this.state.current]}
                       mode="horizontal"
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
                   </Menu>
               </div>
           </div>
       </div>
    );
  }
}

export default HeadNav;
