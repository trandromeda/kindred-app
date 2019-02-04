import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin: 10px 0;
  }
`;

class Mentor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'Cooking',
      desc: '',
      location: 'Home',
      title: '',
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault();
    alert('submitted');
  }

  render() {
    return (
      <div className="container">
          <h1>Plan Your Lesson</h1>
          <Form onSubmit={this.handleSubmit}>
            <label>
              What kind of lesson are you planning?
            <select value={this.state.category} name="category" onChange={this.handleChange} >
              <option value="cooking">Cooking</option>
              <option value="home-economics">Home Economics</option>
              <option value="arts">Arts and Crafts</option>
              <option value="carpentry">Carpentry</option>
            </select>
            </label>

            <label>
              Please describe the lesson:
              <textarea value={this.state.desc} name="desc" onChange={this.handleChange} />
            </label>


            <label>
              You can upload any photos here:
              <button>Upload</button>
            </label>

            <label>
              Where will the lesson be held?
                <select value={this.state.location} name="location" onChange={this.handleChange} >
                  <option value="home">My home</option>
                  <option value="centre">Community center</option>
                  <option value="school">Local school</option>
                </select>
            </label>

            <label>
              Lastly, give your lesson a name!
              <input value={this.state.title} name="title" onChange={this.handleChange} />
            </label>

            <input type="submit" text="Submit" />
          </Form>
      </div>
    );
  }
}

export default Mentor;
