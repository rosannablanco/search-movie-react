import React, {Component} from 'react';
import Title from '../components/Title';
import SearchForm from '../components/SearchForm';
import MovieList from '../components/MovieList';
class Home extends Component {
  state = {movieResults: [], userSearch: false};
  _handleResults = (results) => {
    this.setState({
      movieResults: results,
      userSearch: true,
    });
  };
  _renderResults = () => {
    const {movieResults} = this.state;
    return this.state.movieResults === undefined ? <p>No Found results</p> : <MovieList movies={movieResults} />;
  };

  render() {
    const {userSearch} = this.state;
    return (
      <header className="container is-fluid ">
        <Title>Search-movie</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handleResults} />
        </div>
        {userSearch ? this._renderResults() : <p>Use the form for search movie</p>}
      </header>
    );
  }
}

export default Home;
