import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-screen-2xl mx-auto">
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
