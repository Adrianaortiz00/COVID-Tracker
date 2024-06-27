import { useState } from "react";
import { PropTypes } from 'prop-types';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { GEO_URL } from "../../config/urls";

const Map = (/* { setTooltipContent } */) => {
    const [country, setCountry] = useState("");

    const handleCountryClick = (geo) => {
        setCountry(geo.properties.name);
    };
    return (
        <div className="w-[50%] bg-white px-5">
            <ComposableMap>
                <Geographies geography={GEO_URL}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
/*                                 onMouseEnter={() => {
                                    setTooltipContent({country});
                                }}
                                onMouseLeave={() => {
                                    setTooltipContent("");
                                }} */
                                onClick={() => handleCountryClick(geo)}
                                style={{
                                    default: {
                                        fill: "#3639AE",
                                        outline: "none",
                                    },
                                    hover: { fill: "#7779d5", outline: "none" },
                                    pressed: {
                                        fill: "#2a2d88",
                                        outline: "none",
                                    },
                                }}
                            />
                        ))
                    }
                </Geographies>
            </ComposableMap>
        </div>
    );
};

Map.propTypes = {
    setTooltipContent: PropTypes.func
}

export default Map;
