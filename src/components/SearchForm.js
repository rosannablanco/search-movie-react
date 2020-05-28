import React, {Component} from 'react';

class SearchForm extends Component {
  render() {
    return (
      <form>
        <div className="field has-addons SearchForm-wrapper">
          <div className="control">
            <input className="input" type="text" placeholder="Find movies" />
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
