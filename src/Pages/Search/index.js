import React, { useState } from "react";
import styles from "./search.module.css";
import NavbarComp from "../../Components/Navbar";
import HeaderCovid from "../../Components/HeaderCovid";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import DatePicker from "react-date-picker";
import { user_search } from "../../Global State/Action";

const SearchPage = () => {
  const dispatch = useDispatch();
  const appUser = useSelector((state) => {
    return state.hotels;
  });
  const searchUser = useSelector((state) => {
    return state.userSearch;
  });
  const [city, setCity] = useState("");
  const [rooms, setRooms] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const handleGetForm = (e) => {
    e.preventDefault();
    dispatch(user_search(city, rooms, checkInDate, checkOutDate));
  };

  return (
    <div className={styles.searchPage}>
      <NavbarComp />
      <HeaderCovid />
      <div className={styles.searchPage__div}>
        <form onSubmit={handleGetForm} className={styles.searchPage__form}>
          <div className={styles.card__searchbar}>
            <select
              name="City"
              id="city"
              className={styles.form__city}
              onChange={(e) => setCity(e.target.value)}
              value={city}
            >
              <option value="">{searchUser[0].city}</option>
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
                value={searchUser[0].checkInDate}
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
                value={searchUser[0].checkOutDate}
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
              <option value="">{searchUser[0].rooms}</option>
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
            <button className={styles.heroform__btn} type="submit">
              Search
            </button>
          </div>
        </form>
        <div className={styles.search__main}>
          {appUser.map((item) => {
            return (
              <div key={item.id} className={styles.search__card}>
                <div className={styles.imgDiv}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={styles.card__img}
                  />
                </div>
                <div className={styles.card__data}>
                  <div className={styles.card__header}>
                    <h1 className={styles.card__name}>{item.name}</h1>
                    <p className={styles.card__rating}>{item.rating}</p>
                  </div>
                  <h2 className={styles.card__city}>{item.city}</h2>
                  <p className={styles.card__address}>{item.address}</p>
                  <p className={styles.card__description}>{item.description}</p>
                </div>
                <div className={styles.card__bookingDiv}>
                  <h3 className={styles.card__price}>{item.price}</h3>
                  <button className={styles.card__btn}>Book your Slot!</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
