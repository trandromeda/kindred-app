import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

import { Header, LessonBox } from './components';

const LessonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

class App extends Component {
  render() {
    const lessons = [0,1,2,3, 4, 5, 6].map(lesson => {
      return <LessonBox />
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
