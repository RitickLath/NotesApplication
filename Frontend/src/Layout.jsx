import React from "react";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Authentication from "./Pages/Authentication";
import InputPage from "./Pages/InputPage";
import Dashboard from "./Pages/Dashboard";
import Header from "./component/Header";

const Layout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <App>
              <Header />
            </App>
          }
        />
        <Route
          path="/auth"
          element={
            <App>
              <Authentication />
            </App>
          }
        />
        <Route
          path="notes"
          element={
            <App>
              <InputPage />
            </App>
          }
        />
        <Route
          path="/dashboard"
          element={
            <App>
              <Dashboard />
            </App>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
