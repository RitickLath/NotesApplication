import React from "react";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Authentication from "./Pages/Authentication";
import CreateNotes from "./Pages/CreateNotes";
import Dashboard from "./Pages/Dashboard";
import Header from "./component/Header";
import EditNotes from "./Pages/EditNotes";

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
              <CreateNotes />
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
        <Route
          path="/editnotes"
          element={
            <App>
              <EditNotes />
            </App>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
