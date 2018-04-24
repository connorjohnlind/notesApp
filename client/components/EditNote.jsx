import React, { Component } from 'react';

import './EditNote.scss';

class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      body: this.props.body
    }
  }
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const note = {
      id: this.props.id,
      title: event.target.elements.title.value,
      body: event.target.elements.body.value,
    };
    this.props.saveNote(note);
  }

  render() {
    return (
      <form className="NewNote" onSubmit={this.handleSubmit}>
        <h3>Edit Note</h3>

        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleInputChange}
        />
        <textarea
          type="text"
          name="body"
          value={this.state.body}
          onChange={this.handleInputChange}
        />

        <div className="buttons">
          <button onClick={this.props.cancel}>Cancel</button>
          <button className="main" type="submit">Save</button>
        </div>
      </form>
    );
  }
}

export default EditNote;
