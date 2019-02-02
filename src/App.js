import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";

import './App.css';

import { Header, Nav, LessonBox } from './components';
import { Home, Lesson } from './views';

class NoMatch extends Component {
    render() {
      console.log(this.props.match);
        return (
            <div>
                <p>Nothing to see here.</p>
            </div>
        )
    }
}

class App extends Component {
  render() {
    console.log('rendering');
    return (
      <div>
        <Nav />
        <Header />
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/lessons/:lessonId" render={props => {
                return <Lesson />
              }} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
