import React, { useState } from "react";
import styles from "./finalizingCheckout.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { personal_info } from "../../Global State/Action";

const FinalizingCheckout = ({ activeStep, setActiveStep }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const personalInfo = useSelector((state) => {
    return state.personalInfo;
  });
  const userSearch = useSelector((state) => {
    return state.userSearch;
  });
  const hotelName = useSelector((state) => {
    return state.bookSlot;
  });

  const [reviewed, setReviewed] = useState(true);

  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [userPassport, setUserPassport] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userState, setUserState] = useState("");
  const [userCountry, setUserCountry] = useState("");
  const [userZipCode, setUserZipCode] = useState("");
  const handleBook = () => {
    setReviewed(true);
    if (reviewed) {
      toast.success(
        "Your booking proposal is sent to the hotel - Wait for the notification!",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        }
      );
    }
    setTimeout(() => {
      history.push("/");
      setActiveStep(0);
      setReviewed(false);
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
    }, 5000);
  };

  return (
    <div className={styles.checkout__main}>
      {reviewed ? (
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover={false}
        />
      ) : null}
      <h2 className={styles.checkout__heading}>Review your Information!</h2>
      <div className={styles.checkout__review}>
        <p className={styles.checkout__name}>
          <span className={styles.checkout__subHeading}>Name: </span>
          <span>
            {personalInfo[0].userFirstName} {personalInfo[0].userLastName}
          </span>
        </p>
        <p className={styles.checkout__email}>
          <span className={styles.checkout__subHeading}>Email Address: </span>
          {personalInfo[0].userEmail}
        </p>
        <p className={styles.checkout__phNumber}>
          <span className={styles.checkout__subHeading}>Phone Number: </span>
          {personalInfo[0].userPhoneNumber}
        </p>
        <p className={styles.checkout__passportNumber}>
          <span className={styles.checkout__subHeading}>
            CNIC/Passport Number:
          </span>
          {personalInfo[0].userPassport}
        </p>
        <p className={styles.checkout__address}>
          <span className={styles.checkout__subHeading}>Address: </span>
          {personalInfo[0].userAddress}
        </p>
        <p className={styles.checkout__city}>
          <span className={styles.checkout__subHeading}>City: </span>
          {personalInfo[0].userCity}
        </p>
        <p className={styles.checkout__country}>
          <span className={styles.checkout__subHeading}>Country: </span>
          {personalInfo[0].userCountry}
        </p>
        <p className={styles.checkout__state}>
          <span className={styles.checkout__subHeading}>State: </span>
          {personalInfo[0].userState}
        </p>
        <p className={styles.checkout__zipCode}>
          <span className={styles.checkout__subHeading}>
            Zip Code/Postal Code:
          </span>
          {personalInfo[0].userZipCode}
        </p>
        <p className={styles.checkout__hotelName}>
          <span>Hotel Name: </span>
          {hotelName[0].hotelname}
        </p>
        <p className={styles.checkout__checkInDate}>
          <span className={styles.checkout__subHeading}>Check-in Date: </span>
          {userSearch[0].checkInDate.getDate() +
            "-" +
            (userSearch[0].checkInDate.getMonth() + 1) +
            "-" +
            userSearch[0].checkInDate.getFullYear()}
        </p>
        <p className={styles.checkout__checkOutDate}>
          <span className={styles.checkout__subHeading}>Check-out Date: </span>
          {userSearch[0].checkOutDate.getDate() +
            "-" +
            (userSearch[0].checkOutDate.getMonth() + 1) +
            "-" +
            userSearch[0].checkOutDate.getFullYear()}
        </p>
        <p className={styles.checkout__rooms}>
          <span className={styles.checkout__subHeading}>Rooms: </span>
          {userSearch[0].rooms}
        </p>
      </div>
      <button className={styles.checkout__Bookbtn} onClick={handleBook}>
        Book your Slot!
      </button>
      <button
        className={styles.checkout__Backbtn}
        onClick={() => setActiveStep(activeStep - 1)}
      >
        Back
      </button>
    </div>
  );
};

export default FinalizingCheckout;
