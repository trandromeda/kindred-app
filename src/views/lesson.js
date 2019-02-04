import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

import { Header, LessonBox } from '../components';

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Column = styled.div`
  padding: 25px;
`;

class Lesson extends React.Component {
  render() {
    console.log(this.props.match);
    return (
      <Container>
        <Column>
          <h1>Lesson {this.props.match.params.lessonId}</h1>
          <p>Something</p>
        </Column>
        <Column>
          <h1>Details</h1>
          <form>
            <Input type="text" />
          </form>
        </Column>
      </Container>
    );
  }
}

export default withRouter(Lesson);
