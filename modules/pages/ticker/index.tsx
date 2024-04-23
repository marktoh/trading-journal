import NextImage from "next/image";
import { AddressCard } from "./address-card";
import { InfoCard } from "./info-card";
import { NewsCard } from "./news-card";
import { TickerPageProps } from "./utils/types";

import news from "@/mock/news-apple.json";

import "./index.css";

const TickerPage = ({
  ticker,
  name,
  market,
  locale,
  primary_exchange,
  type,
  active,
  currency_name,
  cik,
  composite_figi,
  share_class_figi,
  market_cap,
  phone_number,
  address,
  description,
  sic_code,
  sic_description,
  ticker_root,
  homepage_url,
  total_employees,
  list_date,
  branding,
  share_class_shares_outstanding,
  weighted_shares_outstanding,
  round_lot,
}: TickerPageProps) => {
  const { address1, city, state, postal_code } = address || {};
  const { logo_url, icon_url } = branding || {};
  return (
    <div className="ticker-page">
      <h1>{ticker}</h1>
      <div className="flex gap-1 items-center">
        <div className="relative h-4 w-4 flex items-center justify-center">
          <NextImage
            unoptimized
            fill
            src={`${logo_url}?apiKey=${process.env.POLYGON_API_KEY}`}
            alt="logo"
          />
        </div>
        <div>{name}</div>
      </div>
      <div className="mt-2">
        <a
          href={homepage_url}
          className="text-blue-600 text-sm hover:text-blue-700 hover:underline"
        >
          {homepage_url}
        </a>
      </div>
      <div className="description">{description}</div>
      <hr />
      <section className="secondary">
        <AddressCard {...address} />
        <InfoCard
          primary_exchange={primary_exchange}
          market_cap={market_cap}
          list_date={list_date}
          ticker_root={ticker_root}
          share_class_shares_outstanding={share_class_shares_outstanding}
          weighted_shares_outstanding={weighted_shares_outstanding}
          round_lot={round_lot}
        />
        <NewsCard data={news?.results} />
      </section>
    </div>
  );
};

export { TickerPage };
