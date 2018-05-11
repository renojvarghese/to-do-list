import React, { Component } from 'react';
import { ListItem } from './ListItem';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items : ["hello"]
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }
    get list() {
        return this.state.items.map( (item, i) => {
            return <ListItem key={"item_" + i} className="item" finished={false} onRemove={this.handleRemove} text={item}></ListItem>
        })
    }
    handleSubmit() {
        let inputElem = document.getElementById("text-input");
        let newItem = inputElem.value.trim();

        if (newItem) {
            this.state.items.push(newItem);
            this.setState({
                items: this.state.items
            });

            inputElem.value = "";
        }


    }
    handleRemove(item) {
        this.state.items.remove(newItem);
        this.setState({
            items: this.state.items
        });
    }
    render() {
        return (
            <div className="list-container">
                <div className="input-container">
                    <input type="text" id="text-input" placeholder="What do you have to do?"/>
                    <label className="submit" onClick={this.handleSubmit} >Add to List</label>
                </div>
                <ul className="item-list">
                    {this.list}
                </ul>

            </div>
        );
    }
}
