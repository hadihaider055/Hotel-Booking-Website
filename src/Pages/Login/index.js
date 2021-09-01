import React, { useState } from "react";
import styles from "./login.module.css";
import HotelImage from "../../Assets/hotel-img.jpg";
import { Email, VisibilityOff } from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";
import { auth, signinUser } from "../../Firebase";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { log_in, sign_out } from "../../Global State/Action";

const LoginPage = () => {
  const dispatch = useDispatch();
  const appUser = useSelector((state) => {
    return state.user;
  });
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userNotCorrect, setUserNotCorrect] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    signinUser(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setEmail("");
        setPassword("");
        history.push("/");
        userNotCorrect(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setUserNotCorrect(true);
      });
    dispatch(sign_out());
    dispatch(log_in(email));
  };

  return (
    <div className={styles.login__mainDiv}>
      <img
        src={HotelImage}
        alt="Hotel Background"
        className={styles.background__img}
      />
      <div className={styles.form__container}>
        <h2 className={styles.login_heading}>Login</h2>
        {userNotCorrect ? (
          <h3 className={styles.notCorrect_user}>
            Email or Password is not Correct!
          </h3>
        ) : null}
        <form onSubmit={handleLogin}>
          <label htmlFor="email">
            <Email
              className={
                userNotCorrect ? styles.person__iconFalse : styles.person__icon
              }
            />
            <input
              type="email"
              id="email"
              name="Email Address"
              placeholder="Email Address*"
              required
              className={
                userNotCorrect ? styles.fieldIncorrect : styles.full__name
              }
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password_field">
            <VisibilityOff
              className={
                userNotCorrect ? styles.person__iconFalse : styles.person__icon
              }
            />
            <input
              type="password"
              id="password_field"
              name="Password"
              placeholder="Enter Password*"
              required
              className={
                userNotCorrect ? styles.fieldIncorrect : styles.full__name
              }
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className={styles.login__submit}>Submit</button>
        </form>
        <div className={styles.form__bottom}>
          <p>
            New here? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
