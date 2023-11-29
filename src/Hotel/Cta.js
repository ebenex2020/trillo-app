/** @format */

import styles from "./Cta.module.css";

function Cta() {
  return (
    <div className={styles.cta}>
      <h2 className={styles.header}>
        Good news! we have 4 free rooms for your selected date!
      </h2>
      <button className={styles.btn}>
        <span className={styles.visible}>book now</span>
        <span className={styles.invisible}>only 4 rooms left</span>
      </button>
    </div>
  );
}

export default Cta;
