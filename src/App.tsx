import { useState } from "react";
import Home from "./home/Home";
import Login from "./Login/Login";
// import Register from "./Login/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LoginProvider } from "./context/LoginContext";
import Dashboard from "./dashboard/dashboard";
import Layout from "./layout";
import Dashboardlayout from "./dashboard/dashboardlayout";
import Register from "./Login/Register";

export interface stateFunc {
  navIsOpen: boolean;
  setNavIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function App() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <BrowserRouter>
      <LoginProvider>
        <main className="">
          <Routes>
            <Route
              path="/"
              element={
                <Layout setNavIsOpen={setNavIsOpen} navIsOpen={navIsOpen}>
                  <Home />
                </Layout>
              }
            />
            <Route
              path="/dashboard"
              element={
                <Dashboardlayout>
                  <Dashboard />
                </Dashboardlayout>
              }
            />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </LoginProvider>
    </BrowserRouter>
  );
}

export default App;
