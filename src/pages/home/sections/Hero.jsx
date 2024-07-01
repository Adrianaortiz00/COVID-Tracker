import TextHome from "../../../components/home/TextHome"

const Hero = () => {
    return (
        <section className=" md:border-none md:grid md:grid-cols-2 bg-gradient-to-b from-[#3390b6] to-dark-blue-1 pt-28 md:pt-44 pl-4 md:pl-12 pb-28">
            <div>
                <TextHome title="Download the covid app for get latest update" text="Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.The corona virus COVID-19 is affecting 210 countries & territories around the world and 2 international conveyances." buttonStyle="bg-dark-blue-1 text-white border-purple border border-solid rounded-[30px] hover:border-none mt-[2em] mb-8" buttonText="HOW TO PROTECT" />
            </div>
            <div>
            <img src="\assets\images\phones.png" alt="covid-girl-phone" className=" h-[400px] md:h-83 mb-16 md:mb-24 mt-4 md:mt-5 ml-8 md:ml-28 " />
            </div>
        </section>
    )
}

export default Hero

/*import TextHome from "../../../components/home/TextHome"

const Hero = () => {
    return (
        <section className=" md:grid md:grid-col-2 bg-gradient-to-b from-[#3390b6] to-dark-blue-1 pt-44 pl-12 pb-28">
            <div>
                <TextHome title="Download the covid app for get latest update" text="Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.The corona virus COVID-19 is affecting 210 countries & territories around the world and 2 international conveyances." buttonStyle="bg-dark-blue-1 text-white border-purple border border-solid rounded-[30px] hover:border-none mt-[2em] mb-8" buttonText="HOW TO PROTECT" />
            </div>
            <div>
                <img src="/public\assets\images\phones.png" alt="covid-girl-phone" className=" h-83 mb-24 md:mt-5 md:ml-28" />
            </div>
        </section>
    )
}

export default Hero*/