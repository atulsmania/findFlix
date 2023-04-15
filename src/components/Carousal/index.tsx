import classNames from "classnames";
import { PropsWithChildren } from "react";

const Carousal = ({ children }: PropsWithChildren) => {
  return <div className="w-full p-4 space-x-4 carousel">{children}</div>;
};

const Item = ({ children }: PropsWithChildren) => {
  return (
    <div
      className={classNames(
        "first-letter:h-full aspect-video carousel-item empty:skeleton w-64 md:w-80"
      )}
    >
      {children}
    </div>
  );
};

Carousal.Item = Item;
export default Carousal;
