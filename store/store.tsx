import React from 'react';
import { calculateTotals } from '../helpers/calculateTotals';
import { getKeyValue } from '../helpers/getKeyValue';
import {
  ArrayKeys,
  FinalTotals,
  MortgageApplicationInfo,
  OtherMoney,
} from '../types';

type MortgageApplicationContextType = {
  applicationInfo: MortgageApplicationInfo;
  setApplicationInfo: (applicationInfo: MortgageApplicationInfo) => void;
  handleApplicationChange: (data: any) => void;
  updateExtra: (index: number, data: OtherMoney, name: ArrayKeys) => void;
  removeExtra: (index: number, name: ArrayKeys) => void;
  addExtra: (name: ArrayKeys) => void;
  getFinalTotals: () => FinalTotals;
  updateSalary: (data: OtherMoney, name: ArrayKeys) => void;
};

export const MortgageApplicationContext =
  React.createContext<MortgageApplicationContextType>(undefined!);

const MortgageApplicationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [applicationInfo, setApplicationInfo] =
    React.useState<MortgageApplicationInfo>({
      baseSalary: { amount: 0, timeFrame: 'month' },
      secondApplicant: false,
      secondApplicantSalary: { amount: 0, timeFrame: 'month' },
      deposit: { amount: 0 },
      showOtherIncomes: false,
      otherIncomes: [{ amount: 0 }],
      showLoans: false,
      loans: [{ amount: 0 }],
      showCreditCards: false,
      creditCards: [{ amount: 0 }],
    });

  const handleApplicationChange = (data: any) => {
    setApplicationInfo({
      ...applicationInfo,
      ...data,
    });
  };

  const addExtra = (name: ArrayKeys) => {
    const newExtras = getKeyValue<
      keyof MortgageApplicationInfo,
      MortgageApplicationInfo
    >(name)(applicationInfo) as OtherMoney[];
    if (name === 'otherIncomes') {
      newExtras.push({ amount: 0, timeFrame: 'year' });
    } else {
      newExtras.push({ amount: 0 });
    }
    handleApplicationChange({ [name]: newExtras });
  };

  const updateExtra = (index: number, data: OtherMoney, name: ArrayKeys) => {
    const newExtras = getKeyValue<
      keyof MortgageApplicationInfo,
      MortgageApplicationInfo
    >(name)(applicationInfo) as OtherMoney[];
    newExtras[index] = data;

    handleApplicationChange({ [name]: newExtras });
  };

  const removeExtra = (index: number, name: ArrayKeys) => {
    console.log('index, name', index, name);
    const newExtras = getKeyValue<
      keyof MortgageApplicationInfo,
      MortgageApplicationInfo
    >(name)(applicationInfo) as OtherMoney[];
    if (newExtras.length > 1) {
      newExtras.splice(index, 1);
      handleApplicationChange({ [name]: newExtras });
    }
  };

  const getFinalTotals = () => {
    return calculateTotals(applicationInfo);
  };

  const updateSalary = (data: OtherMoney, name: ArrayKeys) => {
    console.log('data', data);
    handleApplicationChange({ [name]: data });
  };

  return (
    <MortgageApplicationContext.Provider
      value={{
        applicationInfo,
        setApplicationInfo,
        handleApplicationChange,
        addExtra,
        updateExtra,
        removeExtra,
        getFinalTotals,
        updateSalary,
      }}
    >
      {children}
    </MortgageApplicationContext.Provider>
  );
};

export default MortgageApplicationProvider;
