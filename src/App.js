import React, { Component } from 'react';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { RouterClass } from "./router";


class App extends Component {
  render() {
   
    return (
      <div className="App">
        <Header />
        <RouterClass />
        <Footer />
      </div>
    );
  }
}

export default App;
