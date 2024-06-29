import { useState, useEffect } from "react";
import { Modal } from "flowbite-react";
import { PropTypes } from "prop-types";
import useApi from "../../services/useApi";
import { API_BASE_URL_COUNTRIES } from "../../config/urls";
import fullCoutryNames from "../../data/fullCoutryNames"

const MapModal = ({ openModal, setOpenModal, country }) => {
    const countryName = fullCoutryNames[country] || country;
    const data = useApi(`${API_BASE_URL_COUNTRIES}${countryName}`);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (openModal) {
            const timer = setTimeout(() => setShowModal(true), 300); // 500ms delay
            return () => clearTimeout(timer);
        } else {
            setShowModal(false);
        }
    }, [openModal]);

    let content="";
    if (!data) {
        content = 
        (<><div className="space-y-6 error">
            <h5>Sorry, we do not have {countryName} records.</h5>
        </div></>)
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
            <div className="space-y-6 grid grid-cols-2">
                <div className="new">
                    <h5>New</h5>
                    <p>Confirmed: {newCases.confirmed}</p>
                    <p>Deaths: {newCases.deaths}</p>
                    <p>Recovered: {newCases.recovered}</p>
                </div>
                <div className="total">
                    <h5>Total</h5>
                    <p>Confirmed: {totalCases.confirmed}</p>
                    <p>Deaths: {totalCases.deaths}</p>
                    <p>Recovered: {totalCases.recovered}</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <Modal
                dismissible
                show={showModal}
                onClose={() => setOpenModal(false)}
            >
                <Modal.Header className="font-poppins text-dark-blue-1 border-gray-light">
                    <span className="font-semibold">{countryName}</span>
                </Modal.Header>
                <Modal.Body>
                    {content}
                </Modal.Body>
            </Modal>
            <div
                className={`modal-overlay fixed w-full h-full bg-[rgba(0,0,0,0.6)] left-0 top-0 ${
                    !showModal ? "hidden" : "block"
                }`}
            ></div>
        </>
    );
};

MapModal.propTypes = {
    openModal: PropTypes.bool,
    setOpenModal: PropTypes.func,
    country: PropTypes.string,
};

export default MapModal;
