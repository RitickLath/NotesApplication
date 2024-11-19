import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center w-full py-12 lg:py-28">
      <h1 className="text-3xl lg:text-5xl font-semibold text-center">
        Let Your Thoughts Flow Freely!
      </h1>
      <h2 className="lg:text-xl max-w-[600px] my-6 text-center">
        Effortlessly capture your ideas, keep them organized, and access them
        anytime you need. Stay inspired and in control.
      </h2>
      <button
        onClick={() => {
          navigate("/auth");
        }}
        className="lg:text-lg py-1 px-3 bg-blue-600 hover:bg-blue-700 rounded-md"
      >
        Sign Up Now
      </button>
    </div>
  );
};

export default Header;
