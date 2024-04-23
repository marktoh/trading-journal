"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Table } from "./table";

import "./index.css";

type TableSectionProps = {
  data?: any;
};
const TableSection = ({ data }: TableSectionProps) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  data = query
    ? data?.filter((e) =>
        e?.ticker?.toLowerCase().startsWith(query?.toLowerCase())
      )
    : data;

  return (
    <section className="table-section">
      <Table isLoading={isLoading} data={data} />
    </section>
  );
};

export { TableSection };
