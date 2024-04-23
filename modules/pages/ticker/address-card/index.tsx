import { AddressProps } from "../utils/types";

import "./index.css";

const AddressCard = ({ address1, city, state, postal_code }: AddressProps) => {
  return (
    <div className="address-card">
      <div className="title">Address</div>
      <div className="address">
        <div>{address1}</div>
        <div>{city}</div>
        <div>{state}</div>
        <div>{postal_code}</div>
      </div>
    </div>
  );
};

export { AddressCard };
