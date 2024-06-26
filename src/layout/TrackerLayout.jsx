import { Outlet, Link } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

const TrackerLayout = () => {
  return (
    <div className="font-poppins">
      <div>
        <Sidebar/>
      </div>
      <Outlet className="bg-[#F7F8FC]" />
    </div>
  );
};

export default TrackerLayout;
