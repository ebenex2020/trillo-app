/** @format */

import { Route, Routes } from "react-router-dom";

import styles from "../Css/Main.module.css";

import Hotel from "./Hotel";
import Flight from "./Flight";
import CarRental from "./CarRental";
import Tours from "./Tours";
import PageNotFound from "./PageNotFound";

function Main() {
  const { hotelView } = styles;

  return (
    <main className={hotelView}>
      <Routes>
        <Route path="/" element={<Hotel />} />
        <Route path="/flight" element={<Flight />} />
        <Route path="/carRental" element={<CarRental />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
}

export default Main;
