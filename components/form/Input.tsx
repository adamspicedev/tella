import React from 'react';
import { ArrayKeys, InputChange, OtherMoney, TimePeriod } from '../../types';
import { Label } from './Label';

const periods: TimePeriod[] = [
  { value: 'year', label: 'per year' },
  { value: 'month', label: 'per month' },
  { value: 'week', label: 'per week' },
];

type InputProps = {
  money: OtherMoney;
  name: ArrayKeys;
  onChange: (e: InputChange) => void;
  label: string;
  placeholder?: string;
  showTimeFrame?: boolean;
  showClose?: boolean;
  onRemove?: () => void;
};

const Input: React.FC<InputProps> = ({
  name,
  label,
  showClose = false,
  showTimeFrame = false,
  onChange,
  money,
  onRemove,
}) => {
  return (
    <div className="mx2-2">
      <Label htmlFor={name}>{label}</Label>
      <div className="mt-1 relative rounded-md shadow-sm border border-gray-200 focus-within:border-gray-500 focus-within:border-2 py-4">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm">$</span>
        </div>
        <input
          style={{ fontSize: '1.2rem' }}
          type="number"
          name="amount"
          id={name}
          className="outline-none block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
          placeholder="0.00"
          onChange={onChange}
          value={`${money.amount}`}
        />

        <div className="absolute inset-y-0 right-0 flex items-center mr-2">
          {showTimeFrame ? (
            <>
              <label htmlFor="timeFrame" className="sr-only">
                Time Frame
              </label>
              <select
                value={money.timeFrame}
                onChange={onChange}
                id="timeFrame"
                name="timeFrame"
                className="outline-none h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
              >
                {periods.map((period) => (
                  <option key={period.value} value={period.value}>
                    {period.label}
                  </option>
                ))}
              </select>
            </>
          ) : undefined}
          {showClose && (
            <svg
              onClick={onRemove}
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-4 cursor-pointer"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default Input;
