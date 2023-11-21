/** @format */

import styles from "./Review.module.css";

import img1 from "../img/user-1.jpg";
import img2 from "../img/user-2.jpg";
import ReviewCard from "./ReviewCard";
import Btn from "../Components/Btn";

function Review() {
  return (
    <figure className={styles.reviews}>
      <ReviewCard
        blockpost="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex."
        image={img1}
        name="Nick Smith"
        date="feb 23rd,2022"
        rating="9.3"
      />
      <ReviewCard
        blockpost="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi."
        image={img2}
        name="Mary Thomas"
        date="Sept 13th, 2023"
        rating="7.8"
      />

      <Btn type="show">
        Show all <span>&rarr;</span>
      </Btn>
    </figure>
  );
}

export default Review;
