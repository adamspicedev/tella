type LabelProps = {
  htmlFor?: string;
  children: React.ReactNode;
};
export const Label: React.FC<LabelProps> = ({ htmlFor = '', children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="mx-2 block text-black text-lg font-light"
    >
      {children}
    </label>
  );
};
