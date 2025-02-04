import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import DogList from "./components/DogList";
import LoginForm from "./components/LoginForm";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/search" element={<DogList />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;