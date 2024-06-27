import React from 'react'
import TextHome from "../../../components/home/TextHome"

const GetSimple = () => {
    return (
    <section className='to-dark-blue-1'>
      <div className='pt-24'>
        <div className='flex flex-wrap justify-between bg-custom-gradient rounded-lg p-100 mt-100' style={{ margin: '0 116.100px' }}>
          <div className='w-full sm:w-full md:w-1/2 p-4'>
            <div className='mb-20 ml-20'>
              <TextHome  
                title="Get the simple app for latest news"
                titleStyle="w-[35rem] h-[15rem] leading-[1.2em] pt-[2em] line-clamp-6"
                text="Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold."
                textStyle= "w-[33rem]"
                buttonStyle="bg-white text-black border-[none] rounded-[5px] mt-[2em] mb-8 w-[18em]" buttonText="DOWNLOAD NOW"
              />
            </div>
          </div>
          <div className='relative w-full sm:w-1/2 flex justify-end items-center overflow-visible'>
          <img
            src="/assets/images/phone-1.png"
            alt="covid-girl-phone"
            className='h-83 -mt-[11rem] mr-140'
            style={{ position: 'absolute', right: '25%', zIndex: 1 }}
          />
        </div>
        </div>
      </div>
    </section>
  );
};
  



export default GetSimple;