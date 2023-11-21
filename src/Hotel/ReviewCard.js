/** @format */

import styles from "./Review.module.css";

function ReviewCard({ blockpost, image, name, date, rating }) {
  return (
    <figure className={styles.box}>
      <blockquote className={styles.blockpost}>{blockpost}</blockquote>

      <figcaption className={styles.userReview}>
        <img src={image} alt="user images" className={styles.image} />
        <div className={styles.textBox}>
          <p className={styles.name}>{name}</p>
          <p className={styles.date}>{date}</p>
        </div>
        <p className={styles.rating}>{rating}</p>
      </figcaption>
    </figure>
  );
}

export default ReviewCard;
