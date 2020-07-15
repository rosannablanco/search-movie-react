import React, {Component} from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }
  _handleChangeInput = (ev) => {
    this.props.valueMovie(ev.currentTarget.value);
  };

  handleOnSumit = (ev) => {
    ev.preventDefault();
    const {value} = this.props;
    const API_KEY = '88fc2dab';
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${value}`)
      .then((result) => result.json())
      .then((data) => {
        const {Search = []} = data;
        this.props.onResults(Search, value);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleOnSumit}>
        <div className="field has-addons SearchForm-wrapper">
          <div className="control">
            <input className="input" type="text" placeholder="Find movies" onChange={this._handleChangeInput} value={this.props.value} />
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
