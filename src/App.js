import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { List } from './List';


class App extends Component {

    render() {
        return (
          <div className="App">
            <div className="header">
                <h1 className="header-title">The Simplest to-do app ever</h1>
            </div>

            <List/>
          </div>
        );
    }
}

export default App;
