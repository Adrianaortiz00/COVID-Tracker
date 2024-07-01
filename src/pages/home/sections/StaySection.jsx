import TextHome from "../../../components/home/TextHome"

const StaySection = () => {
  return (
    <section className=" flex flex-col border-non md:grid md:grid-cols-2 pt-14 md:pt-32 pl-4 bg-dark-blue-2">
        <div className="order-2">
          <TextHome title="Stay Home, And Prayer For Victim" text="Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.
                Shortness of breath can be a third -- and very serious -- manifestation of Covid-19, and it can occur on its own, without a cough." buttonStyle="bg-purple-blue hover:bg-dark-purple text-white border-[none] rounded-[10px] mt-[2em] mb-8" buttonText="HOW TO PROTECT" />
        </div>
        <div>
          <img src="\assets\images\mobiles.png" alt="covid-girl-phone" className="overflow-clip align-middle border-none w-[25em] md:w-[32em] mb-10 md:mb-24 mt-5 md:ml-28" />
        </div>
    </section>
  )
}

export default StaySection
