import { ArrowTrendingUpIcon } from "@heroicons/react/24/solid";

import "./index.css";

type PillProps = {
  displayName?: string;
};
const Pill = ({ displayName }: PillProps) => {
  return (
    <div className="pill">
      <span className="display-name">{displayName}</span>
      <div>
        <ArrowTrendingUpIcon />
      </div>
      <span className="diff">0.10%</span>
    </div>
  );
};

export { Pill };
