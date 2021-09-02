import React, { useState } from "react";
import styles from "./heroform.module.css";
import moment from "moment";
import DatePicker from "react-date-picker";
import { useDispatch, useSelector } from "react-redux";
import { user_search } from "../../Global State/Action";
import { useHistory } from "react-router-dom";
const HeroForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const appUser = useSelector((state) => {
    return state.userSearch;
  });
  const [city, setCity] = useState("");
  const [rooms, setRooms] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const handleGetForm = (e) => {
    e.preventDefault();
    dispatch(user_search(city, rooms, checkInDate, checkOutDate));
    history.push("/hotels");
  };
  return (
    <div className={styles.heroForm__main}>
      <p className={styles.heroForm__heading}>Hotel Booking</p>
      <p className={styles.heroform__tag}>
        Find deals on hotels, homes, and much more...
      </p>
      <form onSubmit={handleGetForm}>
        <div className={styles.heroform__container}>
          <select
            name="City"
            id="city"
            className={styles.form__city}
            onChange={(e) => setCity(e.target.value)}
            value={city}
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
            />
          </label>

          <select
            name="rooms"
            id="rooms"
            placeholder="Rooms"
            className={styles.heroform__rooms}
            onChange={(e) => setRooms(e.target.value)}
            required
            value={rooms}
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
        <button className={styles.heroform__btn} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default HeroForm;
