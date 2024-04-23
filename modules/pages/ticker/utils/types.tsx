type AddressProps = {
  address1?: string;
  city?: string;
  state?: string;
  postal_code?: string;
};

type BrandingProps = {
  logo_url?: string;
  icon_url?: string;
};

type TickerPageProps = {
  ticker?: string;
  name?: string;
  market?: string;
  locale?: string;
  primary_exchange?: string;
  type?: string;
  active?: boolean;
  currency_name?: string;
  cik?: string;
  composite_figi?: string;
  share_class_figi?: string;
  market_cap?: number;
  phone_number?: string;
  address?: AddressProps;
  description?: string;
  sic_code?: string;
  sic_description?: string;
  ticker_root?: string;
  homepage_url?: string;
  total_employees?: number;
  list_date?: string;
  branding?: BrandingProps;
  share_class_shares_outstanding?: number;
  weighted_shares_outstanding?: number;
  round_lot?: number;
};

export { type AddressProps, type BrandingProps, type TickerPageProps };
