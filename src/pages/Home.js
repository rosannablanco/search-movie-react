import React, {Component} from 'react';
import Title from '../components/Title';
import SearchForm from '../components/SearchForm';

class Home extends Component {
  render() {
    return (
      <header className="container is-fluid ">
        <Title>Search-movie</Title>
        <div className="SearchForm-wrapper">
          <SearchForm />
        </div>
      </header>
    );
  }
}

export default Home;
