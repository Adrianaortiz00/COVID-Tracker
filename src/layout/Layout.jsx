import Navbar from "../components/general/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className="bg-[#F7F8FC]">
        <Outlet />
      </main>
      {/* <footer>Footer</footer> */}
    </div>
  );
};

export default Layout;
