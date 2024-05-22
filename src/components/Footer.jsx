import { Container, Grid, Typography } from "@mui/material";
import { GoMail } from "react-icons/go";
import { LuPhone } from "react-icons/lu";
import { FiMapPin } from "react-icons/fi";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container maxWidth="lg">
        <Grid container pt={5} className={styles.container} spacing={5}>
          <Grid item xs={8} md={3}>
            <Typography component="h5" variant="h6" mb={2}>
              Travel
            </Typography>
            <Typography component="p" variant="p" className={styles.textFooter}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
            </Typography>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography component="h5" variant="h6" mb={2} fontWeight={600}>
              Product
            </Typography>
            <ul className={styles.itemsFooter}>
              <li>Features</li>
              <li>Pricing</li>
              <li>Case studies</li>
              <li>Reviews</li>
              <li>Updates</li>
            </ul>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography component="h5" variant="h6" mb={2} fontWeight={600}>
              Company
            </Typography>
            <ul className={styles.itemsFooter}>
              <li>About</li>
              <li>Contact us</li>
              <li>Careers</li>
              <li>Culture</li>
              <li>Blog</li>
            </ul>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography component="h5" variant="h6" mb={2} fontWeight={600}>
              Support
            </Typography>
            <ul className={styles.itemsFooter}>
              <li>Getting started</li>
              <li>Help center</li>
              <li>Server status</li>
              <li>Report a bug</li>
              <li>Chat support</li>
            </ul>
          </Grid>
          <Grid item xs={6} md={3} className={styles.contactsUs}>
            <Typography component="h5" variant="h6" mb={2} fontWeight={600}>
              Contacts us
            </Typography>
            <ul className={styles.itemsFooter}>
              <li>
                <GoMail /> arashafsaryan@gmail.com
              </li>
              <li>
                <LuPhone /> 0921***5520
              </li>
              <li>
                <FiMapPin /> 794 Mcallister St San Francisco, 94102
              </li>
            </ul>
          </Grid>
          <Grid xs={12} className={styles.copyright} mt={7}>
            <Typography component="p" variant="p" my={3}>
              Copyright Free Designed by Arash © 2024{" "}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
