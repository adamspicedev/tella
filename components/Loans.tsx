import { Fragment, useContext } from 'react';
import { MortgageApplicationContext } from '../store/store';
import { InputChange } from '../types';
import Button from './form/Button';
import { Label } from './form/Label';
import { StandardInput } from './form/StandardInput';

export const Loans = () => {
  const {
    applicationInfo,
    handleApplicationChange,
    addExtra,
    updateExtra,
    removeExtra,
  } = useContext(MortgageApplicationContext);
  return (
    <div className="mt-2">
      <Label>Do you have any loans?</Label>
      <div className="flex flex-col md:flex-row justify-between">
        <Button
          theme={applicationInfo.showLoans ? 'primary' : 'secondary'}
          onClick={() => {
            handleApplicationChange({
              showLoans: true,
            });
          }}
        >
          Yes
        </Button>
        <Button
          theme={applicationInfo.showLoans ? 'secondary' : 'primary'}
          onClick={() => {
            handleApplicationChange({
              showLoans: false,
              loans: [
                {
                  amount: 0,
                },
              ],
            });
          }}
        >
          No
        </Button>
      </div>
      {applicationInfo.showLoans &&
        applicationInfo.loans.map((loan, index) => (
          <Fragment key={`loan[${index}]`}>
            <StandardInput
              showClose
              name="loans"
              data={loan}
              label={`Loan #${index + 1}`}
              onChange={(e: InputChange) => {
                updateExtra(
                  index,
                  {
                    amount: +e.target.value,
                  },
                  'loans'
                );
              }}
              onRemove={() => {
                removeExtra(index, 'loans');
              }}
            />
          </Fragment>
        ))}
      {applicationInfo.showLoans && (
        <Button
          width="w-1/2"
          theme="secondary"
          onClick={() => {
            addExtra('loans');
          }}
        >
          Add loan
        </Button>
      )}
    </div>
  );
};
