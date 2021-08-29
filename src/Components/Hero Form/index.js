import React, { useState } from "react";
import styles from "./heroform.module.css";
import moment from "moment";
import DatePicker from "react-date-picker";
const HeroForm = () => {
  const [city, setCity] = useState("");
  const [rooms, setRooms] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const handleGetForm = () => {};
  return (
    <div className={styles.heroForm__main}>
      <p className={styles.heroForm__heading}>Hotel Booking</p>
      <p className={styles.heroform__tag}>
        Find deals on hotels, homes, and much more...
      </p>
      <div className={styles.heroform__container}>
        <select
          name="City"
          id="city"
          className={styles.form__city}
          onChange={(e) => setCity(e.target.value)}
          required
        >
          <option value="">Select City</option>
          <option value="Karachi">Karachi</option>
          <option value="Lahore">Lahore</option>
          <option value="Islamabad">Islamabad</option>
          <option value="Murree">Murree</option>
          <option value="Swat">Swat</option>
        </select>

        <label className={styles.date__label}>
          Check-in
          <DatePicker
            placeholderText="Check-in Date"
            className={styles.form__checkinDate}
            onChange={(date) => setCheckInDate(date)}
            minDate={moment().toDate()}
            selected={new Date()}
            value={checkInDate}
            required
            popperPlacement="bottom-end"
          />
        </label>

        <label htmlFor="checkOutDate" className={styles.date__label}>
          Check-out
          <DatePicker
            id="checkOutDate"
            placeholderText="Check-out Date"
            className={styles.form__checkoutDate}
            onChange={(date) => setCheckOutDate(date)}
            minDate={moment().toDate()}
            selected={new Date()}
            value={checkOutDate}
            popperPlacement="bottom-end"
            required
            popperClassName="date-picker-reports"
            customStyles={{
              dateInput: {
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderTopWidth: 0,
                borderBottomWidth: 0,
              },
            }}
          />
        </label>

        <select
          name="rooms"
          id="rooms"
          placeholder="Rooms"
          className={styles.heroform__rooms}
          onChange={(e) => setRooms(e.target.value)}
          required
        >
          <option value="">Rooms</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
      </div>
      <button className={styles.heroform__btn} onClick={handleGetForm}>
        Search
      </button>
    </div>
  );
};

export default HeroForm;
