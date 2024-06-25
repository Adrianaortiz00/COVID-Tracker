import { Outlet, Link } from "react-router-dom";
import Tracker0 from "../pages/tracker/sections/Tracker0";
import Sidebar from "../components/sidebar/Sidebar";

const TrackerLayout = () => {
  return (
    <div className="flex font-poppins">
      <Sidebar />
      <Tracker0 />
      <Outlet className="bg-[#F7F8FC]" />
    </div>
  );
};

export default TrackerLayout;
