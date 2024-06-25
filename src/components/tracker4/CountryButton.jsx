
const CountryButton = ({onClick, country, flag}) => {
  const handleClick = (e) => {
    onClick(e.target.innerText);
  }
  return (
    <>
    <button onClick={handleClick}>
      <img src={flag} alt={`${country} flag`} />
      {country}
    </button>
    </>
  )
}

export default CountryButton
