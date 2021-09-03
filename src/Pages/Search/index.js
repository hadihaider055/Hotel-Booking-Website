import React, { useState } from "react";
import styles from "./search.module.css";
import NavbarComp from "../../Components/Navbar";
import HeaderCovid from "../../Components/HeaderCovid";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import DatePicker from "react-date-picker";
import { book_slot, user_search } from "../../Global State/Action";
import { useHistory } from "react-router-dom";

const SearchPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const appUser = useSelector((state) => {
    return state.Filteredhotels ? state.Filteredhotels : state.hotels;
  });
  const searchUser = useSelector((state) => {
    return state.userSearch;
  });

  const hotelName = useSelector((state) => {
    return state.bookSlot;
  });

  const [city, setCity] = useState(searchUser[0].city);
  const [rooms, setRooms] = useState(searchUser[0].rooms);
  const [checkInDate, setCheckInDate] = useState(searchUser[0].checkInDate);
  const [checkOutDate, setCheckOutDate] = useState(searchUser[0].checkOutDate);
  const [eventSelected, setEventSelected] = useState(false);

  const handleGetForm = (e) => {
    e.preventDefault();
    dispatch(user_search(city, rooms, checkInDate, checkOutDate));
    setEventSelected(true);
  };

  const handleBookSlot = (hotelName, price) => {
    dispatch(book_slot(hotelName, price));
    if (eventSelected) {
      history.push("/booking");
    } else {
      alert("Please select Check-in and Check-out Date");
    }
  };

  return (
    <>
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
                    <p className={styles.card__description}>
                      {item.description}
                    </p>
                  </div>
                  <div className={styles.card__bookingDiv}>
                    <h3 className={styles.card__price}>
                      <span>{item.currency}</span>
                      {searchUser[0].rooms === ""
                        ? `${item.price * 1}`
                        : `${item.price * searchUser[0].rooms}`}
                      <span>{item.chargesBy}</span>
                    </h3>
                    <button
                      className={styles.card__btn}
                      onClick={() => handleBookSlot(item.name, item.price)}
                    >
                      Book your Slot!
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
