import React, { useState } from "react";

const ContactForm = (props) => {
  const [enteredText, setEnteredText] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredSubject, setEnteredSubject] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const subjectChangeHandler = (event) => {
    setEnteredSubject(event.target.value);
  };

  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredName("");
    setEnteredEmail("");
    setEnteredSubject("");
    setEnteredText("");
  };

  const styleObj = {
    backgroundColor: props.changeColor === "light" ? "white" : "#212529",
    color: props.changeColor === "light" ? "black" : "white",
  };

  return (
    <>
      <h1 className="text-center text-primary my-4">Get In Touch</h1>
      <form onSubmit={formSubmitHandler}>
        <div className="mb-3">
          <label
            htmlFor="inputName"
            className={`form-label text-${
              props.changeColor === "light" ? "black" : "light"
            }`}
          >
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="emailHelp"
            placeholder="Name"
            value={enteredName}
            onChange={nameChangeHandler}
            autoComplete="off"
            style={styleObj}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="inputEmail1"
            className={`form-label text-${
              props.changeColor === "light" ? "black" : "light"
            }`}
          >
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            autoComplete="off"
            style={styleObj}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="inputSubject"
            className={`form-label text-${
              props.changeColor === "light" ? "black" : "light"
            }`}
          >
            Subject
          </label>
          <input
            type="text"
            className="form-control"
            id="inputSubject"
            aria-describedby="emailHelp"
            placeholder="Subject"
            value={enteredSubject}
            onChange={subjectChangeHandler}
            autoComplete="off"
            style={styleObj}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="inputMsg"
            className={`form-label text-${
              props.changeColor === "light" ? "black" : "light"
            }`}
          >
            Message
          </label>
          <textarea
            className="form-control"
            id="inputMsg"
            rows="5"
            value={enteredText}
            onChange={textChangeHandler}
            placeholder="Enter your text here"
            style={styleObj}
          />
        </div>

        <button type="submit" className="btn btn-primary my-3">
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactForm;
