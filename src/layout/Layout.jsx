import Navbar from "../components/general/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <main>
        <Outlet />
      </main>
      {/* <footer>Footer</footer> */}
    </div>
  );
};

export default Layout;
