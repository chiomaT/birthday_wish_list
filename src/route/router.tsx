import { createBrowserRouter, RouterProvider } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import routeNames from "./routes";
import MainLayout from "../pages/MainLayout";
import Landing from "../pages/landing/Landing";
import GiftListing from "../pages/landing/GiftListing";

const routes: RouteObject[] = [
  {
    path: routeNames.landing,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: routeNames.giftListing,
    element: <GiftListing />,
        
      }
    ],
  },
  {
    path: routeNames.notFound,
    element: <>Page not found</>,
  },
];

const router = createBrowserRouter(routes);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
