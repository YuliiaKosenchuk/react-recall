import type { FC, PropsWithChildren } from "react";

const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="max-w-7xl m-auto">{children}</div>
  );
};

export default Container;
