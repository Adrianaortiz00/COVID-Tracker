import PropTypes from 'prop-types'
const CardVirus = ({data, color}) => {
  console.log(color)
  let icon = `/assets/images/icons/covid-${color}.svg`;
  return (
    <div className="card overflow-hidden bg-white w-[285px] mb-6 font-bold text-xl relative">
      <div className="title">
        <h5 className="px-5 pb-3 pt-2 border-b-[1px]">Total Cases</h5>
      </div>
      <div className="data bg-transparent">
        <h3 className={`px-5 pb-3 text-4xl text-${color}`}>5871977</h3>
      </div>
      <div className="background icon-container absolute top-[-30px] left-44 w-[140px] opacity-10">
          <img className="icon hover:animate-spin-slow" src={icon} alt="COVID-19 Icon" />
      </div>
    </div>
  );
};

CardVirus.propTypes = {
  data: PropTypes.object,
  color: PropTypes.string
}

export default CardVirus;
