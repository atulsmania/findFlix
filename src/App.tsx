import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Movies from "@/pages/Movies";
import "./styles.css";

const App = () => {
  return (
    <div className="relative w-full min-h-screen space-y-2 text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Movies />} />
      </Routes>
    </div>
  );
};

export default App;
