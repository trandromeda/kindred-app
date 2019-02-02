import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import '../App.css';

import { LessonBox } from '../components';
import { Lesson } from '../views';

const LessonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

class Home extends Component {
    render() {
        const lessons = [0,1,2,3, 4, 5, 6].map(lesson => {
            return <Link to={`lessons/${lesson.toString()}`} key={lesson.toString()}><LessonBox /></Link>
        })
        return (
            <div>
            <p>Welcome!</p>
        <LessonsContainer>
          {lessons}
        </LessonsContainer>
            </div>
        )
    }
}

export default Home;
