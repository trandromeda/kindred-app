import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";

import './App.css';

import { Header, LessonBox } from './components';
import { Home, Lesson } from './views';

class App extends Component {
  render() {
    const lessons = [0,1,2,3, 4, 5, 6].map(lesson => {
      return <LessonBox />
    })
    return (
      <div>
        <Header />
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="lessons/:lessonId" component={withRouter(Lesson)} />
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
