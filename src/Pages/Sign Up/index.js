import React, { useState } from "react";
import styles from "./signup.module.css";
import HotelImage from "../../Assets/hotel-img.jpg";
import { Person, Phone, Email, VisibilityOff } from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";
import { auth, createUser } from "../../Firebase";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { SET_USER } from "../../Global State/Action";

const SignupPage = () => {
  const dispatch = useDispatch();
  const appUser = useSelector((state) => {
    return state.user;
  });
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [phNumber, setPhNumber] = useState("");
  const handleSignUp = (e) => {
    e.preventDefault();
    createUser(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
    setEmail("");
    setFullName("");
    setPassword("");
    setPhNumber("");
    dispatch({
      type: SET_USER,
      payload: { email, fullName, phNumber, password },
    });
    history.push("/");
  };

  return (
    <div className={styles.login__mainDiv}>
      <img
        src={HotelImage}
        alt="Hotel Background"
        className={styles.background__img}
      />
      <div className={styles.form__container}>
        <h2 className={styles.login_heading}>Signup</h2>
        <form onSubmit={handleSignUp}>
          <label htmlFor="f_name">
            <Person className={styles.person__icon} />
            <input
              type="text"
              id="f_name"
              name="Full Name"
              placeholder="Full Name*"
              required
              className={styles.full__name}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </label>
          <label htmlFor="phoneNumb">
            <Phone className={styles.person__icon} />
            <input
              type="number"
              id="phoneNumb"
              name="Phone Number"
              placeholder="Phone Number*"
              minLength="10"
              required
              className={styles.full__name}
              value={phNumber}
              onChange={(e) => setPhNumber(e.target.value)}
            />
          </label>
          <label htmlFor="email">
            <Email className={styles.person__icon} />
            <input
              type="email"
              id="email"
              name="Email Address"
              placeholder="Email Address*"
              required
              className={styles.full__name}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password_field">
            <VisibilityOff className={styles.person__icon} />
            <input
              type="password"
              id="password_field"
              name="Password"
              placeholder="Enter Password*"
              minLength="6"
              required
              className={styles.full__name}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className={styles.login__submit}>Submit</button>
        </form>
        <div className={styles.form__bottom}>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
