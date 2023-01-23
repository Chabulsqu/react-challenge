import React, { useEffect, useState } from "react";
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';
import { TileList } from '../../components/tileList/TileList';

export const AppointmentsPage = ({ appointments, contacts, handleAppointments }) => {
  const [ title, setTitle ] = useState(sessionStorage.getItem('title') ? sessionStorage.getItem('title') : '');
  const [contact, setContact ] = useState('');
  const [ date, setDate ] = useState(sessionStorage.getItem('date') ? sessionStorage.getItem('date') : '');
  const [ time, setTime ] = useState(sessionStorage.getItem('time') ? sessionStorage.getItem('time') : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAppointments(title, contact, date, time);
    sessionStorage.removeItem('title');
    setTitle('');
    setContact(''); // Not implemented with SessionStorage because it would probably confuse the user and be harder to implement with the defaultValue attribute on the <select>
    sessionStorage.removeItem('date');
    setDate('');
    sessionStorage.removeItem('time');
    setTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm contacts={contacts} title={title} setTitle={setTitle} contact={contact} setContact={setContact} date={date} setDate={setDate} time={time} setTime={setTime} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList arr={appointments} />
      </section>
    </div>
  );
};
