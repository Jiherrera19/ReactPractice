import React from 'react';
import './App.css';

import Header from './components/Header';
import MemeGenerator from './components/MemeGenerator';
import DownloadCenter from './components/DownloadCenter';

class App extends React.Component {
  constructor() {
    super();
    this.memeRef = React.createRef();
  }
  render() {
    return (
      <>
        <Header />
        <MemeGenerator memeRef={this.memeRef}/>
        <DownloadCenter memeRef={this.memeRef}/>
      </>
    );
  }

}

export default App;
