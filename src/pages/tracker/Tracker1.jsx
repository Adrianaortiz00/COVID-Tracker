import { useState } from "react";
import SelectCountry from "../../components/tracker1/SelectCountry";
import MapBox from "../../components/tracker1/MapBox";
import CardGroup from "../../components/tracker/CardGroup";
import GlobalDataCards from "../../components/tracker1/GlobalDataCards";
import useApi from "../../services/useApi";
import { API_BASE_URL_GLOBAL } from "../../config/urls";

const Tracker1 = () => {
    const [selectedCountry, setSelectedCountry] = useState("Afghanistan");
    const data = useApi(API_BASE_URL_GLOBAL);

    const handleCountryChange = (country) => {
        setSelectedCountry(country);
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

    let { updated } = data;
    const updateDate = new Date(updated).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    return (
        <article className="p-5 text-gray-dark flex-1">
            <section className="select-section flex flex-wrap justify-center md:justify-between items-center mb-8 pb-4 border-gray-light border-b">
                <SelectCountry onChange={handleCountryChange} />
                <p className="font-medium mt-5 md:mt-0">Updated: {updateDate}</p>
            </section>
            <section className="center-section md:grid md:grid-cols-2 md:gap-9">
                <CardGroup country={selectedCountry} />
                <MapBox />
            </section>
            <GlobalDataCards data={data} />
        </article>
    );
};

export default Tracker1;
