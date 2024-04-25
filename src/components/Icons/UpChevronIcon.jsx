import React from "react";

function UpChevronIcon({ color="#000", ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...rest}
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M12 7a1 1 0 01.707.293l7 7a1 1 0 01-1.414 1.414L12 9.414l-6.293 6.293a1 1 0 01-1.414-1.414l7-7A1 1 0 0112 7z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default UpChevronIcon;