const CardTop10Country = ({ flag, country, cases }) => {
  return (
    <div className="flex items-center justify-between mb-3 shadow border-[1px] border-slate-100 hover:scale-105 transition duration-500 font-medium max-w-sm p-4 rounded-lg">
      <div className="flex items-center gap-5">
        <img src={flag} className="w-11 h-6 rounded" alt={`{country} flag`} />
        <h2 className="text-normal font-light">{country}</h2>
      </div>
      <div className="text-dark-blue-2 font-semibold">{cases}</div>
    </div>
  );
};

export default CardTop10Country;
