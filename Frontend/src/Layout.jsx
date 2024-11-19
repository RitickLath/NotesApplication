import React from "react";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Authentication from "./Pages/Authentication";
import InputPage from "./Pages/InputPage";
import Dashboard from "./Pages/Dashboard";

const Layout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="notes" element={<InputPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
