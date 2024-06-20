import TextHome from "./TextHome"

const Hero = () => {
    return (
        <section className=" grid grid-cols-2 bg-gradient-to-b from-[#3390b6] to-dark-blue-1 pt-32 pl-4">
            <div>
                <TextHome title="Download the covid app for get latest update" text="Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.The corona virus COVID-19 is affecting 210 countries & territories around the world and 2 international conveyances." buttonStyle="bg-dark-blue-1 text-white border-purple border border-solid rounded-[30px] hover:border-transparent" buttonText="HOW TO PROTECT"/>
            </div>
            <div>
                <img src="/public\assets\images\phones.png" alt="covid-girl-phone" className=" h-83 mb-24 -mt-5 ml-24" />
            </div>
        </section>
    )
}

export default Hero