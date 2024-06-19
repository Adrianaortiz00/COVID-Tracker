import PropTypes from "prop-types";

function TextHome({ title, text, buttonText }) {
    return (
        <section className="sectionInfo">
            <h2 className="font-fontAwesome text-[4em] text-white font-black pt-[0.5em] ml-[3em]">{title}Titulo</h2>
            <p className="font-fontAwesome text-[1em] text-white pt-[1em] ml-[12em]">{text}paragraph</p>
            <button className=" h-12 text-[0.7em] font-semibold bg-dark-purple hover:bg-purple text-white font-themify py-2 px-4 border border-purple border-solid w-40 ml-[17em] mt-[2em] mb-8 rounded-[30px] shadow hover:border-transparent">{buttonText} BUTTON TEXT </button>
        </section>
    );
}



TextHome.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    buttonText: PropTypes.string,
};

export default TextHome