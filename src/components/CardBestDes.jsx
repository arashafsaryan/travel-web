import { Link } from "react-router-dom";
import styles from "./CardBestDes.module.css";
import { Typography } from "@mui/material";
import { IoStar } from "react-icons/io5";

const CardBestDes = ({ image, city, text, country, price, score }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={image} alt="image" />
        <div className={styles.score}>
          <IoStar />
          <Typography component="p" variant="p">
            {score}
          </Typography>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.city}>
          <Typography component="h5" variant="h5" mb={1}>
            {city}
          </Typography>
          <Typography component="p" variant="p">
            {text}
          </Typography>
          <p></p>
        </div>
        <div className={styles.price}>
          <div>
            <Typography component="p" variant="p">
              {country}
            </Typography>
            <Typography component="h5" variant="h6" fontWeight={600}>
              ${price} <span>× 12 interest free</span>
            </Typography>
          </div>
          <div>
            <Link to="/">see More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBestDes;
