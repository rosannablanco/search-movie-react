import React, {Component} from 'react';
import Title from '../components/Title';
import SearchForm from '../components/SearchForm';
import MovieList from '../components/MovieList';
class Home extends Component {
  state = {movieResults: [], userSearch: false, inputValue: ''};
  handleInput = (value) => {
    this.setState({
      inputValue: value,
    });
  };
  _handleResults = (results) => {
    this.setState({
      movieResults: results,
      userSearch: true,
    });
  };

  _renderResults = () => {
    const {movieResults} = this.state;
    return movieResults.length === 0 ? <p>Results not found</p> : <MovieList movies={movieResults} />;
  };

  render() {
    const {userSearch} = this.state;
    return (
      <header className="container is-fluid ">
        <Title>Search-movie</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handleResults} valueMovie={this.handleInput} value={this.state.inputValue} />
        </div>
        {userSearch ? this._renderResults() : <p>Use the form to search movie</p>}
      </header>
    );
  }
}

export default Home;
