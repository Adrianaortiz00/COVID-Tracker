import PropTypes from "prop-types";

function TextHome({ title, text, buttonText }) {
    return (
        <section className="sectionInfo">
            <h2 className="font-fontAwesome leading-[1em] text-[3.5em] text-white font-black pt-[0.5em] ml-[3em]">{title}Download the covid app for get latest update</h2>
            <p className=" font-themify font-medium text-[1em] text-gray pt-[1em] ml-[10.8em] leading-[2em]">{text}Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.The corona virus COVID-19 is affecting 210 countries & territories around the world and 2 international conveyances.</p>
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