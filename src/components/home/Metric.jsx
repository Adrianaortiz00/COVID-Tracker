import PropTypes from "prop-types";

const Metric = ({ iconMetric, metric, subtitleMetric }) => {
    return (
        <div className=" grid justify-items-center grid-cols-2 text-center">
            <ul>
                <i className={`ti ${iconMetric} text-4xl text-gray-light`}></i>
                <li className=" font-poppins font-semibold text-[2.25em] text-gray-super-light">{metric} </li>
                <li className=" font-poppins font-semibold text-[0.6em] text-gray-light tracking-widest">{subtitleMetric} </li>
            </ul>
        </div>
    )
}

Metric.propTypes = {
    iconMetric: PropTypes.string,
    metric: PropTypes.string,
    subtitleMetric: PropTypes.string,

}

export default Metric