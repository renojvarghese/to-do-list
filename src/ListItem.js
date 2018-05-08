import React, { Component } from 'react';


export class ListItem extends Component {
    render() {

        return (
            <li
            className={this.props.className}
            finished={this.props.finished.toString()}>

                {this.props.children}

            </li>

        )

    }
}

ListItem.defaultProps = {
    children: "Empty",
    key: "item_0",
    className: " item",
    finished: false
}
