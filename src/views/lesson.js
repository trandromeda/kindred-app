import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

import { Header, LessonBox } from '../components';

class Lesson extends Component {
  render() {
    console.log(this.props.match)
    return (
      <div>
          <h1>Lesson</h1>
          <p>Something</p>
      </div>
    );
  }
}

export default Lesson;