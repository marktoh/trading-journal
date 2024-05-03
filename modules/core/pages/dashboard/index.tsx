"use client";
import { BannerSection } from "./banner-section";
import { Grid } from "@/modules/core/components/grid";
import { TransactionTableSection } from "./transaction-table-section";

const DashboardPage = () => {
  return (
    <div>
      <BannerSection />
      <Grid />
      <TransactionTableSection />
    </div>
  );
};

export { DashboardPage };
