import React, { Component } from 'react';
// import styled from 'styled-components';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    const { requests } = this.props;
    return (
      <div>
          <h1>Welcome to your Dashboard</h1>
          {requests && requests.length && requests.map((request, index) => {
                return <p key={index}>{request}</p>
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
