import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => ( 
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={({ target }) => {
        setName(target.value)
        window.sessionStorage.setItem('name', target.value);
      }}
      placeholder="Please enter the name for your contact" 
      required />
      <input value={phone} onChange={({target}) => { 
        setPhone(target.value);
        window.sessionStorage.setItem('phone', target.value);
      }}
      placeholder="Please enter the phone number for your contact (###-###-###)" 
      pattern="\d{3}-\d{3}-\d{3}"
      required />
      <input value={email} onChange={({ target }) => {
        setEmail(target.value);
        window.sessionStorage.setItem('email', target.value);
      }} 
      type="email" 
      placeholder="Please enter the email direction for your contact" 
      autoComplete="true"
      required />
      <input type="submit" value="Add contact" />
    </form>);