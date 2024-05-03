import { BannerSection } from "./banner-section";
import { SearchSection } from "./search-section";
import { TableSection } from "./table-section";
import { Suspense } from "react";

import "./index.css";

type TickersPageProps = {
  data?: any;
};
const TickersPage = ({ data }: TickersPageProps) => {
  return (
    <div className="tickers-page">
      <BannerSection />
      <Suspense>
        <SearchSection />
      </Suspense>
      <Suspense>
        <TableSection data={data} />
      </Suspense>
    </div>
  );
};

export { TickersPage };
