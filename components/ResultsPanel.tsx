import React, { useContext } from 'react';
import { MortgageApplicationContext } from '../store/store';
import { Label } from './form/Label';

type ResultsPanelProps = {
  calculated: {
    borrowing: number;
    property_price: number;
  };
};

let dollarNZLocale = Intl.NumberFormat('en-NZ', {
  style: 'currency',
  currency: 'NZD',
});

const ResultsPanel: React.FC<ResultsPanelProps> = ({ calculated }) => {
  const { getFinalTotals } = useContext(MortgageApplicationContext);
  const totals = getFinalTotals();
  return (
    <div className="bg-gray-300 mt-2 rounded-lg px-4 pt-4 pb-8 w-full sticky">
      <Label>Here&apos;s what you can borrow</Label>
      <span className="ml-2 font-semibold text-xl">
        {dollarNZLocale.format(calculated.borrowing)}
      </span>

      {totals.deposit > 0 && (
        <div className="mt-5">
          <Label>
            With your deposit of {dollarNZLocale.format(totals.deposit)} you
            could afford a property up to
          </Label>
          <span className="ml-2 text-lg">
            {dollarNZLocale.format(calculated.property_price)}
          </span>
        </div>
      )}

      <div className="mt-8">
        <Label>Total Income</Label>
        <span className="ml-2 text-xl">
          {dollarNZLocale.format(totals.total_income)}
        </span>
      </div>

      {totals.loans > 0 && (
        <div className="mt-8">
          <Label>Total Loans</Label>
          <span className="ml-2 text-xl">
            {dollarNZLocale.format(totals.loans)}
          </span>
        </div>
      )}

      {totals.creditCards > 0 && (
        <div className="mt-8">
          <Label>Total Credit Cards</Label>
          <span className="ml-2 text-xl">
            {dollarNZLocale.format(totals.creditCards)}
          </span>
        </div>
      )}
    </div>
  );
};

export default ResultsPanel;
