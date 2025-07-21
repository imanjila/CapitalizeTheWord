import React, {useState} from "react";

export default function TextForm(props) {
  
    const handleUpClick = () =>{
      //  console.log("UpperCase was clicked!" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLowClick = () =>{
      //  console.log("UpperCase was clicked!" + text);
        let newText = text.toLowerCase();
        setText(newText)
          props.showAlert("Converted to lowercase!", "success")
    }
    const handleOnChange = (event ) => {
        console.log('On Change')
        setText(event.target.value);
    }
    const handleClearClick = (event ) => {
      let  newText = ' ';
        setText(newText);
          props.showAlert("Cleared the text!", "success")
    }

    const [text, setText] = useState('Enter text here');
//    text = 'new text'; //wrong way to change the state
//    setText = ('new text'); //correct way to change the state
  return (
    <>
    <div className="container" style = {{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1 className= 'mb-2'>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control"  value ={text} onChange={handleOnChange} style = {{backgroundColor : props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="8" ></textarea>
      </div>
      <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled = {text.length === 0}className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
      <button disabled = {text.length === 0}className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3" style = {{color: props.mode === 'dark' ? 'white' : 'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((element)=> {return element.length !==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=> {return element.length !==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  ); 
}
