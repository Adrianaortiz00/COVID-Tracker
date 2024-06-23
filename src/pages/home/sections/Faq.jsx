import { useEffect, useState } from "react";
import accordionData  from "../../../data/accordionData"
import AccordionItem from "../../../components/home/AccordionItem";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  }

  useEffect(() => {
    setActiveIndex(0);
  }, []);

  return (
    <article className="container mx-auto font-poppins text-white pb-20">
			<section className="titles font-bold text-center flex flex-col items-center">
				<h5 className="text-[1.1em] font-semibold">Faqs</h5>
				<h2 className="w-[550px] leading-[1.2em] text-[3.5em] text-white font-black mt-2">Frequently Asked Questions</h2>
			</section>
			<section className="max-w-[990px] mx-auto bg-blue-footer px-10 py-5 mt-20">
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
