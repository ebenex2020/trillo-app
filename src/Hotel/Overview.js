/** @format */

import StarsRating from "../Reusable/StarRating";
import { ImLocation } from "react-icons/im";

import styles from "./Overview.module.css";
import Btn from "../Components/Btn";

function Overview() {
  return (
    <div className={styles.overview}>
      <div>
        <h1>Hotel las palmas</h1>
      </div>
      <StarsRating color="#eb2f64" size={15} />
      <div className={styles.location}>
        <ImLocation style={{ color: "#eb2f64", fontSize: "1.5rem" }} />
        <Btn>Manzini, Eswatini</Btn>
      </div>

      <div className={styles.rating}>
        <p className={styles.average}>8.6</p>
        <p className={styles.count}>429 votes</p>
      </div>
    </div>
  );
}

export default Overview;
