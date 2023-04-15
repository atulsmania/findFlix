import Layout from "@/components/Layout";
import Details from "@/containers/Details";
import Home from "@/pages/Home";
import { createHashRouter } from "react-router-dom";

export const router = createHashRouter([
  {
    element: <Layout />,
    path: "/",
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/:movieId",
            element: <Details />,
          },
        ],
      },
    ],
  },
]);
