import React from "react";

export const ContactPicker = ({ contacts, handleChange }) => {
  return (
    <select onChange={handleChange} required>
      <option defaultChecked value=''>No contact selected</option>
      {contacts.map(contact => <option value={contact.name} key={contact.name}>{contact.name}</option>)}
    </select>
  );
};
