import { Fragment, useContext } from 'react';
import { MortgageApplicationContext } from '../store/store';
import { InputChange } from '../types';
import Button from './form/Button';
import { Label } from './form/Label';
import { PeriodInput } from './form/PeriodInput';

export const OtherIncome = () => {
  const {
    applicationInfo,
    handleApplicationChange,
    addExtra,
    updateExtra,
    removeExtra,
  } = useContext(MortgageApplicationContext);
  return (
    <>
      <Label>Do you have another source of income?</Label>
      <div className="flex flex-col md:flex-row justify-between">
        <Button
          theme={applicationInfo.showOtherIncomes ? 'primary' : 'secondary'}
          onClick={() => {
            handleApplicationChange({
              showOtherIncomes: true,
            });
          }}
        >
          Yes
        </Button>

        <Button
          theme={applicationInfo.showOtherIncomes ? 'secondary' : 'primary'}
          onClick={() => {
            handleApplicationChange({
              showOtherIncomes: false,
              otherIncomes: [
                {
                  amount: 0,
                  timeFrame: 'year',
                },
              ],
            });
          }}
        >
          No
        </Button>
      </div>
      {applicationInfo.showOtherIncomes &&
        applicationInfo.otherIncomes.map((income, index) => (
          <Fragment key={`otherIncomes[${index}]`}>
            <PeriodInput
              showClose
              name="otherIncomes"
              data={income}
              label={`Other income #${index + 1}`}
              onChange={(e: InputChange) => {
                updateExtra(
                  index,
                  {
                    ...income,
                    [e.target.name]:
                      e.target.name === 'timeFrame'
                        ? e.target.value
                        : +e.target.value,
                  },
                  'otherIncomes'
                );
              }}
              onRemove={() => {
                removeExtra(index, 'otherIncomes');
              }}
            />
          </Fragment>
        ))}

      {applicationInfo.showOtherIncomes && (
        <Button
          width="w-1/2"
          theme="secondary"
          onClick={() => {
            addExtra('otherIncomes');
          }}
        >
          Add other income
        </Button>
      )}
    </>
  );
};
