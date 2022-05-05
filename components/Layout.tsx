type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full mx-auto sm:px-6 lg:px-8 overflow-hidden box-border m-0">
      {children}
    </div>
  );
};

export default Layout;
