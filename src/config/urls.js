export const API_URL_COVID = "https://disease.sh/v3/covid-19/"; 

// API Endpoints

// returns global metrics
export const API_BASE_URL_GLOBAL= `${API_URL_COVID}all`; 

// returns all countries, adding a country at the end returns only that country
export const API_BASE_URL_COUNTRIES= `${API_URL_COVID}countries/`; 

//returns all countries sorted by cases (desc)
export const API_URL_CASES_SORTED = `${API_BASE_URL_COUNTRIES}?sort=cases`;
