import React from "react";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";
import {
  FooterHelp,
  FooterBookingType,
  FooterServices,
  FooterPlaces,
  FooterContact,
} from "./footerLinks";
const Footer = () => {
  return (
    <>
      <div className={styles.footer__main}>
        <div className={styles.footer__help}>
          {FooterHelp.map((item) => {
            return (
              <Link
                to={item.link}
                key={item.id}
                className={styles.footer__Link}
              >
                <p className={styles.footer__Name}>{item.name}</p>
              </Link>
            );
          })}
        </div>
        <div className={styles.footer__bookingType}>
          {FooterBookingType.map((item) => {
            return (
              <Link
                to={item.link}
                key={item.id}
                className={styles.footer__Link}
              >
                <p className={styles.footer__Name}>{item.name}</p>
              </Link>
            );
          })}
        </div>
        <div className={styles.footer__services}>
          {FooterServices.map((item) => {
            return (
              <Link
                to={item.link}
                key={item.id}
                className={styles.footer__Link}
              >
                <p className={styles.footer__Name}>{item.name}</p>
              </Link>
            );
          })}
        </div>
        <div className={styles.footer__places}>
          {FooterPlaces.map((item) => {
            return (
              <Link
                to={item.link}
                key={item.id}
                className={styles.footer__Link}
              >
                <p className={styles.footer__Name}>{item.name}</p>
              </Link>
            );
          })}
        </div>
        <div className={styles.footer__contact}>
          {FooterContact.map((item) => {
            return (
              <Link
                to={item.link}
                key={item.id}
                className={styles.footer__Link}
              >
                <p className={styles.footer__Name}>{item.name}</p>
              </Link>
            );
          })}
        </div>
      </div>
      <div className={styles.copyright}>
        <p className={styles.copyright__para}>
          Copyright &copy; 2021 All rights reserved.
          <br />
          <br />
          Developed by Hadi Haider
        </p>
      </div>
    </>
  );
};

export default Footer;
