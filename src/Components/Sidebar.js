/** @format */

import Main from "./Main";
import Nav from "./Nav";
import styles from "../Css/Sidebar.module.css";

function Sidebar() {
  const { content } = styles;

  return (
    <div className={content}>
      <Nav />
      <Main />
    </div>
  );
}

export default Sidebar;
