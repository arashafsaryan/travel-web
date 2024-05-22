import { Container, Grid, Typography } from "@mui/material";
import styles from "./ExploreWorld.module.css";
import { Link } from "react-router-dom";
import img1 from "../images/exploreWorld1.png";
import img2 from "../images/exploreWorld2.png";

const ExploreWorld = () => {
  return (
    <Container maxWidth="lg">
      <Grid container mt={15} className={styles.container}>
        <Grid item xs={12} md={6} className={styles.info}>
          <Typography component="h5" variant="h4">
            Explore the world with Excitement
          </Typography>
          <Typography component="p" variant="p" mt={1} mb={5}>
            We are dedicated to making your journey of discovery truly
            unforgettable. Our team of passionate travel experts is here to
            assist you
          </Typography>
          <Link to="/">Let’s Get Started</Link>
        </Grid>
        <Grid item xs={12} md={6} className={styles.images}>
          <div className={styles.exploreImg}>
            <img src={img1} alt="exploreImg" data-aos="fade-right" />
            <img src={img2} alt="exploreImg" data-aos="fade-left" />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ExploreWorld;
