import React, {Component} from 'react';
import ButtonBack from '../components/ButtonBack';

class NoFound extends Component {
  render() {
    return (
      <div>
        <ButtonBack />
        <h2 className="title">404</h2>
        <h3 className="subtitle">Page not found</h3>
      </div>
    );
  }
}
export default NoFound;
