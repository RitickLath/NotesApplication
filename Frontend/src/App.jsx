import React from "react";
import Header from "./component/Header";
import Navbar from "./component/Navbar";

const App = ({ children }) => {
  return (
    <div className="bg-[#1f2123] text-white min-h-[100vh] min-w-full px-6 sm:px-8 md:px-16 lg:px-20">
      <Navbar />
      {children}
    </div>
  );
};

export default App;
