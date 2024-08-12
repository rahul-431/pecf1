import { Outlet } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

function AppLayout() {
  return (
    <>
      <header className="text-black bg-[#FFFCFC]">
        <Navbar />
      </header>
      <main className=" bg-[#FFFCFC]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;