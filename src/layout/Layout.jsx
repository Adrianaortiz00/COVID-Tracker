import Navbar from "../components/general/Navbar";
import Footer from "../components/general/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="overflow-hidden">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
