import React ,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
  //  console.log("Upparcase Was clicked");
    let newText=text.toUpperCase();
    setText(newText);
  }

  const handleLoClick=()=>{
    //  console.log("Upparcase Was clicked");
      let newText=text.toLowerCase();
      setText(newText);
    }
  const handleOnChange=(event)=>{
   // console.log("onchange");
    setText(event.target.value);
  }
  const handleCopy=()=>{
    var text=document.getElementById("mybox");
    text.select();
   // text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);

  }
  const extraSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
  }



  const[text,setText]=useState('Enter text here');
  //let text="new text" wrong way to change the state it will give error.
 // setText("new text"); //corrrect way to change state  
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.Heading}</h1>
       <div className="mb-3">
           
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white'}} id="mybox" rows="8"></textarea>
       </div>
       <button className="btn btn-primary " onClick={handleUpClick} >Convert to upparcase</button>
       <button className="btn btn-primary mx-2 " onClick={handleLoClick} >Convert to lowercase</button>
       <button className="btn btn-primary mx-2 " onClick={handleCopy} >Copy text</button>
       <button className="btn btn-primary mx-2 " onClick={extraSpace} >Remove ExtraSpace</button>
    </div>
    <div className="container my-3 "style={{color: props.mode==='dark'?'white':'black'}} >
      <h1>My text Summary</h1>
      <p>{text.split(" ").length} word and {text.length}character</p>
      <p>{0.008* text.split(" ").length}  miinutes to read</p>
      <h2>Preview</h2>
      <p>{text} </p>

    </div>
    </>
  )
}
