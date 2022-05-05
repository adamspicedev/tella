import { MortgageApplicationInfo, OtherMoney } from '../types';

const calculatePeriodIncome = (data: OtherMoney): number => {
  let totalIncome = 0;

  if (data.timeFrame === 'year') {
    totalIncome = data.amount;
  } else if (data.timeFrame === 'month') {
    totalIncome += data.amount * 12;
  } else if (data.timeFrame === 'week') {
    totalIncome += data.amount * 52;
  }
  return totalIncome;
};

export const calculateTotals = (applicationData: MortgageApplicationInfo) => {
  const totals = {
    total_income: calculatePeriodIncome(applicationData.baseSalary) ?? 0,
    total_liabilities: 0,
    deposit: 0,
    loans: 0,
    creditCards: 0,
  };

  if (applicationData.secondApplicant) {
    totals.total_income += calculatePeriodIncome(
      applicationData.secondApplicantSalary
    );
  }

  let otherIncomeTotal = 0;
  if (applicationData.showOtherIncomes) {
    for (let otherIncome of applicationData.otherIncomes) {
      console.log('otherIncome', otherIncome);
      if (otherIncome.timeFrame === 'year') {
        otherIncomeTotal += otherIncome.amount;
      } else if (otherIncome.timeFrame === 'month') {
        otherIncomeTotal += otherIncome.amount * 12;
      } else if (otherIncome.timeFrame === 'week') {
        otherIncomeTotal += otherIncome.amount * 52;
      }
    }

    totals.total_income += otherIncomeTotal;
  }

  if (applicationData.showLoans) {
    for (let loan of applicationData.loans) {
      totals.loans += loan.amount;
      totals.total_liabilities += loan.amount;
    }
  }

  if (applicationData.showCreditCards) {
    for (let creditCard of applicationData.creditCards) {
      totals.creditCards += creditCard.amount;
      totals.total_liabilities += creditCard.amount;
    }
  }

  totals.deposit = applicationData.deposit.amount;

  return totals;
};
