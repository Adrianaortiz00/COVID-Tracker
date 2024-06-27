import React from 'react'
import TextHome from "../../../components/home/TextHome"

const GetSimple = () => {
  return (
    <section className='to-dark-blue-1'>
      <div className='pt-8 lg:pt-24 flex justify-center'>
        <div className='w-full lg:w-4/5 bg-custom-gradient rounded-lg p-4 lg:p-5'>
          <div className='flex flex-col lg:flex-row justify-between'>
            <div className='w-full lg:w-1/2 p-2'>
              <div className='mb-8 lg:mb-16'>
                <TextHome  
                  title="Get the simple app for latest news"
                  titleStyle="leading-[1.2em] pt-[2em] lg:w-[35rem] lg:h-[15rem] lg:line-clamp-6"
                  text="Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold."
                  textStyle="lg:w-[33rem]"
                  buttonStyle="bg-white text-black border-[none] rounded-[5px] mt-[2em] mb-4 lg:mb-8 lg:w-[12rem]"
                  buttonText="DOWNLOAD NOW"
                />
              </div>
            </div>
            {/* solo en dispositivos laptop y tablet  */}
            <div className="hidden lg:block relative w-full flex justify-center items-center overflow-visible">
              <img
                src="/assets/images/phone-1.png"
                alt="covid-girl-phone"
                className="h-64 lg:h-full -mt-24 lg:-mt-30 mr-4 lg:mr-20" 
                style={{ position: 'absolute', right: '10%', zIndex: 1,  }}
              />
            </div>
            {/*solo en dispositivos pequeños */}
            <div className='lg:hidden w-full'>
              <img
                src="/assets/images/phone-1.png"
                alt="covid-girl-phone"
                className='mx-auto my-8'
                style={{ maxWidth: '80%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

    
export default GetSimple;