import { API_BASE_URL_GLOBAL } from "../../config/urls";
import useApi from "../../services/useApi";
import CardWorldwide from "./CardWorldwide";
import { generateStats } from "./utils/dataUtils";

const WorldwideCards = () => {
  const data = useApi(API_BASE_URL_GLOBAL);

  if (!data) return null;

  const stats = generateStats(data);

  return (
    <section className="font-medium flex flex-col gap-3">
      {stats?.map((stat) => (
        <CardWorldwide
          key={stat.title}
          title={stat.title}
          cases={stat.value}
          className={stat.className}
          casesClassName={stat.casesClassName}
          extraCases={stat.extraCases}
        />
      ))}
    </section>
  );
};

export default WorldwideCards;
