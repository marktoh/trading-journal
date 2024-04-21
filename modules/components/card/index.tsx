import { ReactNode } from "react";
import "./index.css";

type CardProps = {
  children?: ReactNode;
  title?: string;
};
const Card = ({ children, title }: CardProps) => {
  return (
    <div className="card">
      <div className="title">{title}</div>
      <div className="description">{children}</div>
    </div>
  );
};

export { Card };
