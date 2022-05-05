import React, { useContext } from 'react';
import { MortgageApplicationContext } from '../store/store';
import { InputChange } from '../types';
import Button from './form/Button';
import { Label } from './form/Label';
import { PeriodInput } from './form/PeriodInput';

const Applicants = () => {
  const { applicationInfo, handleApplicationChange } = useContext(
    MortgageApplicationContext
  );
  return (
    <>
      <Label>How many of you are buying the property?</Label>
      <div className="flex flex-col md:flex-row justify-between">
        <Button
          theme={applicationInfo.secondApplicant ? 'secondary' : 'primary'}
          onClick={() => {
            handleApplicationChange({
              secondApplicant: false,
              secondApplicantSalary: 0,
            });
          }}
        >
          Just me
        </Button>
        <Button
          theme={applicationInfo.secondApplicant ? 'primary' : 'secondary'}
          onClick={() => {
            handleApplicationChange({
              secondApplicant: true,
            });
          }}
        >
          I&apos;m buying with someone
        </Button>
      </div>
      <PeriodInput
        name="baseSalary"
        data={applicationInfo.baseSalary}
        label="What's your base salary/wages? (before tax)"
        onChange={(e: InputChange) => {
          handleApplicationChange({
            baseSalary: {
              ...applicationInfo.baseSalary,
              [e.target.name]:
                e.target.name === 'timeFrame'
                  ? e.target.value
                  : +e.target.value,
            },
          });
        }}
      />

      {applicationInfo.secondApplicant && (
        <PeriodInput
          name="secondApplicantSalary"
          data={applicationInfo.secondApplicantSalary}
          label="What's the second applicant's base salary/wages? (before tax)"
          onChange={(e: InputChange) => {
            handleApplicationChange({
              secondApplicantSalary: {
                ...applicationInfo.secondApplicantSalary,
                [e.target.name]:
                  e.target.name === 'timeFrame'
                    ? e.target.value
                    : +e.target.value,
              },
            });
          }}
        />
      )}
    </>
  );
};

export default Applicants;
