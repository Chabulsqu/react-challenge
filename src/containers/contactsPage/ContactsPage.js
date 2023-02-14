import React, { useEffect, useState } from "react";
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = ({ contacts, handleContacts, deleteData }) => {
  const [ name, setName ] = useState(window.sessionStorage.getItem('name') ? sessionStorage.getItem('name') : '');
  const [ phone , setPhone ] = useState(window.sessionStorage.getItem('phone') ? sessionStorage.getItem('phone') : '');
  const [ email , setEmail ] = useState(window.sessionStorage.getItem('email') ? sessionStorage.getItem('email') : '');
  const [ duplicate, setDuplicate ] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if (!duplicate && name[0] !== ' ') {
     handleContacts(name, phone, email);
     setName('');
     setPhone('');
     setEmail('');
    } else if (duplicate) { 
      alert('Contact already created');
     } else {
      alert("Contact can't contain whitespace at the beginning of its name")
     }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
 useEffect(() => {
  contacts.every(contact => contact.name !== name) ? setDuplicate(false) : setDuplicate(true);
}, [contacts, name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm name={name} phone={phone} email={email} setName={setName} setPhone={setPhone} setEmail={setEmail} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList arr={contacts} deleteData={deleteData} />
      </section>
    </div>
  );
};
