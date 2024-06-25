import PropTypes from "prop-types";

const IconsSidebar = ({iconSB}) => {
    return (
        <div className="flex items-center justify-center align-middle w-14 h-14 rounded-[7px] hover:bg-purple-blue active:bg-purple-blue hover:transition-color">
            <i className= {`ti ${iconSB} leading-none text-center w-4 h-4 text-4x1 text-purple-blue hover:text-gray-light hover:w-4 hover:h-4  active:text-gray-light active:w-4 active:h-4`} />
        </div>
    )
}

IconsSidebar.propTypes = {
    iconSB: PropTypes.string,
}

export default IconsSidebar