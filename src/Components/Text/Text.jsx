import React, { useState } from "react";

const Text = (props) => {
  const [enteredText, setEnteredText] = useState("");

  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  const upChangeHandler = () => {
    setEnteredText(enteredText.toUpperCase());
  };

  const lowChangeHandler = () => {
    setEnteredText(enteredText.toLowerCase());
  };

  const clrTextHandler = () => {
    setEnteredText("");
  };

  const removeSpaceHandler = () => {
    const text = enteredText.split(/[ ] + /);
    setEnteredText(text.join(" "));
  };

  return (
    <>
      <h1 style={{ color: props.changeColor === "dark" ? "white" : "black" }}>
        Enter your text here for transcription
      </h1>
      <div className="form-group mt-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={enteredText}
          onChange={textChangeHandler}
          placeholder="Enter your text here"
          style={{
            backgroundColor:
              props.changeColor === "light" ? "white" : "#212529",
            color: props.changeColor === "light" ? "black" : "white",
          }}
        />

        <div className="container my-3">
          <button
            disabled={enteredText.length <= 0}
            type="button"
            className="btn btn-primary mx-1 mt-2"
            onClick={upChangeHandler}
          >
            Convert To uppercase
          </button>
          <button
            disabled={enteredText.length <= 0}
            type="button"
            className="btn btn-primary mx-1 mt-2"
            onClick={lowChangeHandler}
          >
            Convert To Lowercase
          </button>

          <button
            disabled={enteredText.length <= 0}
            type="button"
            className="btn btn-primary mx-1 mt-2"
            onClick={removeSpaceHandler}
          >
            Remove Extra Spaces
          </button>
          <button
            disabled={enteredText.length <= 0}
            type="button"
            className="btn btn-primary mx-1 mt-2"
            onClick={clrTextHandler}
          >
            Clear Text
          </button>
        </div>
      </div>

      <div
        className="container py-4"
        style={{ color: props.changeColor === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            enteredText.split(/\s+/).filter((el) => {
              return el.length !== 0;
            }).length
          }{" "}
          words and {enteredText.length} characters.
        </p>

        <div style={{ marginTop: "2rem" }}>
          <h2>Preview</h2>
          <p>{enteredText.length > 0 ? enteredText : "Nothing to preview"}</p>
        </div>
      </div>
    </>
  );
};

export default Text;
