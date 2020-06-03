import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ButtonBack extends Component {
  render() {
    return (
      <Link to="/" className="delete is-large btn">
        Volver
      </Link>
    );
  }
}

export default ButtonBack;
