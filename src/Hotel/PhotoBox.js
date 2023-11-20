/** @format */

import styles from "./PhotoBox.module.css";

import hotel1 from "../img/hotel-1.jpg";
import hotel2 from "../img/hotel-2.jpg";
import hotel3 from "../img/hotel-3.jpg";

function PhotoBox() {
  return (
    <div className={styles.photoBox}>
      <figure>
        <img src={hotel1} alt="pics of hotel 1" className={styles.photo} />
      </figure>
      <figure>
        <img src={hotel2} alt="pics of hotel 2" className={styles.photo} />
      </figure>
      <figure>
        <img src={hotel3} alt="pics of hotel 3" className={styles.photo} />
      </figure>
    </div>
  );
}

export default PhotoBox;
