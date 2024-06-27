import { PropTypes } from "prop-types";

const CardWorldwide = ({ title, cases, className, casesClassName, extraCases }) => {
  return (
    <div
      className={`flex items-center justify-between border-transparent hover:border hover:scale-105 transition duration-500 font-medium max-w-sm p-4 rounded-lg ${className}`}
    >
      <h6 className="text-normal text-base text-dark-blue-2">{title}</h6>
      <div className="flex items-center gap-2">
        {extraCases || extraCases === 0 ? (
          <span className="bg-[#fff] text-[#999] text-xs font-medium rounded w-auto h-5 flex items-center p-1">
            {extraCases}
          </span>
        ) : null}

        <h2 className={`text-2xl font-medium ${casesClassName}`}>{cases}</h2>
      </div>
    </div>
  );
};

CardWorldwide.propTypes = {
  title: PropTypes.string,
  cases: PropTypes.number,
  color: PropTypes.string,
};

export default CardWorldwide;
