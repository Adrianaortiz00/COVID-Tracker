import { Outlet } from "react-router-dom";
import Tracker0 from "../pages/tracker/sections/Tracker0";
import Sidebar from "../components/sidebar/Sidebar";

const TrackerLayout = () => {
    return (
        <div className="flex font-poppins">
            <Sidebar />
            <Tracker0 />
            <div className="flex-1 bg-[#F7F8FC]">
                <Outlet />
            </div>
        </div>
    );
};

export default TrackerLayout;
