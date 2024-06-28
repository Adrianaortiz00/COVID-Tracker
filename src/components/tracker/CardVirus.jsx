import PropTypes from 'prop-types';
import colorVariants from '../../data/colorVariants';

const CardVirus = ({data, color}) => {

  return (
    <div className="card group overflow-hidden rounded bg-white w-[18rem] font-bold text-[1.1250em] relative transition ease hover:-translate-y-3 duration-500 shadow-[0_15px_30px_0_rgba(20,50,90,0.05)]">
      <div className="title">
        <h5 className="font-medium px-5 py-3 border-b-[1px] border-gray-super-light capitalize">{data.label}</h5>
      </div>
      <div className="data bg-transparent">
        <h3 className={`font-semibold px-5 pt-1 pb-2 text-[2em] ${colorVariants[color]}`}>{data.value}</h3>
      </div>
      <div className="background icon-container absolute top-[-1.875rem] left-44 w-[8.75rem] opacity-10">
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
