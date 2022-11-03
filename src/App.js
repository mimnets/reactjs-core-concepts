import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <ExternalUsers></ExternalUsers>
      {/* <Counter></Counter> */}
    </div>
  );
}

function ExternalUsers (){
  const [users, setUser] = useState([]);
  useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data));
  }, []);
  return(
    <div>
      <h2>External Users: {users.length}</h2>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props){
  return(
    <div>
      <h3>Name: {props.name}</h3>
      <h4>Email: {props.email}</h4>
    </div>
  )
}

function Counter () {
  const [count, setCount] = useState(33);

  //Single Line
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  //Multiline 
  /*
    const increaseCount = () =>{
    const newCount = count + 1;
    setCount(newCount);
    }
  */
  return(
    <div>
      <h1>Count {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Dicrease</button>
    </div>
  )
}
export default App;
