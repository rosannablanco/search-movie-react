import React from 'react';
import {Switch, Route} from 'react-router-dom';

//pages
import Home from './pages/Home';
import Details from './pages/Details';
import NoFound from './pages/NoFound';

import './App.css';
import 'bulma/css/bulma.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/detail/:movieId" component={Details} />
        <Route component={NoFound} />
      </Switch>
    </div>
  );
}

export default App;
