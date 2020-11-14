import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import SectionPage from './pages/sectionpage/sectionpage.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/:section" component={SectionPage} />
      </Switch>
    </div>
  );
}

export default App;
