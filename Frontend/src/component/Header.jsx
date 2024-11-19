import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col items-center w-full py-12 lg:py-28">
      <h1 className="text-3xl lg:text-5xl font-semibold text-center">
        Let Your Thoughts Flow Freely!
      </h1>
      <h2 className="text-xl max-w-[600px] my-6 text-center">
        Effortlessly capture your ideas, keep them organized, and access them
        anytime you need. Stay inspired and in control.
      </h2>
      <button className="text-lg py-1 px-3 bg-[#E58C33] hover:bg-[#f3ab64] rounded-md">
        Sign Up Now
      </button>
    </div>
  );
};

export default Header;
