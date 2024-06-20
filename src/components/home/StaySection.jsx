import TextHome from "./TextHome"

const StaySection = () => {
  return (
    <section className=" border-non grid grid-cols-2 pt-32 pl-4 bg-dark-blue-2">
        <div className=" order-2">
          <TextHome title="Stay Home, And Prayer For Victim" text={`Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.
                Shortness of breath can be a third -- and very serious -- manifestation of Covid-19, and it can occur on its own, without a cough.`} buttonStyle="bg-purple-blue hover:bg-dark-purple text-white border-[none] rounded-[10px] mt-[2em] mb-8" buttonText="HOW TO PROTECT" />
        </div>
        <div>
          <img src="/public\assets\images\mobiles.png" alt="covid-girl-phone" className="overflow-clip align-middle border-none w-[32em] mb-24 -mt-5 ml-28" />
        </div>
    </section>
  )
}

export default StaySection