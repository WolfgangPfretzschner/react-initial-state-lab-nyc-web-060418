
import React, {Component} from 'react';
import { stat } from 'fs';

class Bomb extends Component {
    constructor(props){
        super(props)
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }

    render() {
        const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
        return (
            <div>{message}</div>
        )

    }
}

export default Bomb