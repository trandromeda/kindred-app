import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../App.css';

import { Header, LessonBox } from '../components';

const LessonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

class App extends Component {
  render() {
    const lessons = [0,1,2,3, 4, 5, 6].map(lesson => {
      return <Link to={`lessons/${lesson}`}><LessonBox /></Link>
    })
    return (
      <div>
        <Header />
        <p>Stuff here</p>
        <LessonsContainer>
          {lessons}
        </LessonsContainer>
      </div>
    );
  }
}

export default App;
