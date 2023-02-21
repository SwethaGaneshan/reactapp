import React, { useState, useEffect } from "react";
function Hooks() {
  const [greet, greeting] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      greeting(() => greet + 1);
    }, 1000);
  });
  return (
    <div className="hooks mt-5">
      <h2>{greet}</h2>
      {/* <button
        className="btn btn-info"
        onClick={() => {
          greeting(()=>greet+1);
        }}
      >
        Click here!
      </button> */}
    </div>
  );
}
export default Hooks;
