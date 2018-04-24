import React from 'react';

import './Modal.scss';
import Backdrop from './Backdrop';

const modal = props => (
  <div>
    <Backdrop />
    <div className="Modal"> {props.children} </div>
  </div>
);

export default modal;
