import React, { useEffect, useState } from "react";
import styles from "./PaymentInfo.module.css";
import Alert from "@material-ui/lab/Alert";
import {
  useElements,
  useStripe,
  CardElement,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";

const PaymentInfo = ({ activeStep, setActiveStep }) => {
  
  const hotelExpense = useSelector((state) => {
    return state.bookSlot;
  });
  const userSearch = useSelector((state) => {
    return state.userSearch;
  });

  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [paymentMethod, setPaymentMethod] = useState({});
  const [cardComplete, setCardComplete] = useState(false);
  const [userStay, setUserStay] = useState(
    userSearch[0].checkOutDate.getDate() - userSearch[0].checkInDate.getDate()
  );

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    if (!stripe || !elements) {
      return;
    }

    if (error) {
      elements.getElement("card").focus();
      return;
    }
    if (cardComplete) {
      setProcessing(true);
    } else {
      setProcessing(false);
    }
    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });
    setProcessing(false);

    if (payload.error) {
      setError(payload.error);
    } else {
      setPaymentMethod(payload.paymentMethod);
    }
    setActiveStep(activeStep + 1);
  };
  return (
    <div className={styles.paymentDiv}>
      <Alert severity="info" className={styles.payment__alert}>
        We won't Charge from your account - Use dummy Card Number to View More!
      </Alert>
      <h4 className={styles.subTotal}>
        <span className={styles.subTotal__span}>Your Sub-Total is: PKR.</span>
        {userSearch[0].rooms === ""
          ? hotelExpense[0].price
          : hotelExpense[0].price * userSearch[0].rooms * userStay}
      </h4>
      <form onSubmit={handleSubmit} className={styles.payment__form}>
        <CardNumberElement
          onChange={handleChange}
          className={styles.cardNumber__Element}
          placeholder="Enter your Card Number"
          value={elements.getElement(CardNumberElement)}
          required
        />
        <div className={styles.card__details}>
          <CardExpiryElement
            onChange={handleChange}
            className={styles.cardExpiry__Element}
            required
            placeholder="Enter Expiry"
          />
          <CardCvcElement
            onChange={handleChange}
            className={styles.cardCvc__Element}
            required
            placeholder="Enter CVC"
          />
        </div>
        {error && <div>{error}</div>}
        <button
          disabled={processing || disabled || succeeded}
          className={styles.payment__btn}
        >
          <span>
            {processing ? <p>Processing</p> : <p>Book your Slot Now!</p>}
          </span>
        </button>
      </form>
      <button onClick={() => setActiveStep(activeStep - 1)} className={styles.back__btn}>Back</button>
    </div>
  );
};

export default PaymentInfo;
