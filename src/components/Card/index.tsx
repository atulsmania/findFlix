import { ComponentProps, PropsWithChildren } from "react";
import classNames from "classnames";

const Card = ({ children }: PropsWithChildren) => {
  return (
    <div
      className={classNames(
        "shadow-xl card w-full aspect-video bg-base-100 image-full",
        "before:bg-gradient-to-t before:!bg-transparent before:from-black before:to-transparent"
      )}
    >
      {children}
    </div>
  );
};

const Image = (props: ComponentProps<"img">) => {
  return (
    <figure>
      <img {...props} />
    </figure>
  );
};

const Body = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col items-end justify-end p-4 opacity-80 card-body">
      {children}
    </div>
  );
};

Card.Image = Image;
Card.Body = Body;
export default Card;
