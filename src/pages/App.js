import React from 'react';
import {Switch, Route} from 'react-router-dom';

//pages
import Home from './Home';
import Details from './Details';
import NoFound from './NoFound';

import '../stylesheets/App.css';
import 'bulma/css/bulma.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/detail/:movieId" component={Details} />
      </Switch>
    </div>
  );
}

export default App;
