import React, {Component} from 'react';
import PropTypes from 'prop-types';

import CardDetail from '../components/CardDetail';
import NoFound from '../pages/NoFound';

class Details extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string,
    }),
  };

  state = {movie: {}};
  _fetchMovie = ({id}) => {
    const API_KEY = '88fc2dab';
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then((result) => result.json())
      .then((movie) => {
        this.setState({movie});
      });
  };
  componentDidMount() {
    const {movieId} = this.props.match.params;
    this._fetchMovie({id: movieId});
  }

  render() {
    return this.state.movie.Response === 'False' ? <NoFound /> : <CardDetail movie={this.state.movie} />;
  }
}

export default Details;
