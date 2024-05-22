import { Avatar, Container, Grid, Typography } from "@mui/material";
import styles from "./ChooseUs.module.css";
import img1 from "../images/ChooseUs1.png";
import img2 from "../images/ChooseUs2.png";
import chooseItem from "../constants/chooseUs";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const ChooseUs = () => {
  return (
    <Container maxWidth="lg">
      <Grid container className={styles.container} mt={10}>
        <Grid item xs={12} md={6} className={styles.image}>
          <img src={img1} alt="" data-aos="fade-right" />
          <img src={img2} alt="" data-aos="fade-left" />
        </Grid>
        <Grid item xs={12} md={6} className={styles.info}>
          <Typography component="h4" variant="h4" className={styles.title}>
            Why Choose Us
          </Typography>
          <Typography component="p" variant="p" className={styles.text} mt={1}>
            Discover new and affordable adventures of course and enjoy different
            experiences in every place you visit and
          </Typography>
          <Typography component="div" variant="div" mt={7}>
            {chooseItem.map((item) => (
              <div key={item.id} className={styles.chooseItems}>
                <Avatar src={item.image} alt="avatar" />
                <div>
                  <Typography component="h6" variant="h6">
                    {item.type}
                  </Typography>
                  <Typography component="p" variant="p">
                    {item.text}
                  </Typography>
                </div>
              </div>
            ))}
          </Typography>
          <div className={styles.link}>
            <Link to="/">Explore more</Link>
            <IoIosArrowForward />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ChooseUs;
