import { Button, Container, Grid, Typography } from "@mui/material";
import styles from "./Header.module.css";
import { TfiLocationPin } from "react-icons/tfi";
import header from "../images/header.png";
import airplane from "../images/airplane.png";
import header2 from "../images/header2.png";

const Header = () => {
  return (
    <Container maxWidth="lg">
      <Grid container mt={5} className={styles.container} spacing={2}>
        <Grid item xs={12} md={6} className={styles.info}>
          <div className={styles.location}>
            <Typography component="p" variant="p">
              Discover Best Destinations
            </Typography>
            <TfiLocationPin />
          </div>
          <Typography component="h3" variant="h3" mt={3}>
            Travel, Enjoy and Live a{" "}
            <Typography component="span" variant="h3" className={styles.word}>
              New Life
            </Typography>{" "}
            Full of Fun
          </Typography>
          <Typography component="p" variant="p" my={3} className={styles.text}>
            Pack up your bags, book the destination and live a life of your
            dreams. Best aviation services across the globe{" "}
          </Typography>
          <Button variant="outlined" className={styles.learnMore}>
            Learn more
          </Button>
        </Grid>
        <Grid item xs={12} md={6} className={styles.images}>
          <img src={header} alt="" data-aos="fade-left" />
          <img src={airplane} alt="" data-aos="fade-down" />
          <img src={header2} alt="" data-aos="fade-up" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
