import React from 'react';
import './App.css';
import Navbar from './components/navigation/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Journey from './pages/journey';
import Place from './pages/place';
import Program from './pages/program';
import Info from './pages/info';

function App() {
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route path={process.env.PUBLIC_URL + '/'} exact component={Home} />
          <Route path={process.env.PUBLIC_URL + '/journey'} component={Journey} />
          <Route path={process.env.PUBLIC_URL + '/place'} component={Place} />
          <Route path={process.env.PUBLIC_URL + '/program'} component={Program} />
          <Route path={process.env.PUBLIC_URL + '/info'} component={Info} />
        </Switch>
      </Router>
  );
}

export default App;