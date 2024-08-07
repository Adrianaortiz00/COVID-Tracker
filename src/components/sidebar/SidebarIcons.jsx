import PropTypes from "prop-types";

const SidebarIcons = ({ iconSB }) => {
    return (
        <div className="group flex items-center justify-center align-middle w-14 h-14 rounded-[7px] transition-all duration-[0.5s] hover:bg-purple-blue active:bg-purple-blue  cursor-pointer">
            <i
                className={`ti ${iconSB} leading-none text-center text-lg text-purple-blue transition-all duration-[0.2s] group-hover:text-gray-light  active:text-gray-light active:animate-ping`}
            />
        </div>
    );
};

SidebarIcons.propTypes = {
    iconSB: PropTypes.string,
};

export default SidebarIcons;
