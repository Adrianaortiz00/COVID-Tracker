const CardTiles = ({ flag, country, cases }) => {
    return (
      <div className="flex items-center mb-3 shadow border-[1px] border-slate-100 hover:scale-105 transition duration-500 font-medium max-w-xs p-4 rounded-lg bg-white">
        <img src={flag} className="w-11 h-11 rounded-full mr-4" alt={`${country} flag`} />
        <div className="flex flex-col">
          <h2 className="text-normal font-light">{country}</h2>
          <div className="text-dark-blue-2 font-semibold">{cases}</div>
        </div>
      </div>
    );
  };
  
  export default CardTiles;