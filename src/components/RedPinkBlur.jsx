import React from "react";


const RedPinkBlur = () => {
  return (
    <div className=" blur-animate absolute -top-10 -left-20 w-80 h-80 sm:w-96 sm:h-96 rounded-full pointer-events-none"
      style={{
        background: "radial-gradient(circle, #ff3366, transparent 70%)",
        opacity: 0.15,
      }}
    />
  );
};

export default RedPinkBlur;
