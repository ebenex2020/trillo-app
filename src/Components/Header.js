/** @format */

import { useState } from "react";
import { ImSearch, ImBookmark, ImBubbles } from "react-icons/im";

import styles from "../Css/Header.module.css";
import logo from "../img/logo.png";
import userImg from "../img/user.jpg";

function Header() {
  // const [input, setInput] = useState("");

  const { header, img, form, search, nav, navBox, navPhoto, notifications } =
    styles;

  return (
    <header className={header}>
      <img src={logo} alt="header logo" className={img} />

      <form className={form}>
        <input type="text" placeholder="Search Hotels" className={search} />
        <button>
          <ImSearch />
        </button>
      </form>

      <nav className={nav}>
        <div className={navBox}>
          <ImBookmark style={{ fontSize: "2.25rem", color: "#777" }} />
          <span className={notifications}>7</span>
        </div>

        <div className={navBox}>
          <ImBubbles style={{ fontSize: "2.25rem", color: "#777" }} />
          <span className={notifications}>13</span>
        </div>

        <div>
          <img src={userImg} alt="user" className={navPhoto} />
          <span className="">Jonas</span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
