import { Outlet } from "react-router-dom";
import Header from "../src/Components/Header/Header";
import Footer from "../src/Components/Footer/Footer";

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
