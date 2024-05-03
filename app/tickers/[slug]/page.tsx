import { TickerPage } from "@/modules/core/pages/ticker";
import ticker from "@/mock/ticker.json";

const Page = () => {
  return <TickerPage {...ticker?.results} />;
};

export default Page;
