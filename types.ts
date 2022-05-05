export type TimeFrame = 'year' | 'month' | 'week' | '';

export type OtherMoney = {
  amount: number;
  timeFrame?: TimeFrame;
};

export type MortgageApplicationInfo = {
  baseSalary: OtherMoney;
  secondApplicant: boolean;
  secondApplicantSalary: OtherMoney;
  deposit: OtherMoney;
  showOtherIncomes: boolean;
  otherIncomes: OtherMoney[];
  showLoans: boolean;
  loans: OtherMoney[];
  showCreditCards: boolean;
  creditCards: OtherMoney[];
};

export type ArrayKeys =
  | 'otherIncomes'
  | 'loans'
  | 'creditCards'
  | 'baseSalary'
  | 'secondApplicantSalary'
  | 'deposit';

export type FinalTotals = {
  total_income: number;
  total_liabilities: number;
  deposit: number;
  loans: number;
  creditCards: number;
};

export type Calculated = {
  borrowing: number;
  property_price: number;
};

export type TimePeriod = {
  value: TimeFrame;
  label: string;
};

export type InputChange =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLSelectElement>;
