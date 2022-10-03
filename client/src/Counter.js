import React, { Component } from "react";
import "./Counter.css";

export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: props.initialCount,
        };
    }

    render() {
        console.log("Render Counter");
        return (
            <div>
                <button onClick={() => this.changeCount(-1)}>-</button>
                <span>{this.state.count}</span>
                <button className="up" onClick={() => this.changeCount(1)}>
                    +
                </button>
            </div>
        );
    }

    changeCount(amount) {
        this.setState((prevState) => {
            return { count: prevState.count + amount };
        });
    }
}
