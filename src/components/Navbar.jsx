import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-violet-500 text-xl font-mono">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/prevention">Prevention</Link>
        </li>
        <li>
          <Link to="/qurantine">Qurantine</Link>
        </li>
        <li>
          <Link to="/pages">Pages</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
        <li>
          <Link to="/tracker">Tracker</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
