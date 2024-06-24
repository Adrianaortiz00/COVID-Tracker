import { Outlet, Link } from "react-router-dom";
import Tracker0 from "../pages/tracker/sections/Tracker0";
import Sidebar from "../components/sidebar/Sidebar";

const TrackerLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Tracker0 />
      <Outlet />
    </div>
  );
};

export default TrackerLayout;
