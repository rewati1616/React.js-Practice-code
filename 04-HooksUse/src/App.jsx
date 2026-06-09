import React, { useState } from 'react'

 

const App = () => {

  const [a, setA] = useState(22)
  const [username, setUsername] = useState('Rewati')
  const [arr, setArr] = useState([20,30,24])
 
  function changeA() {
    setA(20);
    setUsername('Tanu');
    setArr([50,60,57]);

  }
  
  return (
    <div>
      <h1>Age is {a} and name is {username} <br /> <br />the array is {arr}</h1>
      <button onClick={changeA}>Click</button>
    </div>
  )
}

export default App