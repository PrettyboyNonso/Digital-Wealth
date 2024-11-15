import AboutPage from "./About/AboutPage";
import ContactPage from "./contact/Contact";
import Home from "./home/Home";
import Login from "./Login/Login";
import Register from "./Login/Register";
import Footer from "./reuseables/Footer";
import Header from "./reuseables/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
