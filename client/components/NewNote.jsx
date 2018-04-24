import React, { Component } from 'react';

import './NewNote.scss';

class NewNote extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const note = {
      title: event.target.elements.title.value,
      body: event.target.elements.body.value,
    };
    this.props.createNote(note);
  }

  render() {
    return (
      <form className="NewNote" onSubmit={this.handleSubmit}>
        <h3>New Note</h3>

        <input type="text" name="title" placeholder="Untitled" />
        <textarea type="text" name="body" placeholder="Just start typing here" />

        <div className="buttons">
          <button onClick={this.props.cancel}>Cancel</button>
          <button className="main" type="submit">Add Note</button>
        </div>
      </form>
    );
  }
}

export default NewNote;
