import classNames from "classnames";
import { PropsWithChildren } from "react";

export enum AlertType {
  Info,
  Success,
  Warning,
  Error,
}

const Alert = ({ children, type }: PropsWithChildren & { type: AlertType }) => {
  const path = {
    [AlertType.Info]:
      "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    [AlertType.Success]: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    [AlertType.Warning]:
      "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
    [AlertType.Error]:
      "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z",
  }[type];

  const alertClassNames = classNames("w-full shadow-lg alert", {
    "alert-info": AlertType.Info === type,
    "alert-error": AlertType.Error === type,
    "alert-warning": AlertType.Warning === type,
    "alert-success": AlertType.Success === type,
  });

  return (
    <div className={alertClassNames}>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="flex-shrink-0 w-6 h-6 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={path}
          ></path>
        </svg>
        <span>{children}</span>
      </div>
    </div>
  );
};

export default Alert;
