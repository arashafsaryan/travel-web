import { Container, Grid, Typography } from "@mui/material";
import styles from "./BestDestination.module.css";
import bestDes from "../constants/bestDestination";
import CardBestDes from "./CardBestDes";

const BestDestination = () => {
  
  return (
    <Container maxWidth="lg">
      <Typography component="h4" variant="h4" fontWeight={700} mt={15}>
        Explore Best Destination
      </Typography>
      <Grid container className={styles.container} mb={15} mt={1} spacing={8}>
        {bestDes.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} className={styles.cardItem}>
            <CardBestDes
              image={item.image}
              city={item.city}
              text={item.text}
              country={item.country}
              price={item.price}
              score={item.score}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BestDestination;
