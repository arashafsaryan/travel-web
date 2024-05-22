import { Button, Container, Drawer, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./NavRes.module.css";
import { Link } from "react-router-dom";

const NavRes = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <Container maxWidth="lg" className={styles.containerMenu}>
      <Grid container>
        <Grid item xs={12} className={styles.menu} mt={2}>
          <Link to="/" className={styles.logo}>
            TravelDiaries
          </Link>
          <GiHamburgerMenu onClick={toggleDrawer(true)} />
          <Drawer open={open} onClose={toggleDrawer(false)}>
            <div className={styles.drawer}>
              <Link to="/" className={styles.logo}>
                TravelDiaries
              </Link>
              <div className={styles.navLink}>
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
            </div>
          </Drawer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NavRes;
