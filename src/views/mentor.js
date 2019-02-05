import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addLesson } from '../redux/actions';

const Container = styled.div`
  padding: 15px 25px;
  display: flex;

  div:first-child {
    flex: 0 1 600px;
  }
`;

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
      guide: '',
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleFocus = event => {
    const { name } = event.target;
    console.log(name);

    switch (name) {
      case 'category': {
        this.setState({
          guide: 'What are the core skills you are teaching?'
        })
        break;
      }
      case 'desc': {
        this.setState({
          guide: 'Talk about why you want to teach this lesson and how you learned it yourself.'
        })
        break;
      }
      case 'location': {
        this.setState({
          guide: 'Please choose from the list of pre-approved locations where you will host this lesson.'
        })
        break;
      }
      case 'title': {
        this.setState({
          guide: 'Choose something catching and brief!'
        })
        break;
      }
      default: {
        this.setState({
          guide: 'Welcome!'
        })
      }
    }
  }

  handleSubmit = event => {
      event.preventDefault();
      const content = {
        title: this.state.title,
        desc: this.state.desc,
        category: this.state.category,
      }
      this.props.addLesson(content);
  }

  render() {
    const { guide } = this.state;
    console.log(guide);
    return (
      <Container>
        <div>
          <h1>Plan Your Lesson</h1>
          <Form onSubmit={this.handleSubmit}>
            <label>
              What kind of lesson are you planning?
            <select value={this.state.category} name="category" onChange={this.handleChange} onFocus={this.handleFocus}>
              <option value="cooking">Cooking</option>
              <option value="home-economics">Home Economics</option>
              <option value="arts">Arts and Crafts</option>
              <option value="carpentry">Carpentry</option>
            </select>
            </label>

            <label>
              Please describe the lesson:
              <textarea value={this.state.desc} name="desc" onChange={this.handleChange} onFocus={this.handleFocus} />
            </label>

            <label>
              Where will the lesson be held?
                <select value={this.state.location} name="location" onChange={this.handleChange} onFocus={this.handleFocus}>
                  <option value="home">My home</option>
                  <option value="centre">Community center</option>
                  <option value="school">Local school</option>
                </select>
            </label>

            <label>
              Lastly, give your lesson a name!
              <input value={this.state.title} name="title" onChange={this.handleChange} onFocus={this.handleFocus} />
            </label>

            <input type="submit" text="Submit" />
          </Form>
        </div>
        <div>
          {guide}
        </div>
    </Container>
    );
  }
}

export default connect(
  null,
  { addLesson }
)(Mentor);
