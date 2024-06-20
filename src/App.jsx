import Hero from "./components/home/Hero";
import useApi from "./services/useApi";
import { API_BASE_URL_COUNTRIES } from "./config/urls";

const App = () => {
  // ejemplo de como usar la API para obtener todos los países
  // (si se quiere uno en específico hay que concatenar la url con el país sin /)
  const { data } = useApi(API_BASE_URL_COUNTRIES);
  return (
    <div className="bg-indigo-950">
      <Hero />
      <div className="bg-white container mx-auto text-center">
        <h2 className="text-5xl">Lista de países</h2>
        <ul>
          {/* Map para recorrer todos los resultados de la petición a la API */}
          {data?.map((country, index) => (
            <li key={index}>
              <h1>{country.country}</h1>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
