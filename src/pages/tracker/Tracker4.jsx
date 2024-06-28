import { useState } from "react";
import { API_BASE_URL_GLOBAL } from "../../config/urls";
import CardGroup from "../../components/tracker/CardGroup";
import useApi from "../../services/useApi";
import ButtonGroup from "../../components/tracker4/ButtonGroup";

const Tracker4 = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [initialCountry, setInitialCountry] = useState(false);
    const data = useApi(API_BASE_URL_GLOBAL);

    const handleCountryChange = (country) => {
        setSelectedCountry(country);
    };

    const handleDataLoad = (country) => {
        if (!initialCountry) {
            handleCountryChange(country);
            setInitialCountry(true);
        }
    };

    if (data == null) {
        return (
            <div className="container m-auto w-full">
                <h2>Loading...</h2>
            </div>
        );
    }

    if (!data) {
        return <div>Sorry, no data found.</div>;
    }

    return (
        <article className="p-5 text-gray-dark">
            <section>
                <h2 className="text-xl font-semibold text-dark-blue-1 border-b-[1px] border-gray-super-light mb-7 pb-2">
                    Covid-19 Country Wise - Tabs
                </h2>
                <ButtonGroup
                    onClick={handleCountryChange}
                    onDataLoad={handleDataLoad}
                />
                <CardGroup country={selectedCountry} width="w-full" />
            </section>
        </article>
    );
};

export default Tracker4;
