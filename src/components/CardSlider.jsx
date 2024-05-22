import { Button, Typography } from "@mui/material";
import styles from "./CardSlider.module.css";
import { Link } from "react-router-dom";

const CardSlider = ({ image, city, tour, price }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardPart}>
        <img src={image} alt="imageSlider" />
        <Typography component="h6" variant="h6" mt={2}>
          {city}
        </Typography>
        <Typography component="p" variant="p" mb={3}>
          {tour}
        </Typography>
        <div className={styles.footCard}>
          <Typography component="h6" variant="h6">
            {price} <span>/Person</span>
          </Typography>
          <Link to="/">Book Now</Link>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
