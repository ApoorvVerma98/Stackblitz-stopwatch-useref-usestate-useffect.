import React from "react";

function Button({ onClick, disabled, text }) {
  return (
    <button className="button" onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}

export default Button;
