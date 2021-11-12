import React from 'react';
import './App.css';
import Navbar from './components/navigation/Navbar';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
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
          <Route path={'/'} exact component={Home} />
          <Route path={'/journey'} component={Journey} />
          <Route path={'/place'} component={Place} />
          <Route path={'/program'} component={Program} />
          <Route path={'/info'} component={Info} />
        </Switch>
      </Router>
  );
}

export default App;