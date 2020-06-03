import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ButtonBack from '../components/ButtonBack';

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
    const {Actors, Metascore, Plot, Poster, Title} = this.state.movie;
    return (
      <div className="card Container-detail">
        <ButtonBack />
        <div className="card-image">
          <img src={Poster} title={Title} alt={Title} />
        </div>
        <div className="card-content">
          <div className="media-content">
            <h1 className="title is-4">{Title}</h1>
            <h3 className="subtitle">
              <span style={{fontWeight: 600}}>Actors:</span> {Actors}
            </h3>
            <span>Score: {Metascore}</span>
            <p>Plot: {Plot}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
