import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between pt-4 px-6">
      <div>
        <h1 className="font-semibold text-lg">NoteFreely</h1>
      </div>
      <div className="flex space-x-3 lg:space-x-6 text-lg">
        <h1>Home</h1>
        <h1>Login</h1>
        <h1>Sign Up</h1>
        <h1>My Notes</h1>
      </div>
    </div>
  );
};

export default Navbar;
