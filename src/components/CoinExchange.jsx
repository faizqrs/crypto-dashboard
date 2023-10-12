


import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setCrypto1,
  setCrypto2,
  setAmount,
  setComparisonResult,
} from '../State/Actions/exchangeActions';

const CoinExchange = () => {
  const dispatch = useDispatch();

  // Initialize local state for showExchangeRates
  const [showExchangeRates, setShowExchangeRates] = useState(false);
  const [amountInput, setAmountInput] = useState('1'); // Local state for the amount input

  // Get data from the Redux store
  const crypto1 = useSelector((state) => state.exchange.crypto1);
  const crypto2 = useSelector((state) => state.exchange.crypto2);
  const comparisonResult = useSelector((state) => state.exchange.comparisonResult);
  const exchangeRates = useSelector((state) => state.exchange.exchangeRates);

  const handleAmountChange = (event) => {
    setAmountInput(event.target.value);
  };

  const handleCompare = () => {
    const rate1Sell = exchangeRates[crypto1]?.sell || 0;
    const rate2Buy = exchangeRates[crypto2]?.buy || 1;

    if (!isNaN(amountInput)) {
      const result1 = (amountInput * rate1Sell) / rate2Buy;

      dispatch(setComparisonResult(result1.toFixed(2)));
    } else {
      dispatch(setComparisonResult('Invalid input'));
    }
  };

  const handleShowExchangeRates = () => {
    setShowExchangeRates(!showExchangeRates);
  };

  return (
    <div className="container shadow-md border rounded-md bg-white h-64 top-2 relative mb-5">
      <h2 className=" font-serif text-green-700 font-bold ml-4 text-xl">Exchange Coins</h2>

      {/* Input for selecting crypto1 */}
      <div htmlFor="crypto1" className="relative w-20 left-2 top-6 font-bold text-blue-700 font-serif">
        buy
      </div>
      <select
        id="crypto1"
        value={crypto1}
        className="relative top-6 left-8 shadow-md rounded-md border-solid bg-white border-radius h-9 w-36"
        onChange={(e) => dispatch(setCrypto1(e.target.value))}
      >
        <option value="bitcoin">Bitcoin</option>
        <option value="ethereum">Ethereum</option>
        <option value="pi">Pi</option>
        <option value="tether">Tether</option>
      </select>

      {/* Input for selecting crypto2 */}
      <div htmlFor="crypto2" className="relative w-20 top-8 font-bold text-red-500 font-serif left-2">
        sell
      </div>
      <select
        id="crypto2"
        value={crypto2}
        className="relative top-8 left-8 shadow-md rounded-md border-solid bg-white border-radius h-9 w-36"
        onChange={(e) => dispatch(setCrypto2(e.target.value))}
      >
        <option value="bitcoin">Bitcoin</option>
        <option value="ethereum">Ethereum</option>
        <option value="pi">Pi</option>
        <option value="tether">Tether</option>
      </select>

      {/* Amount input */}
      <br />
      <label htmlFor="amount" className='relative left-56 bottom-28 italic  hover:not-italic'>Enter value:</label> 
      <input
        type="number"
        id="amount"
        placeholder="enter amount"
        className='relative  left-36 bottom-20 shadow-md rounded-md border-solid bg-white border-radius h-10 w-24  '
        value={amountInput}
        onChange={handleAmountChange}
      />

      {/* Button to perform exchange */}
      <button
        id="compare"
        className="relative top-10 font-semibold text-white font-serif   -m-4 shadow-md rounded-md border-solid bg-green-700 border-radius h-9 w-28"
        onClick={handleCompare}
      >
        Exchange
      </button>

      {/* Button to show/hide exchange rates */}
      

      {/* Display the comparison result */}
      <div id="comparison-result" className="relative left-56 bottom-14 font-bold">
        {comparisonResult}
      </div>

      {/* Display exchange rates when showExchangeRates is true */}
      {showExchangeRates && (
        <div id="exchange-rates" className="relative left-56 bottom-14 font-bold">
          {Object.entries(exchangeRates).map(([currency, rate]) => (
            <p key={currency}>
              {currency}: {rate.buy} (Buy) - {rate.sell} (Sell)
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default CoinExchange;