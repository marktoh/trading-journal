import { Card } from "../card";
import LineChart from "../charts/line-chart";
import DashedLineChart from "../charts/dashed-line-chart";
import TinyAreaChart from "../charts/tiny-area-chart";

import "./index.css";

const Grid = () => {
  return (
    <div className="grid">
      <Card title="AAPL">
        <TinyAreaChart />
      </Card>
      <Card title="TSLA">
        <LineChart />
      </Card>
      <Card title="BLCK">
        <DashedLineChart />
      </Card>
    </div>
  );
};

export { Grid };
