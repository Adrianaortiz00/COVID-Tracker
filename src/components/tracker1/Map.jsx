import { useState } from "react";
import { PropTypes } from "prop-types";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import { GEO_URL } from "../../config/urls";

const Map = ({ setTooltipContent, onClick }) => {

    const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });

    function handleZoomIn() {
        if (position.zoom >= 4) return;
        setPosition((pos) => ({ ...pos, zoom: pos.zoom * 1.2 }));
    }

    function handleZoomOut() {
        if (position.zoom <= 1) return;
        setPosition((pos) => ({ ...pos, zoom: pos.zoom / 1.2 }));
    }

    function handleMoveEnd(position) {
        setPosition(position);
    }

    return (
        <div className="w-full bg-white px-5">
            <div className="controls flex gap-2 flex-col absolute pt-5">
                <button onClick={handleZoomIn} className="bg-darker-blue rounded w-[24px]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke="white"
                    strokeWidth="2"
                >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                </button>
                <button onClick={handleZoomOut} className="bg-darker-blue rounded w-[24px]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke="white"
                    strokeWidth="2"
                >
                    <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                </button>
            </div>
            <ComposableMap>
                <ZoomableGroup
                    zoom={position.zoom}
                    center={position.coordinates}
                    onMoveEnd={handleMoveEnd}
                >
                    <Geographies geography={GEO_URL}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    stroke="#FFF"
                                    strokeWidth={0.5} 
                                    onMouseEnter={() => {
                                        setTooltipContent(geo.properties.name);
                                    }}
                                    onMouseLeave={() => {
                                        setTooltipContent("");
                                    }}
                                    onClick={onClick}
                                    data-tip
                                    data-for="country"
                                    style={{
                                        default: {
                                            fill: "#3639AE",
                                            outline: "none",
                                        },
                                        hover: {
                                            fill: "#7779d5",
                                            outline: "none",
                                        },
                                        pressed: {
                                            fill: "#2a2d88",
                                            outline: "none",
                                        },
                                    }}
                                />
                            ))
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
        </div>
    );
};

Map.propTypes = {
    setTooltipContent: PropTypes.func,
    onClick: PropTypes.func,
};

export default Map;
