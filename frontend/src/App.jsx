/* eslint-disable import/no-unresolved */
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CurrentUserContextProvider } from "./context/CurrentUserContext";
import { ThemeContextProvider } from "./context/ThemeContext";

// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <CurrentUserContextProvider>
      <ThemeContextProvider>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <Footer />
      </ThemeContextProvider>
    </CurrentUserContextProvider>
  );
}

export default App;
