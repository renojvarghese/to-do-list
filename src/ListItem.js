import React, { Component } from 'react';


export class ListItem extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         finished: false,
    //         finishedClass: " finished"
    //     }
    //     this.handleClick = this.handleClick.bind(this);
    // }
    // handleClick() {
    //
    //         this.setState ({
    //             finished: !this.state.finished
    //         });
    //
    //
    // }
    handleClick() {
        this.props.onRemove(this.props.text);


    }
    render() {
        // if (this.state.finished) {
        //     return (
        //         <li
        //         className={this.props.className + this.state.finishedClass}
        //         finished={this.props.finished.toString()}>
        //
        //             <div className="item-text">
        //                 {this.props.children}
        //             </div>
        //
        //         </li>
        //
        //     )
        // }
        // else {
            return (
                <li
                className={this.props.className}
                finished={this.props.finished.toString()}>
                    <div className="input-container">
                        <input type="checkbox" onClick={this.handleClick}/>
                    </div>
                    <div className="item-text">{this.props.text}</div>

                </li>

            )
        // }

    }
}

ListItem.defaultProps = {
    children: "Empty",
    key: "item_0",
    className: " item",
    finished: false
}
