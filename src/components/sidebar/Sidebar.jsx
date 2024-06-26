import IconsSidebar from "./IconsSidebar"
import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
        <div className=" flex flex-col items-center w-[6em] h-screen gap-1 bg-gray-sidebar border-solid border-purple-blue">
            <Link to="/">
                <img className="w-11 mt-4 mb-4 animate-spin-slow " src="\assets\images\coronavirus.png" alt="logo" />
            </Link>
            <Link to="/tracker/tracker1">
                <IconsSidebar iconSB="ti-pie-chart" />
            </Link>
            <Link to="/tracker/tracker2">
                <IconsSidebar iconSB="ti-view-list" />
            </Link>
            <IconsSidebar iconSB="ti-layout-grid2" />
            <Link to="/tracker/tracker4">
                <IconsSidebar iconSB="ti-layout-tab" />
            </Link>
            <IconsSidebar iconSB="ti-layers-alt" />
            <IconsSidebar iconSB="ti-stats-up" />
            <IconsSidebar iconSB="ti-world" />
            <IconsSidebar iconSB="ti-comment" />
                <img src="\assets\images\icons\flickr-svgrepo-com.svg" alt="flickr icon" className="fixed rounded-3xl bottom-0 mb-8 w-6 h-6 mt-8 max-xl:" />
        </div>
    )
}

export default Sidebar