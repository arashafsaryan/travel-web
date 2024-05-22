import { Button, Container, Grid, Typography } from "@mui/material";
import styles from "./Nav.module.css";
import NavRes from "./NavRes";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
    <Container maxWidth="lg" className={styles.containerNav}>
      <Grid container mt={2}>
        <Grid item xs={12} className={styles.nav}>
          <Link to="/" className={styles.logo}>TravelDiaries</Link>
          <div className={styles.navItem}>
            <a href="#">Home </a>
            <a href="#">About</a>
            <a href="#">Discover</a>
            <a href="#">Special Deals</a>
            <a href="#">Contact</a>
          </div>
          <div className={styles.navButtons}>
            <Button variant="outlined">Login</Button>
            <Button variant="contained" className={styles.signUp}>
              Sign Up
            </Button>
          </div>
        </Grid>
      </Grid>
    </Container>
    <NavRes />
    </>
  );
};

export default Nav;
