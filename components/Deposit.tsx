import React, { Fragment, useContext } from 'react';
import { MortgageApplicationContext } from '../store/store';
import { InputChange } from '../types';
import { StandardInput } from './form/StandardInput';

const Deposit = () => {
  const { applicationInfo, handleApplicationChange } = useContext(
    MortgageApplicationContext
  );
  return (
    <StandardInput
      showClose={false}
      name="deposit"
      data={applicationInfo.deposit}
      label={`Deposit`}
      onChange={(e: InputChange) => {
        handleApplicationChange({
          deposit: {
            amount: +e.target.value,
          },
        });
      }}
    />
  );
};

export default Deposit;
