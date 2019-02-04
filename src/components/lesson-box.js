import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Container = styled.div`
    width: 30%;
    min-width: 350px;
    height: auto;
    margin: 1vh 1vw;
    position: relative;
    display: flex;
    flex-direction: column;;

    a {
        text-decoration: none;
    }
`

const Photo = styled.div`
    width: 100%;
    height: 188px;
    margin-bottom: 10px;
    position: relative;
    display: flex;
    background: white;
    background-image: url('${props => props.image}');
    background-size: cover;
    background-position: 50% 50%;
    overflow: hidden;
`;

const Category = styled.p`
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600
`;

const Title = styled.h3`
    display: inline;
`;

const TeacherName = styled.p`
    margin: 0;
    font-weight: 400;
    color: teal;
    display: inline;
`;

const Blurb = styled.p`
    margin: 10px 0;
    padding-bottom: 25px;
    width: 90%;
`;

const Figures = styled.div`
    position: absolute:
    bottom: 0;
    font-size: 14px;

    p {
        margin: 0;
    }
`;

class LessonBox extends Component {
    render() {
        const { image, lesson } = this.props;
        console.log(lesson);
        return(
            <Container>
                <Link to={`lessons/${lesson.id}`}>
                    <Photo image={image} />
                    <Category>{lesson.category}</Category>
                    <Title>{lesson.title}</Title> <TeacherName>with Teacher</TeacherName>
                    <Blurb>{lesson.desc}</Blurb>
                    <Figures>
                        <p>Cost and Duration</p>
                    </Figures>
                </Link>
            </Container>
        )
    }
}

export default LessonBox;