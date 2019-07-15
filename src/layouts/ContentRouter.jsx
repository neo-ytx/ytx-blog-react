import React, {Component} from 'react';
import { Route, Switch} from 'react-router-dom'
import Login from '../components/login/Login'

class ContentRouter extends Component {
  render(){
    return (
      <Switch>
          <Route path="/login" component={Login}  />
      </Switch>
    )
  }
}

export default ContentRouter;
