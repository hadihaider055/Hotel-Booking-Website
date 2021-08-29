import React from "react";
import styles from "./heroform.module.css";
const HeroForm = () => {
  return (
    <div className={styles.heroForm__main}>
      <p className={styles.heroForm__heading}>Hotel Booking</p>
      <p className={styles.heroform__tag}>
        Find deals on hotels, homes, and much more...
      </p>
      {/* <div className={styles.heroform__container}>
        <input type="text" />
        <input type="date" placeholder="Check-in Date" />
        <input type="date" placeholder="Check-out Date" />
        <select name="rooms" id="rooms" placeholder="Rooms">
          <option value="Rooms" selected>
            -Rooms-
          </option>
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
        <button></button>
      </div> */}
    </div>
  );
};

export default HeroForm;
