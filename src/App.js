import React from 'react';
import {useSelector, useDispatch, connect} from 'react-redux'
import './App.css';
import CountActions from './reducers/CountRedux'

function App() {
  const count = useSelector(state => state.count.count)
  const dispatch = useDispatch()
  function countRequest() {
    dispatch(CountActions.countRequest(count))
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Count: {count}</h1>   
        <button onClick={()=>countRequest()}>Increase</button>  
      </header>
    </div>
  );
}

export default connect()(App);
