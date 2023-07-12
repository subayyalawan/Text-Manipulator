import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const toUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const toLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const clearText = () => {
    let newText = "";
    setText(newText);
  };

  const copyText = () =>{
    var text = document.getElementById('myBox')
    text.select()
    navigator.clipboard.writeText(text.value)
    document.getSelection().removeAllRanges()
    props.showAlert("Copied to Clipboard", "success");
  }

  const handleOnChange = (event) => {
    // console.log("on change was used");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // text = "olla world"  wrong way to update text
  // setText('olla world')  write way, but it should be used in a function
  // bcz react automatically gives error if you use it in the main function to prevent infinite loop
  return (
    <>
      <div>
        <div className="mb-3">
          <h2>{props.heading}</h2>
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.theme === "dark" ? "#212529" : "white",
              color: props.theme === "dark" ? "white" : "black",
            }}
            value={text}
            placeholder="Enter your text"
            onChange={handleOnChange}
            name=""
            id="myBox"
            rows="10"></textarea>
          <button
            disabled={text.length === 0}
            className="btn btn-primary m-2"
            onClick={toUpperCase}>
            To Upper Case
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary m-2 "
            onClick={toLowerCase}>
            To Lower case
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-success m-2 "
            onClick={copyText}>
            copy
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-danger m-2 "
            onClick={clearText}>
            Clear
          </button>
        </div>
      </div>

      <div className="container my-5">
        <h1>Your text Summary</h1>
        <p>
          {" "}
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters, with reading time of{" "}
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes.
        </p>

        <h2>Converted Text</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

TextForm.protoTypes = {
  heading: PropTypes.string,
};
