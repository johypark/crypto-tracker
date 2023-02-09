import { useQuery } from "@tanstack/react-query";
import { fetchCoinTickers } from "../api";
import { PriceData } from "./Coin";

interface PriceProps {
  coinId: string;
}

function Price({ coinId }: PriceProps) {
  const { data } = useQuery<PriceData>(["tickers", coinId], () =>
    fetchCoinTickers(coinId)
  );

  const priceInfo = data?.quotes.USD;

  return (
    <>
      {priceInfo && (
        <>
          <h1>Changes</h1>
          <hr />
          <ul>
            <li>15m: {priceInfo.percent_change_15m}%</li>
            <li>30m: {priceInfo.percent_change_30m}%</li>
            <li>1h: {priceInfo.percent_change_1h}%</li>
            <li>6h: {priceInfo.percent_change_6h}%</li>
            <li>12h: {priceInfo.percent_change_12h}%</li>
            <li>24h: {priceInfo.percent_change_24h}%</li>
            <li>7d: {priceInfo.percent_change_7d}%</li>
            <li>30d: {priceInfo.percent_change_30d}%</li>
          </ul>
        </>
      )}
    </>
  );
}

export default Price;
