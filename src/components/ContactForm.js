import React from 'react';

export default function ContactForm(props) {
  return (<div>

<form>
<div class="form-group">
    <label for="FormControlFullName">Name</label>
    <input type="input" class="form-control" id="exampleFormControlInputFullName" placeholder="fullname" />
  </div>
  <div class="form-group">
    <label for="FormControlInputEmail">Email address</label>
    <input type="email" class="form-control" id="FormControlInputEmail" placeholder="name@example.com" />
  </div>
  <div class="form-group">
    <label for="FormControlTextareaMessage">Message</label>
    <textarea class="form-control" id="FormControlTextareaMessage" rows="6"></textarea>
  </div>
  <div class="form-group">
    <label for="FormControlInputErrorl">Email address</label>
    <input type="email" class="form-control" id="FormControlInputError" />
  </div>


  
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

        </div>
   


);
}