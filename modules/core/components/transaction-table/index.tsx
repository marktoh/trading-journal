import { Loader } from "./loader";

import "./index.css";

const Row = () => {
  return (
    <tr>
      <td>0</td>
      <td>Sept 12, 2019</td>
      <td>APPL</td>
      <td>$3.7</td>
      <td>$2.3</td>
      <td>1,500</td>
    </tr>
  );
};

const Table = () => {
  return (
    <table className="transaction-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Symbol</th>
          <th>Entry</th>
          <th>Exit</th>
          <th>Size</th>
        </tr>
      </thead>
      <tbody>
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </tbody>
    </table>
  );
};

type TransactionTableProps = {
  isLoading?: boolean;
};
const TransactionTable = ({ isLoading }: TransactionTableProps) => {
  return (
    <div className="transaction-table-wrapper">
      {isLoading ? <Loader /> : <Table />}
    </div>
  );
};

export { TransactionTable };
