import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChartData } from '../State/Actions/chartActions';
import {
  LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';  // Import the required components from 'recharts' library

const CoinChart = () => {
  const dispatch = useDispatch();

  // Local state to hold the selected currency, time interval, and chart type
  const [selectedCurrency, setSelectedCurrency] = useState('bitcoin');
  const [selectedTimeInterval, setSelectedTimeInterval] = useState('1d');
  const [selectedChartType, setSelectedChartType] = useState('line');

  // Time intervals for fetching the data (e.g., 1 Day, 1 Week, etc.)
  const timeIntervals = [
    { value: '1d', label: '1D' },
    { value: '7d', label: '1W' },
    { value: '30d', label: '1M' },
    { value: '180d', label: '6M' },
    { value: '365d', label: '1Y' },
  ];

  // useEffect hook to re-fetch the data when either the currency or time interval changes
  useEffect(() => {
    fetchData(selectedCurrency, selectedTimeInterval);
  }, [selectedCurrency, selectedTimeInterval]);

  // Function to dispatch the action that fetches the data for the given currency and time interval
  const fetchData = (currency, timeInterval) => {
    dispatch(fetchChartData(currency, timeInterval));
    console.log(selectedCurrency, selectedTimeInterval);
  };

  // Retrieve the chart data from the Redux store
  const chartData = useSelector((state) => state.chartData.chartData);

  // Function to determine and render the appropriate chart type (Line, Bar, Area) based on selectedChartType
  const renderChart = () => {
    if (!Array.isArray(chartData) || chartData.length === 0) {
      return <div>No data available.</div>;
    }

    switch (selectedChartType) {
      case 'line':
        return (
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="price" stroke="rgb(75, 192, 192)" activeDot={{ r: 8 }} />
          </LineChart>
        );

      case 'bar':
        return (
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="price" fill="rgb(75, 192, 192)" />
          </BarChart>
        );

      case 'area':
        return (
          <AreaChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="price" fill="rgb(75, 192, 192)" />
          </AreaChart>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      <div className="border shadow-md border-r-1 ml-1 bg-white">
        <div className="md:flex sm:cols-2 sm:gap-10">
          <div className="pt-4 ml-20">
            {/* Map over time intervals and render buttons for selecting */}
            {timeIntervals.map((interval) => (
              <button
                key={interval.value}
                onClick={() => setSelectedTimeInterval(interval.value)}
                className={`ring-1 ring-yellow-700 bg-green-300 px-4 py-1 rounded-md mx-3 mr-2 pb-1.5 ${
                  selectedTimeInterval === interval.value ? 'bg-blue-500 text-white' : 'text-gray-700'
                }`}
              >
                {interval.label}
              </button>
            ))}
          </div>
          <div className="sm:col-span-2 flex justify-center right-24 gap-2 my-4 align-sub">
            {/* Dropdown menu for selecting the cryptocurrency */}
            <select
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
              className="ring-1 ring-yellow-700 rounded focus:outline-none bg-green-300 font-semibold"
            >
              <option value="bitcoin">Bitcoin</option>
              <option value="ethereum">Ethereum</option>
              <option value="binancecoin">Binance Coin</option>
              <option value="ripple">Ripple</option>
            </select>

            {/* Dropdown menu for selecting the chart type */}
            <select
              className="ring-1 ring-yellow-700 bg-green-300 rounded focus:outline-none px-2 py-2 font-semibold"
              value={selectedChartType}
              onChange={(e) => setSelectedChartType(e.target.value)}
            >
              <option value="line">Line Chart</option>
              <option value="bar">Bar Chart</option>
              <option value="area">Area Chart</option>
            </select>
          </div>
        </div>

        {/* Render the selected chart */}
        <div style={{ width: '100%', height: 270 }} className="relative bottom-9 h-60 top-1">
          <ResponsiveContainer>{renderChart()}</ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default CoinChart;
