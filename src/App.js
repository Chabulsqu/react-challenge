import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [ appointments, setAppointments ] = useState([]);
  const [ contacts, setContacts ] = useState([]);
  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const handleContacts = (name, phoneNumber, email) => {
    const contact = {
      name,
      phoneNumber, 
      email
    }
    setContacts([...contacts, contact]);
  }
  const handleAppointments = (title, contact, date, time) => {
    const appointment = {
      title,
      contact,
      date,
      time
    }
    setAppointments([...appointments, appointment])
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
            <ContactsPage contacts={contacts} handleContacts={handleContacts} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage appointments={appointments} contacts={contacts} handleAppointments={handleAppointments} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
