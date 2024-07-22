// App.js
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";

import ShareForm from "./pages/ShareForm";
import axios from "axios";
import Layout from "./Layout";
import { PriceContextProvider } from "./context/DataContext";
import RegisterPage from "./pages/RegisterPage";
import Home from "./pages/Home";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

const App = () => {
  return (
      <PriceContextProvider>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/share/:method?" element={<ShareForm />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </PriceContextProvider>
  );
};

export default App;
