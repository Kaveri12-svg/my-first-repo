
import './App.css';
import {useState} from 'react'
import CounterApp from './Counter';
import Child2 from './Child2';
import Form from './Form';
import MapMethod from './MapMethod';
import PostList from './axios';

function App() {
  const [count, setCount] = useState(0)
 const [click, setClick] = useState("Please click me")

  return (
    <div className="App">
      <CounterApp count={count} setCount={setCount}/>
      {/* <Child2 click={click} setClick={setClick}/>  */}
      {/* <Form /> */}
      {/* <MapMethod /> */}
      {/* <PostList /> */}
    </div>
  );
}

export default App;
