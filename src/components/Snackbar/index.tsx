import {
  ComponentProps,
  createContext,
  PropsWithChildren,
  useState,
} from "react";
import Alert from "@/components/Alert";
import { Portal, PortalIds } from "@/components/Portal";
import If from "@/components/If";

type SnackbarContextItems = {
  push: (alert: AlertItem) => void;
  clear: () => void;
};

type AlertItem = {
  type: ComponentProps<typeof Alert>["type"];
  msg: string;
};

export const SnackbarContext = createContext({} as SnackbarContextItems);

const SnackbarProvider = ({ children }: PropsWithChildren) => {
  const [alerts, setAlerts] = useState<AlertItem[]>([]);

  const push = (value: AlertItem) => {
    setAlerts((alerts) => [value, ...alerts]);
    setTimeout(() => pop(), 4000);
  };

  const clear = () => {
    setAlerts([]);
  };

  const pop = () => {
    setAlerts((prev) => {
      const t_alerts = Array.from(prev);
      t_alerts.length = t_alerts.length - 1;
      return t_alerts;
    });
  };

  const sharedContext = {
    push,
    clear,
  };

  return (
    <SnackbarContext.Provider value={sharedContext}>
      <If is={!!alerts.length}>
        <Portal id={PortalIds.Snackbar}>
          <div className="fixed bottom-0 right-0 z-50 w-full max-w-sm p-4 space-y-4">
            {alerts.map(({ msg, type }) => (
              <Alert type={type}>{msg}</Alert>
            ))}
          </div>
        </Portal>
      </If>
      {children}
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
