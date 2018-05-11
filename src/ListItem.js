import React, { Component } from 'react';


export class ListItem extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onRemove(this.props.text);
    }
    render() {

            return (
                <li
                className={this.props.className}
                >
                    <div className="input-container">
                        <input type="checkbox" onClick={this.handleClick}/>
                    </div>
                    <div className="item-text">{this.props.text}</div>

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
