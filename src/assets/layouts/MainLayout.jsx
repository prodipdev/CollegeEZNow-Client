import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";

const MainLayout = () => {
  return (
    <div className="bg-[#F6F7F9] min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
