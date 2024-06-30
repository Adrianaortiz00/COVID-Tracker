import { PropTypes } from "prop-types";
import modalContentStyle from "../../data/modalContentStyle"

const MapModalContent = ({ newCases, totalCases }) => {

    const modalData = [
        { title: 'New', cases: newCases },
        { title: 'Total', cases: totalCases }
    ];
    return (
        <div className=" grid grid-cols-2 gap-7 font-semibold">
            {modalData.map((dataSet, index) => (
                <div key={index} className={dataSet.title.toLowerCase()}>
                    <h5 className="text-xl mb-3 text-dark-blue-1">{dataSet.title}</h5>
                    {Object.values(dataSet.cases).map((data, i) => (
                        <p key={i} className={`p-4 mb-3 bg-opacity-85 ${modalContentStyle.colors[i].textCol} ${modalContentStyle.colors[i].bgCol}`}>
                            {modalContentStyle.labels[i]} {data}
                        </p>
                    ))}
                </div>
            ))}
        </div>
    );
};
MapModalContent.propTypes = {
    newCases: PropTypes.object,
    totalCases: PropTypes.object,
};
export default MapModalContent;
