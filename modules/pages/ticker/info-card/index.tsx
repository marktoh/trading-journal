import "./index.css";

type InfoCardProps = {
  primary_exchange?: string;
  market_cap?: number;
  list_date?: string;
  ticker_root?: string;
  share_class_shares_outstanding?: number;
  weighted_shares_outstanding?: number;
  round_lot?: number;
};
const InfoCard = ({
  primary_exchange,
  market_cap,
  list_date,
  ticker_root,
  share_class_shares_outstanding,
  weighted_shares_outstanding,
  round_lot,
}: InfoCardProps) => {
  return (
    <div className="info-card">
      <div className="title">Details</div>
      <div className="details">
        <div>Exchange: {primary_exchange}</div>
        <div>
          Market cap: $
          {market_cap?.toLocaleString("en-US", { minimumFractionDigits: 2 })}
        </div>
        <div>Outstanding shares: {share_class_shares_outstanding} units</div>
        <div>
          Weighted outstanding shares: {weighted_shares_outstanding} units
        </div>
        <div>Round lot: {round_lot}</div>
        <div>Ticker root: {ticker_root}</div>
        <div>List date: {list_date}</div>
      </div>
    </div>
  );
};

export { InfoCard };
