import { AlertType } from "@/components/Alert";
import { SnackbarContext } from "@/components/Snackbar";
import { useCallback, useContext, useEffect, useState } from "react";

export const useNetworkStatus = () => {
  const { push } = useContext(SnackbarContext);
  const [isOnLine, setIsOnLine] = useState<boolean>();

  const handleOffline = () => {
    setIsOnLine(false);
  };

  const handleOnline = () => {
    setIsOnLine(true);
  };

  const handleStatusChange = useCallback(() => {
    if (isOnLine === undefined) return;
    if (isOnLine) {
      push({ msg: "You are online now.", type: AlertType.Success });
    } else {
      push({ msg: "You are offline now.", type: AlertType.Error });
    }
  }, [isOnLine]);

  useEffect(() => {
    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return { isOnLine, handleStatusChange };
};
