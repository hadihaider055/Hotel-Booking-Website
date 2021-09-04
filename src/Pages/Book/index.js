import React from "react";
import styles from "./book.module.css";
import NavbarComp from "../../Components/Navbar";
import HeaderCovid from "../../Components/HeaderCovid";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import PersonalInfoForm from "../../Components/PersonalInfoForm";
import Button from "@material-ui/core/Button";
import PaymentInfo from "../../Components/PaymentInfo";
import FinalizingCheckout from "../../Components/FinalizingCheckout";

function getSteps() {
  return ["Personal Information", "Payment", "Finalizing"];
}

const BookPage = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  return (
    <div>
      <NavbarComp />
      <HeaderCovid />
      <div className={styles.booking__form}>
        <div className={styles.booking__formHeader}>
          <h1 className={styles.booking__heading}>
            Book Your Slot by Filling Form
          </h1>
        </div>
        <div className={styles.stepper__Container}>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === 0 ? (
            <PersonalInfoForm
              activeStep={activeStep}
              setActiveStep={setActiveStep}
            />
          ) : null}
          {activeStep === 1 ? (
            <PaymentInfo
              activeStep={activeStep}
              setActiveStep={setActiveStep}
            />
          ) : null}
          {activeStep === 2 ? (
            <FinalizingCheckout
              activeStep={activeStep}
              setActiveStep={setActiveStep}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default BookPage;
