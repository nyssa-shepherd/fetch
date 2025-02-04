import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./Login/LoginPage";
// import SearchPage from "./Search/SearchPage";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          {/* <Route path="/search" element={<SearchPage />} /> */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
