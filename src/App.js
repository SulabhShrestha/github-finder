import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/AboutPage";
import UserPage from "./pages/UserPage";
import GithubProvider from "./context/GithubContext";

function App() {
  return (
    <Router>
      <div className="App flex flex-col justify-between h-screen">
        <Header />
        <GithubProvider>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/user/:name" element={<UserPage />} />
            <Route path="/not-found" element={<NotFoundPage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </GithubProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
