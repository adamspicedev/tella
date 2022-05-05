import { ArrayKeys, OtherMoney } from '../../types';
import Input from './Input';

type StandardInputProps = {
  index?: number;
  label: string;
  name: ArrayKeys;
  data: OtherMoney;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  showClose?: boolean;
  onRemove?: () => void;
};
export const StandardInput: React.FC<StandardInputProps> = ({
  name,
  data,
  onChange,
  label,
  showClose = true,
  onRemove,
}) => {
  return (
    <Input
      name={name}
      label={label}
      money={data}
      onChange={onChange}
      showClose={showClose}
      onRemove={onRemove}
    />
  );
};
