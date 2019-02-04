import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';

import { Header, LessonBox } from '../components';

class Dashboard extends Component {
  render() {
    const { requests } = this.props;
    return (
      <div>
          <h1>Welcome to your Dashboard</h1>
          {requests && requests.length && requests.map(request => {
                return <p>{request}</p>
            })}
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        requests: state.requests.allRequests,
    };
}

export default connect(
    mapStateToProps, 
    null
)(Dashboard)
