import { useState } from "react";

function Contact() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    if (name === "fullName") {
      setFullName(value);
    } else if (name === "emailAddress") {
      setEmailAddress(value);
    } else if (name === "message") {
      setMessage(value);
    } else {
      setAlert("One of your fields is incomplete");
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    // alert(`Hello ${firstName} ${lastName}`);
    setFullName("");
    setEmailAddress("");
    setMessage("");
    setAlert("One of your fields is incomplete");
  };

  return (
    <div>
      <h1>Contact</h1>
      <form className="form" id="usrform">
        <label for="fullName" class="form-label">
          Full Name
        </label>
        <input
          value={fullName}
          name="fullName"
          class="form-control"
          onChange={handleInputChange}
          type="text"
          placeholder="John Doe"
        />
        <br />
        <label for="emailAddress" class="form-label">
          Email Address
        </label>
        <input
          value={emailAddress}
          name="emailAddress"
          class="form-control"
          onChange={handleInputChange}
          type="text"
          placeholder="johndoe@gmail.com"
        />
        <br />
        <label for="emailAddress" class="form-label">
          Message
        </label>
        <textarea
          value={message}
          name="message"
          class="form-control"
          onChange={handleInputChange}
          type="text"
          placeholder="Type your message here"
          form="usrform"
        />
        <br />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
        <p>{alert}</p>
      </form>
    </div>
  );
}

export default Contact;
