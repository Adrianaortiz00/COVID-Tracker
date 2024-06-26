/*import '../../../styles/fonts.css';
import '../../../index.css';

const Footer = () => {
  return (
<div class="pt-[100px] pb-20 px-0 bg-blue-footer">
            <div className="text-cool-grey max-w-[1199px] mx-auto ">
                <div className="flex flex-wrap mr-[-15px] ml-[-15px]">
                    <div className="w-full md:w-full lg:w-1/3 xl:w-1/3 sm:w-2/3">
                        <div className="bottom-logo">
                            <img className="pb-3" src="public\assets\images\logo-white.png" alt="logo-coronavirus"/>
                            <p className='mr-[10%] mb-4 pr-8 leading-[2em]'>These droplets can land on objects and surfaces around the person such as tables, doorknobs and handrails. </p>
                            <ul className="social-share list-inline mb-4">
                                <li><i className="text-white ti-facebook"></i></a></li>
                                <li><i className="text-white ti-twitter-alt"></i></a></li>
                                <li"><i className="text-white ti-linkedin"></i></a></li>
                                <li><i className="text-white ti-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/6 leading-[2.5em]">
                        <div className="bottom-widget">
                            <h4 className="text-white">Quic Links</h4>
                            <ul>
                                <li>Prevention</li>
                                <li>Qurantine</li>
                                <li>About</li>
                                <li>Help</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/6 leading-[2.5em]">
                        <div className="bottom-widget">
                            <h4 className="text-white">About</h4>
                            <ul>
                                <li>Hand Wash</li>
                                <li>Social Distance</li>
                                <li>Isolate</li>
                                <li>Difference</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/6 leading-[2.5em]">
                        <div className="bottom-widget">
                            <h4 className="text-white">About</h4>
                            <ul>
                                <li>Hand Wash</li>
                                <li>Social Distance</li>
                                <li>Isolate</li>
                                <li>Difference</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/6 leading-[2.5em]">
                        <div className="bottom-widget">
                            <h4 className="text-white">Help</h4>
                            <ul>
                                <li>Hand Wash</li>
                                <li>Social Distance</li>
                                <li>Isolate</li>
                                <li>Difference</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Footer*/

import '../../styles/fonts.css';
import SocialLinks from '../footer/SocialLinks.jsx'
import LinksFooter from '../footer/LinksFooter.jsx'
import { quickLinks, aboutLinks, helpLinks } from '../../data/footerData.js';

const Footer = () => {
  return (
    <>
    <div className="pt-[100px] pb-20 px-0 bg-blue-footer">
      <div className="text-cool-grey max-w-[1199px] mx-auto">
        <div className="flex flex-wrap mr-[-15px] ml-[-15px]">
          <div className="w-full md:w-full lg:w-1/3 xl:w-1/3 sm:w-2/3">
            <div className="bottom-logo">
              <img className="pb-3" src="public/assets/images/logo-white.png" alt="logo-coronavirus" />
              <p className='mr-[10%] mb-4 pr-8 leading-[2em]'>
                These droplets can land on objects and surfaces around the person such as tables, doorknobs and handrails.
              </p>
              <SocialLinks />
            </div>
          </div>
          <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/6 leading-[2.5em]">
            <LinksFooter title="Quick Links" links={quickLinks} />
          </div>
          <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/6 leading-[2.5em]">
            <LinksFooter title="About" links={aboutLinks} />
          </div>
          <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/6 leading-[2.5em]">
            <LinksFooter title="About" links={aboutLinks} />
          </div>
          <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/6 leading-[2.5em]">
            <LinksFooter title="Help" links={helpLinks} />
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="w-full border-t border-[#223461] bg-blue-footer pt-[1.25em] pb-[1.25em] ">
        <div className="text-cool-grey flex justify-between pr-[26em] pl-[26em] text-sm">
          <p>© Copyright 2020. All Rights Reserved</p>
          <p>Design by <span className="text-white font-semibold">DexignZon</span></p>
        </div>
      </div>
    </div>


          {/* Media Query para pantallas pequeñas */}
          <style jsx>{`
        @media (max-width: 640px) {
          .bottom-logo {
            text-align: center;
          }
          .bottom-logo img {
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </>
  



  );
};

export default Footer;

