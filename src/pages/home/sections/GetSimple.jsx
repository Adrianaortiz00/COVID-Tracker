import React from 'react'
import TextHome from "../../../components/home/TextHome"

const GetSimple = () => {
    return (
    <section className='to-dark-blue-1'>
      <div style={{paddingTop: '100px'}}>
        <div className='flex flex-wrap justify-between bg-custom-gradient rounded-lg p-100 mt-100' style={{ margin: '0 116.100px' }}>
          <div className='w-full sm:w-1/2 p-15'>
            <div className='mb-20 ml-20'>
              <TextHome
                title="Get the simple app for latest news"
                text="Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold."
                buttonStyle="bg-white text-#111 font-semibold text-12 uppercase tracking-1 leading-1.5 rounded-lg p-20"
                buttonText="DOWNLOAD NOW"
              />
            </div>
          </div>
          <div className='relative w-full sm:w-1/2 flex justify-end items-center overflow-visible'>
          <img
            src="/assets/images/phone-1.png"
            alt="covid-girl-phone"
            className='h-83 -mt-20 mr-140'
            style={{ position: 'absolute', right: '25%', zIndex: 1 }}
          />
        </div>
        </div>
      </div>
    </section>
  );
};
  



export default GetSimple;