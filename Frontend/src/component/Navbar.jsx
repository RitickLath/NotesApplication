import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between pt-4">
      <div>
        <h1 className="font-semibold text-lg">NoteFreely</h1>
      </div>
      <div className="flex space-x-3 lg:space-x-6 text-lg">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/auth")}>Sign In</button>
        <button onClick={() => navigate("/dashboard")}>My Notes</button>
      </div>
    </div>
  );
};

export default Navbar;
