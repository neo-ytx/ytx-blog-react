import React, {Component} from 'react';
import './DefaultLayout.less'
import HeadNav from '../../common/HeadNav'
export default class DefaultLayout extends Component {
  render(){
    return (
      <div id="DefaultLayout">
        <HeadNav />
      </div>
    )
  }
}
