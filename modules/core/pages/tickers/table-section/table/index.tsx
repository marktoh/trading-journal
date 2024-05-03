import { useRouter } from "next/navigation";
import { GlobeAmericasIcon } from "@heroicons/react/24/outline";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

import { Loader } from "./loader";

import "./index.css";

const Row = ({
  index,
  ticker,
  name,
  market,
  cik,
  locale,
  type,
  active,
  currency_name,
  delisted_utc,
  composite_figi,
  share_class_figi,
  last_updated_utc,
}) => {
  const router = useRouter();
  return (
    <tr onClick={() => router.push(`/tickers/${ticker}`)}>
      <td>{ticker}</td>
      <td>{name}</td>
      <td>
        <span className="uppercase p-1 font-semibold text-gray-700 border border-gray-200 rounded bg-gray-100 text-xs">
          {market}
        </span>
      </td>
      <td>
        <div className="flex items-center gap-1 font-semibold text-gray-700 uppercase">
          <GlobeAmericasIcon className="h-4 w-4 stroke-2" /> {locale}
        </div>
      </td>
      <td className="font-semibold text-gray-700">{type}</td>
      <td>
        {active ? (
          <CheckCircleIcon className="h-4 w-4 stroke-2 text-green-600" />
        ) : null}
      </td>
      <td className="text-right">{cik || "-"}</td>
      <td>
        <div className="flex items-center gap-1 font-semibold text-gray-700 uppercase">
          <CurrencyDollarIcon className="h-4 w-4 stroke-2" /> {currency_name}
        </div>
      </td>
      <td className="text-right">{delisted_utc || "-"}</td>
      <td className="text-right">{composite_figi || "-"}</td>
      <td className="text-right">{share_class_figi || "-"}</td>
      <td>{new Date(last_updated_utc).toLocaleDateString()}</td>
    </tr>
  );
};

const Table = ({ isLoading, data }) => {
  return (
    <div className="table-wrapper">
      {isLoading ? (
        <Loader />
      ) : (
        <table>
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Name</th>
              <th>Market</th>
              <th>Locale</th>
              <th>Type</th>
              <th>Active</th>
              <th>Central Index Key</th>
              <th>Currency</th>
              <th>Delisted UTC</th>
              <th>Composite Figi</th>
              <th>Share Class Figi</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>{data?.map((datum) => <Row key={datum.ticker} {...datum} />)}</tbody>
        </table>
      )}
    </div>
  );
};

export { Table };
