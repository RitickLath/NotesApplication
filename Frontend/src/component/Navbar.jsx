import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  return (
    <nav className="flex justify-between items-center py-4 px-6 text-white">
      <div>
        <h1
          className="font-bold text-xl cursor-pointer"
          onClick={() => navigate("/")}
        >
          NoteFreely
        </h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 text-lg">
        <button
          onClick={() => navigate("/")}
          className="hover:text-blue-400 transition"
        >
          Home
        </button>
        <button
          onClick={() => navigate("/auth")}
          className="hover:text-blue-400 transition"
        >
          Sign In
        </button>
        <button
          onClick={() => navigate("/dashboard")}
          className="hover:text-blue-400 transition"
        >
          My Notes
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden relative">
        <GiHamburgerMenu
          onClick={() => setShow(!show)}
          className="text-2xl cursor-pointer"
        />

        {show && (
          <div className="z-20 bg-[#1f2123] absolute top-10 -right-12 w-[250px] rounded-md shadow-lg p-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <button
                  onClick={() => {
                    navigate("/");
                    setShow(false);
                  }}
                  className="block w-full text-left hover:text-blue-400 transition"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate("/auth");
                    setShow(false);
                  }}
                  className="block w-full text-left hover:text-blue-400 transition"
                >
                  Sign In
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate("/dashboard");
                    setShow(false);
                  }}
                  className="block w-full text-left hover:text-blue-400 transition"
                >
                  My Notes
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
