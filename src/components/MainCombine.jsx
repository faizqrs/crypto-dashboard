import React, { useState } from "react";
import Header from "./Header";
import Searchbar from "./Searchbar";
import RightSidebar from "./RightSidebar";
import CoinExchange from "./CoinExchange";
import PieChart from "./Piechart";
import CoinChart from "./Coinchart";
import CurrencyDropdown from "./CurrencyDropdown";
import Footer from "./Footer";

function MainCombine() {
  const [selectedCurrency, setSelectedCurrency] = useState("usd");

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  return (
    <>
      <Header />
      {/* Main content */}
      <div className="bg-slate-100 flex flex-col m-4 pt-2 md:m-6 px-2 h-full rounded md:flex-row overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
            <div className="md:col-span-3">
              <div className="md:3/4 mx-auto">
                <div className="flex flex-row">
                  <CurrencyDropdown
                    selectedCurrency={selectedCurrency}
                    handleCurrencyChange={handleCurrencyChange}
                  />
                  <Searchbar />
                </div>
                <CoinChart />
              </div>
              <div className="md:flex mt-2 gap-1">
                <PieChart />

                <CoinExchange />
              </div>
            </div>
            <div className="mb-4 rounded-md bg-white shadow-md mt-3">
              <RightSidebar
                selectedCurrency={selectedCurrency}
                className="md:mt-4 overflow-hidden"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default MainCombine;
