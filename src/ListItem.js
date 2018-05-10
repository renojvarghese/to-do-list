import React, { Component } from 'react';


export class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            finished: false,
            finishedClass: " finished"
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {

            this.setState ({
                finished: !this.state.finished
            });


    }
    render() {
        if (this.state.finished) {
            return (
                <li
                className={this.props.className + this.state.finishedClass}
                finished={this.props.finished.toString()}>
                    <input type="checkbox" onClick={this.handleClick}/>
                    {this.props.children}

                </li>

            )
        }
        else {
            return (
                <li
                className={this.props.className}
                finished={this.props.finished.toString()}>
                    <input type="checkbox" onClick={this.handleClick}/>
                    {this.props.children}

                </li>

            )
        }

    }
}

ListItem.defaultProps = {
    children: "Empty",
    key: "item_0",
    className: " item",
    finished: false
}
