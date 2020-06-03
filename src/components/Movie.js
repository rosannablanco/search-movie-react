import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Movie extends Component {
  render() {
    const {imdbID, Poster, Title, Year} = this.props.movie;
    return (
      <Link to={`/detail/${imdbID}`} className="Container-item card">
        <div className="card-image">
          <figure className="image">
            <img src={Poster} alt={Title} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{Title}</p>
              <p className="subtitle is-6">{Year}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default Movie;
