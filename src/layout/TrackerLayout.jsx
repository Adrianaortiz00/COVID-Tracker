import { Outlet, Link } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

const TrackerLayout = () => {
  return (
    <div className="font-poppins">
      <div>
        <Sidebar/>
      </div>
      <Outlet />
    </div>
  );
};

export default TrackerLayout;
