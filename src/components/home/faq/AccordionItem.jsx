import { useRef } from "react";
import PropTypes from 'prop-types'

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  const contentHeight = useRef();
  return (
      <div className="overflow-hidden pb-5">
        <button
          className={`question-container ${isOpen ? "active" : ""}`}
          onClick={onClick}
        >
          <p className="text-left font-semibold text-xl cursor-pointer py-5">{question}</p>
        </button>

        <div
          ref={contentHeight}
          className="transition-[height] duration-[0.3s] ease-[ease-in-out] "
          style={
            isOpen
              ? { height: contentHeight.current.scrollHeight }
              : { height: "0px" }
          }
        >
          <p className="font-regular text-lg pt-4 pb-10">{answer}</p>
        </div>
      </div>
  )
}

AccordionItem.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func
}
export default AccordionItem
