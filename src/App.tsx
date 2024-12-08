import Home from "./home/Home";
import Login from "./Login/Login";
// import Register from "./Login/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LoginProvider } from "./context/LoginContext";
import Dashboard from "./dashboard/dashboard";
import Layout from "./layout";
import Dashboardlayout from "./dashboard/dashboardlayout";
import Register from "./Login/Register";
import Auth from "./home/Auth";
import Deposit from "./dashboard/Deposit";
import Withdraw from "./dashboard/Withdraw";
import Loan from "./dashboard/Loan";
import Upgrade from "./dashboard/Upgrade";
import ViewLoan from "./dashboard/ViewLoan";
import CopyTrading from "./dashboard/CopyTrading";
import Plans from "./dashboard/Plans";
// import Settings from "./dashboard/Settings";
import SignalPage from "./dashboard/Signal";
import Logs from "./dashboard/Logs";
import Verify from "./dashboard/Verify";

export interface stateFunc {
  navIsOpen: boolean;
  setNavIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function App() {
  return (
    <BrowserRouter>
      <LoginProvider>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
            <Route path="dashboard/*" element={<Dashboardlayout />}>
              <Route index element={<Dashboard />} />
              <Route path="deposit" element={<Deposit />} />
              <Route path="withdraw" element={<Withdraw />} />
              <Route path="loan" element={<Loan />} />
              <Route path="upgrade" element={<Upgrade />} />
              <Route path="view-loans" element={<ViewLoan />} />
              <Route path="copy-trading" element={<CopyTrading />} />
              <Route path="plans" element={<Plans />} />
              <Route path="signals" element={<SignalPage />} />
              <Route path="logs" element={<Logs />} />
              <Route path="verify" element={<Verify />} />
            </Route>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </main>
      </LoginProvider>
    </BrowserRouter>
  );
}

export default App;
