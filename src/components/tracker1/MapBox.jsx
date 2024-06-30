import { useState } from "react";
import Map from "./Map";
import MapModal from "./MapModal";

const MapBox = () => {
    const [content, setContent] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [selectedCountry, setselectedCountry] = useState(null);
    function handleModal(country) {
        setselectedCountry(country);
        setOpenModal(true);
    }

    return (
        <div className="w-full flex flex-col items-center">
            <h5
                className={
                    content == ""
                        ? "hidden"
                        : "font-light bg-gray-dark text-white text-center absolute mt-5 rounded px-4 py-1 opacity-90"
                }
            >
                {content}
            </h5>
            <Map setTooltipContent={setContent} onClick={handleModal} />
            <MapModal
                openModal={openModal}
                setOpenModal={setOpenModal}
                country={selectedCountry}
            />
        </div>
    );
};

export default MapBox;
