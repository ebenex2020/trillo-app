/** @format */

import StarsRating from "../Reusable/StarRating";
import { ImLocation } from "react-icons/im";
import { HiChevronRight } from "react-icons/hi2";

import styles from "../Css/Hotel.module.css";
import hotel1 from "../img/hotel-1.jpg";
import hotel2 from "../img/hotel-2.jpg";
import hotel3 from "../img/hotel-3.jpg";
import img1 from "../img/user-1.jpg";
import img2 from "../img/user-2.jpg";
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

function Hotel() {
  return (
    <div className={styles.hotel}>
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

      <div className={styles.overview}>
        <div>
          <h1>Hotel las palmas</h1>
        </div>
        <StarsRating color="#eb2f64" size={15} />
        <div className={styles.location}>
          <ImLocation style={{ color: "#eb2f64", fontSize: "1.5rem" }} />
          <button className={styles.btn}>Manzini, Eswatini</button>
        </div>

        <div className={styles.rating}>
          <p className={styles.average}>8.6</p>
          <p className={styles.count}>429 votes</p>
        </div>
      </div>

      <div className={styles.details}>
        <div className={styles.description}>
          <div className={styles.paragraphs}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              nisi dignissimos debitis ratione sapiente saepe. Accusantium
              cumque, quas, ut corporis incidunt deserunt quae architecto
              voluptate.
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
              <img
                src={img3}
                alt="recomended pictures"
                className={styles.images}
              />
              <img
                src={img4}
                alt="recomended pictures"
                className={styles.images}
              />
              <img
                src={img5}
                alt="recomended pictures"
                className={styles.images}
              />
              <img
                src={img6}
                alt="recomended pictures"
                className={styles.images}
              />
            </div>
          </div>
        </div>

        <div className={styles.reviews}>Reviews</div>
      </div>
    </div>
  );
}

export default Hotel;
