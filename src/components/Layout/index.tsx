import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

const Layout = () => {
  return (
    <div className="relative min-h-screen app max-w-[100vw]">
      <header className="bg-base-100">
        <Header />
      </header>
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
