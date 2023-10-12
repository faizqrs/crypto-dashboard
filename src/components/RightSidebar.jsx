import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCryptoData } from '../State/Actions/SidebarActions';

const CryptoSidebar = () => {
  // Select data from the Redux store
  const selectedCurrency = useSelector((state) => state.currency.selectedCurrency);
  const cryptoData = useSelector((state) => state.crypto.cryptoData);
  const cryptoLoading = useSelector((state) => state.crypto.loading);
  const cryptoError = useSelector((state) => state.crypto.error);
  const dispatch = useDispatch();

  // Fetch crypto data when selectedCurrency changes or component mounts
  useEffect(() => {
    dispatch(fetchCryptoData(selectedCurrency));
  }, [selectedCurrency, dispatch]);

  // Function to format currency using Intl.NumberFormat
  const formatCurrency = (value, currency) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    });
    return formatter.format(value);
  };

  // Render loading state
  if (cryptoLoading) {
    return <div>Loading...</div>;
  }

  // Render error state
  if (cryptoError) {
    return <div>Error: {cryptoError.message}</div>;
  }

  // Render the list of cryptocurrencies
  return (
    <div className="crypto-sidebar sm:max-w-md md:max-w-lg shadow-md relative">
      <h1 className="text-center text-lg font-bold">Top Cryptocurrencies by Market Cap</h1>
      <div className="crypto-list space-y-4">
        {cryptoData && cryptoData.length > 0 ? (
          cryptoData.map((crypto) => (
            <div key={crypto.id} className="crypto-item mt-4 flex items-center space-x-4">
              <div className="crypto-logo w-8 h-8 sm:w-20 sm:h-20 md:w-24 md:h-24 mr-3">
                <img src={crypto.image} alt={crypto.name} />
              </div>
              <div className="crypto-info ml-0">
                <p>{crypto.name} ({crypto.symbol})</p>
                <p>Market Cap: {formatCurrency(crypto.market_cap, selectedCurrency)}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No cryptocurrency data available.</p>
        )}
      </div>
    </div>
  );
};

export default CryptoSidebar;
