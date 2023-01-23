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
        sessionStorage.setItem('name', target.value);
      }} required />
      <input value={phone} onChange={({target}) => { 
      setPhone(target.value);
      sessionStorage.setItem('phone', target.value);
      }} required />
      <input value={email} onChange={({ target }) => {
        setEmail(target.value);
        sessionStorage.setItem('email', target.value);
      }} type="email" required />
      <input type="submit" value="Add contact" />
    </form>);