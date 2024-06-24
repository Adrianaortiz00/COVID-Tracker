import { Outlet, Link } from "react-router-dom";
import Tracker0 from "../pages/tracker/sections/Tracker0";

const TrackerLayout = () => {
  return (
    <div className="font-poppins">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div className="flex">
        <Tracker0 />
        <Outlet />
      </div>
    </div>
  );
};

export default TrackerLayout;
