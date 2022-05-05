import type { NextPage } from 'next';
import { useContext, useEffect, useState } from 'react';
import Applicants from '../components/Applicants';
import { CreditCards } from '../components/CrediCards';
import Deposit from '../components/Deposit';
import Input from '../components/form/Input';
import { Loans } from '../components/Loans';
import { OtherIncome } from '../components/OtherIncome';
import ResultsPanel from '../components/ResultsPanel';
import { MortgageApplicationContext } from '../store/store';
import { Calculated } from '../types';

const Home: NextPage = () => {
  const [calculated, setCalculated] = useState<Calculated>({
    borrowing: 0,
    property_price: 0,
  });
  const { applicationInfo, handleApplicationChange, getFinalTotals } =
    useContext(MortgageApplicationContext);

  useEffect(() => {
    const fetchData = async () => {
      const totals = getFinalTotals();

      const response = await fetch('/api/fetch-prices', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(totals),
      });
      const data = await response.json();
      setCalculated(data);
    };

    fetchData();
  }, [applicationInfo, getFinalTotals]);

  return (
    <div className="overflow-hidden w-full flex flex-col md:flex-row ">
      <div className="overflow-y-scroll flex-1 h-screen py-8">
        <Applicants />
        <OtherIncome />
        <Loans />
        <CreditCards />
        <Deposit />
      </div>

      <div className="mx-2 md:mt-6 md:ml-4 w-full md:w-1/4">
        <ResultsPanel calculated={calculated} />
      </div>
    </div>
  );
};

export default Home;
