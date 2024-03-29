import React from "react";
import { Route, Routes } from "react-router-dom";

import About from "./components/About"; // Import your new component

import Searched from "./components/Searched";
import Dashboard from "./components/Dashboard";
import Recipe from "./components/Recipe";
import ChatWidget from "./components/ChatWidget";
function App() {
  return (
    <Routes>
      {/* Define your routes here */}
      <Route path="/searched/:search" element={<Searched />} />
      <Route path="/about" element={<About />} />
      <Route path="/chat" element={<ChatWidget />} />
      <Route path="/recipe/:id" element={<Recipe />} />
      {/* Add more routes as needed */}

      {/* Default route */}
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
