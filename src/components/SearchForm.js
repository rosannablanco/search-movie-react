import React, {Component} from 'react';

class SearchForm extends Component {
  state = {
    inputMovie: '',
  };
  _handleChange = (ev) => {
    this.setState({
      inputMovie: ev.target.value,
    });
  };
  _handleOnSumit = (ev) => {
    ev.preventDefault();
    const API_KEY = '88fc2dab';
    const {inputMovie} = this.state;
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
      .then((result) => result.json())
      .then((data) => {
        const {Search} = data;
        this.props.onResults(Search);
      });
  };
  render() {
    const {inputMovie} = this.state;
    return (
      <form onSubmit={this._handleOnSumit}>
        <div className="field has-addons SearchForm-wrapper">
          <div className="control">
            <input className="input" type="text" placeholder="Find movies" onChange={this._handleChange} value={inputMovie} />
          </div>
          <div className="control">
            <button className="button is-info">Search</button>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchForm;
