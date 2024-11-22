import { useState } from "react";
// import AboutPage from "./About/AboutPage";
// import ContactPage from "./contact/Contact";
import Home from "./home/Home";
// import Login from "./Login/Login";
// import Register from "./Login/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { RandInt } from "./lib/utils";

import { LoginProvider } from "./context/LoginContext";
import Dashboard from "./dashboard/dashboard";
import Layout from "./layout";
import Dashboardlayout from "./dashboard/dashboardlayout";

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
          </Routes>
        </main>
      </LoginProvider>
    </BrowserRouter>
  );
}

export default App;
