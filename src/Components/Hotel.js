/** @format */

import styles from "../Css/Hotel.module.css";
import hotel1 from "../img/hotel-1.jpg";
import hotel2 from "../img/hotel-2.jpg";
import hotel3 from "../img/hotel-3.jpg";

function Hotel() {
  return (
    <div>
      <div className={styles.photoBox}>
        <img src={hotel1} alt="hotel" className="" />
        <img src={hotel2} alt="hotel" className="" />
        <img src={hotel3} alt="hotel" className="" />
      </div>
    </div>
  );
}

export default Hotel;
