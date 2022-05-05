import React from 'react';
import { classNames } from '../../helpers/classNames';

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  theme?: 'primary' | 'secondary';
  width?: 'w-full' | 'w-1/2';
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  theme = 'primary',
  width = 'w-full',
}) => {
  return (
    <button
      className={classNames(
        ...buttonThemes[theme],
        width,
        'm-2 flex justify-center items-center py-1 px-4 border border-transparent rounded-md shadow-sm text-md font-medium focus:outline-none'
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

const buttonThemes = {
  primary: ['text-white', 'bg-red-400'],
  secondary: ['text-gray-800', 'bg-gray-300'],
};
