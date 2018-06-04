import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Contact extends Component {
  constructor() {
    super();
    
    this.state = {
		email: '',
		subject: '',
		message: ''
	}

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!event.target.checkValidity()) {
    	this.setState({ invalid: true });
      return;
    }
    const form = event.target;
    const data = new FormData(form);
    
    // fetch('/api/form-submit-url', {
    //   method: 'POST',
    //   body: data,
    // });
  }

  render() {
  	const { res, invalid } = this.state;
    return (
    	<div className="container">
        <form onSubmit={this.handleSubmit} noValidate>

          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" required />

          <label htmlFor="subject">Subject:</label>
          <input id="subject" name="subject" type="text" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>

          <button className="btn">Send data</button>
        </form>
    	</div>
    );
  }
};

export default Contact;