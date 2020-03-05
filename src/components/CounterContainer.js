import React, { Component } from 'react';
import { connect } from 'react-redux'; //to import


//actions à envoyer au reducer
const add = { type: 'ADD' };
const add10 = { type: 'ADD10'};
const remove = { type: 'REMOVE'};
const remove10 = { type: 'REMOVE10'};
const resetCount = { type: 'RESET'};


class CounterContainer extends Component {
    render() {
        const { counter, dispatch } = this.props;
        
        return (
            <div>
                <p>{counter}</p>
                <button onClick={() => dispatch(remove10)}>remove -10</button>
                <button onClick={() => dispatch(remove)}>remove -1</button>
                <button onClick={() => dispatch(resetCount)}>reset</button>
                <button onClick={() => dispatch(add)}>add +1</button>
                <button onClick={() => dispatch(add10)}>add +10</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    counter: state
})

export default connect(mapStateToProps)(CounterContainer);