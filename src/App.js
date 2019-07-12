import React from 'react';
import './App.css';
import RouterWrap from './router'
import HeadNav from './common/HeadNav'
import {BrowserRouter as Router,HashRouter, Route, Switch} from 'react-router-dom'
import Login from './components/login/Login'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <HeadNav />
          <HashRouter>
              <Switch>
                  <Route path="/" component={Login}  exact />
              </Switch>
          </HashRouter>
        </Router>
      </header>
    </div>
  );
}

export default App;
