const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <h1>This is the header of an article</h1>
      {children}
    </div>
  );
};

export default Layout;
