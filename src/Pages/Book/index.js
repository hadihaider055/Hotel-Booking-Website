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

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Personal Information", "Payment", "Finalizing"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return "Add your Personal Information...";
    case 1:
      return "Add your payment details...";
    case 2:
      return "Review and Submit!";
    default:
      return "Unknown stepIndex";
  }
}

const BookPage = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
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
        <div className={classes.root}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
        {activeStep === 0 ? (
          <PersonalInfoForm
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        ) : null}
        {activeStep === 1 ? <PaymentInfo /> : null}
      </div>
    </div>
  );
};

export default BookPage;
