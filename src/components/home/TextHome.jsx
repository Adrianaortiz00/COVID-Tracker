import PropTypes from "prop-types";
import Button from "../general/Button";

function TextHome({ title, text, buttonText, buttonStyle, titleStyle, textStyle }) {
    return (
        <section className="md:pl-[6em] md:pr-[6em]">
            <h2 className={`${titleStyle} font-poppins text-[2em] leading-10 text-white md:leading-[1em]  md:text-[3.5em] md:text-white font-bold md:font-extrabold md:pt-[0.5em] w-5/6 md:w-fit md:line-clamp-6`}>{title}</h2>
            <p className={`${textStyle} font-poppins pt-6 font-medium md:text-[1em] text-gray-super-light md:pt-[1em] w-11/12 `}>{text}</p>
            <Button buttonText={buttonText} buttonStyle={buttonStyle} />
        </section>
    );
}



TextHome.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    buttonText: PropTypes.string,
    buttonStyle: PropTypes.string,
    titleStyle: PropTypes.string,
    textStyle: PropTypes.string,
};

export default TextHome