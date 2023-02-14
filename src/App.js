import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const setStorage = (stateName) => {
    window.localStorage.setItem(stateName, JSON.stringify([]));
    return [];
  }
  const [ appointments, setAppointments ] = useState(JSON.parse(window.localStorage.getItem('appointments')) == null ? setStorage('appointments') : JSON.parse(window.localStorage.getItem('appointments'))); // Checks if there are any appointments saved to the localStorage and creates an empty array if there aren't
  const [ contacts, setContacts ] = useState(JSON.parse(window.localStorage.getItem('contacts')) == null ? setStorage('contacts') : JSON.parse(window.localStorage.getItem('contacts'))); // Checks if there are any contacts saved to the localStorage and creates an empty array if there aren't
  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };
  const contactArray = JSON.parse(window.localStorage.getItem('contacts'));
  const appointmentArray = JSON.parse(window.localStorage.getItem('appointments'));

  const handleContacts = (name, phoneNumber, email) => {
    const contact = {
      name,
      phoneNumber, 
      email
    }
    contactArray.push(contact);
    setContacts(contactArray)
    window.localStorage.setItem('contacts', JSON.stringify(contactArray));
  }
  const handleAppointments = (title, contact, date, time) => {
    const appointment = {
      title,
      contact,
      date,
      time
    }
    appointmentArray.push(appointment)
    setAppointments(appointmentArray)
    window.localStorage.setItem('appointments', JSON.stringify(appointmentArray));
  }
  const deleteData = ({ target }) => {
    if (target.id === '2') {
      const index = contactArray.indexOf(target['data-title']);
      contactArray.splice(index, 1);
      console.log('a')
      setContacts(contactArray);
      window.localStorage.setItem('contacts', JSON.stringify(contactArray));
    } else {
      const index = contactArray.indexOf(target['data-title']);
      appointmentArray.splice(index, 1);
      setAppointments(appointmentArray);
      window.localStorage.setItem('appointments', JSON.stringify(appointmentArray));
    }
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage contacts={contacts} handleContacts={handleContacts} deleteData={deleteData} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage appointments={appointments} contacts={contacts} handleAppointments={handleAppointments} deleteData={deleteData} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
