import { Outlet, Link } from "react-router-dom";

const TrackerLayout = () => {
  return (
    <div className="font-poppins">
      <div>
        <Link to="/">Home</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default TrackerLayout;
