import useApi from './services/useApi';
import { API_BASE_URL_COUNTRIES } from "./config/urls"

const App = () => {
  // ejemplo de como usar la API para obtener todos los países 
  // (si se quiere uno en específico hay que concatenar la url con el país sin /)
  const { data } = useApi(API_BASE_URL_COUNTRIES);
console.log(data)
  return (
    <div className="bg-red-700">
      <h1 className="text-3xl font-bold underline ">Hello world!</h1>
      <p className="font-themify text-5xl text-gray-light">Ejemplo de texto</p>
      <div className='bg-white container mx-auto text-center'>
        <h2 className=' text-5xl'>Lista de países</h2>
          <ul>
            {/* map para recorrer todos los resultados de la petición a la api */}
            {data?.map((country,index) => (
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
