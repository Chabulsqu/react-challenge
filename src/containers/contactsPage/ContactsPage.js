import React, { useEffect, useState } from "react";
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = ({ contacts, handleContacts }) => {
  const [ name, setName ] = useState(sessionStorage.getItem('name') ? sessionStorage.getItem('name') : '');
  const [ phone , setPhone ] = useState(sessionStorage.getItem('phone') ? sessionStorage.getItem('phone') : '');
  const [ email , setEmail ] = useState(sessionStorage.getItem('email') ? sessionStorage.getItem('email') : '');
  const [ duplicate, setDuplicate ] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if (!duplicate) {
     handleContacts(name, phone, email);
     setName('');
     setPhone('');
     setEmail('');
    } else { 
      alert('Contact already created');
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
        <TileList arr={contacts} />
      </section>
    </div>
  );
};
