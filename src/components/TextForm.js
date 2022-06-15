import React, { useState } from 'react';

export default function TextForm(props) {


    const handleUpClick = () => {
        let newText = text.toUpperCase();
        // console.log(text);
        setText(newText);
        props.showAlert("Converted to UpperCase", "success")
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        // console.log(text);
        setText(newText);
        props.showAlert("Converted to LowerCase", "success")

    }

    const clear = () => {
        let newText = "";
        // console.log(text);
        setText(newText);
        props.showAlert("Clear Text", "success")

    }

    const handleCopy = () => {

        navigator.clipboard.writeText(text);
        props.showAlert("Copy to Clipboard", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Ertra Spaces has been removed", "success")

    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }


    const [text, setText] = useState(''); // State
    return (
        <>

            <div style={{ color: props.enablemode === 'dark' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea style={{ backgroundColor: props.enablemode === 'dark' ? 'white' : 'white', color: props.enablemode === 'dark' ? 'black' : 'black' }} placeholder='Enter your text here...' className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
                </div>
                {/* style={{ backgroundColor: props.enablemode === 'dark' ? 'black' : 'white', color: props.enablemode === 'dark' ? 'white' : 'black' }} */}
                <button disabled={text.length === 0} className="btn btn-outline-primary" onClick={handleUpClick}>
                    Convert to UpperCase
                </button>
                <button disabled={text.length === 0} className="btn btn-outline-primary mx-1 my-1" onClick={handleLoClick}>
                    Convert to LowerCase
                </button>
                <button disabled={text.length === 0} className="btn btn-outline-primary mx-1 my-1" onClick={clear}>
                    Clear the Text
                </button>
                <button disabled={text.length === 0} className="btn btn-outline-primary mx-1 my-1" onClick={handleCopy}>
                    Copy Text
                </button>
                <button disabled={text.length === 0} className="btn btn-outline-primary mx-1 my-1" onClick={handleExtraSpaces}>
                    Remove Extra Spaces
                </button>
            </div>
            <div className='my-3' style={{ color: props.enablemode === 'dark' ? 'black' : 'white' }}>
                <h2>Text Summary is here!</h2>
                <p>Number of charater is <b>{text.length}</b>  and Number of Words is  <b>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</b>      </p>
                <p>{0.008 * (text.split(/\s+/).filter((element) => { return element.length }).length)} Minutes Read</p>
                <h3>Preview of given Text</h3>
                <h6>
                    {text.length > 0 ? text : "Enter something in the textbox above to preview it here"}
                </h6>
            </div>
        </>
    )
}
