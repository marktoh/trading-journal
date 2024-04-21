import "./index.css";

type FieldProps = {
  label?: string;
  value?: string;
};
const Field = ({ label, value }: FieldProps) => {
  return (
    <div className="field">
      <div className="label">{label}</div>
      <div className="value">{value}</div>
    </div>
  );
};

export { Field };
