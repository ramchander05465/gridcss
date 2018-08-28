import React, { Component } from 'react';
import './App.css';

import Header from './components/header/header'
import Fotter from './components/footer/footer'
import Main from './components/main/main'
import LeftPanel from './components/left-panel/left-panet'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <LeftPanel />
        <Main>welcome</Main>
        <Fotter />
      </div>
    );
  }
}

export default App;
