import { PropTypes } from "prop-types";

const CardGlobal = ({icon, title, data}) => {
  
  return (
    <div className="card rounded px-5 py-3 bg-white w-64 h-24 font-bold text-[1.1250em] flex items-center gap-3">
      <div className="image">
          <img className="icon w-12" src={icon} alt="COVID-19 Icon" />
      </div>
      <div className="text">
        <h5 className=" font-medium text-sm">{title}</h5>
        <h3 className={`font-semibold text-2xl leading-snug`}>{data}</h3>
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
