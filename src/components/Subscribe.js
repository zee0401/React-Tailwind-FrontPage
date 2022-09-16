import React from "react";

const Subscribe = () => {
  return (
    <div className="w-full bg-black text-white py-16 px-4 flex flex-col items-center">
      <h1>Join Our Defi Community</h1>
      <div className="py-4">
        <input
          className="p-3 rounded-3xl mr-4"
          type="email"
          placeholder="Enter your email"
        />
        <button>Sign Up</button>
      </div>
      <div className="flex item-center justify-center py-2">
        <input className="mr-2" type="checkbox" />
        <p>Yes, I agree to receive email communication from Defi</p>
      </div>
    </div>
  );
};

export default Subscribe;
