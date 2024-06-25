import IconsSidebar from "./IconsSidebar"

const Sidebar = () => {
    return (
        <div className=" flex flex-col items-center w-[6em] h-screen gap-1 bg-gray-sidebar border-solid border-purple-blue">
            <img className="w-11 mt-4 mb-4 animate-spin-slow " src="\assets\images\coronavirus.png" alt="logo" />
            <IconsSidebar iconSB="ti-pie-chart" />
            <IconsSidebar iconSB="ti-view-list" />
            <IconsSidebar iconSB="ti-layout-grid2" />
            <IconsSidebar iconSB="ti-layout-tab" />
            <IconsSidebar iconSB="ti-layers-alt" />
            <IconsSidebar iconSB="ti-stats-up" />
            <IconsSidebar iconSB="ti-world" />
            <IconsSidebar iconSB="ti-comment" />
            <i className="ti-flickr-alt w-6 h-6 rounded-full text-center text-gray-super-light bg-purple-blue mt-8"></i>
        </div>
    )
}

export default Sidebar