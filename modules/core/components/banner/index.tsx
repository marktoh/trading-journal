import { ReactNode } from "react";
import "./index.css";

type BannerProps = {
  children?: ReactNode;
};
const Banner = ({ children }: BannerProps) => {
  return <div className="banner">{children}</div>;
};

export { Banner };
