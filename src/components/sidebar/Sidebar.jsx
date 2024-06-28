import { Link } from "react-router-dom";
import SidebarIcons from "./SidebarIcons";

const Sidebar = () => {
    return (
        <div className=" flex flex-col items-center w-[6em] h-[rem] md:h-screen gap-1 bg-gray-sidebar border-solid border-purple-blue">
            <Link to="/">
                <img className="w-11 mt-4 mb-4 animate-spin-slow " src="\assets\images\coronavirus.png" alt="logo" />
            </Link>
            <Link to="/tracker">
                <SidebarIcons iconSB="ti-pie-chart" />
            </Link>
            <Link to="/tracker/tracker2">
                <SidebarIcons iconSB="ti-view-list" />
            </Link>
            <SidebarIcons iconSB="ti-layout-grid2" />
            <Link to="/tracker/tracker4">
                <SidebarIcons iconSB="ti-layout-tab" />
            </Link>
            <SidebarIcons iconSB="ti-layers-alt" />
            <SidebarIcons iconSB="ti-stats-up" />
            <SidebarIcons iconSB="ti-world" />
            <SidebarIcons iconSB="ti-comment" />
            <i className="ti ti-flickr-alt rounded-full text-[1.3em] text-center text-purple-blue fixed bottom-0 mb-8 mt-2 md:mb-8 md:mt-8"></i>
        </div>
    );
};

export default Sidebar;
