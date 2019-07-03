import React, {Component} from 'react';
import './DefaultLayout.less'
import HeadNav from '../../common/HeadNav'
import {Route} from 'react-router-dom'
import Home from '../../routes/Home/Home'
import Article from '../../routes/Article/Article'
import Resource from '../../routes/Resource/Resource'
import About from '../../routes/About/About'



export default class DefaultLayout extends Component {
  render(){
    return (
      <div id="DefaultLayout">
        <HeadNav />
        <div>
          <Route path={this.props.match.url+'/'} component={Home} exact/>
          <Route path={this.props.match.url+'/article'} component={Article} />
          <Route path={this.props.match.url+'/resource'} component={Resource} />
          <Route path={this.props.match.url+'/about'} component={About} />
        </div>
      </div>
    )
  }
}
