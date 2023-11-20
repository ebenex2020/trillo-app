/** @format */

import { HiChevronRight } from "react-icons/hi2";

import styles from "./Description.module.css";

import img3 from "../img/user-3.jpg";
import img4 from "../img/user-4.jpg";
import img5 from "../img/user-5.jpg";
import img6 from "../img/user-6.jpg";

const texts = [
  { text: "Close to the beach", icon: <HiChevronRight /> },
  { text: "Free airport shuttle", icon: <HiChevronRight /> },
  { text: "Air conditioning and heating", icon: <HiChevronRight /> },
  { text: "We speak all languages", icon: <HiChevronRight /> },
  { text: "Breakfast included", icon: <HiChevronRight /> },
  { text: "Free wifi in all rooms", icon: <HiChevronRight /> },
  { text: "Pets allowed", icon: <HiChevronRight /> },
  { text: "Perfect for families", icon: <HiChevronRight /> },
];

function Description() {
  return (
    <div className={styles.description}>
      <div className={styles.paragraphs}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi
          dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas,
          ut corporis incidunt deserunt quae architecto voluptate.
        </p>
        <p>
          Accusantium cumque, quas, ut corporis incidunt deserunt quae
          architecto voluptate delectus, inventore iure aliquid aliquam.
        </p>
      </div>

      <ul className={styles.lists}>
        {texts.map((tx, i) => (
          <li key={i} className={styles.list}>
            {tx.icon} <span>{tx.text}</span>
          </li>
        ))}
      </ul>

      <div className={styles.descEnd}>
        <p>Lucy and 3 others recommend this hotel</p>
        <div>
          <img src={img3} alt="recomended pictures" className={styles.images} />
          <img src={img4} alt="recomended pictures" className={styles.images} />
          <img src={img5} alt="recomended pictures" className={styles.images} />
          <img src={img6} alt="recomended pictures" className={styles.images} />
        </div>
      </div>
    </div>
  );
}

export default Description;
