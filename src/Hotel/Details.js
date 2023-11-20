/** @format */

import Description from "./Description";
import Review from "./Review";

import styles from "./Details.module.css";

function Details() {
  return (
    <div className={styles.details}>
      <Description />
      <Review />
    </div>
  );
}

export default Details;
