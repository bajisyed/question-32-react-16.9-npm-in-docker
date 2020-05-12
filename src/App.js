import React from 'react';
import './App.css';
import Addition from './Components/Addition/Addition';

const App = props => {
  const additionHandler = () => {
    const num1 = Number(document.querySelector('#txt1').value);
    const num2 = Number(document.querySelector('#txt2').value);
    const sum = num1 + num2;
    document.querySelector('#result').value = sum;
  }
  return (
    <div className="App">
      <Addition addMethod={additionHandler} />
    </div>
  );
}
export default App;