import React from 'react';
import './Addition.css'

const Addition = (props) => {
    const dataChangeHandler = () => {
        if(document.querySelector('#txt1').value !== '' && document.querySelector('#txt2').value !== ''){
         document.querySelector('input[name="clickbutton"]').disabled = false;
        } else {
         document.querySelector('input[name="clickbutton"]').disabled = true;
        }
       }

    return (
        <div className="Container Vertical-Center">
            <div id="Text1">
                <label>Enter First Number : </label>
                <input type="number" id="txt1" onChange={dataChangeHandler} />
            </div>
            <div id="Text2">
                <label>Enter Second Number : </label>
                <input type="number" id="txt2" onChange={dataChangeHandler} /><br/>
            </div>
            <br/>
            <div id="txtresult">
                <label>Result : </label>
                <input type="number" id="result" /><br/>
            </div>
            <br/>
            <div name="clickbtn">
                <input type="button" value="Display Result" name="clickbutton" onClick={props.addMethod}/>
            </div>
        </div>
    );
}

export default Addition;