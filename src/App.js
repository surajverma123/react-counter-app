import React, { Component } from 'react';
import { connect } from 'react-redux';
import { counterAction } from './actions';

class App extends Component {
  render() {
    const {
      counter,
      increaseCounter,
      decreaseCounter,
    } = this.props;

    return (
      <div className="App">
        {counter}
        <button onClick={increaseCounter}> + </button>
        <button onClick={decreaseCounter}> - </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counterReducer.counter
});

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => {dispatch(counterAction.increaseCouter())},
    decreaseCounter: () => { dispatch(counterAction.decreaseCounter())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
