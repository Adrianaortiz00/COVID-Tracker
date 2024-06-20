import PropTypes from "prop-types";

const Metric = ({ iconMetric, metric, subtitleMetric }) => {
    return (
        <div className=" grid justify-items-center grid-cols-2 text-center">
            <ul>
                <li className=" font-themify inline-block text-4xl w-[1em] h-[1em] leading-none text-gray-light">{iconMetric} </li>
                <li className=" font-poppins font-semibold text-[2.25em] text-gray-super-light">{metric} </li>
                <li className=" font-poppins font-semibold text-[0.6em] text-gray-light tracking-widest">{subtitleMetric} </li>
            </ul>
        </div>
    )
}

Metric.protoType = {
    iconMetric: PropTypes.string,
    metric: PropTypes.string,
    subtitleMetric: PropTypes.string,

}

export default Metric