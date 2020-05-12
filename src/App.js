import React from 'react';
import './App.css';

import Addition from './Components/Addition/Addition';

const App = props => {

  const additionHandler = () => {
    const num1 = Number(document.querySelector('#Text1').value);
    const num2 = Number(document.querySelector('#Text2').value);
    const sum = num1 + num2;
    document.querySelector('#txtresult').value = sum;
  }

  const dataChangeHandler = () => {
   if(Number(document.querySelector('#Text1').value) !== 0 || Number(document.querySelector('#Text2').value) !== 0){
    document.querySelector('#clickbtn').disabled = false;
   } else {
    document.querySelector('#clickbtn').disabled = true;
   }
  }


  return (
    <div className="App">
      <Addition 
        addMethod={additionHandler} 
        dataChanged={dataChangeHandler}
        />
    </div>
  );
}

export default App;
