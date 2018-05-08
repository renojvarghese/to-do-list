import React, { Component } from 'react';

export class List extends Component {
    constructor(props) {
        super(props);
        this.items = ["make a React App", "design a logo"];
    }
    get list() {
        return this.items.map(item => {
            return <li className="item">{item}</li>
        })
    }
    render() {
        return (
            <ul className="item-list">
                {this.list}
            </ul>
        );
    }
}
