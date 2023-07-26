import React from "react";
import spinner from "../../assets/spinner.svg";

export default function Spinner({ height = 40, width = 40 }) {
  return (
    <div>
      <img src={spinner} alt="Loader" height={height} width={width} />
    </div>
  );
}
