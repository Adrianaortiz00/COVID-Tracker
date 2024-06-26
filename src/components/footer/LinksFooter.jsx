const LinksFooter = ({ title, links }) => (
    <div className="bottom-widget">
      <h4 className="text-white">{title}</h4>
      <ul>
        {links.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
    </div>
  );
  
  export default LinksFooter;