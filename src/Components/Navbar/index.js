import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Apartment } from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { AccountCircle } from "@material-ui/icons";
import { auth, signOutUser } from "../../Firebase";

const NavbarComp = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const appUser = useSelector((state) => {
    return state.user;
  });
  const history = useHistory();
  const handleSignOut = () => {
    signOutUser(auth)
      .then(() => {
        setUserLoggedIn(false);
        history.push("/login");
      })
      .catch((error) => {
        console.log(error);
        setUserLoggedIn(true);
      });
  };

  useEffect(() => {
    if (appUser.length > 0) {
      console.log(appUser);
      setUserLoggedIn(true);
    } else {
      setUserLoggedIn(false);
    }
  }, [appUser]);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className={styles.navbar}
    >
      <Container>
        <Navbar.Brand className={styles.navbarBrand}>
          <Link to="/" className={styles.navbarBrand__link}>
            <Apartment />
            Hotel Booking
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Hotels & Homes</Nav.Link>
            <Nav.Link href="#pricing">Car rentals</Nav.Link>
            <Nav.Link href="#pricing">Appartments</Nav.Link>
          </Nav>
          {userLoggedIn ? (
            <Nav>
              <Nav.Link className={styles.navbar__acountDiv}>
                <AccountCircle />
                <p>{appUser[0]}</p>
              </Nav.Link>
              <Nav.Link eventKey={2}>
                <Link to="/signup">
                  <button
                    className={styles.createAccount}
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                </Link>
              </Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link>
                <Link to="/login">
                  <button className={styles.homeLogin}>Login</button>
                </Link>
              </Nav.Link>
              <Nav.Link eventKey={2}>
                <Link to="/signup">
                  <button className={styles.createAccount}>
                    Create Account
                  </button>
                </Link>
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
