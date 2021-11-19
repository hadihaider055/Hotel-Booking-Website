import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Apartment } from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AccountCircle } from "@material-ui/icons";
import { auth, signOutUser } from "../../Firebase";
import { sign_out } from "../../Global State/Action";

const NavbarComp = () => {
  const [scrolled, setScrolled] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [navbarToggle, setNavbarToggle] = useState(false);

  const appUser = useSelector((state) => {
    return state.user;
  });
  const dispatch = useDispatch();
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
    dispatch(sign_out());
  };

  useEffect(() => {
    if (appUser.length !== 0) {
      setUserLoggedIn(true);
    } else {
      setUserLoggedIn(false);
    }
  }, [appUser]);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 300) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }
  if (navbarToggle === true) {
    navbarClasses.push("navbarToggle");
  } else if (navbarToggle === true && scrolled === true) {
    navbarClasses.push("navbarToggleScrolled");
  } else {
  }
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className={`
        ${navbarToggle ? styles.navbarToggle : styles.navbar} 
        ${scrolled ? styles.navbar__active : styles.navbar}
        ${navbarClasses[2] ? styles.navbarToggleScrolled : styles.navbar}`}
    >
      <Container>
        <Navbar.Brand className={styles.navbarBrand}>
          <Link to="/" className={styles.navbarBrand__link}>
            <Apartment />
            Hotel Booking
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className={styles.navbar__toggle}
          onClick={() => setNavbarToggle(!navbarToggle)}
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className={styles.navbar__collapse}
        >
          <Nav className="me-auto">
            <Link to="/hotels" className={styles.navbar__link}>
              Hotels & Homes
            </Link>
            <Link to="/" className={styles.navbar__link}>
              Car rentals
            </Link>
            <Link to="/" className={styles.navbar__link}>
              Appartments
            </Link>
            <Link to="/" className={styles.navbar__link}>
              Link Property
            </Link>
          </Nav>
          {userLoggedIn ? (
            <Nav>
              <Nav.Link className={styles.navbar__acountDiv}>
                <AccountCircle />
                <p>{appUser}</p>
              </Nav.Link>
              <Link to="/signup" className={styles.nav__accLink}>
                <button
                  className={styles.createAccount}
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              </Link>
            </Nav>
          ) : (
            <Nav>
              <Link to="/login" className={styles.nav__accLink}>
                <button className={styles.homeLogin}>Login</button>
              </Link>
              <Link to="/signup" className={styles.nav__accLink}>
                <button className={styles.createAccount}>Create Account</button>
              </Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
