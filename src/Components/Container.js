/** @format */

import styles from "../Css/Container.module.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Container() {
  const { container } = styles;

  return (
    <div className={container}>
      <Header />
      <Sidebar />
    </div>
  );
}

export default Container;
