import { PropsWithChildren } from "react";

type IfProps = {
  is: boolean;
} & PropsWithChildren;

const If = ({ is, children }: IfProps): JSX.Element => {
  return <>{is ? children : undefined}</>;
};

export default If;
