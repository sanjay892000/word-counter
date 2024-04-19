import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextBox(props) {
    const convertUpCase = () => {
        let newText = text.toUpperCase()
        setText(newText);
        props.showAlerts("Converted in UpperCase","successs");
    }
    const convertLowerCase = () => {
        const lowerText = text.toLowerCase();
        setText(lowerText);
        props.showAlerts("Converted in LowerCase","successs");
    }
    const removeExtrsSpaces = () => {
       let newValue=text.split(/[ ]+/);
        setText(newValue.join(" "));

        props.showAlerts("ExtraSpaces has been removed","successs");
    }
    const copyText=()=>{
        let text=document.getElementById('textBox');
       text.select();
       navigator.clipboard.writeText(text.value);
       document.getSelection().removeAllRanges();
       props.showAlerts("clipboard Copied","successs");
    }
    const clearText=()=>{
       
        let clrText="";
        setText(clrText)
        props.showAlerts("Cleared Text:","successs");
    }
    const handleOnChange = (event) => {
        console.log("onhandling");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    return (
        <>
            <div className='containe mb-3 my-3' style={{color: props.textBox==='dark'?'white':'black'}}>
                <label htmlFor="textBox" className="form-label"><b>{props.textHeading}</b></label>
                <textarea className="form-control" style={{backgroundColor : props.textBox==='light'?'rgb(248,249,250)':'rgba(9, 31, 36, 1)' , color: props.textBox==='dark'?'white':'black'}}  value={text} onChange={handleOnChange} id="textBox" rows="8"></textarea><br />
                <button className="btn btn-primary my-2" disabled={text.length===0} onClick={convertUpCase}>Convert to UpperCase</button>
                <button className="btn btn-secondary mx-3 my-2" disabled={text.length===0} onClick={convertLowerCase}>Convert to LowerCase</button>
                <button className="btn btn-dark my-2" disabled={text.length===0} onClick={removeExtrsSpaces}>RemoveExtrsSpaces</button>
                <button className="btn btn-info  mx-3 my-2" disabled={text.length===0} onClick={copyText}>CopyText</button>
                <button className="btn btn-danger  my-2" disabled={text.length===0} onClick={clearText}>Clear Text</button>
            </div>
            <div className="container my-3" style={{color: props.textBox==='dark'?'white':'black'}}>
                <h3>Paragraph Summary</h3> 
                <p>
                    {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters
                </p>
                <h6>Time taken: {0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes </h6>
                <h3>preview</h3>
                <p> {text.length>0 ? text:"Nothing to preview"} </p>
            </div>
        </>

    )
}
TextBox.propTypes = { textHeading: PropTypes.string }
