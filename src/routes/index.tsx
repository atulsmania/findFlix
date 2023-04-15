import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import { createHashRouter } from "react-router-dom";

export const router = createHashRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
