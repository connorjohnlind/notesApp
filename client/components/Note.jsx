import React, { Component } from 'react';

import './Note.scss';

const Note = (props) => {
  const note = {
    id: props.id,
    title: props.title,
    body: props.body
  }
  return (
    <div className="Note">
      <div className="title-bar">
        <h3>{props.title}</h3>
        <div className="button-wrapper">
          <div onClick={()=>props.editNote(note)}>E</div>
          <div onClick={()=>props.deleteNote(props.id)}>X</div>
        </div>
      </div>
      <p className="text-body">{props.body}</p>
    </div>
  )
};

export default Note;
