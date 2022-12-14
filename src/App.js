import "./style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Auth from "./Pages/Auth";
import StartupPage from "./Pages/StartupPage";
import ProfilePage from "./Pages/ProfilePage";
import TranslationPage from "./Pages/TranslationPage";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import PageTemplate from "./Pages/PageTemplate";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<StartupPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/translation" element={<TranslationPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default Auth(App);
