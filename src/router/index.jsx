import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Prevention from "../pages/Prevention";
import Qurantine from "../pages/Qurantine";
import Pages from "../pages/Pages";
import About from "../pages/About";
import Help from "../pages/Help";
import TrackerStatistics from "../pages/Tracker/TrackerStatistic";
import Layout from "../layout/Layout";
import TrackerLayout from "../layout/TrackerLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/prevention",
        element: <Prevention />,
      },
      {
        path: "/qurantine",
        element: <Qurantine />,
      },
      {
        path: "/pages",
        element: <Pages />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/help",
        element: <Help />,
      },
    ],
  },
  {
    path: "/tracker",
    element: <TrackerLayout />,
    children: [
      { index: true, element: <TrackerStatistics /> },
      { path: "world", element: <div>World content</div> },
    ],
  },
]);

export default router;
