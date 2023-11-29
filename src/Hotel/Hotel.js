/** @format */

import PhotoBox from "./PhotoBox";
import Overview from "./Overview";
import Details from "./Details";
import Cta from "./Cta";

function Hotel() {
  return (
    <>
      <PhotoBox />
      <Overview />
      <Details />
      <Cta />
      <h3
        style={{
          textAlign: "right",
          fontFamily: "sans-serif",
          fontSize: ".8rem",
          fontWeight: "300",
          color: "#333",
        }}
      >
        developed by Ebenex2020
      </h3>
    </>
  );
}

export default Hotel;
