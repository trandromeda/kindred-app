import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import _ from 'underscore';

import '../App.css';

import { LessonBox, Search } from '../components';
import { Lesson } from '../views';

const LessonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Description = styled.div`
    text-align: center;
`;

class Home extends Component {
    render() {
        const image = 'https://picsum.photos/300/188?random';
        const { lessonsByIds } = this.props;
        return (
            <div>
                <Search />
                <Description>
                    <h1>Returning authenticity to the way people connect</h1>
                    <p>
                    Joining Kindred means you can learn from someone who’s passionate about their craft.
    Every interaction is face-to-face, different, and tailored to you.
                    </p>
                </Description>
                <LessonsContainer>
                    {lessonsByIds && lessonsByIds.length &&
                        lessonsByIds.map(lesson => {
                            return <LessonBox key={lesson.id} lesson={lesson} image={image} />
                        })
                    }
                </LessonsContainer>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        lessonsByIds: state.lessons.byIds,
    };
}
export default connect(
    mapStateToProps,
    null
)(Home);
