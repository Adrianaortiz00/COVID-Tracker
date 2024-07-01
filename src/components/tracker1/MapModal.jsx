import { useState, useEffect, useRef } from "react";
import { Modal, Spinner } from "flowbite-react";
import { PropTypes } from "prop-types";
import useApi from "../../services/useApi";
import { API_BASE_URL_COUNTRIES } from "../../config/urls";
import fullCoutryNames from "../../data/fullCoutryNames";
import MapModalContent from "./MapModalContent";

const MapModal = ({ openModal, setOpenModal, country }) => {
    const countryName = fullCoutryNames[country] || country;
    const data = useApi(`${API_BASE_URL_COUNTRIES}${countryName}`);
    const [showModal, setShowModal] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);
    const opacityRef = useRef(null);

    let content = "";
    useEffect(() => {
        if (openModal) {
            const timer = setTimeout(() => {
                setShowModal(true);
                setShowSpinner(false);
            }, 800);
            return () => clearTimeout(timer);
        } else {
            setShowSpinner(true);
            setShowModal(false);
        }
    }, [openModal]);
    const toggleModal = () => {
        if (opacityRef.current.classList.contains("modal-open"))
            opacityRef.current.classList.remove("modal-open");
        else opacityRef.current.classList.add("modal-open");
    };

    if (!data) {
        content = (
            <>
                <div className="space-y-6 error">
                    <h5>Sorry, we do not have {countryName} records.</h5>
                </div>
            </>
        );
    } else {
        const newCases = {
            confirmed: data.todayCases,
            deaths: data.todayDeaths,
            recovered: data.todayRecovered,
        };
        const totalCases = {
            confirmed: data.cases,
            deaths: data.deaths,
            recovered: data.recovered,
        };
        content = (
            <MapModalContent totalCases={totalCases} newCases={newCases} />
        );
    }

    return (
        <>
            <div className="modal" ref={opacityRef} onClick={toggleModal}>
                <div className="loader"></div>
            </div>
            <Modal
                size={"lg"}
                dismissible
                show={showModal}
                onClose={() => setOpenModal(false)}
            >
                <Modal.Header className="font-poppins text-dark-blue-1 border-gray-light">
                    <span className="font-semibold">{countryName}</span>
                </Modal.Header>
                <Modal.Body>{content}</Modal.Body>
            </Modal>
            <div className={`modal-overlay fixed w-full h-full bg-[rgba(0,0,0,0.6)] left-0 top-0 justify-center items-center
            ${!openModal ? "hidden" : "flex"}`}>
                <div className={`text-center ${!showSpinner ? "hidden" : "block"}`}>
                    <Spinner aria-label="Center-aligned spinner" size="xl" color="info" />
                </div>
            </div>
        </>
    );
};

MapModal.propTypes = {
    openModal: PropTypes.bool,
    setOpenModal: PropTypes.func,
    country: PropTypes.string,
};

export default MapModal;
