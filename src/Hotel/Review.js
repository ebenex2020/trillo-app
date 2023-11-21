/** @format */

import styles from "./Review.module.css";

import img1 from "../img/user-1.jpg";
import img2 from "../img/user-2.jpg";

const reviews = {};

function Review() {
  return (
    <figure className={styles.reviews}>
      <figure className={styles.box}>
        <blockquote className={styles.blockpost}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
          doloremque architecto dicta animi, totam, itaque officia ex.
        </blockquote>

        <figcaption className={styles.userReview}>
          <img className={styles.image} />
          <div className={styles.textBox}>
            <p className={styles.name}></p>
            <p className={styles.text}></p>
          </div>
        </figcaption>
      </figure>
    </figure>
  );
}

export default Review;
