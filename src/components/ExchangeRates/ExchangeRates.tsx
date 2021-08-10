import { useQuery } from "@apollo/client";
import { EXCHANGE_RATES } from "./gql";

export const ExchangeRates = () => {
    const { loading, error, data } = useQuery(EXCHANGE_RATES);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return data.rates.map(({ currency, rate }: { currency: string, rate:string }) => (
      <div key={currency}>
        <p>
          {currency}: {rate}
        </p>
      </div>
    ));
  }