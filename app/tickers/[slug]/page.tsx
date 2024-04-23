import { TickerPage } from "@/modules/pages/ticker";
import ticker from "@/mock/ticker.json";

const Page = () => {
  return <TickerPage {...ticker?.results} />;
};

export default Page;
