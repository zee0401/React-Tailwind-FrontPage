import React from "react";
import terminal from "../assests/terminal.png";

const Developers = () => {
  return (
    <div className="w-full text-white  bg-black">
      <div className="max-W-[1240px] mx-auto py-8 px-4 lg:flex-col text-center md:flex">
        <h1>Superpowers for DeFI Developers</h1>
        <p>
          Checkout the <span className="blue">documentation</span>, the quick
          start or a guide below to integrate your project with thousands of
          okens and billions of liquidity.
        </p>
      </div>
      <div className="flex justify-center w-full py-16">
        <img
          className="max-w-[250px] self-center shadow-lg shadow-cyan-500/50 mt-4"
          src={terminal}
          alt="terminal"
        />
      </div>
    </div>
  );
};

export default Developers;
