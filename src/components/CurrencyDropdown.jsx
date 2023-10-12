import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrency } from '../State/Actions/chartActions'; // Import action to set the currency

const CurrencyDropdown = () => {
  // Get the selected currency from Redux state
  const selectedCurrency = useSelector((state) => state.currency.selectedCurrency);
  const dispatch = useDispatch(); // Initialize useDispatch to dispatch actions

  // Function to handle currency change
  const handleChange = (e) => {
    const currency = e.target.value; // Get the selected currency value from the dropdown
    dispatch(setCurrency(currency)); // Dispatch the setCurrency action with the selected currency
  };

  return (
    <div >
      {/* Dropdown for selecting the currency */}
      <select
        value={selectedCurrency}
        onChange={handleChange}
        className="h-11 w-20 relative  left-2  top-3  rounded-md outline-none border focus:border-yellow-700 shadow-md ">
        {/* Dropdown options for different currencies */}
        <option value="usd">USD</option>
        <option value="inr">INR</option>
        <option value="eur">EUR</option>
         
        
      </select>
    </div>
  );
};

export default CurrencyDropdown;