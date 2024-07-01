import { PropTypes } from "prop-types";

const CardGlobal = ({icon, title, data}) => {
  
  return (
    <div className="card rounded px-3 md:px-5 py-1 md:py-3 bg-white w-full md:max-w-64 h-24 font-bold flex items-center gap-3">
      <div className="image">
          <img className="icon w-9 md:w-12" src={icon} alt="COVID-19 Icon" />
      </div>
      <div className="text">
        <h5 className=" font-medium text-xs md:text-sm">{title}</h5>
        <h3 className={`font-semibold text-lg md:text-2xl leading-snug`}>{data}</h3>
      </div>
    </div>
  )
}

CardGlobal.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  data: PropTypes.number,
}

export default CardGlobal
