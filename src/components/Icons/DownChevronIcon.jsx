import React from "react";

function DownChevronIcon({ color= "#000", ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill={color}
      version="1.1"
      viewBox="0 0 407.437 407.437"
      xmlSpace="preserve"
      {...rest}
    >
      <path d="M386.258 91.567L203.718 273.512 21.179 91.567 0 112.815 203.718 315.87 407.437 112.815z"></path>
    </svg>
  );
}

export default DownChevronIcon;