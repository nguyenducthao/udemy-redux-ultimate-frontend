import logo from './logo.svg';
import './App.css';
// import { connect } from "react-redux"
import { increaseCounter, decreaseCounter } from "./action/actions"
import { useDispatch, useSelector } from 'react-redux';

function App(props) {
  const newCount = useSelector(
    (state) => {
      return state.counter.count
    }
  )
  const dispatch = useDispatch()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React!</h1>
        {/* <div>Count: {props.count}</div> */}
        <div>Count: {newCount}</div>
        {/* <button onClick={() => props.increaseCounter()}>Increase Count</button>
        <button onClick={() => props.decreaseCounter()}>Decrease Count</button> */}
        <button onClick={() => dispatch(increaseCounter())}>Increase Count</button>
        <button onClick={() => dispatch(decreaseCounter())}>Decrease Count</button>
      </header>
    </div>
  );
}

// const mapStateToProps = state => {
//   return {
//     count: state.counter.count,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()),
//     decreaseCounter: () => dispatch(decreaseCounter()),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)

export default App