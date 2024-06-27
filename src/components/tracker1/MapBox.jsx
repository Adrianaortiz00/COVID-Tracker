import { useState } from "react";
//import ReactTooltip from "react-tooltip";
import Map from "./Map";

const MapBox = () => {
    const [content, setContent] = useState("");
    return (
        <div>
            <Map /* setTooltipContent={setContent} */ />
            {/* <ReactTooltip>{content}</ReactTooltip> */}
        </div>
    );
};

export default MapBox;
