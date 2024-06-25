import CountryButton from "./CountryButton"

const ButtonGroup = ({onClick}) => {
  const handleClick = (country) => {
    onClick(country);
  }
  return (
    <div> 
      <CountryButton onClick={handleClick} country="Spain" flag="https://media.istockphoto.com/id/990992334/vector/spain-round-flag-vector-flat-icon.jpg?s=612x612&w=0&k=20&c=IiBYlgvTMqeGaLxjVnHk6_gyoyBT8yR6NosX31zhTCY="/>
      <CountryButton onClick={handleClick} country="pain"/>
      <CountryButton onClick={handleClick} country="pain"/>
      <CountryButton onClick={handleClick} country="pain"/>
    </div>
  )
}

export default ButtonGroup
