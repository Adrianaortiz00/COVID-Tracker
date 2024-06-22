import PropTypes from 'prop-types'
const CardVirus = ({data, color}) => {

  const colorVariants = {
    'red': 'text-red',
    'redark': 'text-dark-red',
    'defult': 'text-darker-blue',
    'orange': 'text-orange',
    'green': 'text-green',
    'blue': 'text-blue'
  }
  
  return (
    <div className="card group overflow-hidden bg-white w-[285px] mb-6 font-bold text-[1.1250em] relative transition ease hover:-translate-y-3 duration-500">
      <div className="title">
        <h5 className="font-medium px-5 py-3 border-b-[1px] border-gray-super-light capitalize">{data.label}</h5>
      </div>
      <div className="data bg-transparent">
        <h3 className={`font-semibold px-5 pt-1 pb-2 text-[2em] ${colorVariants[color]}`}>{data.value}</h3>
      </div>
      <div className="background icon-container absolute top-[-30px] left-44 w-[140px] opacity-10">
          <img className="icon group-hover:animate-spin-slow" src={`/assets/images/icons/covid-${color}.svg`} alt="COVID-19 Icon" />
      </div>
    </div>
  );
};

CardVirus.propTypes = {
  data: PropTypes.object,
  color: PropTypes.string
}

export default CardVirus;
