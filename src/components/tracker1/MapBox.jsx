import { useState } from "react";
import Map from "./Map";

const MapBox = () => {
    const [content, setContent] = useState("");

    function openModal() {
        alert(content);
    }
    
    return (
        <div className="w-[50%] flex flex-col items-center">
            <h5 className={content == "" ? 'hidden' : 'font-light bg-gray-dark text-white text-center absolute mt-5 rounded px-4 py-1 opacity-90'}>{content}</h5>
            <Map setTooltipContent={setContent} onClick={openModal}/>
            </div>
    );
};

export default MapBox;
