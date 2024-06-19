import { Outlet, Link } from "react-router-dom";

const TrackerLayout = () => {
  return (
    <div>
      <div>
        <Link to="world">World</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default TrackerLayout;
