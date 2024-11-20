import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import Authentication from "./Pages/Authentication";
import CreateNotes from "./Pages/CreateNotes";
import Dashboard from "./Pages/Dashboard";
import Header from "./component/Header";
import EditNotes from "./Pages/EditNotes";
import { authAtom } from "./store/AuthStatus";
import { useRecoilState } from "recoil";

const Layout = () => {
  const [isAuth, setIsAuth] = useRecoilState(authAtom);
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
            isAuth ? (
              <Navigate to="/dashboard" />
            ) : (
              <App>
                <Authentication />
              </App>
            )
          }
        />
        <Route
          path="/notes"
          element={
            isAuth ? (
              <App>
                <CreateNotes />
              </App>
            ) : (
              <Navigate to="/auth" />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            isAuth ? (
              <App>
                <Dashboard />
              </App>
            ) : (
              <Navigate to="/auth" />
            )
          }
        />
        <Route
          path="/editnotes"
          element={
            isAuth ? (
              <App>
                <EditNotes />
              </App>
            ) : (
              <Navigate to="/auth" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
