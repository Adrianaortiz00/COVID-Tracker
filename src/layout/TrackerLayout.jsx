import { Outlet, Link } from "react-router-dom";

const TrackerLayout = () => {
  return (
    <div className="font-poppins">
      <div>
        <Link to="/">Home</Link>
      </div>
      <Outlet className="bg-[#F7F8FC]" />
    </div>
  );
};

export default TrackerLayout;
