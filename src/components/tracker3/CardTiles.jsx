const CardTiles = ({ flag, country, cases }) => {
    return (
      <div className="flex items-center mb-2 shadow border-[1px] border-slate-100 hover:scale-105 transition duration-500 font-medium max-w-xs p-2 rounded-lg bg-white">
        <img src={flag} className="w-8 h-8 rounded-full mr-4" alt={`${country} flag`} />
        <div className="flex flex-col w-3/4">
          <h2 className="text-sm font-light">{country}</h2>
          <div className="font-semibold w-20 ">{cases}</div>
        </div>
      </div>
    );
  };
  
  export default CardTiles;