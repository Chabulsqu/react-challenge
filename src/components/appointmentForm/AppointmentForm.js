import React from "react";
import { ContactPicker } from '../../components/contactPicker/ContactPicker'

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };
  const handleChange = ({ target }) => {
    setContact(target.value);
  }

  return (
    <form onSubmit={handleSubmit} >
      <label>
        <input value={title} onChange={({ target }) => {
          setTitle(target.value);
          window.sessionStorage.setItem('title', target.value)
        }} 
        placeholder="Please enter the title for your appointment" 
        required />
      </label>
      <label>
        <input value={date} onChange={({ target })=> {
          setDate(target.value);
          window.sessionStorage.setItem('date', target.value)
        }} min={getTodayString()} 
        placeholder="Please enter the date for your appointment" 
        onFocus={({ target }) => target.type = 'date'}
        required />
      </label>
      <label>
        <input value={time} onChange={({ target }) => {
          setTime(target.value);
          window.sessionStorage.setItem('time', target.value);
          }}
          placeholder="Please enter the time for your appointment" 
          onFocus={({ target }) => target.type = 'time'}
          required />
      </label>
      <ContactPicker contacts={contacts} handleChange={handleChange} />
      <input type="submit" value="Add Appointment" />
    </form>
  );
};