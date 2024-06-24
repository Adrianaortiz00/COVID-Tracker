import { PropTypes } from "prop-types";

const CardWorldwide = ({ title, cases, className, casesClassName }) => {
  return (
    <div className={`block font-medium  max-w-sm p-4 rounded-lg ${className}`}>
      <h6 className="text-base text-defult">{title}</h6>
      <h2 className={`text-3xl font-bold ${casesClassName}`}>{cases}</h2>
    </div>
  );
};

CardWorldwide.propTypes = {
  title: PropTypes.string,
  cases: PropTypes.number,
  color: PropTypes.string,
};

export default CardWorldwide;
