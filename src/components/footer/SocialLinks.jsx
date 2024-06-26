import { socialLinks } from '../../data/footerData.js';

const SocialLinks = () => (
  <ul className="social-share list-inline mb-4">
    {socialLinks.map((link, index) => (
      <li key={index} className="list-inline-item">
        <a href={link.href}>
          <i className={link.iconClass}></i>
        </a>
      </li>
    ))}
  </ul>
);

export default SocialLinks;