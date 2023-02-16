import { Route, Routes } from "react-router-dom";
import Header from "@/components/Header";
import Home from "@/pages/Home";
import { useEffect } from "react";
import { useNetworkStatus } from "./hooks/useNetworkStatus";
import "@/styles.css";

const Main = () => {
  const { isOnLine, handleStatusChange } = useNetworkStatus();

  useEffect(() => {
    handleStatusChange();
  }, [isOnLine]);

  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/:category" element={<Home />} /> */}
        </Routes>
      </main>
    </div>
  );
};

export default Main;
