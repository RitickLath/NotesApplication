import React from "react";
import Header from "./component/Header";
import Navbar from "./component/Navbar";

const App = () => {
  return (
    <div className="px-3 sm:px-4 lg:px-12">
      <Navbar />
      <Header />
    </div>
  );
};

export default App;
