import { TickersPage } from "@/modules/core/pages/tickers";
import data from "@/mock/tickers.json";

const Page = () => {
  return <TickersPage data={data?.results} />;
};

export default Page;
