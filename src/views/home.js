import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import '../App.css';

import { LessonBox, Search } from '../components';
import { Lesson } from '../views';

const LessonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

class Home extends Component {
    render() {
        const lessons = [1,2,3, 4, 5, 6].map(lesson => {
            const image = 'https://picsum.photos/300/188?random';
            return <LessonBox key={lesson.toString()} lessonId={lesson} image={image} />
        })
        return (
            <div>
                <Search />
        <LessonsContainer>
          {lessons}
        </LessonsContainer>
            </div>
        )
    }
}

export default Home;
