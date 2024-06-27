import '../../styles/fonts.css';
import SocialLinks from '../footer/SocialLinks.jsx'
import LinksFooter from '../footer/LinksFooter.jsx'
import { quickLinks, aboutLinks, helpLinks } from '../../data/footerData.js';

const Footer = () => {
  return (
    <>
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-blue-footer ">
        <div className="text-cool-grey max-w-7xl mx-auto  font-poppins font-light">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full sm:w-2/3 lg:w-1/3 px-4">
              <div className="bottom-logo">
                <img className="pb-3" src="public/assets/images/logo-white.png" alt="logo-coronavirus" />
                <p className="mr-10 mb-4 pr-8 leading-8">
                  These droplets can land on objects and surfaces around the person such as tables, doorknobs and handrails.
                </p>
                <SocialLinks />
              </div>
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 px-4 leading-10">
              <LinksFooter title="Quick Links" links={quickLinks} />
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 px-4 leading-10">
              <LinksFooter title="About" links={aboutLinks} />
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 px-4 leading-10">
              <LinksFooter title="About" links={aboutLinks} />
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 px-4 leading-10">
              <LinksFooter title="Help" links={helpLinks} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-[#223461] bg-blue-footer py-5">
        <div className="text-cool-grey flex flex-col sm:flex-row justify-between items-center sm:px-6 lg:px-28 text-sm  ">
          <p>© Copyright 2020. All Rights Reserved</p>
          <p>Design by <span className="text-white font-semibold">DexignZon</span></p>
        </div>
      </div>
    </>
  );
};

export default Footer;

