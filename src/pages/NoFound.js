import React, {Component} from 'react';
import ButtonBack from '../components/ButtonBack';

class NoFound extends Component {
  render() {
    return (
      <div>
        <h2 className="title">404</h2>
        <h3 className="subtitle">Page not found</h3>
        <ButtonBack />
      </div>
    );
  }
}
export default NoFound;
