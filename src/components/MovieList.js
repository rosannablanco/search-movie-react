import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Movie from './Movie';

class MovieList extends Component {
  static propTypes = {
    movies: PropTypes.array,
  };
  render() {
    const {movies} = this.props;

    return (
      <div className="Container-list">
        {movies.map((movie, index) => {
          return <Movie key={index} movie={movie} />;
        })}
      </div>
    );
  }
}

export default MovieList;
