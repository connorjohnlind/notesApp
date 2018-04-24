import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Modal from './components/Modal/Modal';
import NewNote from './components/NewNote';
import EditNote from './components/EditNote';
import Note from './components/Note';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newModal: false, // modal
      editModal: false, // modal
      notes: [],
      deletedNotes: [],
      editingNote: null,
    };
  }
  cancelHandler = () => {
    this.setState({
      newModal: false,
      editModal: false,
    });
  }
  createNoteHandler = (note) => {
    const newNotes = [...this.state.notes];
    const id = Math.random();
    note.id = id;
    newNotes.push(note);
    this.setState({
      newModal: false,
      notes: newNotes,
    });
  }
  deleteNoteHandler = (id) => {
    const notes = [...this.state.notes];
    const deletedNotes = [...this.state.deletedNotes];

    const deletedNote = notes.find(n => n.id === id);
    const filteredNotes = notes.filter(n => n.id !== id);

    deletedNotes.push(deletedNote);

    this.setState({
      notes: filteredNotes,
      deletedNotes,
    });
  }
  saveNoteHandler = (note) => {
    const updatedNotes = [...this.state.notes];
    const index = updatedNotes.findIndex(n => n.id === note.id);
    if (index !== -1) {
      updatedNotes[index] = note;
    }
    this.setState({
      notes: updatedNotes,
      editModal: false,
      editingNote: null,
    });
  }
  editModalHandler = (note) => {
    this.setState({
      editModal: true,
      editingNote: note,
    });
  }
  newModalHandler = () => {
    this.setState({ newModal: true });
  }
  renderNotes = () => {
    const notes = this.state.notes.map(note => (
      <Note
        key={note.id}
        id={note.id}
        title={note.title}
        body={note.body}
        deleteNote={this.deleteNoteHandler}
        editNote={this.editModalHandler}
      />
    ));
    return <div className="notes-container">{notes}</div>;
  }
  renderModal = () => {
    if (this.state.newModal) {
      return (
        <Modal>
          <NewNote createNote={this.createNoteHandler} cancel={this.cancelHandler} />
        </Modal>
      );
    } else if (this.state.editModal) {
      return (
        <Modal>
          <EditNote
            id={this.state.editingNote.id}
            title={this.state.editingNote.title}
            body={this.state.editingNote.body}
            cancel={this.cancelHandler}
            saveNote={this.saveNoteHandler}
          />
        </Modal>
      );
    }
    return null;
  }
  render() {
    return (
      <div className="App">
        { this.renderModal() }
        <div className="top-bar">
          <button onClick={this.newModalHandler} className="main">+ Add Note</button>
        </div>
        { this.renderNotes() }
      </div>
    );
  }
}

export default hot(module)(App);
