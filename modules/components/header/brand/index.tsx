import "./index.css";

type BrandProps = {
  displayName?: string;
};
const Brand = ({ displayName }: BrandProps) => {
  return (
    <div className="brand">
      <span className="text">{displayName}</span>
    </div>
  );
};

export { Brand };
