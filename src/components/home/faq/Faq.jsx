import { useEffect, useState } from "react";
import accordionData  from "../../../data/accordionData"
import AccordionItem from "./AccordionItem";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  }

  useEffect(() => {
    setActiveIndex(0);
  }, []);

  return (
    <article className="container mx-auto font-themify text-white">
			<section className="titles font-bold text-center">
				<h5 className="text-xl">Faqs</h5>
				<h2 className="text-5xl ">Frequently Asked Questions</h2>
			</section>
			<section className="max-w-[990px] mx-auto bg-gray px-10 py-5 mt-10">
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </section>
    </article>
  )
}
export default Faq
