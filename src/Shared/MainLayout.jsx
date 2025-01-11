import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div className="relative">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
