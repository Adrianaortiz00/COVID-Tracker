import Hero from "./components/home/Hero";
import useApi from "./services/useApi";
import { API_BASE_URL_COUNTRIES } from "./config/urls";

const App = () => {
  // ejemplo de como usar la API para obtener todos los países
  // (si se quiere uno en específico hay que concatenar la url con el país sin /)
  const { data } = useApi(API_BASE_URL_COUNTRIES);
  return (
    <div className=" bg-red-700">
      <h1 className="text-3xl font-bold underline bg-red-700">Hello world!</h1>
    </div>
  );
};

export default App;
