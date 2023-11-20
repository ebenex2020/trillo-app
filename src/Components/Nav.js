/** @format */

import { NavLink } from "react-router-dom";

import styles from "../Css/Navigation.module.css";
import { ImAirplane, ImKey, ImHome3, ImMap2 } from "react-icons/im";

const NavLists = [
  {
    name: "Hotel",
    logo: <ImHome3 />,
    path: "/",
  },
  {
    name: "Flight",
    logo: <ImAirplane />,
    path: "/flight",
  },
  {
    name: "Car Rental",
    logo: <ImKey />,
    path: "/carRental",
  },
  {
    name: "Tours",
    logo: <ImMap2 />,
    path: "/tours",
  },
];

function Nav() {
  return (
    <nav className={styles.sidebar}>
      <ul className={styles.sidelists}>
        {NavLists.map((lists) => (
          <li key={lists.name} className={styles.lists}>
            <NavLink to={lists.path}>
              {lists.logo} <span>{lists.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
      <p>&copy; 2023 by trillo. All rights reserved.</p>
    </nav>
  );
}

export default Nav;
