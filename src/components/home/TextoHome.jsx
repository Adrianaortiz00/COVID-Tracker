import PropTypes from "prop-types";

function TextHome({ title, text, buttonText }) {
    return (
        <section className="sectionInfo">
            <h2 className="title">{title}</h2>
            <p className="paragraph">{text}</p>
            <button className="buttonText">{buttonText}</button>
        </section>
    );
}

TextHome.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    buttonText: PropTypes.string,
};

export default TextHome