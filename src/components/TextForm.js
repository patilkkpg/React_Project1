import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("upper case was clicked" + text);
    let newText = text.toUpperCase();

    setText(newText);
    props.showAlert("converted to upperCase", "Success");
  };
  const handleLoClick = () => {
    // console.log("upper case was clicked" + text);
    let newText = text.toLowerCase();

    setText(newText);
    props.showAlert("converted to LowerCase", "Success");
  };

  const handleClearClick = () => {
    // console.log("upper case was clicked" + text);
    let newText = "";

    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const [text, setText] = useState("Enter text here");
  // text = "new text"//wrong way to change the state
  // setText("new text"); //correct way to change the state

  return (
    <>
      <div
        className="container "
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            rows="8"
          ></textarea>
          <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
            Convert to UpperCase
          </button>
          <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
            Convert to LowerCase
          </button>
          <button
            className="btn btn-primary mx-2 my-1"
            onClick={handleClearClick}
          >
            Clear Text
          </button>
          <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
            Copy Text
          </button>
        </div>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text summary</h1>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minute to read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the text box above to preview it here"}
        </p>
      </div>
    </>
  );
}
