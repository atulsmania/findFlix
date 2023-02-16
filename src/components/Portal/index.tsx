import { PropsWithChildren } from "react";
import ReactDOM from "react-dom";

export enum PortalIds {
  Modal = "modal-portal",
  Snackbar = "snackbar-portal",
}

type PortalProps = PropsWithChildren & { id: PortalIds };

export const Portal = ({ children, id }: PortalProps): JSX.Element => {
  return (
    ReactDOM.createPortal(
      children,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      document.getElementById(id)!
    ) || children
  );
};
