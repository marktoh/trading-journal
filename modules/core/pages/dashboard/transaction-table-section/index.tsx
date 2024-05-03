import { useState, useEffect } from "react";
import { TransactionTable } from "@/modules/core/components/transaction-table";

const TransactionTableSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);
  return (
    <div style={{ padding: "0 24px" }}>
      <TransactionTable isLoading={isLoading} />
    </div>
  );
};

export { TransactionTableSection };
