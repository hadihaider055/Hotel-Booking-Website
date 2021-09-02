import React, { useEffect, useState } from "react";
import styles from "./PaymentInfo.module.css";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
const PaymentInfo = () => {
  const hotelExpense = useSelector((state) => {
    return state.bookSlot;
  });
  const userSearch = useSelector((state) => {
    return state.userSearch;
  });

  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);
  const [userStay, setUserStay] = useState(
    userSearch[0].checkOutDate.getDate() - userSearch[0].checkInDate.getDate()
  );
  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: "/booking",
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, []);

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        history.replace("/orders");
      });
  };
  return (
    <div className={styles.paymentDiv}>
      <h4>
        <span>Your Sub-Total is: PKR.</span>
        {userSearch[0].rooms === ""
          ? hotelExpense[0].price
          : hotelExpense[0].price * userSearch[0].rooms * userStay}
      </h4>
      <form onSubmit={handleSubmit} className={styles.payment__form}>
        <CardElement onChange={handleChange} className={styles.cardElement} />
        <button disabled={processing || disabled || succeeded}>
          <span>
            {processing ? <p>Processing</p> : <p>Book your Slot Now!</p>}
          </span>
        </button>
        {error && <div>{error}</div>}
      </form>
    </div>
  );
};

export default PaymentInfo;
