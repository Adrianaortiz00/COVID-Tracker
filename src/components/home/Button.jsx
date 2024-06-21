import PropTypes from "prop-types";

const Button = ({ children, buttonStyle, navbar }) => {
  return (
    <button
      className={`${buttonStyle}, ${
        { navbar } ? "" : "w-56 h-[5em] text-[0.7em] font-semibold font-poppins py-2 px-4"
      }`}
    >
      {children}
    </button>
  );
};
Button.propTypes = {
  buttonText: PropTypes.string,
  buttonStyle: PropTypes.string,
};

export default Button;
