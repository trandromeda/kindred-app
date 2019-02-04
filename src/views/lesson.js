import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';

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
  width: 50%;
  padding: 25px;
`;

class Lesson extends Component {
  constructor() {
    super();
    this.state = {
      startDate: new Date()
    }
  }

  handleChange = (date) => {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <Container>
        <Column>
          <h1>Lesson {this.props.match.params.lessonId}</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet libero et efficitur pulvinar. Morbi in elit lacinia, maximus dui nec, vehicula mi. Nunc mattis augue enim, vulputate blandit lacus euismod non. Sed nec sagittis nisi. In hac habitasse platea dictumst. Suspendisse nec enim vel lectus vulputate ultrices at id tortor. Maecenas tincidunt in metus ut auctor. Duis quam sem, mollis vitae molestie in, pulvinar luctus ex.
          </p>
          <p>Donec in elit elementum, cursus enim eu, malesuada nibh. Praesent mollis justo leo, non auctor ex aliquet ac. Proin dignissim in lorem vel viverra. Nullam placerat lacus ac turpis interdum, vel accumsan lectus congue. Vivamus eget fermentum tortor. Mauris ante elit, sagittis non dolor et, dictum finibus velit.</p>
          <p>
          Nullam libero ipsum, finibus ac lacus in, convallis efficitur risus. Suspendisse ultricies lobortis facilisis. Nam venenatis est maximus, placerat libero eget, volutpat tortor. Maecenas posuere turpis est, vel malesuada enim tincidunt ac. Quisque tincidunt tincidunt metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce molestie tellus non massa vulputate, vestibulum elementum leo elementum.
          </p>
        </Column>
        <Column>
          <h1>Sign Up</h1>
          <DayPicker />
          <form>
            <Input type="text" />
          </form>
        </Column>
      </Container>
    );
  }
}

export default withRouter(Lesson);
