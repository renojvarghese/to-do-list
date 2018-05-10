import React, { Component } from 'react';
import { ListItem } from './ListItem';
export class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items : ["hello"]
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    get list() {
        return this.state.items.map( (item, i) => {
            return <ListItem key={"item_" + i} className="item" finished={false}>{item}</ListItem>
        })
    }
    handleSubmit() {
        let inputElem = document.getElementById("text-input");
        let newItem = inputElem.value;

        if (newItem) {
            this.state.items.push(newItem);
            this.setState({
                items: this.state.items
            });

            inputElem.value = "";
        }


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
