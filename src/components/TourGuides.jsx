import { Avatar, Container, Divider, Grid, Typography } from "@mui/material";
import brazil from "../images/brazil.png";
import tourGuides from "../constants/TourGuides";
import styles from "./TourGuides.module.css";
import React from "react";

const TourGuides = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={10} className={styles.container}>
        <Grid item xs={12} md={6} className={styles.info}>
          <Typography component="h5" variant="h4" fontWeight={600}>
            Meet Our Expert Tour Guides
          </Typography>
          <Typography component="p" variant="p" my={3}>
            With a wealth of experience, we bring adventures to life and invite
            you to embark on your own. The call of nature awaits—begin your
            adventure today!
          </Typography>
          <img src={brazil} alt="image" />
        </Grid>
        <Grid item xs={12} md={6} className={styles.guides}>
          {tourGuides.map((item, index) => (
            <React.Fragment key={item.title}>
              <div className={styles.itemsGuides}>
                <Avatar src={item.image} alt={item.title} />
                <div className={styles.titleInfo}>
                  <Typography component="h5" variant="h6" fontWeight={550}>
                    {item.title}
                  </Typography>
                  <Typography component="p" variant="p" mb={3}>
                    {item.text}
                  </Typography>
                </div>
              </div>
              {index !== tourGuides.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default TourGuides;
