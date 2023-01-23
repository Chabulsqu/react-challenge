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
          sessionStorage.setItem('title', target.value)
        }} required />
      </label>
      <label>
        <input value={date} onChange={({ target })=> {
          setDate(target.value);
          sessionStorage.setItem('date', target.value)
        }} type="date" min={getTodayString()} required />
      </label>
      <label>
        <input value={time} onChange={({ target }) => {
          setTime(target.value);
          sessionStorage.setItem('time', target.value);
          }} type="time" required />
      </label>
      <ContactPicker contacts={contacts} handleChange={handleChange} />
      <input type="submit" value="Add Appointment" />
    </form>
  );
};
