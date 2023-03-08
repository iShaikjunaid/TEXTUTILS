import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpclick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleLoclick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success");
    }
    const handleClearclick = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces removed", "success");
    }

    const [text,setText] = useState('');
    return (
        <>
            <div className="container" style={{color: props.mode=== 'dark'?'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange}style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-success mx-1" onClick={handleUpclick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoclick}>Convert to LowerCase</button>
                <button className="btn btn-danger mx-1" onClick={handleClearclick}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{color: props.mode=== 'dark'?'white':'#042743'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}