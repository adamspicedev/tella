import { ArrayKeys, InputChange, OtherMoney } from '../../types';
import Input from './Input';

type PeriodInputProps = {
  index?: number;
  label: string;
  name: ArrayKeys;
  data: OtherMoney;
  onChange: (e: InputChange) => void;
  showClose?: boolean;
  onRemove?: () => void;
};
export const PeriodInput: React.FC<PeriodInputProps> = ({
  name,
  data,
  onChange,
  label,
  showClose = false,
  onRemove,
}) => {
  return (
    <Input
      name={name}
      label={label}
      money={data}
      onChange={onChange}
      showTimeFrame={true}
      showClose={showClose}
      onRemove={onRemove}
    />
  );
};
