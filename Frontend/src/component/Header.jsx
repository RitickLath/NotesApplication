import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authAtom } from "../store/AuthStatus";

const Header = () => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useRecoilState(authAtom);

  return (
    <div className="flex flex-col lg:flex-row items-center w-full py-12 lg:py-28">
      {/* Left Text Content */}
      <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
        <h1 className="text-3xl lg:text-5xl font-semibold text-center lg:text-left">
          Let Your Thoughts Flow Freely!
        </h1>
        <h2 className="lg:text-xl max-w-[600px] my-6 text-center lg:text-left">
          Effortlessly capture your ideas, keep them organized, and access them
          anytime you need. Stay inspired and in control.
        </h2>
        <button
          onClick={() => {
            if (isAuth) {
              navigate("/dashboard");
              console.log("Logged in");
            } else {
              navigate("/auth");
            }
          }}
          className="lg:text-lg py-1 px-3 bg-blue-600 hover:bg-blue-700 rounded-md"
        >
          {isAuth ? "Dashboard" : "Sign Up Now"}
        </button>
      </div>

      {/* Right Image */}
      <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
        <img
          src="\Image\banner.jpg"
          alt="Let Your Thoughts Flow"
          className="w-full max-w-sm lg:max-w-md shadow-md rounded-lg"
        />
      </div>
    </div>
  );
};

export default Header;
