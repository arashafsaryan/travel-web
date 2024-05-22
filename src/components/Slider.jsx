import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Container, Grid, Typography } from "@mui/material";
import slider from "../constants/silder";
import CardSlider from "./CardSlider";
import styles from "./Slider.module.css"

const Slider = () => {
  return (
    <Container maxWidth="lg">
      <Grid container mt={10} className={styles.container}>
        <Grid item xs={12}>
          <Typography component="h4" variant="h4" mb={3} fontWeight={700}>
            Most Popular Destination
          </Typography>
          <Swiper
            spaceBetween={10}
            slidesPerView={1.5}
            breakpoints={{
              300: {
                width: 300,
                slidesPerView: 1.1,
              },
              500: {
                width: 500,
                slidesPerView: 1.5,
              },
              768: {
                width: 768,
                slidesPerView: 2.5,
              },
              900: {
                width: 900,
                slidesPerView: 3,
              },
              1200: {
                width: 1200,
                slidesPerView: 3.5,
              },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {slider.map((item) => (
              <SwiperSlide key={item.id}>
                <CardSlider
                  image={item.image}
                  city={item.city}
                  tour={item.tour}
                  price={item.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Slider;
