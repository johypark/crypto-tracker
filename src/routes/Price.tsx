interface PriceProps {
  price: {
    ath_date: string;
    ath_price: number;
    market_cap: number;
    market_cap_change_24h: number;
    percent_change_1h: number;
    percent_change_1y: number;
    percent_change_6h: number;
    percent_change_7d: number;
    percent_change_12h: number;
    percent_change_15m: number;
    percent_change_24h: number;
    percent_change_30d: number;
    percent_change_30m: number;
    percent_from_price_ath: number;
    price: number;
    volume_24h: number;
    volume_24h_change_24h: number;
  };
}

function Price({ price }: PriceProps) {
  return (
    <>
      <h1>Changes</h1>
      <hr />
      <ul>
        <li>15m: {price.percent_change_15m}%</li>
        <li>30m: {price.percent_change_30m}%</li>
        <li>1h: {price.percent_change_1h}%</li>
        <li>6h: {price.percent_change_6h}%</li>
        <li>12h: {price.percent_change_12h}%</li>
        <li>24h: {price.percent_change_24h}%</li>
        <li>7d: {price.percent_change_7d}%</li>
        <li>30d: {price.percent_change_30d}%</li>
      </ul>
    </>
  );
}

export default Price;
