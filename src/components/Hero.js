import React from "react";
import herovid from "../assests/video.mp4";

const Hero = () => {
  return (
    <div className="w-full h-[90vh] top-[90px]">
      <video
        className="h-full w-full object-cover absolute -z-10"
        src={herovid}
        autoPlay
        loop
        muted
      />
      <div className="w-full h-full px-4 flex flex-col justify-center items-center text-white">
        <h1>Decentralized</h1>
        <h1>
          <span className="blue">Trading</span> Protocols
        </h1>
        <p className=" text-center text-xl py-1">
          Guarenteed Liquidity trading for millions of users and top Etherium
          application
        </p>
        <div className="p-4 flex gap-3">
          <button>Use Defi</button>
          <button>FAQ</button>
        </div>
      </div>
      <p className="text-center text-white text-2xl font-bold">
        Total Volume Secured: $12,213,234,23
      </p>
    </div>
  );
};

export default Hero;
