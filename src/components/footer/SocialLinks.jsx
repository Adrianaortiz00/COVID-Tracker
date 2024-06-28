import { socialLinks } from '../../data/footerData.js';

const SocialLinks = () => (
  <ul className="flex flex-row list-none">
    {socialLinks.map((link, index) => (
      <li key={index} className="list-inline-item">
        <i className={`ti ${link.icon} text-white w-10 h-10 rounded-full inline-block bg-deep-blue text-center leading-10 ml-2`}></i>
      </li>
    ))}
  </ul>
);

export default SocialLinks;