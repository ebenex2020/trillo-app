/** @format */

import styles from "../Css/Btn.module.css";

function Btn({ children, type }) {
  return (
    <button className={`${styles.btn} ${styles[type]}`}>{children}</button>
  );
}

export default Btn;
