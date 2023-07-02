import React, { useState } from 'react';

import { validateEmail } from '../utils/helpers';

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [inputMessage, setMessege] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else if (inputType === 'inputMessage'){
      setMessege(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if(!userName){
      setErrorMessage('Name is required');
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!inputMessage) {
      setErrorMessage(
        `Message is required`
      );
      return;
    }
    setErrorMessage("Your message has been sent")

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setMessege('');
    setEmail('');
  };

  return (
    <div>
      
      <form className="contactform">
        <div>Name</div>
        <div><input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        /></div>
        <div>Email address:</div>
        <div><input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        /></div>
        <div>Message</div>
        <div><textarea
          value={inputMessage}
          name="inputMessage"
          onChange={handleInputChange}
          rows="5"
          cols="30"
          type="text"
          placeholder="Message"
        /></div>
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
