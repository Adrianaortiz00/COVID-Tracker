import PropTypes from "prop-types";

const Button = ({ buttonText, buttonStyle }) => {
    return (
        <button className={`${buttonStyle} w-56 h-[5em] text-[0.7em] font-semibold font-poppins py-2 px-4`} >{buttonText} </button>
    )
}
Button.propTypes = {
    buttonText: PropTypes.string,
    buttonStyle: PropTypes.string,
};

export default Button;
