import React from 'react';

import './Addition.css'

const Addition = (props) => {
    return (
        <div className="Container Vertical-Center">
            <div>
                <label>Enter First Number : </label>
                <input type="number" id="Text1" onChange={props.dataChanged} />
            </div>
            <div>
                <label>Enter Second Number : </label>
                <input type="number" id="Text2" onChange={props.dataChanged} /><br/>
            </div>
            <br/>
            <div>
                <label>Result : </label>
                <input type="number" id="txtresult"/><br/>
            </div>
            <br/>
            <div>
                <input type="button" value="Display Result" id="clickbtn" onClick={props.addMethod} />
            </div>
        </div> 
    );
}

export default Addition;