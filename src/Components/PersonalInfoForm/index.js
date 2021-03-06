import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { personal_info } from "../../Global State/Action";
import styles from "./PersonalInfo.module.css";

const PersonalInfoForm = ({ activeStep, setActiveStep }) => {
  const dispatch = useDispatch();
  const hotelName = useSelector((state) => {
    return state.bookSlot;
  });
  const userSearch = useSelector((state) => {
    return state.userSearch;
  });
  const personalInfo = useSelector((state) => {
    return state.personalInfo;
  });

  const [userFirstName, setUserFirstName] = useState(
    personalInfo[0].userFirstName
  );
  const [userLastName, setUserLastName] = useState(
    personalInfo[0].userLastName
  );
  const [userEmail, setUserEmail] = useState(personalInfo[0].userEmail);
  const [userPhoneNumber, setUserPhoneNumber] = useState(
    personalInfo[0].userPhoneNumber
  );
  const [userPassport, setUserPassport] = useState(
    personalInfo[0].userPassport
  );
  const [userAddress, setUserAddress] = useState(personalInfo[0].userAddress);
  const [userCity, setUserCity] = useState(personalInfo[0].userCity);
  const [userState, setUserState] = useState(personalInfo[0].userState);
  const [userCountry, setUserCountry] = useState(personalInfo[0].userCountry);
  const [userZipCode, setUserZipCode] = useState(personalInfo[0].userZipCode);

  const handlePersonalInfo = () => {
    setActiveStep(activeStep + 1);
    dispatch(
      personal_info(
        userFirstName,
        userLastName,
        userEmail,
        userPhoneNumber,
        userPassport,
        userAddress,
        userCity,
        userState,
        userCountry,
        userZipCode
      )
    );
  };
  if (hotelName[0].hotelName === "" || userSearch[0].checkInDate === "") {
    return <Redirect to="/hotels" />;
  }
  return (
    <div className={styles.personalInfo__main}>
      <form onSubmit={handlePersonalInfo}>
        <input
          type="text"
          placeholder="Enter your First Name*"
          className={styles.f__name}
          onChange={(e) => setUserFirstName(e.target.value)}
          value={userFirstName}
          required
        />
        <input
          type="text"
          placeholder="Enter your Last Name*"
          className={styles.l__name}
          onChange={(e) => setUserLastName(e.target.value)}
          value={userLastName}
          required
        />
        <input
          type="email"
          placeholder="Enter your Email Address*"
          className={styles.email__address}
          onChange={(e) => setUserEmail(e.target.value)}
          required
          value={userEmail}
        />
        <input
          type="text"
          placeholder="Enter your Phone Number*"
          className={styles.ph__number}
          onChange={(e) => setUserPhoneNumber(e.target.value)}
          value={userPhoneNumber}
        />
        <input
          type="text"
          placeholder="Enter your CNIC/Passport Number*"
          className={styles.passport__number}
          onChange={(e) => setUserPassport(e.target.value)}
          required
          value={userPassport}
        />
        <input
          type="text"
          placeholder="Enter your Address*"
          className={styles.home__address}
          onChange={(e) => setUserAddress(e.target.value)}
          value={userAddress}
        />
        <input
          type="text"
          placeholder="Enter your City*"
          className={styles.home__city}
          onChange={(e) => setUserCity(e.target.value)}
          required
          value={userCity}
        />
        <input
          type="text"
          placeholder="Enter your State*"
          className={styles.home__state}
          onChange={(e) => setUserState(e.target.value)}
          required
          value={userState}
        />
        <input
          type="text"
          placeholder="Enter your Country*"
          className={styles.home__country}
          onChange={(e) => setUserCountry(e.target.value)}
          value={userCountry}
        />
        <input
          type="text"
          placeholder="Enter your Zip Code*"
          className={styles.zip__code}
          onChange={(e) => setUserZipCode(e.target.value)}
          required
          value={userZipCode}
        />
        <input
          type="text"
          value={hotelName[0].hotelname}
          disabled
          className={styles.hotel__name}
        />
        <input
          type="text"
          className={styles.checkin_date}
          value={
            userSearch[0].checkInDate.getDate() +
            "-" +
            (userSearch[0].checkInDate.getMonth() + 1) +
            "-" +
            userSearch[0].checkInDate.getFullYear()
          }
          disabled
        />
        <input
          type="text"
          value={
            userSearch[0].checkOutDate.getDate() +
            "-" +
            (userSearch[0].checkOutDate.getMonth() + 1) +
            "-" +
            userSearch[0].checkOutDate.getFullYear()
          }
          className={styles.checkoutDate}
          disabled
        />
        <input
          type="text"
          value={userSearch[0].rooms}
          className={styles.rooms}
          disabled
        />
        <button className={styles.activeStepNext}>Next</button>
      </form>
    </div>
  );
};

export default PersonalInfoForm;
