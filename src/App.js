import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.items = ["make a React App", "design a logo"];
    }
    get list() {
        return this.items.map(item => {
            return <li>{item}</li>
        })
    }
    render() {
    return (
      <div className="App">
        <ul className="item-list">
            {this.list}
        </ul>
      </div>
    );
    }
}

export default App;
