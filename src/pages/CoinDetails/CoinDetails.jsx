import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import coinsAPI from 'services/coinsAPI';
import Loading from 'components/Loading';
import CoinChart from './CoinChart';
import CoinData from './CoinData';

const CoinDetails = () => {
  const { id } = useParams();
  const [chartData, setChartData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const formatData = (data) => data.map((element) => ({
    t: element[0],
    y: element[1].toFixed(2),
  }));

  useEffect(() => {
    const fetchCoinChart = async (days) => {
      const data = await coinsAPI.get(`/coins/${id}/market_chart`, {
        params: {
          vs_currency: 'usd',
          days,
        },
      });
      return data;
    };

    const fetchAllCoinData = async () => {
      setIsLoading(true);

      const [day, week, year, coin] = await Promise.all([
        fetchCoinChart('1'),
        fetchCoinChart('7'),
        fetchCoinChart('365'),
        coinsAPI.get('/coins/markets/', {
          params: {
            vs_currency: 'usd',
            ids: id,
          },
        }),
      ]);

      setChartData(
        {
          day: formatData(day.data.prices),
          week: formatData(week.data.prices),
          year: formatData(year.data.prices),
          coin: coin.data[0],
        },
      );

      setIsLoading(false);
    };

    fetchAllCoinData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="wrapper">
      <CoinChart chartData={chartData} />
      <CoinData chartData={chartData} />
    </div>
  );
};

export default CoinDetails;
