import React from 'react'
import TextHome from "../../../components/home/TextHome"

const GetSimple = () => {
  return (
    <section className='app-wrapper to-dark-blue-1 pt-32 pl-12'>
        <div className='container m-[160.100]'>
        <div className='row flex flex-wrap mx-[0.938em] box-border'>
                <div className='bg-custom-gradient p-[100px_130px] rounded-[10px] mt-[100px] flex-[0_0_100%] max-w-full' >
                    <div className='row flex flex-wrap -mx-[0.938em] font-poppins-sans-serif leading-[0.109em] text-base text-left' >
                        <div className='col-sm-7 relative w-full pr-4 pl-4 p-[0.938em]' >
                            <TextHome title= "Get the simple app for latest news" text="Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold." buttonStyle="bg-white px-[40px] py-[20px] text-[#111] font-semibold text-[12px] uppercase tracking-[1px] leading-[1.5] rounded-[0.3rem]" buttonText="DOWNLOAD NOW" />
                            
                            <div className='relative float-right absolute right-[140px] '>
                            <img src="public\assets\images\phone-1.png" alt="phone"   className="align-middle border-none"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}


export default GetSimple


/*import TextHome from "../../../components/home/TextHome"

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

export default StaySection*/

/*const Hero = () => {
    return (
        <section className=" border-none grid grid-cols-2 bg-gradient-to-b from-[#3390b6] to-dark-blue-1 pt-32 pl-12">
            <div>
                <TextHome title="Download the covid app for get latest update" text="Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.The corona virus COVID-19 is affecting 210 countries & territories around the world and 2 international conveyances." buttonStyle="bg-dark-blue-1 text-white border-purple border border-solid rounded-[30px] hover:border-none mt-[2em] mb-8" buttonText="HOW TO PROTECT" />
            </div>
            <div>
                <img src="/public\assets\images\phones.png" alt="covid-girl-phone" className=" h-83 mb-24 -mt-5 ml-28" />
            </div>
        </section>
    )
}

export default Hero*/






/*@media only screen and (max-width: 991px) {
    .app-wrap {
        padding: 50px;
        margin-top: 70px;
    }

    media (min-width: 576px) {
    .col-sm-12 {
        flex: 0 0 100%;
        max-width: 100%;
    }

    estilo: <col className="sm-7" />media (min-width: 576px) {
    .col-sm-7 {
        flex: 0 0 58.3333333333%;
        max-width: 58.3333333333%;
    }
*/



