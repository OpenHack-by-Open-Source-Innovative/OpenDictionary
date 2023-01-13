import React from "react";

function Button() {

    const handleClick = () => {
        alert("Hey");
      };
  return (
    <>
      <div>
        <button type="button" class="btn btn-info" onClick={handleClick}>Click Me</button>
      </div>
    </>
  );
}

export default Button;
