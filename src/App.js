import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";

import './App.css';

import { Header, Nav, LessonBox } from './components';
import { Home, Lesson } from './views';

class NoMatch extends Component {
    render() {
        return (
            <div>
                <p>Nothing to see here.</p>
            </div>
        )
    }
}

class App extends Component {
  render() {
    return (
      <div>
          <Router>
            <div>
              <Nav />
              <Header />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/lessons/:lessonId" render={props => {
                  return <Lesson />
                }} />
                <Route component={NoMatch} />
              </Switch>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
