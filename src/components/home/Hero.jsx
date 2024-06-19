import TextHome from "./TextoHome"

const Hero = () => {
    return (
        <section className=" grid grid-cols-2 gap-10 bg-gradient-to-b from-sky-700 to-dark-purple">
            <div>
                <TextHome/>
            </div>
            <div>
                <img src="/public\assets\images\p-1.jpg" alt="covid-girl" className=" h-80 ml-20 -mt-10" />
            </div>
        </section>
    )
}

export default Hero