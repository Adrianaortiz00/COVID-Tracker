import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../layout/Layout";
import TrackerLayout from "../layout/TrackerLayout";
import Tracker1 from "../pages/tracker/Tracker1";
import Tracker2 from "../pages/tracker/Tracker2";
import Tracker3 from "../pages/tracker/Tracker3";
import Tracker4 from "../pages/tracker/Tracker4";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/tracker",
    element: <TrackerLayout />,
    children: [
      { index: true, element: <Tracker1 /> },
      { path: "tracker2", element: <Tracker2 /> },
      { path: "tracker3", element: <Tracker3 /> },
      { path: "tracker4", element: <Tracker4 /> },
       
    ],
  },
]);

export default router;
