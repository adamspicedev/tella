import { Fragment, useContext } from 'react';
import { MortgageApplicationContext } from '../store/store';
import { InputChange } from '../types';
import Button from './form/Button';
import { Label } from './form/Label';
import { StandardInput } from './form/StandardInput';

export const CreditCards = () => {
  const {
    applicationInfo,
    handleApplicationChange,
    addExtra,
    updateExtra,
    removeExtra,
  } = useContext(MortgageApplicationContext);
  return (
    <div className="mt-2">
      <Label>Do you have any Credit cards?</Label>
      <div className="flex flex-col md:flex-row justify-between">
        <Button
          theme={applicationInfo.showCreditCards ? 'primary' : 'secondary'}
          onClick={() => {
            handleApplicationChange({
              showCreditCards: true,
            });
          }}
        >
          Yes
        </Button>
        <Button
          theme={applicationInfo.showCreditCards ? 'secondary' : 'primary'}
          onClick={() => {
            handleApplicationChange({
              showCreditCards: false,
              creditCards: [
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
      {applicationInfo.showCreditCards &&
        applicationInfo.creditCards.map((cc, index) => (
          <Fragment key={`cc[${index}]`}>
            <StandardInput
              showClose
              name="creditCards"
              data={cc}
              label={`Credit Card #${index + 1}`}
              onChange={(e: InputChange) => {
                updateExtra(
                  index,
                  {
                    amount: +e.target.value,
                  },
                  'creditCards'
                );
              }}
              onRemove={() => {
                removeExtra(index, 'creditCards');
              }}
            />
          </Fragment>
        ))}
      {applicationInfo.showCreditCards && (
        <Button
          width="w-1/2"
          theme="secondary"
          onClick={() => {
            addExtra('creditCards');
          }}
        >
          Add Credit Card
        </Button>
      )}
    </div>
  );
};
