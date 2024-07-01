import { Link } from "react-router-dom";
import SidebarIcons from "./SidebarIcons";

const Sidebar = () => {
    return (
        <div className="flex flex-col items-center w-[6em] h-screen md:h-screen gap-1 bg-gray-sidebar border-solid border-purple-blue">
            <Link to="/">
                <img className="w-11 mt-4 mb-4 animate-spin-slow " src="\assets\images\coronavirus.png" alt="logo" />
            </Link>
            <Link to="/tracker">
                <SidebarIcons iconSB="ti-pie-chart" />
            </Link>
            <Link to="/tracker/tracker2">
                <SidebarIcons iconSB="ti-view-list" />
            </Link>
            <Link to="/tracker/tracker3">
            <SidebarIcons iconSB="ti-layout-grid2" />
            </Link>
            <Link to="/tracker/tracker4">
                <SidebarIcons iconSB="ti-layout-tab" />
            </Link>
            <SidebarIcons iconSB="ti-layers-alt" />
            <SidebarIcons iconSB="ti-stats-up" />
            <SidebarIcons iconSB="ti-world" />
            <SidebarIcons iconSB="ti-comment" />
            <div className="group fixed bottom-0 mb-8 mt-2 md:mb-8 md:mt-8 flex items-center justify-center align-middle w-14 h-14 rounded-[7px] transition-all duration-[0.5s] hover:bg-purple-blue active:bg-purple-blue  cursor-pointer">
                <i className="ti ti-flickr-alt leading-none text-center text-lg text-purple-blue transition-all duration-[0.2s] group-hover:text-gray-light active:text-gray-light active:animate-ping"></i>
            </div>
        </div>
    );
};

export default Sidebar;
