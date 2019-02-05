import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    h1 {
        flex: 0 1 100%;
        text-align: center;
    }

    div {
        width: 45%;
        padding: 10px 25px;
    }
`;

class Dashboard extends Component {
  render() {
    const { requests } = this.props;
    return (
      <Container>
          <h1>Welcome to your Dashboard</h1>
          <div>
            <h3>You have upcoming lessons:</h3>
            <h3>Your past lessons:</h3>
            <p>Your account is being shared with: Molly Simmons</p>
          </div>
          <div>
            <h3>These skills are in demand:</h3>
            {requests && requests.length && requests.map((request, index) => {
                    return <p key={index}>{request}</p>
                })}
          </div>
      </Container>
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
