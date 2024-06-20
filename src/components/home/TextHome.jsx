import PropTypes from "prop-types";
import Button from "./Button";

function TextHome({ title, text, buttonText, buttonStyle }) {
    return (
        <section className="sectionInfo">
            <h2 className=" font-poppins leading-[1em] text-[3.5em] text-white font-black pt-[0.5em] ml-[3em] line-clamp-6">{title}</h2>
            <p className=" font-poppins font-medium text-[1em] text-gray-super-light pt-[1em] ml-[10.8em] ">{text}</p>
            <Button buttonText={buttonText} buttonStyle={buttonStyle} />
        </section>
    );
}



TextHome.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    buttonText: PropTypes.string,
    buttonStyle: PropTypes.string,
};

export default TextHome