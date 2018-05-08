import React, { Component } from 'react';

export class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items : []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    get list() {
        return this.state.items.map( (item, i) => {
            return <li key={"item_" + i} className="item">{item}</li>
        })
    }
    handleSubmit() {
        let inputElem = document.getElementById("text-input");
        let newItem = inputElem.value;

        console.log(newItem);
        this.state.items.push(newItem);
        this.setState({
            items: this.state.items
        });

        inputElem.value = "";


    }
    render() {
        return (
            <div className="list-container">
                <ul className="item-list">
                    {this.list}
                </ul>
                <input type="text" id="text-input"/>
                <button className="submit-btn" onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}
