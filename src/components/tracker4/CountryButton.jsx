import { PropTypes } from 'prop-types'

const CountryButton = ({ country, flag, onClick, isSelected }) => {

  return (
    <>
    <button 
    onClick={(e) => onClick(e.target.innerText)}
    className={`rounded flex font-medium gap-2 items-center px-4 py-3 shadow-[-1px_5px_11px_1px_rgba(181,186,202,0.20)] ${isSelected ? 'bg-darker-blue text-white' : 'bg-white '}`}>
      <img src={flag} alt={`${country} flag`} className='rounded-full w-5 h-5 object-cover'/>
      {country}
    </button>
    </>
  )
}

CountryButton.propTypes = {
  country: PropTypes.string,
  flag: PropTypes.string,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool
}

export default CountryButton
