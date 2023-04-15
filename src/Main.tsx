import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { useNetworkStatus } from "./hooks/useNetworkStatus";
import { router } from "./routes";
import "@/styles.css";

const Main = () => {
  const { isOnLine, handleStatusChange } = useNetworkStatus();

  useEffect(() => {
    handleStatusChange();
  }, [isOnLine]);

  return <RouterProvider router={router} />;
};

export default Main;
